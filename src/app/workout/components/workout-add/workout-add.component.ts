import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TrainerService } from 'src/app/trainer/trainer.service';
import { Trainer, Workout } from 'src/app/types';
import { WorkoutService } from '../../workout.service';

function getRandomIntInclusive(mn: number, mx: number) {
  mn = Math.ceil(mn);
  mx = Math.floor(mx);
  return Math.floor(Math.random() * (mx - mn + 1) + mn); // The maximum is inclusive and the minimum is inclusive
}

@Component({
  selector: 'app-workout-add',
  templateUrl: './workout-add.component.html',
  styleUrls: ['./workout-add.component.scss'],
})
export class WorkoutAddComponent {
  constructor(
    private fb: FormBuilder,
    private trainerSvc: TrainerService,
    private workoutSvc: WorkoutService
  ) {}

  workoutForm = this.fb.group({
    name: ['', Validators.required],
    durationInMinutes: [0, Validators.required],
    intensity: ['', Validators.required],
    calories: [0, Validators.required],
    difficulty: ['', Validators.required],
    workoutType: ['', Validators.required],
    trainer: [-1, Validators.required],
  });

  trainers!: Trainer[];

  ngOnInit(): void {
    this.trainerSvc.getTrainersObservable().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

  onSubmit() {
    console.log(this.workoutForm.value);
    let workout: Workout = {
      workoutId: getRandomIntInclusive(0, 1000000),
      name: this.workoutForm.value.name as string,
      durationInMinutes: this.workoutForm.value.durationInMinutes as number,
      intensity: this.workoutForm.value.intensity as string,
      calories: this.workoutForm.value.calories as number,
      difficulty: this.workoutForm.value.difficulty as string,
      workoutType: this.workoutForm.value.workoutType as string,
      trainer: this.workoutForm.value.trainer as number,
    };

    this.workoutSvc.addWorkout(workout);
  }
}
