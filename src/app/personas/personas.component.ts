import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
})

export class PersonasComponent implements OnInit{

    titulo = "Listado de personas";
    agregarPersona=false;

    personaCreada=false;

    agregarPersonaStatus="No se ha agregado ninguna persona estado";
    tituloPersona="Ingeniero";
    personas : Persona[] = [];
  
    constructor(private loggingService: LoggingService,
        private personasService: PersonasService){
        /*
        setTimeout(
            () => {
                this.agregarPersona = true;
            }
            ,3000
        );
        */
    }
    ngOnInit(): void {
        //paso por referencia
      this.personas = this.personasService.personas;
    }
    onCrearPersona(){
        this.personaCreada = true;
        this.agregarPersonaStatus = "Persona agregada"
    }
    onModificarPersona(event:Event){
        this.tituloPersona = (<HTMLInputElement>event.target).value;
    }
    /*
    onPersonaAgregada(persona:Persona)
    {
       // this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona " + persona.nombre);
       //this.personas.push(persona);
       this.personasService.agregarPersona(persona);
    }
    */
  
}