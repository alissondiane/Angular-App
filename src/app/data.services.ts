import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';
@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
        private loginService:LoginService){

    }
    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-95e0e.firebaseio.com/datos.json?auth='+token);
    }
    //Guardar personas
    guardarPersonas(personas :Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-95e0e.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response => console.log("Resultado de guardar las personas"+ response),
            error=> console.log("Error al guardar personas:"+error)
        );
    }
    modificarPersona(index:number,persona:Persona){
        const token = this.loginService.getIdToken();
        let url : string;
        url = 'https://listado-personas-95e0e.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httpClient.put(url,persona).subscribe(
            response=>console.log("Resultado de modificar el objeto Persona:" + response),
            error=>console.log("Error al modificar la personas: "+error)

        );
    }
    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url : string;
        url = 'https://listado-personas-95e0e.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httpClient.delete(url).subscribe(
            response=>console.log("Resultado de eliminar el objeto Persona:" + response),
            error=>console.log("Error al eliminar la personas: "+error)

        );
    }
}