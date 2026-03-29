export type WorkoutType = 'strength' | 'cardio' | 'mobility';

export interface WorkoutEntry {
  id: string;
  userId: string;
  name: string;
  workoutType: WorkoutType;
  durationMinutes: number;
  notes?: string;
  performedAtIso: string;
}
