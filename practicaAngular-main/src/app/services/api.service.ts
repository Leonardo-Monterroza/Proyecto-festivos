import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { festivos } from '../core/entidades/Festivos';
import { environment } from './enviroment/enviromen';
import { festivosBuscar } from '../core/entidades/FestivoBuscar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}`;
  }

  public listar(): Observable<festivos[]> {
    return this.http.get<festivos[]>(`${this.url}listar`);
  }

  public buscar(fecha: number): Observable<festivosBuscar[]> {
    return this.http.get<festivosBuscar[]>(`${this.url}fecha/${fecha}`);
  }

}
