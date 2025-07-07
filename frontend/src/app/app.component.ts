import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstudianteService, Estudiante } from './estudiante.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cedulaBuscar = '';
  estudiante: Estudiante | null = null;
  mensaje = '';

  constructor(private estudianteService: EstudianteService) {}

  buscar() {
    this.estudianteService.obtenerPorCedula(this.cedulaBuscar).subscribe({
      next: (data) => {
        this.estudiante = { ...data };
        this.mensaje = '';
      },
      error: () => {
        this.estudiante = null;
        this.mensaje = 'Estudiante no encontrado';
      }
    });
  }

  actualizar() {
    if (!this.estudiante) return;

    this.estudianteService.actualizarEstudiante(this.estudiante.cedula, this.estudiante).subscribe({
      next: () => this.mensaje = 'Estudiante actualizado correctamente',
      error: () => this.mensaje = 'Error al actualizar'
    });
  }
}
