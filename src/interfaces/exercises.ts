export type Type =
  | "cardio"
  | "olympic_weightlifting"
  | "plyometrics"
  | "powerlifting"
  | "strength"
  | "stretching"
  | "strongman";

export type Muscle =
  | "abdominals"
  | "abductors"
  | "adductors"
  | "biceps"
  | "calves"
  | "chest"
  | "forearms"
  | "glutes"
  | "hamstrings"
  | "lats"
  | "lower_back"
  | "middle_back"
  | "neck"
  | "quadriceps"
  | "traps"
  | "triceps";

export type Difficulty = "beginner" | "intermediate" | "expert";

export interface ExercisesParams {
  name?: string;
  type?: Type;
  muscle?: Muscle;
  difficulty?: Difficulty;
}

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

export type Exercises = Exercise[];
