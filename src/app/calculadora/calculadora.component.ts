import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  titulo = 'Aplicación de Calculadora';
  operandoA:number;
  operandoB:number;
  resultado:number;
  
  constructor() { }

  ngOnInit() {
  }
  onSumar():void{
    this.resultado = this.operandoA+this.operandoB;

  }

}
