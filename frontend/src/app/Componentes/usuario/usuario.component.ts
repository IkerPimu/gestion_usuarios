import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutLoggedComponent } from '../layout-logged/layout-logged.component';
import { UsuarioService } from '../../Servicios/usuario.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [LayoutComponent, LayoutLoggedComponent, CommonModule, RouterModule, NgIf],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  loggeado:boolean=false;
  datos: any[] = [];
  datos2!: Array<string | number>;

  constructor(private api: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.ListarUsuario();    
  }

  ListarUsuario(): void {
    //if (environment.usarBD){
      this.api.getListarUsuario().subscribe(data => {
        this.datos = data;
      });
      if (sessionStorage.getItem("isLogged") == "1")
        this.loggeado =  true;
      else this.loggeado =  false;
    //}
    //else{
    //}
  }

  trackByEmail(index: number, datos: any): string {
    return datos.email;
  }
}
