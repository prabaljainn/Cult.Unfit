import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAddComponent } from './workout-add.component';

describe('WorkoutAddComponent', () => {
  let component: WorkoutAddComponent;
  let fixture: ComponentFixture<WorkoutAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutAddComponent]
    });
    fixture = TestBed.createComponent(WorkoutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
