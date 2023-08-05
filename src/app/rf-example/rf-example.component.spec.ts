import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfExampleComponent } from './rf-example.component';

describe('RfExampleComponent', () => {
  let component: RfExampleComponent;
  let fixture: ComponentFixture<RfExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
