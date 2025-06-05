

// Fetch skip data from API
export const fetchSkipData = async (postcode: string = "NR32", area: string = "Lowestoft") => {
  // Replace with your actual API endpoint
  const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
  if (!response.ok) throw new Error("Failed to fetch skip data");
  return response.json();
};