import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Trainer } from '../trainer';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private BASE_URL =
    'https://cultunfitbackend-production.up.railway.app/trainers/v1';
  constructor(private http: HttpClient) {}

  // Get mappings
  getTrainers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/trainers`);
  }

  getTrainerById(id: number) {
    // http://localhost:8080/trainers/v1/trainers/1
    return this.http.get(`${this.BASE_URL}/trainers/trainer-id/${id}`);
  }

  getTrainerByIdObservable(trainerId: number) {
    return this.http.get<any>(
      `${this.BASE_URL}/trainers/trainer-id/${trainerId}`
    );
  }
  postTrainer(trainer: Trainer) {
    return this.http.post(`${this.BASE_URL}/trainers`, trainer);
  }
  getTrainersObservable() {
    return this.http.get<any>(`${this.BASE_URL}/trainers`).pipe<Trainer[]>(
      map((response: any) => {
        let data: Trainer[] = response.map((dataObj: any) => {
          return {
            trainerId: dataObj.trainerId,
            name: dataObj.name,
            age: dataObj.age,
            gender: dataObj.gender,
            phone: dataObj.phone,
            hourlyRate: dataObj.hourlyRate,
            speciality: dataObj.speciality,
            experience: dataObj.experience,
            rating: dataObj.rating,
          };
        });

        return data;
      })
    );
  }
}
