import React, { useMemo, } from "react";
import { processSkipData } from "../utils/skipProcessing";
import { RAW_SKIP_DATA } from "../Constants/Constants";
import { SkipCard } from "../components/SkipCard";
import { useNavigationContext } from "../context/NavigationContext";
import { Sparkles, CheckCircle2, TruckIcon } from "lucide-react";

const ModernSkipHireApp: React.FC = () => {
  const { stepData, updateStepData } = useNavigationContext();
  
  const processedSkips = useMemo(() => processSkipData(RAW_SKIP_DATA), []);
  
  // Get the currently selected skip from navigation state
  const selectedSkipId = stepData.skipSize?.selectedSkipId || null;

  const handleSelectSkip = (skipId: number) => {
    const skip = processedSkips.find(s => s.id === skipId);
    if (skip) {
      // Update navigation state with selected skip data
      updateStepData(3, {
        selectedSkipId: skipId,
        selectedSkip: skip
      });
    }
  };

  return (
    <div>
      <main className="pb-32">
        <div className="max-w-full mx-auto">
          {/* Eye-Catching Banner Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 mb-8">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-16 w-12 h-12 bg-teal-300/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-16 left-1/4 w-16 h-16 bg-violet-300/25 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-8 h-8 bg-emerald-300/40 rounded-full animate-ping"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-purple-700/80"></div>
            
            {/* Main Content */}
            <div className="relative px-6 py-16 md:py-20 text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mb-6 animate-bounce">
                <TruckIcon className="w-8 h-8 text-white" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block animate-fadeIn">Choose Your</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent animate-shimmer">
                  Perfect Skip
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-violet-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Find the ideal skip size for your project with our premium collection. 
                <span className="text-emerald-300 font-semibold"> All prices include VAT and delivery to NR32 area.</span>
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span className="text-white text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span className="text-white text-sm font-medium">VAT Included</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <TruckIcon className="w-4 h-4 text-violet-300" />
                  <span className="text-white text-sm font-medium">Same Day Service</span>
                </div>
              </div>
              
              {/* Call to Action */}
              <a href="#skips" className="inline-block bg-gradient-to-r from-emerald-500 via-50% to-cyan-600 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                  <span className="text-white font-semibold text-sm">
                    👇 Select your skip size below
                  </span>
                </div>
              </a>
            </div>
            
            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
                <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1100,75 1150,50 1200,50 L1200,120 L0,120 Z"></path>
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-4 py-4">
            {/* Skip grid */}
            <div id="skips" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-10">
              {processedSkips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={Number(selectedSkipId) === skip.id}
                  onSelect={handleSelectSkip}
                />
              ))}
            </div>

          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ModernSkipHireApp;