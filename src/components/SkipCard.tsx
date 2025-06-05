import { ArrowRight, CheckCircle2, Scale, Truck, Calendar, Info, TriangleAlert } from "lucide-react";
import { useState } from "react";
import type { SkipCardProps } from "../types";
import { getSkipConfig } from "../utils/skipProcessing";
import { DetailModal } from "./DetailModal";




export const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const config = getSkipConfig(skip.size);
  
  const totalPrice = skip.priceBeforeVat * (1 + skip.vat / 100);

  return (
    <>
      <div
        className={`
          group relative overflow-hidden rounded-3xl transition-all duration-200 ease-in-out
          cursor-pointer transform-gpu will-change-transform
          ${isSelected 
            ? `bg-gradient-to-br ${config.gradient} shadow-2xl scale-[1.03] ring-4 ring-blue-200 ring-offset-2` 
            : `bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] border border-gray-200`
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Select ${skip.size} yard skip for £${totalPrice.toFixed(0)}`}
      >
        {/* Promotional Banner */}
        {/* <PromotionalBanner promotion={config.promotion} isSelected={isSelected} /> */}

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${config.gradient} rounded-full opacity-5 transition-all duration-1000 ${isHovered ? 'scale-150 rotate-90' : 'scale-100'}`} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          
          {/* Header Section */}
          <div onClick={() =>onSelect(skip.id) } className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              {/* Skip Size Badge */}
              <div className={`
                flex items-center justify-center w-16 h-16 rounded-2xl font-bold text-xl
                transition-all duration-500 transform
                ${isSelected 
                  ? 'bg-white/20 backdrop-blur-sm text-white scale-110' 
                  : `bg-gradient-to-br ${config.gradient} text-white group-hover:scale-105`
                }
              `}>
                {skip.size}
                <span className="text-xs ml-1">yd</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{config.icon}</span>
                  <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                    {config.category}
                  </h3>
                </div>
                <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
                  {config.description}
                </p>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-right">
              <div className={`text-3xl font-black ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                £{totalPrice.toFixed(0)}
              </div>
              <div className={`text-xs font-medium ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                inc. {skip.vat}% VAT
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {/* Hire Period */}
            <div className={`
              inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold
              ${isSelected 
                ? 'bg-white/20 text-white backdrop-blur-sm' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              <Calendar className="w-3.5 h-3.5" />
              {skip.hirePeriod} days
            </div>

            {/* Road Legal Status */}
            <div className={`
              inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold
              ${skip.allowedOnRoad
                ? isSelected
                  ? 'bg-white/20 text-white backdrop-blur-sm'
                  : 'bg-green-100 text-green-800'
                : isSelected
                  ? 'bg-yellow-500/20 text-white backdrop-blur-sm'
                  : 'bg-yellow-100 text-yellow-800'
              }
            `}>
              {skip.allowedOnRoad ? (
                <>
                  <Truck className="w-3.5 h-3.5" />
                  Road Legal
                </>
              ) : (
                <>
                  <TriangleAlert className="w-3.5 h-3.5" />
                  Private Only
                </>
              )}
            </div>

            {/* Heavy Waste */}
            {skip.allowsHeavyWaste && (
              <div className={`
                inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold
                ${isSelected 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'bg-purple-100 text-purple-800'
                }
              `}>
                <Scale className="w-3.5 h-3.5" />
                Heavy Waste OK
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            {/* Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className={`
                w-full py-3 px-4 rounded-xl font-medium text-sm
                flex items-center justify-center gap-2
                transition-all duration-300 cursor-pointer
                ${isSelected
                  ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }
              `}
            >
              <Info className="w-4 h-4" />
              View Details
            </button>

            {/* Select Button */}
            <button
              className={`
                w-full py-4 px-6 rounded-2xl font-bold text-sm
                flex items-center justify-center gap-3
                transition-all duration-300 transform hover:scale-[1.02]
                focus:outline-none focus:ring-4 focus:ring-offset-2
                ${isSelected
                  ? 'bg-white text-gray-900 hover:bg-gray-50 focus:ring-white shadow-xl'
                  : `bg-gradient-to-r ${config.gradient} text-white hover:shadow-xl focus:ring-gray-300 shadow-lg`
                }
              `}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(skip.id);
              }}
            >
              {isSelected ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Selected</span>
                </>
              ) : (
                <>
                  <span>Select This Skip</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        skip={skip} 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};