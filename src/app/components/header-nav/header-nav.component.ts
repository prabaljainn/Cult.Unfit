import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { WorkoutBottomSheetComponent } from 'src/app/workout/components/workout-bottom-sheet/workout-bottom-sheet.component';
import { TrainerBottomSheetComponent } from 'src/app/trainer/components/trainer-bottom-sheet/trainer-bottom-sheet.component';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheetWorkout(): void {
    this._bottomSheet.open(WorkoutBottomSheetComponent);
  }
  openBottomSheetTrainer(): void {
    this._bottomSheet.open(TrainerBottomSheetComponent);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
