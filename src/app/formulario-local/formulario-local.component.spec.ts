import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLocalComponent } from './formulario-local.component';

describe('FormularioLocalComponent', () => {
  let component: FormularioLocalComponent;
  let fixture: ComponentFixture<FormularioLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
