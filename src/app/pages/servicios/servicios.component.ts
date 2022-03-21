import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './services/servicios.service';
import { tap } from 'rxjs/operators';
import { Servicio } from './interfaces/servicio.interface';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios!: Servicio[];
  constructor(private servicioSvc: ServiciosService) { }

  ngOnInit(): void {
    this.servicioSvc.getServicios()
    .pipe(
      tap((servicios: Servicio[]) => this.servicios=servicios)
    )
    .subscribe();
    
  }
solicitar(servicio: Servicio): void{
  console.log('Solicitar servicio',servicio);
}
}
