import type { RAW_SKIP_DATA } from "../Constants/Constants";
import type { Skip } from "../types";

export const processSkipData = (data: typeof RAW_SKIP_DATA): Skip[] => {
  return data.map(skip => {
    const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
    return {
      id: skip.id,
      size: skip.size,
      name: `${skip.size} Yard Skip`,
      capacity: `${skip.size} Cubic Yards`,
      hirePeriod: `${skip.hire_period_days} Day Hire`,
      priceBeforeVat: skip.price_before_vat,
      vat: skip.vat,
      totalPrice,
      allowedOnRoad: skip.allowed_on_road,
      allowsHeavyWaste: skip.allows_heavy_waste,
      transportCost: skip.transport_cost,
      perTonneCost: skip.per_tonne_cost,
      postcode: skip.postcode,
      bestFor: getBestForText(skip.size, skip.allows_heavy_waste)
    };
  });
};

const getBestForText = (size: number, allowsHeavyWaste: boolean): string => {
  const descriptions: Record<number, string> = {
    4: "Small home projects, garden clearance",
    6: "Medium renovations, bathroom refits", 
    8: "Large home projects, kitchen renovations",
    10: "Major home renovations, small construction",
    12: "Large construction projects, commercial use",
    14: "Major construction, large commercial projects",
    16: "Industrial projects, major demolition",
    20: "Large industrial waste, commercial sites",
    40: "Massive commercial projects, industrial waste"
  };
  
  let description = descriptions[size] || "General waste disposal";
  if (allowsHeavyWaste) {
    description += " • Heavy materials accepted";
  }
  
  return description;
};

export const getSkipConfig = (size: number) => {
  if (size <= 4) return {
    category: "Compact",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-900",
    borderColor: "border-blue-200",
    description: "Perfect for small home projects",
    icon: "🏠",
    promotion: { text: "Most Popular", type: "popular" }
  };
  if (size <= 8) return {
    category: "Standard",
    gradient: "from-green-900 to-green-800",
    bgColor: "bg-green-50",
    textColor: "text-green-900",
    borderColor: "border-green-950",
    description: "Ideal for medium renovations",
    icon: "🔨",
    promotion: { text: "Best Value", type: "value" }
  };
  if (size <= 14) return {
    category: "Large",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
    borderColor: "border-purple-200",
    description: "Great for major projects",
    icon: "🏗️",
    promotion: { text: "Free Delivery", type: "offer" }
  };
  return {
    category: "Industrial",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-900",
    borderColor: "border-orange-200",
    description: "For commercial use",
    icon: "🏭",
    promotion: { text: "Premium", type: "premium" }
  };
};
