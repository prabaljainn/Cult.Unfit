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
}
