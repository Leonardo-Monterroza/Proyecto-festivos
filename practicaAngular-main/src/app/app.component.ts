import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './modulos/referencias-material.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReferenciasMaterialModule,
    MatIconModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaAngular';
  
  constructor(private router: Router) {}

  navigateToListar() {
    this.router.navigate(['/buscar']);
  }

  navigateToBuscar() {
    this.router.navigate(['/listar']);
  }

  navigateToInicio() {
    this.router.navigate(['/home']);
  }
}


