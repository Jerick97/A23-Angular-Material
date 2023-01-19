import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyHomeComponent } from './body-home/body-home.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ]
})
export class ComponentsModule { }
