import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarrpassComponent } from './recuperarrpass/recuperarrpass.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { EditarPerfileComponent } from './editar-perfile/editar-perfile.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'recuperarpass', component:RecuperarrpassComponent},
  {path:'listalibros', component:ListaLibrosComponent},
  {path:'registroLibro', component:RegistroLibroComponent},
  {path:'editarLibro', component:EditarLibroComponent},
  {path:'editarPerfil', component:EditarPerfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
