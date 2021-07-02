import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  @Input() listaEmpleados: Empleado[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
