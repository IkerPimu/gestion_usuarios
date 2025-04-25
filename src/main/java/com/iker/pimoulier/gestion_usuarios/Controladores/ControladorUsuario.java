package com.iker.pimoulier.gestion_usuarios.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.iker.pimoulier.gestion_usuarios.Servicios.ServicioUsuario;
import com.iker.pimoulier.gestion_usuarios.Entidades.Usuario;

@RestController
@RequestMapping("")
public class ControladorUsuario {
    @Autowired
    ServicioUsuario usuarioServ;

    @GetMapping("/verUsuarios")
    @CrossOrigin
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios() {
        List<Usuario> usuarios = usuarioServ.verUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @GetMapping("/email")
    @CrossOrigin
    public boolean existeEmail(@RequestParam String email) {
        if (usuarioServ.existeEmail(email))
            return true;
        else return false;
    }

    @CrossOrigin
    @PostMapping("/nuevoUsuario")
    public HttpStatus registrarNuevoUsuario(@RequestBody Usuario usuario) {
        try {
            Boolean usuarioGuardado = usuarioServ.registroNuevoUsuario(usuario);
            if (usuarioGuardado){
                //Usuario registrado correctamente.
                return HttpStatus.OK;
            }
            else{
                //FALLO al registrar el usuario
                return HttpStatus.NOT_ACCEPTABLE;
            }
        } catch (Exception e) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    @CrossOrigin
    @PostMapping("/loginUsuario")
    public HttpStatus loginUsuario(@RequestBody String[] loginData) {
    //public ResponseEntity<String> loginUsuario(@RequestBody String[] loginData) {
        try {
            Boolean login = usuarioServ.loginUsuario(loginData);
            if (login) {
                //Login correcto
                return HttpStatus.OK;
            }
            else{
                //Login incorrecto
                return HttpStatus.NOT_ACCEPTABLE;
            }
        } catch (Exception e) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }
}
