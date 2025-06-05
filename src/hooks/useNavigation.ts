import { useState, useMemo, useCallback, useEffect } from 'react';
import { STEPS } from '../Constants/Constants';
import type { NavigationContextType, Skip, StepData } from '../types';



export const useNavigation = (initialStep: number = 1) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [stepData, setStepData] = useState<StepData>({});

  // Validation functions for each step
  const stepValidations = useMemo(() => ({
    1: () => stepData.location?.isValid || false,
    2: () => !!stepData.wasteType?.category,
    3: () => !!stepData.skipSize?.selectedSkipId,
    4: () => stepData.permits ? !stepData.permits.required || stepData.permits.obtained : true,
    5: () => !!(stepData.schedule?.deliveryDate && stepData.schedule?.collectionDate),
    6: () => stepData.payment?.completed || false,
  }), [stepData]);

  const getStepValidation = useCallback((stepId: number) => {
    const validation = stepValidations[stepId as keyof typeof stepValidations];
    return validation ? validation() : false;
  }, [stepValidations]);

  const canContinue = useMemo(() => {
    const currentStepObj = STEPS.find(step => step.id === currentStep);

    // If step is not implemented, allow continuation for demo purposes
    if (!currentStepObj?.isImplemented) {
      return true;
    }

    return getStepValidation(currentStep);
  }, [currentStep, getStepValidation]);

  const canGoBack = useMemo(() => currentStep > 1, [currentStep]);

  const goToStep = useCallback((stepId: number) => {
    if (stepId >= 1 && stepId <= STEPS.length) {
      setCurrentStep(stepId);
    }
  }, []);

  const goNext = useCallback(() => {
    if (canContinue && currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  }, [canContinue, currentStep]);

  const goBack = useCallback(() => {
    if (canGoBack) {
      setCurrentStep(prev => prev - 1);
    }
  }, [canGoBack]);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const updateStepData = useCallback((stepId: number, data: Skip) => {
    setStepData(prev => ({
      ...prev,
      [getStepDataKey(stepId)]: { ...prev[getStepDataKey(stepId) as keyof StepData], ...data }
    }));
  }, []);

  const getStepDataKey = (stepId: number): keyof StepData => {
    const keyMap: Record<number, keyof StepData> = {
      1: 'location',
      2: 'wasteType',
      3: 'skipSize',
      4: 'permits',
      5: 'schedule',
      6: 'payment'
    };
    return keyMap[stepId];
  };

  return {
    currentStep,
    stepData,
    canContinue,
    canGoBack,
    goToStep,
    goNext,
    goBack,
    updateStepData: updateStepData as NavigationContextType['updateStepData'],
    getStepValidation,
    steps: STEPS
  };
};
