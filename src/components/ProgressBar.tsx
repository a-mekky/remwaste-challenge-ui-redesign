import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useNavigationContext } from "../context/NavigationContext";

export const ProgressBar: React.FC = () => {
  const { currentStep, steps, goToStep, canGoBack } = useNavigationContext();

  // Handle step navigation - only allow going back to completed steps
  const handleStepClick = (stepId: number) => {
    const isCompleted = stepId < currentStep;
    const canNavigateBack = isCompleted && canGoBack;

    if (canNavigateBack) {
      goToStep(stepId);
    }
  };

  return (
    <div className="w-full px-3 py-4">
      {/* Mobile view - enhanced sizes for better readability */}
      <div className="block md:hidden">
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isPrevious = step.id === currentStep - 1;
            const isNext = step.id === currentStep + 1;
            const isVisible = isCompleted || isCurrent || isPrevious || isNext;

            // Hide steps that are too far from current
            if (!isVisible && Math.abs(step.id - currentStep) > 1) {
              return null;
            }

            return (
              <div key={step.id} className="flex items-center">
                {/* Step Shape - Enhanced Mobile Size */}
                <div
                  onClick={() => handleStepClick(step.id)}
                  className={`
                  relative transition-all duration-400 ease-in-out transform
                  ${isCurrent ? 'scale-105' : 'scale-95'}
                `}>
                  {/* Rounded Rectangle Background - Larger for Mobile */}
                  <div className={`
                    relative rounded-xl px-3 py-2.5 min-w-16 min-h-10 transition-all duration-400 ease-in-out
                    ${isCompleted
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md shadow-emerald-400/40'
                      : isCurrent
                        ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-md shadow-violet-400/40'
                        : 'bg-gradient-to-br from-slate-200 to-slate-300 hover:from-slate-300 hover:to-slate-400'
                    }
                  `}>
                    {/* Step Info - Enhanced Text Size */}
                    {(isCurrent || isCompleted) && (
                      <div className="text-center mb-1.5">
                        <p className="text-sm font-semibold text-white truncate max-w-20">
                          {step.name}
                        </p>
                      </div>
                    )}

                    {/* Icon Circle - Larger for Mobile */}
                    <div
                      className={`
                        absolute -bottom-1.5 -left-1.5 w-7 h-7 rounded-full flex items-center justify-center
                        transition-all duration-300 border-2
                        ${isCompleted
                          ? 'bg-white border-emerald-400 shadow-sm cursor-pointer hover:scale-110 hover:shadow-md'
                          : isCurrent
                            ? 'bg-white border-violet-400 shadow-sm cursor-default'
                            : 'bg-white border-slate-400 cursor-default'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Icon className={`
                          w-3.5 h-3.5 transition-all duration-300
                          ${isCurrent ? 'text-violet-600' : 'text-slate-500'}
                        `} />
                      )}
                    </div>

                    {/* Glow Effect for Current Step */}
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-xl bg-violet-300/20 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Arrow Connector - Larger for Mobile */}
                {index < steps.length - 1 && isVisible &&
                  steps[index + 1] && (isCompleted || isPrevious || isCurrent) && (
                    <div className={`
                    flex items-center mx-1 transition-all duration-400
                    ${step.id < currentStep ? 'text-emerald-500' : 'text-slate-400'}
                  `}>
                      <ChevronRight className="w-4 h-4 transition-all duration-300" />
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Step Indicator Pills - Larger for Mobile */}
        <div className="flex justify-center mt-3 space-x-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`
                rounded-full transition-all duration-400 ease-in-out
                ${step.id === currentStep
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 w-8 h-2.5 shadow-sm'
                  : step.id < currentStep
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 w-2.5 h-2.5'
                    : 'bg-slate-300 w-2.5 h-2.5 hover:bg-slate-400'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Desktop view - enhanced layout with better sizing */}
      <div className="hidden md:block">
        <div className="overflow-x-auto overflow-y-hidden p-2">
          <div className="flex items-center justify-center min-w-max space-x-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;

              return (
                <div key={step.id} className="flex items-center">
                  {/* Step Container - Enhanced Desktop Size */}
                  <div
                    onClick={() => handleStepClick(step.id)}
                    className={`
                    relative transition-all duration-400 ease-in-out transform
                    ${isCurrent ? 'scale-102' : 'scale-100'}
                    hover:scale-105
                  `}>
                    {/* Rounded Shape Background - Better Desktop Size */}
                    <div className={`
                      relative rounded-2xl px-5 py-4 transition-all duration-400 ease-in-out
                      min-w-28 text-center cursor-not-allowed 
                      ${isCompleted
                        ? 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-400/30 cursor-pointer'
                        : isCurrent
                          ? 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 shadow-lg shadow-violet-400/30 cursor-pointer'
                          : 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 hover:from-slate-300 hover:to-slate-500 shadow-md'
                      }
                    `}>

                      {/* Step Details - Enhanced Text Sizes */}
                      <div className="space-y-1.5 mb-2.5">
                        <p className={`
                          text-base font-semibold transition-all duration-300
                          ${isCurrent ? 'text-white' : isCompleted ? 'text-white' : 'text-slate-700'}
                        `}>
                          {step.name}
                        </p>
                        <p className={`
                          text-sm transition-all duration-300
                          ${isCurrent ? 'text-violet-100' : isCompleted ? 'text-emerald-100' : 'text-slate-500'}
                        `}>
                          {step.description}
                        </p>
                      </div>

                      {/* Icon Circle - Enhanced Desktop Size */}
                      <div
                        className={`
                          absolute -bottom-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center
                          transition-all duration-300 border-3 
                          ${isCompleted
                            ? 'bg-white border-emerald-300 shadow-md cursor-pointer hover:scale-110 hover:shadow-lg hover:border-emerald-400'
                            : isCurrent
                              ? 'bg-white border-violet-300 shadow-md cursor-default'
                              : 'bg-white border-slate-400 shadow-sm cursor-default'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Icon className={`
                            w-4.5 h-4.5 transition-all duration-300
                            ${isCurrent ? 'text-violet-600' : 'text-slate-600'}
                          `} />
                        )}
                      </div>

                      {/* Subtle Glow for Current Step */}
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-2xl border border-violet-300/50 animate-pulse"></div>
                      )}

                      {/* Success Indicator - Enhanced Size */}
                      {isCompleted && (
                        <div className="absolute top-1.5 right-1.5">
                          <div className="w-5 h-5 bg-emerald-300 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Arrow Connector - Enhanced Desktop Size */}
                  {index < steps.length - 1 && (
                    <div className={`
                      flex items-center mx-3 transition-all duration-400 ease-in-out
                      ${step.id < currentStep ? 'text-emerald-500' : 'text-slate-400'}
                    `}>
                      <div className="flex items-center space-x-1">
                        <div className={`
                          w-5 h-0.5 transition-all duration-400
                          ${step.id < currentStep ? 'bg-emerald-400' : 'bg-slate-300'}
                        `}></div>
                        <ChevronRight className={`
                          w-5 h-5 transition-all duration-300
                          ${step.id < currentStep ? 'text-emerald-500' : 'text-slate-400'}
                        `} />
                        <div className={`
                          w-5 h-0.5 transition-all duration-400
                          ${step.id < currentStep ? 'bg-emerald-400' : 'bg-slate-300'}
                        `}></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};