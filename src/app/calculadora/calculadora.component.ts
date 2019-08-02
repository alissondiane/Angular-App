import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  titulo = 'Aplicación de Calculadora';
  resultadoCalculado:number;
  
  constructor() { }

  ngOnInit() {
  }
  onResultado(resultado:number)
  {
      this.resultadoCalculado = resultado;
  }

}
