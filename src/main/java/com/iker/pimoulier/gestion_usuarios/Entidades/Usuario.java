package com.iker.pimoulier.gestion_usuarios.Entidades;

import org.hibernate.validator.constraints.Range;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

//import jakarta.

@Entity
@Table(name = "usuarios")
public class Usuario{
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String nombre;
    @NotEmpty
    //@Email
    private String email;
    
    @Range(min=5,max=110)
    private Integer edad=5;

    @NotEmpty
    private String password;

    //Constructor    
    public Usuario() {}; 

    public Usuario(String nombre, String email, Integer edad, String password) {
        //this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.password = password;
    }

    public Long getId() {
        return id;
    }
    public String getNombre(){
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Integer getEdad() {
        return edad;
    }
    public void setEdad(Integer edad) {
        this.edad = edad;
    }
    public String getPassword() {
        return password;
    }    
    public void setPassword(String password) {
        this.password = password;
    }
}
