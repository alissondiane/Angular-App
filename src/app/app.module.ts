import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormularioCalculadoraComponent } from './formulario-calculadora/formulario-calculadora.component';
import { FormularioLocalComponent } from './formulario-local/formulario-local.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,PersonasComponent, PersonaComponent, CalculadoraComponent, FormularioComponent, ResultadoComponent, FormularioCalculadoraComponent,FormularioLocalComponent, ErrorComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //Para injectar un servicio a todos su componentes
  providers: [LoggingService,PersonasService,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
