import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servicio } from '../interfaces/servicio.interface';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {
  @Input() servicio!: Servicio;
  @Output() solicitarClick= new EventEmitter<Servicio>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.solicitarClick.emit(this.servicio);
  }
}
