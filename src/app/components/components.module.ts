import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyHomeComponent } from './body-home/body-home.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    BodyHomeComponent,
    FormContactoComponent,
    FormLoginComponent
  ]
})
export class ComponentsModule { }
