import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoVehiculoService {
  private API_SERVER = 'http://localhost:8080/tipoVehiculo/';

  constructor(private httpClient: HttpClient) {}

  getAllTiposVehiculo(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
