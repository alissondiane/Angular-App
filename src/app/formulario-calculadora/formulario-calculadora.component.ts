import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-calculadora',
  templateUrl: './formulario-calculadora.component.html',
  styleUrls: ['./formulario-calculadora.component.css']
})
export class FormularioCalculadoraComponent implements OnInit {
  @Output() resultadoObtenido = new EventEmitter<number>();
  operandoA:number;
  operandoB:number;
  constructor() { }

  ngOnInit() {
  }
  onSumar():void{
    let resultado = this.operandoA+this.operandoB;
    this.resultadoObtenido.emit(resultado);
  }

}
