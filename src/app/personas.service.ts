import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas : Persona[] = [
        new Persona("Juan","Perez"),
        new Persona("Laura","Gutierrez")
    ];
    constructor(private loggingService: LoggingService){}
    agregarPersona(persona:Persona)
    {
        this.loggingService.enviaMensajeAConsola("Agregamos persona: "+ persona.nombre);
        this.personas.push(persona);
    }
    
    saludar = new EventEmitter<number>();
}