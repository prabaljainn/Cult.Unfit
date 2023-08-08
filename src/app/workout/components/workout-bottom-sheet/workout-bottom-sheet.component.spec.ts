import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBottomSheetComponent } from './workout-bottom-sheet.component';

describe('WorkoutBottomSheetComponent', () => {
  let component: WorkoutBottomSheetComponent;
  let fixture: ComponentFixture<WorkoutBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutBottomSheetComponent]
    });
    fixture = TestBed.createComponent(WorkoutBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
