import { AlertTriangle, Calendar, CheckCircle2, CircleAlert, MapPin, Scale, Truck, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Skip } from "../types";
import { getSkipConfig } from "../utils/skipProcessing";

export const DetailModal = ({ skip, isOpen, onClose }: { skip: Skip, isOpen: boolean, onClose: () => void }) => {
  const config = getSkipConfig(skip.size);
  const totalPrice = skip.priceBeforeVat * (1 + skip.vat / 100);
  const vatAmount = skip.priceBeforeVat * (skip.vat / 100);
  
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure the DOM is ready for animation
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Prevent rendering if not needed
  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ease-out ${
        isVisible 
          ? 'bg-black/50 backdrop-blur-sm opacity-100' 
          : 'bg-black/0 backdrop-blur-none opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar transition-all duration-300 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${config.gradient} p-4 sm:p-6 text-white relative`}>
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pr-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
              {config.icon}
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold leading-tight">{skip.size} Yard {config.category} Skip</h2>
              <p className="text-white/80 text-sm sm:text-base">{config.description}</p>
            </div>
          </div>
          
          <div className="text-2xl sm:text-3xl font-bold">
            £{totalPrice.toFixed(0)} 
            <span className="text-sm sm:text-lg font-normal ml-1">inc. VAT</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Key Features */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${config.bgColor} ${config.borderColor} border`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className={`w-4 h-4 sm:w-5 sm:h-5 ${config.textColor} flex-shrink-0`} />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Hire Period</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{skip.hirePeriod} days included</p>
              </div>
              
              <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${skip.allowedOnRoad ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} border`}>
                <div className="flex items-center gap-2 mb-2">
                  {skip.allowedOnRoad ? 
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-green-700 flex-shrink-0" /> : 
                    <CircleAlert className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-700 flex-shrink-0" />
                  }
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Road Placement</span>
                </div>
                <p className={`text-sm sm:text-base ${skip.allowedOnRoad ? 'text-green-700' : 'text-yellow-700'}`}>
                  {skip.allowedOnRoad ? 'Road legal - permit included' : 'Private property only'}
                </p>
              </div>
              
              {skip.allowsHeavyWaste && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-50 border-purple-200 border sm:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Heavy Waste</span>
                  </div>
                  <p className="text-purple-700 text-sm sm:text-base">Accepts heavy materials</p>
                </div>
              )}
              
              <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50 border-blue-200 border ${skip.allowsHeavyWaste ? '' : 'sm:col-span-1'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Service Area</span>
                </div>
                <p className="text-blue-700 text-sm sm:text-base">{skip.postcode} postcode area</p>
              </div>
            </div>
          </div>

          {/* Detailed Pricing */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Pricing Breakdown</h3>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">Base rental price</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">£{skip.priceBeforeVat}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">VAT ({skip.vat}%)</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">£{vatAmount.toFixed(0)}</span>
                </div>
                {skip.transportCost && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm sm:text-base">Transport cost</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">£{skip.transportCost}</span>
                  </div>
                )}
                <div className="border-t border-gray-300 pt-2 sm:pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-gray-900">Total Price</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">£{totalPrice.toFixed(0)}</span>
                  </div>
                </div>
              </div>
              
              {skip.perTonneCost && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>Additional charges:</strong> £{skip.perTonneCost} per tonne over weight limit
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">What's Included</h3>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {[
                "Free delivery to your location",
                "Skip hire for specified period",
                "Collection and disposal",
                "All permits (if road legal)",
                "Environmental disposal",
                "Customer support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings */}
          {!skip.allowedOnRoad && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">Important Notice</h4>
                  <p className="text-amber-800 text-xs sm:text-sm">
                    This skip cannot be placed on public roads. It must be positioned on private property 
                    such as your driveway or garden. Road permits are available separately if needed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 rounded-b-2xl sm:rounded-b-3xl">
          <button
            onClick={handleClose}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-white bg-gradient-to-r ${config.gradient} hover:opacity-90 transition-opacity cursor-pointer text-sm sm:text-base`}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};