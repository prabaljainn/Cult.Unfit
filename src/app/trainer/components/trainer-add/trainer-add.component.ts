import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trainer } from 'src/app/trainer';
import { v4 as uuidv4 } from 'uuid';
import { TrainerService } from '../../trainer.service';

@Component({
  selector: 'app-trainer-add',
  templateUrl: './trainer-add.component.html',
  styleUrls: ['./trainer-add.component.scss'],
})
export class TrainerAddComponent {
  trainerForm: FormGroup;
  private trainer: Trainer = {} as Trainer;

  constructor(private fb: FormBuilder, private trainerSvc: TrainerService) {
    this.trainerForm = this.fb.group({
      name: [''],
      experience: [''],
      gender: [''],
      hourlyRate: [''],
      phone: [''],
      rating: [''],
      speciality: [''],
      age: [''],
    });
  }

  onSubmit(): void {
    this.trainer = { ...this.trainerForm.value, trainerId: this.generateID() };
    console.log(this.trainer);
    this.addTrainer();
    this.trainerForm.reset();
  }

  generateID(): number {
    return Math.floor(Math.random() * 10000);
  }
  addTrainer(): void {
    this.trainerSvc.postTrainer(this.trainer).subscribe((data) => {
      console.log(data);
    });
  }
}
