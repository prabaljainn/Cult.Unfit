import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkoutAddComponent } from './workout/components/workout-add/workout-add.component';
import { WorkoutListComponent } from './workout/components/workout-list/workout-list.component';
import { TrainerListComponent } from './trainer/components/trainer-list/trainer-list.component';
import { TrainerAddComponent } from './trainer/components/trainer-add/trainer-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'workouts/add',
    component: WorkoutAddComponent,
  },
  {
    path: 'workouts/list',
    component: WorkoutListComponent,
  },
  {
    path: 'trainers/list',
    component: TrainerListComponent,
  },
  {
    path: 'trainers/add',
    component: TrainerAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
