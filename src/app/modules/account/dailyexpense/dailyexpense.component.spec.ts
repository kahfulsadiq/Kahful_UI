import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyexpenseComponent } from './dailyexpense.component';

describe('DailyexpenseComponent', () => {
  let component: DailyexpenseComponent;
  let fixture: ComponentFixture<DailyexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyexpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
