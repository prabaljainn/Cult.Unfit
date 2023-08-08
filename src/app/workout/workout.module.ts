import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutItemComponent } from './components/workout-item/workout-item.component';
import { WorkoutAddComponent } from './components/workout-add/workout-add.component';
import { WorkoutBottomSheetComponent } from './components/workout-bottom-sheet/workout-bottom-sheet.component';
import { MatListModule } from '@angular/material/list';
import {
  MatFormFieldModule,
  matFormFieldAnimations,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderSvgComponent } from './components/loader-svg/loader-svg.component';

@NgModule({
  declarations: [
    WorkoutListComponent,
    WorkoutItemComponent,
    WorkoutAddComponent,
    WorkoutBottomSheetComponent,
    LoaderSvgComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WorkoutListComponent, WorkoutItemComponent, WorkoutAddComponent],
})
export class WorkoutModule {}
