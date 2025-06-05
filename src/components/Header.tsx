import { Truck, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200">
        {/* Top bar with contact info */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Serving all UK postcodes</span>
              </div>
            </div>
            <div className="hidden md:block text-white/80">
              Free delivery • Same day service available
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" />
                </div>
                {/* Decorative element */}
                <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>

              {/* Company Name and Tagline */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SkipHire
                  </span>
                </h1>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600 font-medium">
                  Premium waste management solutions
                </p>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Hire Skip
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Service Areas
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 border-t border-gray-200 absolute bg-white left-0 right-0 z-50 inset-x-0">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
                  Hire Skip
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
                  Service Areas
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-24 bg-gradient-to-r from-purple-500/5 to-transparent pointer-events-none" />
      </header>
    </>
  );
};

export default Header;