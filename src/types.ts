export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  image: string;
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  image: string;
  course: string;
  rating: number;
}
