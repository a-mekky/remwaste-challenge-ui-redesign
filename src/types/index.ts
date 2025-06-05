import { type ComponentType } from 'react';

// Core entity interfaces
export interface Skip {
  id: number;
  size: number;
  name: string;
  capacity: string;
  hirePeriod: string;
  priceBeforeVat: number;
  vat: number;
  totalPrice: number;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  transportCost: number | null;
  perTonneCost: number | null;
  postcode: string;
  bestFor: string;
}

export interface RawSkipData {
  id: number;
  size: number;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  postcode: string;
}

export interface Step {
  id: number;
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  isImplemented?: boolean;
}

// Step-specific data interfaces
export interface LocationStepData {
  postcode: string;
  isValid: boolean;
}

export interface WasteTypeStepData {
  category: string;
  subcategory?: string;
}

export interface SkipSizeStepData {
  selectedSkipId: number | null;
  selectedSkip: Skip | null;
}

export interface PermitsStepData {
  required: boolean;
  obtained: boolean;
}

export interface ScheduleStepData {
  deliveryDate: string;
  collectionDate: string;
}

export interface PaymentStepData {
  method: string;
  completed: boolean;
}

// Main step data interface
export interface StepData {
  location?: LocationStepData;
  wasteType?: WasteTypeStepData;
  skipSize?: SkipSizeStepData;
  permits?: PermitsStepData;
  schedule?: ScheduleStepData;
  payment?: PaymentStepData;
}

// Component prop interfaces
export interface ProgressBarProps {
  currentStep: number;
  steps: Step[];
}

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export interface NavigationProps {
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
  selectedSkip: Skip | null;
  currentStep: number;
}

// Context interface
export interface NavigationContextType {
  currentStep: number;
  stepData: StepData;
  canContinue: boolean;
  canGoBack: boolean;
  steps: Step[];
  goToStep: (stepId: number) => void;
  goNext: () => void;
  goBack: () => void;
  updateStepData: <T extends keyof StepData>(
    stepId: number, 
    data: StepData[T]
  ) => void;
  getStepValidation: (stepId: number) => boolean;
}

// Utility types for step data updates
export type StepDataUpdate = 
  | { stepType: 'location'; data: Partial<LocationStepData> }
  | { stepType: 'wasteType'; data: Partial<WasteTypeStepData> }
  | { stepType: 'skipSize'; data: Partial<SkipSizeStepData> }
  | { stepType: 'permits'; data: Partial<PermitsStepData> }
  | { stepType: 'schedule'; data: Partial<ScheduleStepData> }
  | { stepType: 'payment'; data: Partial<PaymentStepData> };