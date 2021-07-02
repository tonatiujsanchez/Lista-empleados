import { Component, OnInit } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleados: Empleado [] = [
    { legajo: 1, nombre: 'juan', apellido: 'perez', sexo: 'masculino', salario: 25000 },
    { legajo: 2, nombre: 'marcos', apellido: 'gozalez', sexo: 'masculino', salario: 65000 },
    { legajo: 3, nombre: 'marta', apellido: 'garcia', sexo: 'femenino', salario: 75000 },
    { legajo: 4, nombre: 'ignacio', apellido: 'cortes', sexo: 'masculino', salario: 55000 },
    { legajo: 5, nombre: 'maria', apellido: 'navarro', sexo: 'femenino', salario: 80000 },
    { legajo: 6, nombre: 'asuncion', apellido: 'manzanarez', sexo: 'femenino', salario: 85000 },
    { legajo: 7, nombre: 'amanda', apellido: 'mendez', sexo: 'femenino', salario: 75000 },
    { legajo: 8, nombre: 'isabel', apellido: 'lopez', sexo: 'femenino', salario: 95000 },
    { legajo: 9, nombre: 'arturo', apellido: 'jimenez', sexo: 'masculino', salario: 65000 },
    { legajo: 10, nombre: 'teresa', apellido: 'lisbon', sexo: 'femenino', salario: 70000 },
    { legajo: 11, nombre: 'grace', apellido: 'val pelt', sexo: 'femenino', salario: 60000 },
    { legajo: 12, nombre: 'simon', apellido: 'baker', sexo: 'masculino', salario: 90000 },
    { legajo: 13, nombre: 'chon', apellido: 'kang', sexo: 'masculino', salario: 95000 },
    { legajo: 14, nombre: 'annie', apellido: 'gaston', sexo: 'femenino', salario: 70000 },
    { legajo: 15, nombre: 'carlos', apellido: 'morales', sexo: 'femenino', salario: 60000 },
    { legajo: 16, nombre: 'alan', apellido: 'dinkler', sexo: 'masculino', salario: 90000 }
  ];

  get totalEmpleado(){
    return this.empleados.length;
  }
  get totalFemenino(){
    return this.empleados.filter( empeleado => empeleado.sexo === 'femenino').length;
  }
  get totalMasculino(){
    return this.empleados.filter( empeleado => empeleado.sexo === 'masculino').length;
  }
  radioSeleccionado = 'todos';
  
  constructor() { }

  ngOnInit(): void {

  }

  get listaEmpleados(): Empleado[]{
    return this.radioSeleccionado === 'todos'? this.empleados : this.empleados.filter( empleado => empleado.sexo === this.radioSeleccionado );
  }

  seleccionar( evento:string ){
    this.radioSeleccionado = evento;
  }

}
