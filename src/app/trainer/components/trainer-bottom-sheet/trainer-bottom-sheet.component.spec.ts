import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerBottomSheetComponent } from './trainer-bottom-sheet.component';

describe('TrainerBottomSheetComponent', () => {
  let component: TrainerBottomSheetComponent;
  let fixture: ComponentFixture<TrainerBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerBottomSheetComponent]
    });
    fixture = TestBed.createComponent(TrainerBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
