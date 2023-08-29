import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarrpassComponent } from './recuperarrpass/recuperarrpass.component';
import { ListaLibrosComponent } from './admin/lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './admin/registro-libro/registro-libro.component';
import { EditarLibroComponent } from './admin/editar-libro/editar-libro.component';
import { EditarPerfileComponent } from './editar-perfile/editar-perfile.component';
import { RegisterAdminComponent } from './register-usuario/register-admin.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path:'', component:InicioComponent},

  {path:'login', component: LoginComponent},
  {path:'recuperarpass', component:RecuperarrpassComponent},
  {path:'listalibros', component:ListaLibrosComponent},
  {path:'registroLibro', component:RegistroLibroComponent},
  {path:'editarLibro', component:EditarLibroComponent},
  {path:'editarPerfil', component:EditarPerfileComponent},
  {path:'registeruser', component:RegisterAdminComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
