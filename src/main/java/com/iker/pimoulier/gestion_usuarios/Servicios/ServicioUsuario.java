package com.iker.pimoulier.gestion_usuarios.Servicios;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iker.pimoulier.gestion_usuarios.Entidades.Usuario;
import com.iker.pimoulier.gestion_usuarios.Repositorios.RepoUsuario;

@Service
public class ServicioUsuario {
    @Autowired
    RepoUsuario usuarioRep;
    Usuario user;

    /*public Usuario registroNuevoUsuario(Usuario usuario) {
        return usuarioRep.save(usuario);    
    }*/
    public Boolean registroNuevoUsuario(Usuario usuario) {
         user = usuarioRep.save(usuario);
         if(user.getId()!=null)
            return true;
        else 
            return false;    
    }

    public List<Usuario> verUsuarios() {
        return usuarioRep.findAll();
    }

    public Optional<Usuario> verUsuarioPorNombre(String nombre) {
        return usuarioRep.findByNombre(nombre);
    }

    public Usuario verUsuarioPorEmail(String email) {
        return usuarioRep.findByEmail(email);
    }

    public Boolean existeEmail(String email) {
        Usuario user = usuarioRep.findByEmail(email);
        if (user.getId()!=0) return true;
        else return false;
    }

    public Boolean loginUsuario(String[] loginData) {
        Usuario usuarioLogin;
        String passw;
        if (usuarioRep.existsByEmail(loginData[0])){
            usuarioLogin = verUsuarioPorEmail(loginData[0]);
            passw = usuarioLogin.getPassword();
            if (Objects.equals(passw,loginData[1]))
                return true;
            else return false;
        }
        return false;    
    }

}
