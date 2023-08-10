import { Component, Input } from '@angular/core';
import { Trainer } from 'src/app/trainer';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.scss'],
})
export class TrainerItemComponent {
  @Input()
  trainer: Trainer = {} as Trainer;
  constructor() {}
  private url = 'https://robohash.org/prabal';
  getImage(): string {
    return (
      this.url +
      this.trainer.age +
      this.trainer.name +
      this.trainer.experience +
      this.trainer.phone +
      '?set=set2'
    );
  }
}
