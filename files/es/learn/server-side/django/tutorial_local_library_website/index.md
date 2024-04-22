---
title: "Tutorial Django: El Sitio Web de La Biblioteca Local"
slug: Learn/Server-side/Django/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

El primer artículo de nuestra serie de tutoriales prácticos explica qué puedes aprender, y proporciona una visión general del sitio web de ejemplo de "biblioteca local" en el que estaremos trabajando y evolucionando en artículos subsiguientes.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        <p>
          Leer la
          <a
            href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Introducci%C3%B3n"
            >Introducción a Django</a
          >. Durante los siguientes artículos necesitarás tener
          <a
            href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/development_environment"
            >levantado un entorno de desarrollo Django</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Presentar el ejemplo de aplicación usado en este tutorial, y permitir
          que los lectores comprendan los temas que se tratarán aquí.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Bienvenidos al tutorial de MDN sobre la "Biblioteca Local" Django en el que desarrollaremos un sitio web que podría usarse para gestionar el catálogo de una biblioteca local.

En esta serie de tutoriales:

- Usarás las herramientas de Django para crear el esqueleto de un sitio web y una aplicación.
- Arrancarás y pararás el servidor de desarrollo.
- Crearás modelos para representar los datos de tu aplicación.
- Usarás el sitio de administración de Django para rellenar los datos de tu sitio.
- Crearás views para recuperar datos específicos en respuesta a diferentes peticiones, y plantillas para renderizar los datos como HTML que serán presentados en pantalla por el explorador web.
- Crearás mapeadores para asociar los diferentes patrones URL con views específicas.
- Añadirás autorizaciones de usuario y sesiones para controlar el comportamiento del sitio y acceso al mismo.
- Trabajarás con formularios.
- Escribirás código para comprobar tu aplicación.
- Usarás la seguridad de Django con eficacia.
- Desplegarás tu aplicación a producción.

Has aprendido algo de estos tópicos ya, y tocado otros brevemente. Al final de esta serie de tutoriales sabrás lo suficiente para desarrollar aplicaciones simples Django por tí mismo.

## El sitio web de la Biblioteca Local

_BibliotecaLocal_ es el nombre del sitio web que crearemos para evolucionar a lo largo del curso de esta serie de tutoriales. Como habrás supuesto, el propósito de este sitio web es proporcionar un catálogo online para una pequeña biblioteca local, en la que los usuarios pueden explorar los libros disponibles y gestionar sus cuentas.

Este ejemplo ha sido seleccionado cuidadosamente porque puede escalar para mostrar tanto mucho detalle como poco según necesitemos, y puede usarse para mostrar casi cualquier característica de Django. Más importante aún, nos permite proporcionar un camino guiado a través de las funcionalidades más importantes del framework web Django:

- En los primeros artículos del tutorial definiremos una blibioteca simple para _explorar sólo_ que podrán usar sus miembros para encontrar qué libros están disponibles. Esto nos permitirá explorar las operaciones que son comunes a casi todos los sitios web: lectura y presentación de los contenidos de una base de datos.
- A medida que progresemos, el ejemplo de la biblioteca demostrará características más avanzadas de Django. Por ejemplo podremos extender la biblioteca para permitir a los usuarios reservar libros, y usar ésto para demostrar cómo se usan los formularios, y soportar la autenticación de usuario.

Incluso aunque es un ejemplo muy extenso, se llama _Biblioteca**Local**_ por una razón — esperamos mostrar el mínimo de información que te ayude a ponerte en marcha con Django rápidamente. Como resultado almacenaremos información sobre libros, copias de libros, autores y otras información clave. Sin embargo, no almacenaremos información sobre otros elementos que una biblioteca podría almacenar, ni proporcionaremos la infraestructura necesaría para mantener multiples sitios de bibliotecas u otras características de una "gran biblioteca".

## Estoy atascado, ¿Donde puedo encontrar el código fuente?

A medida que avances a través del tutorial te proporcionaremos los fragmentos de código apropiados para que copies y pegues en cada punto, y habrá otro código que esperamos que puedas entender tú mismo (con algo de ayuda).

Si te quedas atascado, puedes encontrar la versión completamente desarrollada [en el sitio web de Github aquí](https://github.com/mdn/django-locallibrary-tutorial).

## Resumen

Ahora que sabes un poco más sobre el sitio de la _BibliotecaLocal_ y lo que vas a aprender, es hora de empezar a crear el [esqueleto(estructura)](/es/docs/Learn/Server-side/Django/skeleton_website) de nuestro proyecto.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
