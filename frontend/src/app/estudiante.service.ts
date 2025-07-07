import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  cedula: string;
  nombre: string;
  apellido: string;
  nivel: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/api/estudiantes';

  constructor(private http: HttpClient) {}

  obtenerPorCedula(cedula: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${cedula}`);
  }

  actualizarEstudiante(cedula: string, data: Partial<Estudiante>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cedula}`, data);
  }
}
