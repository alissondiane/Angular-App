import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCalculadoraComponent } from './formulario-calculadora.component';

describe('FormularioCalculadoraComponent', () => {
  let component: FormularioCalculadoraComponent;
  let fixture: ComponentFixture<FormularioCalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
