import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,PersonasComponent, PersonaComponent, CalculadoraComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
