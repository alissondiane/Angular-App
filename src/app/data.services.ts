import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){

    }
    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-95e0e.firebaseio.com/datos.json');
    }
    //Guardar personas
    guardarPersonas(personas :Persona[]){
        this.httpClient.put('https://listado-personas-95e0e.firebaseio.com/datos.json',personas)
        .subscribe(
            response => console.log("Resultado de guardar las personas"+ response),
            error=> console.log("Error al guardar personas:"+error)
        );
    }
    modificarPersona(index:number,persona:Persona){
        let url : string;
        url = 'https://listado-personas-95e0e.firebaseio.com/datos/'+index+'.json';
        this.httpClient.put(url,persona).subscribe(
            response=>console.log("Resultado de modificar el objeto Persona:" + response),
            error=>console.log("Error al modificar la personas: "+error)

        );
    }
    eliminarPersona(index:number){
        let url : string;
        url = 'https://listado-personas-95e0e.firebaseio.com/datos/'+index+'.json';
        this.httpClient.delete(url).subscribe(
            response=>console.log("Resultado de eliminar el objeto Persona:" + response),
            error=>console.log("Error al eliminar la personas: "+error)

        );
    }
}