import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfExampleComponent } from './tdf-example.component';

describe('TdfExampleComponent', () => {
  let component: TdfExampleComponent;
  let fixture: ComponentFixture<TdfExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
