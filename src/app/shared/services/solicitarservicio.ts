import { Injectable } from "@angular/core";
import { Servicio } from "src/app/pages/servicios/interfaces/servicio.interface";

@Injectable(
    {providedIn: 'root'}
)
export class solicitarservicioService{
    servicios: Servicio[]=[];


}