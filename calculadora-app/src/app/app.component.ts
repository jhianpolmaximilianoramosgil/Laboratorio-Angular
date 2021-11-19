import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  
  titulo = 'Mi Aplicación de Calculadora';

  myimage:string = "assets/images/bienvenidos.gif";
  operandoA:number;
  operandoB:number;
  resultado:number;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
  onResta():void{
    this.resultado = this.operandoA - this.operandoB;
  }
  onMultiplicacion():void{
    this.resultado = this.operandoA * this.operandoB;
  }
  onDivision():void{
    this.resultado = this.operandoA / this.operandoB;
  }
  onPotencia():void{
    this.resultado = this.operandoA ** this.operandoB;
  }
}
