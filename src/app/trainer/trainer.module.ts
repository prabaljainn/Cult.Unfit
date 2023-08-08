import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerItemComponent } from './components/trainer-item/trainer-item.component';
import { TrainerAddComponent } from './components/trainer-add/trainer-add.component';
import { TrainerBottomSheetComponent } from './components/trainer-bottom-sheet/trainer-bottom-sheet.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerItemComponent,
    TrainerAddComponent,
    TrainerBottomSheetComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [TrainerListComponent, TrainerItemComponent, TrainerAddComponent],
})
export class TrainerModule {}
