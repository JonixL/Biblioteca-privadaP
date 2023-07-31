import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarrpassComponent } from './recuperarrpass/recuperarrpass.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarrpassComponent,
    ListaLibrosComponent,
    RegistroLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
