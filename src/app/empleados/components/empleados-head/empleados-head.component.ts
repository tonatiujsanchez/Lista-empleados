import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-empleados-head',
  templateUrl: './empleados-head.component.html',
  styleUrls: ['./empleados-head.component.css']
})
export class EmpleadosHeadComponent implements OnInit {

  @Input() totalEmpleado: number = 0;
  @Input() totalFemenino: number = 0;
  @Input() totalMasculino: number = 0;
  
  @Output() onRadio: EventEmitter<string> = new EventEmitter();

  radioSeleccionado: string = 'todos';
  constructor() { 
  }

  ngOnInit(): void {
  }

  emitirValor( evento: any ){

    this.radioSeleccionado = evento.target.value;
    this.onRadio.emit( this.radioSeleccionado );
  }



}
