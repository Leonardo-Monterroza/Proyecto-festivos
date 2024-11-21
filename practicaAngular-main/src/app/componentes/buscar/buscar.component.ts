import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'; 
import { festivosBuscar } from '../../core/entidades/FestivoBuscar'; 
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [
    MatTableModule, 
    MatSortModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  public fecha: number = 2024; 
  public resultados: festivosBuscar[] = [];  

  public columnas = [
    { name: "Nombre", prop: "nombre" },
    { name: "Fecha", prop: "fecha" },
  ];

  public columnasDef = this.columnas.map(col => col.prop);

  constructor(private festivoServicio: ApiService) {}

  ngOnInit(): void {
    this.buscar();
  }

  public onFechaChange(): void {
    this.buscar();
  }

  public buscar() {
    if (this.fecha) {
      this.festivoServicio.buscar(this.fecha).subscribe({
        next: respuesta => {
          this.resultados = respuesta;
        },
        error: error => {
          window.alert(error);
        }
      });
    }
  }
}
