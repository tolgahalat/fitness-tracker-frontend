import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises: Exercise[] = [];
  private exercisesSubject = new BehaviorSubject<Exercise[]>(this.exercises);
  exercises$ = this.exercisesSubject.asObservable();

  addExercise(exercise: Exercise) {
    exercise.id = this.exercises.length + 1;
    this.exercises.push(exercise);
    this.exercisesSubject.next([...this.exercises]);
  }

  deleteExercise(id: number) {
    this.exercises = this.exercises.filter(ex => ex.id !== id);
    this.exercisesSubject.next([...this.exercises]);
  }

  updateExercise(updatedExercise: Exercise) {
    const index = this.exercises.findIndex(ex => ex.id === updatedExercise.id);
    if (index !== -1) {
      this.exercises[index] = { ...updatedExercise };
      this.exercisesSubject.next([...this.exercises]);
    }
  }
}
