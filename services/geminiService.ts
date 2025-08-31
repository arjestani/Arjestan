import type { TripPlan } from '../types';

export async function generateTripPlan(duration: number, interests: string): Promise<TripPlan> {
  try {
    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ duration, interests }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Proxy server error:", errorText);
      throw new Error(`Failed to get response from server. Status: ${response.status}`);
    }

    const parsedPlan: TripPlan = await response.json();
    return parsedPlan;

  } catch (error) {
    console.error("Error generating trip plan via proxy:", error);
    throw new Error("Failed to generate trip plan from the proxy service.");
  }
}
