export interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface ItineraryItem {
  day: number;
  title: string;
  activities: string[];
}

export interface TripPlan {
  planTitle: string;
  itinerary: ItineraryItem[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}
