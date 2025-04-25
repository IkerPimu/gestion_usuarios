import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutLoggedComponent } from '../layout-logged/layout-logged.component';
import { UsuarioService } from '../../Servicios/usuario.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutComponent, LayoutLoggedComponent, CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logEmail: string='';
  logPassword: string = '';
  logData: Array<string>=['',''];
  res!: HttpStatusCode;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required]
    });
  }

  onSubmit(): any {
    if (this.loginForm.valid) {      
      this.logEmail = this.loginForm.controls['loginEmail'].value;
      this.logPassword = this.loginForm.controls['loginPassword'].value;
      this.logData[0]=this.logEmail;
      this.logData[1]=this.logPassword;
      
      this.api.PostLoginUsuario(this.logData).subscribe(
        res => {
          if (res == 'OK'){    
            sessionStorage.setItem("isLogged","1");       
            this.router.navigate(['/verUsuarios'])            
          }
          });
    } 
    else {
      console.log('El formulario no es válido');
    }
  }

  existeEmail(email: string):any{
    return this.api.getExisteEmail(email);
  }
}
