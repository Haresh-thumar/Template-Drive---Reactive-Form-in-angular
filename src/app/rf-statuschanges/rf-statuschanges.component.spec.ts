import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfStatuschangesComponent } from './rf-statuschanges.component';

describe('RfStatuschangesComponent', () => {
  let component: RfStatuschangesComponent;
  let fixture: ComponentFixture<RfStatuschangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfStatuschangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfStatuschangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
