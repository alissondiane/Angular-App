import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../persona.model';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  index:number;
  
  constructor(private loggingService: LoggingService,
    private personasService : PersonasService,
    private router:Router,
    private route:ActivatedRoute) { 

      //this.personasService.saludar.subscribe(
        //(indice:number) => alert("El indice es:" + indice)
      //);
    }
        
  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre:" + persona1.nombre + " y apellido:"+ persona1.apellido);
    //this.personaCreada.emit(persona1);
    if(this.index){
      this.personasService.modificarPersona(this.index,persona1);
    }else{
      alert("Nombre: "+ this.nombreInput);
      this.personasService.agregarPersona(persona1);
    }
   
    this.router.navigate(['personas']);
  }
  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }


}