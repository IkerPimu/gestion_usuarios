import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private base_url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getListarUsuario(): Observable<any> {
    return this.http.get(`${this.base_url}verUsuarios`);
  }

  PostRegistrarUsuario(datos: any): Observable<any> {
    return this.http.post(this.base_url + "nuevoUsuario", datos);
  }

  getUsuarioPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.base_url}usuario/${nombre}`);
  }

  getExisteEmail(email: string): Observable<any> {
    return this.http.get(`${this.base_url}email/${email}`);
  }

  PostLoginUsuario(logData: Array<string>): Observable<any> {
    return this.http.post(this.base_url + "loginUsuario",logData);
  }
}
