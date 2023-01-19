import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent}, //redireccionar al Login
  {path: 'contacto', component:ContactoComponent},//redireccionar al Contacto y solo es accesible si se inicia sesión, y mostrar mensaje si hay cambios sin guardar
  {path: 'home', component:HomeComponent}, //redireccionar al Home y solo es accesible si se inicia sesión
  {path: '**', pathMatch:'full',redirectTo:'home'}//Cualquier url redirija al Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
