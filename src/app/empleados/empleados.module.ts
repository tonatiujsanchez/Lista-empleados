import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosHeadComponent } from './components/empleados-head/empleados-head.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    EmpleadosListComponent,
    EmpleadosHeadComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
