import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfStatuschangesComponent } from './tdf-statuschanges.component';

describe('TdfStatuschangesComponent', () => {
  let component: TdfStatuschangesComponent;
  let fixture: ComponentFixture<TdfStatuschangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfStatuschangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfStatuschangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
