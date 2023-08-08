import { Component } from '@angular/core';

import { TrainerService } from '../../trainer.service';
import { Trainer } from 'src/app/trainer';
@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss'],
})
export class TrainerListComponent {
  trainersList: Trainer[] = [];
  constructor(private trainerSvc: TrainerService) {
    this.trainerSvc.getTrainers().subscribe((response) => {
      response.forEach((trainer: Trainer) => {
        this.trainersList.push(trainer);
      });
    });
    console.log(this.trainersList);
  }

  getAllTrainers() {
    this.trainerSvc.getTrainers().subscribe((response) => {
      response.forEach((trainer: Trainer) => {
        this.trainersList.push(trainer);
      });
    });
    console.log(this.trainersList);
  }
}
