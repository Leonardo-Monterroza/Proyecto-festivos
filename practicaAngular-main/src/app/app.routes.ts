import { Router, RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'buscar', component: BuscarComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

  export class AppComponent {
    constructor(private router: Router) {}
  
    navigateToListar() {
      this.router.navigate(['/Listar']);
    }
  
    navigateToBuscar() {
      this.router.navigate(['/buscar']);
    }
  }