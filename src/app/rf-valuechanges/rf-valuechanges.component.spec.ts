import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfValuechangesComponent } from './rf-valuechanges.component';

describe('RfValuechangesComponent', () => {
  let component: RfValuechangesComponent;
  let fixture: ComponentFixture<RfValuechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfValuechangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfValuechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
