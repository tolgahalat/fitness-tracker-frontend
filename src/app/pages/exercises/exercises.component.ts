import { Component } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { Exercise } from '../../models/exercise.model';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import {Slider} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    Slider,
    DropdownModule,
    Select
  ],
  providers: [ConfirmationService],
  standalone: true
})
export class ExercisesComponent {
  exercises$;
  exerciseDialogVisible = false;
  isEditing = false;

  selectedExercise: Exercise = {
    id: 0,
    name: '',
    muscleGroup: '',
    rpe: 0
  };

  muscleGroups = [
    { label: 'Chest', value: 'chest' },
    { label: 'Back', value: 'back' },
    { label: 'Legs', value: 'legs' },
    { label: 'Arms', value: 'arms' },
    { label: 'Shoulders', value: 'shoulders' },
    { label: 'Core', value: 'core' }
  ];


  constructor(
    private exerciseService: ExerciseService,
    private confirmationService: ConfirmationService
  ) {
    this.exercises$ = this.exerciseService.exercises$;
  }

  showAddExerciseDialog() {
    this.isEditing = false;
    this.selectedExercise = {
      id: 0,
      name: '',
      muscleGroup: '',
      rpe: 5
    };
    this.exerciseDialogVisible = true;
  }

  editExercise(exercise: Exercise) {
    this.isEditing = true;
    this.selectedExercise = { ...exercise };
    this.exerciseDialogVisible = true;
  }

  saveExercise() {
    if (this.isEditing) {
      this.exerciseService.updateExercise({ ...this.selectedExercise });
      console.log('Egzersiz Güncellendi:', this.selectedExercise);
    } else {
      this.exerciseService.addExercise({ ...this.selectedExercise });
      console.log('Egzersiz Eklendi:', this.selectedExercise);
    }
    this.exerciseDialogVisible = false;
  }

  deleteExercise(id: number) {
    this.exerciseService.deleteExercise(id);
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Bu egzersizi silmek istediğinizden emin misiniz?',
      accept: () => {
        this.deleteExercise(id);
      }
    });
  }
}
