import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarrpassComponent } from './recuperarrpass/recuperarrpass.component';
import { ListaLibrosComponent } from './admin/lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './admin/registro-libro/registro-libro.component';
import { EditarLibroComponent } from './admin/editar-libro/editar-libro.component';
import { EditarPerfileComponent } from './editar-perfile/editar-perfile.component';
import { RegisterAdminComponent } from './register-usuario/register-admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuPrincipalUserComponent } from './user/menu-principal-user/menu-principal-user.component';
import { ListaLibrosParaDonarComponent } from './user/lista-libros-para-donar/lista-libros-para-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarrpassComponent,
    ListaLibrosComponent,
    RegistroLibroComponent,
    EditarLibroComponent,
    EditarPerfileComponent,
    RegisterAdminComponent,
    InicioComponent,
    MenuPrincipalUserComponent,
    ListaLibrosParaDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
