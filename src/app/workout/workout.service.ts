import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Workout } from '../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:8080/workouts/v1';

  getWorkoutsObservable(): Observable<Workout[]> {
    return this.http.get<any>(`${this.url}/workouts`).pipe<Workout[]>(
      map((response: any) => {
        let data: Workout[] = response.map((dataObj: any) => {
          return {
            workoutId: dataObj.workoutId,
            name: dataObj.name,
            durationInMinutes: dataObj.durationInMinutes,
            intensity: dataObj.intensity,
            calories: dataObj.calories,
            difficulty: dataObj.difficulty,
            workoutType: dataObj.workoutType,
            trainer: dataObj.trainer,
          };
        });

        return data;
      })
    );
  }

  addWorkout(workout: Workout) {
    console.log(workout);
    this.http.post(`${this.url}/workouts`, workout).subscribe(() => {
      console.log('Workout added successfully');
      this.router.navigate(['workouts', 'list']);
    });
  }
}
