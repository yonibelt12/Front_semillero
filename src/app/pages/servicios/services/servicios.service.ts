import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {
  private apiURL ='http://localhost:3001/servicios';
  //private apiURL ='/api/services/';
  constructor(private http: HttpClient) { }

  getServicios():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.apiURL);
  }
}
