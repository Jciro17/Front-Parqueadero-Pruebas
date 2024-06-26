import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private API_SERVER = 'http://localhost:8080/vehiculos/';

  constructor(private httpCliente: HttpClient) {}

  public getAllVehiculos(): Observable<any> {
    return this.httpCliente.get(this.API_SERVER);
  }

  public saveVehiculo(vehiculo: any): Observable<any> {
    return this.httpCliente.post(this.API_SERVER, vehiculo);
  }
}
