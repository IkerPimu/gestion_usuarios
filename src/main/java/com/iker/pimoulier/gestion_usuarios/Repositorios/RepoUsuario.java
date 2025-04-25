package com.iker.pimoulier.gestion_usuarios.Repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.iker.pimoulier.gestion_usuarios.Entidades.Usuario;

public interface RepoUsuario  extends JpaRepository<Usuario, Long>{
    
    Optional<Usuario> findByNombre(String nombre);
    Usuario findByEmail(String email);
    Boolean existsByEmail(String email);

}
