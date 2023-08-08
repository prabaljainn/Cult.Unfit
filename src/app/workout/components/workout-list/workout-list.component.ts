import { Component } from '@angular/core';
import { WorkoutService } from '../../workout.service';
import { Workout } from '../../../types';
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent {
  constructor(private workSvc: WorkoutService) {}

  workouts: Workout[] = [];

  ngOnInit() {
    this.workSvc.getWorkoutsObservable().subscribe((workouts: Workout[]) => {
      this.workouts = workouts;
    });
  }
}
