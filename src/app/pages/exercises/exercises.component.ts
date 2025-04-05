import {Component} from '@angular/core';
import {ExerciseService} from '../../services/exercise.service';
import {Exercise} from '../../models/exercise.model';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
// import {Observable} from 'rxjs';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  imports: [TableModule, FormsModule, CommonModule, ButtonModule, InputNumberModule, InputTextModule,
  ConfirmDialogModule, DialogModule],
  providers: [ConfirmationService],
  standalone: true
})
export class ExercisesComponent {
  exercises$;
  newExercise: Exercise = {id: 0, name: '', muscleGroup: '', rpe: 0};
  exerciseDialogVisible = false; // Modal başlangıçta kapalı olacak

  constructor(private exerciseService: ExerciseService, private confirmationService: ConfirmationService) {
    this.exercises$ = this.exerciseService.exercises$;
  }

  addExercise() {
    // if (this.newExercise.name.trim()) {
    //   this.exerciseService.addExercise({ ...this.newExercise });
    //   this.newExercise = { id: 0, name: '', muscleGroup: '', rpe: 0 };
    // }

    if (this.newExercise.name && this.newExercise.muscleGroup) {
      // todo: Burada API'ye istek atılabilir
      console.log('Egzersiz Eklendi:', this.newExercise);
      this.exerciseService.addExercise({ ...this.newExercise });
      this.exerciseDialogVisible = false;
    }
  }

  deleteExercise(id: number) {
    this.exerciseService.deleteExercise(id);
  }

  showAddExerciseDialog() {
    this.exerciseDialogVisible = true;
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
