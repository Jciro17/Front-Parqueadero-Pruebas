import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCeldaComponent } from './generar-celda.component';

describe('GenerarCeldaComponent', () => {
  let component: GenerarCeldaComponent;
  let fixture: ComponentFixture<GenerarCeldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarCeldaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
