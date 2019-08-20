import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = "Listado de personas";
  constructor(private loginService:LoginService){}
  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyDhHhEsbCBgVpEY9fU7QckXPgZWKq93KU4",
      authDomain: "listado-personas-95e0e.firebaseapp.com",
    })
  }
  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  salir(){
    this.loginService.logout();
  }
}
