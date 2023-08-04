---
title: "Express Tutorial: El sitio web de la Biblioteca Local"
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}

El primer artículo de nuestra serie de tutoriales prácticos explica lo que aprenderá y proporciona una descripción general del sitio web de ejemplo de la "biblioteca local" en el que trabajaremos y evolucionaremos en artículos posteriores.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Leer la
        <a href="/es/docs/Learn/Server-side/Express_Nodejs/Introduction"
          >Introducción a Express</a
        >.
        <span id="result_box" lang="es"
          ><span
            >Para los siguientes artículos, también deberá haber
          </span></span
        ><a
          href="/es/docs/Learn/Server-side/Express_Nodejs/development_environment"
          >configurado un entorno de desarrollo de Node</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <span id="result_box" lang="es"
          ><span
            >Presentar la aplicación de ejemplo utilizada en este tutorial, y
            permitir a los lectores comprender qué temas se tratarán.</span
          ></span
        >
      </td>
    </tr>
  </tbody>
</table>

## Visión General

Bienvenido al tutorial de MDN "Biblioteca Local" Express (Node), en el cual desarrollamos un sitio web que podría usarse para administrar el catálogo de una biblioteca local.

En esta serie de artículos tutoriales, usted:

- Usará la herramienta _Express Application Generator_ para crear un sitio web esquemático y una aplicación.
- Iniciará y detendrá el servidor web Node.
- Usará una base de datos para almacenar los datos de la aplicación.
- Creará rutas para solicitar diferente información y plantillas ("vistas") para representar los datos como HTML para que se muestren en el navegador
- Trabajará con formularios
- Implementará su aplicación en producción

Ya se ha aprendido sobre algunos de estos temas y se ha referido brevemente a otros. Al final de la serie de tutoriales, debe saber lo suficiente como para desarrollar aplicaciones Express simples usted mismo.

## El sitio web LocalLibrary

_LocalLibrary_ es el nombre del sitio web que vamos a desarrollar en esta serie de tutoriales. Tal como esperas, el objetivo del sitio web es proveer un catalogo en linea para una pequeña libreria, donde los usuarios exploren los libros disponibles y administren sus cuentas.

Este ejemplo ha sido cuidadosamente elegido porque puede escalarse para mostrar tantos o pocos detalles como necesitemos, de igual forma puede usarse para presentar casi todas las caracteristicas de Express. Mas importante aún, nos permite proporcionar una ruta guiada a traves de la funcionalidad que necesita cualquier sitio web:

- En los primeros articulos definiremos una biblioteca simple, _unicamente de navegacion,_ que los miembros de la biblioteca usaran para saber que libros estan disponibles. Esto permite explorar las operationes mas comunes de los sitios web: lectura y presentacion de contenido de una base de datos.
- A medida que avancemos, el ejemplo de la biblioteca se extenderá naturalmente para mostrar las caracteristicas mas avanzadas del sitio web. Por ejemplo, podemos extender la biblioteca para que se creen nuevos libros, de esta manera conoceremos como usar los formularios (forms) y la autenticacion de usuarios.

Aunque este ejemplo se puede extender mucho mas, se llama LocalLibrary por una razón , esperamos mostrar informacion minima que le ayudara a comenzar a utilizar Express rapidamente. Como resultado, almacenaremos informacion acerca de libros, copias de libros, autores y otra informacion clave. Sin embargo, no almacenaremos informacion sobre otros elementos que una biblioteca pueda tener, o proveer la infraestructura necesaria para soportar multiples sitios u otras caracteristicas de grandes bibliotecas.

## Estoy atascado, donde puedo obtener el codigo fuente?

A medida que avance, le proporcionaremos los fragmentos de codigo adecuado para que usted los copie y pegue en cada punto, ademas, habrá otro código con el proposito de que usted lo complete para afianzar su conocimiento (con alguna orientacion).

Si aun asi sigues atasaco, puedes encontrar la version completamente desarrollada del sitio web [en Github aqui](https://github.com/mdn/express-locallibrary-tutorial).

> **Nota:** Las versiones especificas de node, Express, y los otros modulos con los que se probó esta documentación estan enumeradas en el projecto [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json).

## Resumen

Ahora que sabes un poco mas del sitio web _LocalLIbrary_ y lo que vas a aprender, es tiempo de comenzar a crear un [skeleton project](/es/docs/Learn/Server-side/Express_Nodejs/skeleton_website)o para contener nuestro ejemplo.

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}
