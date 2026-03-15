---
publish: true
created: 2025-09-10T06:21
modified: 2025-09-24T12:13:45-05:00
cssclasses: ""
---

# Cursos a seguir sobre SQL
[Capacítate para el empleo - Administrador de bases de datos relacionales](https://capacitateparaelempleo.org/cursos/view/100146)
[Course - Introducción a SQL y bases de datos relacionales\| edX](https://learning.edx.org/course/course-v1:UPValenciaX+SQL101x+1T2025/home)

# Cambiar la contraseña de un usuario en concreto en dos pasos:
1. #Accedemos con credenciales de root
	1. mysql -u root -p 
2. #Cambiamos la contraseña del usuario
	1. ALTER USER ‘nombreUsuario’@’localhost’ IDENTIFIED BY ‘NuevaContraseña’;


# Comentarios en php
<?php
    echo 'Esto es una prueba\n'; // Esto es un comentario de una sola línea, estilo c++
    /* Esto es un comentario de
       varias líneas */
    echo 'Esto es otra prueba\n';
    echo 'Y una prueba final\n'; # Esto es un comentario de una sola línea estilo shell
?>
# Normalización, entidades y relaciones
- **Conjuntos de entidades fuertes:**  Se crea una tabla con los mismos atributos simples. Los atributos compuestos se "aplanan" en sus componentes individuales.
- **Atributos multivalorados:**  Se crea una tabla separada que incluye la clave primaria de la entidad original y el atributo multivalorado.
- **Conjuntos de entidades débiles:**  Se crea una tabla que incluye la clave primaria de la entidad fuerte más el discriminador de la débil.
- **Conjuntos de relaciones:**
	- *Para relaciones  M:N* , se crea una tabla con las claves primarias de ambos conjuntos y los atributos descriptivos de la relación.
	- *Para relaciones  1:N*  con participación total en el lado "muchos", se puede optimizar combinando el esquema de la relación con el esquema de la entidad del lado "muchos".
