import React from 'react';

import ModernSkipHireApp from '../pages/SkipSelection';
import { useNavigationContext } from '../context/NavigationContext';

// Placeholder components for unimplemented steps
const LocationStep = () => (
    <div className="p-8 text-center min-h-screen mt-8">
        <h2 className="text-2xl text-black font-bold mb-4">Location Step</h2>
        <p className="text-gray-600">Enter your postcode to find available skips in your area.</p>
    </div>
);

const WasteTypeStep = () => (
    <div className="p-8 text-center min-h-screen mt-8">
        <h2 className="text-2xl text-black font-bold mb-4">Waste Type Step</h2>
        <p className="text-gray-600">Select the type of waste you need to dispose of.</p>
    </div>
);

const PermitsStep = () => (
    <div className="p-8 text-center min-h-screen mt-8">
        <h2 className="text-2xl text-black font-bold mb-4">Permits Step</h2>
        <p className="text-gray-600">Check if you need permits for skip placement.</p>
    </div>
);

const ScheduleStep = () => (
    <div className="p-8 text-center min-h-screen mt-8">
        <h2 className="text-2xl text-black font-bold mb-4">Schedule Step</h2>
        <p className="text-gray-600">Choose your delivery and collection dates.</p>
    </div>
);

const PaymentStep = () => (
    <div className="p-8 text-center min-h-screen mt-8">
        <h2 className="text-2xl text-black font-bold mb-4">Payment Step</h2>
        <p className="text-gray-600">Complete your booking and payment.</p>
    </div>
);

export const StepRenderer: React.FC = () => {
    const { currentStep } = useNavigationContext();

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <LocationStep />;
            case 2:
                return <WasteTypeStep />;
            case 3:
                return <ModernSkipHireApp />;
            case 4:
                return <PermitsStep />;
            case 5:
                return <ScheduleStep />;
            case 6:
                return <PaymentStep />;
            default:
                return <div>Step not found</div>;
        }
    };

    return <div className="flex-1">{renderStep()}</div>;
};
