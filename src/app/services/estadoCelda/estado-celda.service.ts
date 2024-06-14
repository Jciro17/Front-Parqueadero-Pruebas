import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoCeldaService {
  private API_SERVER = 'http://localhost:8080/estadosCelda/';

  constructor(private httpCliente: HttpClient) {}

  public getAllEstadoCeldas(): Observable<any> {
    return this.httpCliente.get(this.API_SERVER);
  }
}
