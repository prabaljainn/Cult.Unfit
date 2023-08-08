export type Workout = {
  workoutId: number;
  name: string;
  durationInMinutes: number;
  intensity: string;
  calories: number;
  difficulty: string;
  workoutType: string;
  trainer: number;
};

export type Trainer = {
  trainerId: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  hourlyRate: number;
  speciality: string;
  experience: number;
  rating: string;
};
