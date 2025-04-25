Aplicación de Gestion de Usuarios desarrollada en el entorno Visual Studio Code utilizando Spring Boot + Angular.

Para el guardado de usuarios, solamente he desarrollado utilizando una base de datos de MySQL llamada usuarios_zeo.
En el fichero del proyecto donde se configura la conexión con dicha base de datos (src/main/resources/application.properties), el campo de la password para el usuario root lo he dejado en blanco para que pongáis vuestras credenciales.
Dentro de la base de datos, solamente hay un usuario creado para que podáis hacer el login y probar la aplicación. Dicho usuario tiene los siguientes datos:

      nombre: Iker
      email: i.pimu@hotmail.com
      edad: 34
      password: iker34

En el formulario de login, el botón de LOGIN está deshabilitado mientras ambos campos no tengan valores. Lo que no he llegado a hacer es el mostrar mensajes si el email o la contraseña no son correctos.
Del mismo modo, en el formulario de añadir usuario, el botón ACEPTAR, también estará deshabilitado hasta que no se rellenen todos los campos.
