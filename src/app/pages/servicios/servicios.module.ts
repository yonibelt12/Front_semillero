import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { ServicioComponent } from './servicio/servicio.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ServiciosComponent,
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialModule
  ]
})
export class ServiciosModule { }
