import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfValuechangesComponent } from './tdf-valuechanges.component';

describe('TdfValuechangesComponent', () => {
  let component: TdfValuechangesComponent;
  let fixture: ComponentFixture<TdfValuechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfValuechangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfValuechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
