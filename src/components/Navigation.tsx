import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigationContext } from "../context/NavigationContext";

export const Navigation: React.FC = () => {
  const { 
    currentStep, 
    stepData, 
    canContinue, 
    canGoBack, 
    goNext, 
    goBack,
    steps 
  } = useNavigationContext();

  const selectedSkip = stepData.skipSize?.selectedSkip;
  const currentStepObj = steps.find(step => step.id === currentStep);

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
        {/* Selection summary */}
        {selectedSkip && (
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-indigo-100">
            {/* Mobile layout - stacked */}
            <div className="flex justify-between sm:hidden">
              <div className="text-center mb-3">
                <p className="font-semibold text-gray-900 text-sm">{selectedSkip.name}</p>
                <p className="text-xs text-gray-600 mt-1">{selectedSkip.hirePeriod} • {selectedSkip.postcode}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-indigo-600">£{selectedSkip.totalPrice}</p>
                <p className="text-xs text-gray-500">including VAT</p>
              </div>
            </div>
            
            {/* Desktop layout - side by side */}
            <div className="hidden sm:flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{selectedSkip.name}</p>
                <p className="text-sm text-gray-600">{selectedSkip.hirePeriod} • {selectedSkip.postcode}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-indigo-600">£{selectedSkip.totalPrice}</p>
                <p className="text-xs text-gray-500">including VAT</p>
              </div>
            </div>
          </div>
        )}

        {/* Step status indicator for unimplemented steps */}
        {currentStepObj && !currentStepObj.isImplemented && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
            <p className="text-sm text-yellow-800">
              📋 Step "{currentStepObj.name}" is not yet implemented. You can continue to navigate for demo purposes.
            </p>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Back button */}
          <button
            onClick={goBack}
            disabled={!canGoBack}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 bg-gray-100 rounded-lg sm:rounded-xl font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-0 flex-shrink-0"
            aria-label="Go back to the previous step"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden xs:inline">Back</span>
          </button>
          
          {/* Continue button */}
          <button
            onClick={goNext}
            disabled={!canContinue}
            className={`
              inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-initial max-w-xs sm:max-w-none
              ${canContinue 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            <span className="truncate">
              {currentStep === steps.length ? 'Complete' : 'Continue'}
            </span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>

        {/* Mobile-only step indicator */}
        <div className="block sm:hidden mt-3 text-center">
          <p className="text-xs text-gray-500">
            Step {currentStep} of {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
};