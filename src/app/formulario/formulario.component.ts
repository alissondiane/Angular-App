import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //Para injectar un servicio solo a este componente
  providers:[LoggingService]
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput : string;
  apellidoInput: string;
  telefonoInput: string;
  
  constructor(private loggingService: LoggingService,
    private personasService : PersonasService) { 
      this.personasService.saludar.subscribe(
        (indice:number) => alert("El indice es:" + indice)
      );
    }
        
  ngOnInit() {
  }
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre:" + persona1.nombre + " y apellido:"+ persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }


}
