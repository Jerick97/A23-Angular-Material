import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermisosService } from 'src/app/services/permisos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor(private usuarioService:PermisosService, private router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuarioService.logout(); //llamamos al método cerrar Sesión
    this.router.navigate(['/']); //redirige al login
  }
}
