import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermisosService } from 'src/app/services/permisos.service';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  correcto : boolean = false;
  public formContact!:FormGroup;

  constructor(private formBuilder:FormBuilder, private usuarioService:PermisosService) { }

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(300)
      ]],
    });

  }

  send(): any{
    Swal.fire(
      'Good job!',
      'Se envió el Mensaje Correctamente!',
      'success'
    )
    this.formContact.reset();
    this.correcto = true;
    this.usuarioService.isContactoModificado = false; //si se envió el mensaje , actualizamos la variable
  }

  //Se ejecutara solo cuando alguno de los input se modifica su valor
  isContactoEdit(){
    let dirty = this.formContact.dirty; //almacenamos el estado actual del formulario
    if(dirty && !this.usuarioService.isContactoModificado){ //si se modifico algún campo del formulario actualiza la variable del servicio
      this.usuarioService.isContactoModificado = true;
    }
  }
}
