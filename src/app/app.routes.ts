import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ExercisesComponent} from './pages/exercises/exercises.component';
import {WorkoutLogComponent} from './pages/workout-log/workout-log.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  // {
  //   path: 'demo',
  //   component: DemoComponent
  // }

  { path: '', component: DashboardComponent }, // Ana sayfa
  { path: 'exercises', component: ExercisesComponent },
  { path: 'workout-log', component: WorkoutLogComponent },
  { path: '**', redirectTo: '' } // Tanımsız rotalarda ana sayfaya yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
