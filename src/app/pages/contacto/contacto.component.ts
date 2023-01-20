import { Component, OnInit } from '@angular/core';
import { onExit } from 'src/app/Guard/contacto.guard';
import { PermisosService } from 'src/app/services/permisos.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  constructor(private usuarioService:PermisosService) { }

  ngOnInit(): void {
  }

  onExit(){
    if(this.usuarioService.isContactoModificado){ //Solo si los campos fueron manipulados
      return Swal.fire({
        title: '¿Estás seguro de que deseas salir?',
        text: 'Perderás los cambios no guardados.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return true;
    }
  }
}
