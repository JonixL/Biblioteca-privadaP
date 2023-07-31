import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarrpassComponent } from './recuperarrpass/recuperarrpass.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'recuperarpass', component:RecuperarrpassComponent},
  {path:'listalibros', component:ListaLibrosComponent},
  {path:'registroLibro', component:RegistroLibroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
