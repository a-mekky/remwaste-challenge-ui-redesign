import { Calendar, CreditCard, MapPin, Package, Shield, Trash2 } from "lucide-react";
import type { Step } from "../types";

export const STEPS: Step[] = [
  { id: 1, name: "Location", icon: MapPin, description: "Enter postcode", isImplemented: false },
  { id: 2, name: "Waste Type", icon: Trash2, description: "Select waste category", isImplemented: false },
  { id: 3, name: "Skip Size", icon: Package, description: "Choose skip capacity", isImplemented: true },
  { id: 4, name: "Permits", icon: Shield, description: "Check requirements", isImplemented: false },
  { id: 5, name: "Schedule", icon: Calendar, description: "Pick dates", isImplemented: false },
  { id: 6, name: "Payment", icon: CreditCard, description: "Complete booking", isImplemented: false }
];


// Raw data
// export const RAW_SKIP_DATA = [
//   { "id": 17933, "size": 4, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 278, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:52.813", "allowed_on_road": true, "allows_heavy_waste": true },
//   { "id": 17934, "size": 6, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 305, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:52.992", "allowed_on_road": true, "allows_heavy_waste": true },
//   { "id": 17935, "size": 8, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 375, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.171", "allowed_on_road": true, "allows_heavy_waste": true },
//   { "id": 17936, "size": 10, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 400, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.339", "allowed_on_road": false, "allows_heavy_waste": false },
//   { "id": 17937, "size": 12, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 439, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.516", "allowed_on_road": false, "allows_heavy_waste": false },
//   { "id": 17938, "size": 14, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 470, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.69", "allowed_on_road": false, "allows_heavy_waste": false },
//   { "id": 17939, "size": 16, "hire_period_days": 14, "transport_cost": null, "per_tonne_cost": null, "price_before_vat": 496, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:46.897146", "updated_at": "2025-04-07T13:16:53.876", "allowed_on_road": false, "allows_heavy_waste": false },
//   { "id": 15124, "size": 20, "hire_period_days": 14, "transport_cost": 248, "per_tonne_cost": 248, "price_before_vat": 992, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:40.344435", "updated_at": "2025-04-07T13:16:52.434", "allowed_on_road": false, "allows_heavy_waste": true },
//   { "id": 15125, "size": 40, "hire_period_days": 14, "transport_cost": 248, "per_tonne_cost": 248, "price_before_vat": 992, "vat": 20, "postcode": "NR32", "area": "", "forbidden": false, "created_at": "2025-04-03T13:51:40.344435", "updated_at": "2025-04-07T13:16:52.603", "allowed_on_road": false, "allows_heavy_waste": false }
// ];