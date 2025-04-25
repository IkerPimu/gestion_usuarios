import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutLoggedComponent } from '../layout-logged/layout-logged.component';
import { UsuarioService } from '../../Servicios/usuario.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [LayoutComponent, LayoutLoggedComponent, CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  registroOK: any;
  res!: HttpStatusCode;
  loggeado:boolean=false;

  constructor(
    private fb: FormBuilder,
    private api: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: [18],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    if (sessionStorage.getItem("isLogged") == "1")
      this.loggeado =  true;
    else this.loggeado =  false;
  }

  onSubmit(): void {
    //if (environment.usarBD){
      if (this.usuarioForm.valid) {
        
        this.registroOK = this.api.PostRegistrarUsuario(this.usuarioForm.value).subscribe(
          res => {
          if (res == 'OK')
            this.router.navigate(['/verUsuarios'])
          });
      } else {
        console.log('El formulario no es válido');
      }
    //}
    //else{      
    //}
  }
}
