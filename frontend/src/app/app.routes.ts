import { Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { NuevoUsuarioComponent } from './Componentes/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './Componentes/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: HomeComponent },
    { path: 'verUsuarios', component: UsuarioComponent },
    { path: 'nuevoUsuario', component: NuevoUsuarioComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
