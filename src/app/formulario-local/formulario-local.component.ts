import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario-local',
  templateUrl: './formulario-local.component.html',
  styleUrls: ['./formulario-local.component.css']
})
export class FormularioLocalComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();

 // nombreInput : string;
 // apellidoInput: string;

 @ViewChild('nombreInput', {static: false}) nombreInput: ElementRef;
 @ViewChild('apellidoInput', {static: false}) apellidoInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  /*1era forma Con referencia local en el formulario #nombreInput y #apellidoInput en los inputs
  onAgregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
    let persona1 = new Persona(nombreInput.value,apellidoInput.value);
    alert("Agregado desde formulario local");
    this.personaCreada.emit(persona1);
  }*/
  //2DA FORMA
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    alert("Agregado desde formulario local");
    this.personaCreada.emit(persona1);
  }


}
