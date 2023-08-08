import { Component, Input } from '@angular/core';
import { TrainerService } from 'src/app/trainer/trainer.service';
import { Trainer, Workout } from 'src/app/types';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent {
  constructor(private trainerSvc: TrainerService) {}
  @Input() workout!: Workout;

  trainerName: string = '';

  ngOnInit() {
    this.trainerSvc
      .getTrainerByIdObservable(this.workout.trainer)
      .subscribe((data: Trainer) => {
        this.trainerName = data.name;
      });
  }
}
