import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyHomeComponent } from './body-home/body-home.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ]
})
export class ComponentsModule { }
