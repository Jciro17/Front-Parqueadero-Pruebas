import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CeldaService {
  private API_SERVER = 'http://localhost:8080/celdas/';

  constructor(private httpCliente: HttpClient) {}

  public getAllCeldas(): Observable<any> {
    return this.httpCliente.get(this.API_SERVER);
  }

  public saveCelda(celda: any): Observable<any> {
    return this.httpCliente.post(this.API_SERVER, celda);
  }
}
