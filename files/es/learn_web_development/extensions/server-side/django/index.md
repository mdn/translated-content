---
title: Framework Web Django (Python)
slug: Learn_web_development/Extensions/Server-side/Django
original_slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django es un framework web extremadamente popular y completamente funcional, escrito en Python. El módulo muestra por qué Django es uno de los frameworks de servidores web más populares, cómo configurar un entorno de desarrollo y cómo empezar a usarlo para crear tus propias aplicaciones web.

## Requisitos Previos

Antes de comenzar este módulo no es necesario tener ningún conocimiento de Django. Tendrás que entender que son la programación web de lado servidor y los frameworks web, idealmente leyendo los temas en nuestro módulo [Primeros pasos en la programación de lado servidor de sitios web.](/es/docs/Learn/Server-side/First_steps)

Se recomienda un conocimiento general de los conceptos de programación y [Python](/es/docs/Glossary/Python), pero no es esencial para entender los conceptos básicos

> [!NOTE]
> Python es uno de los lenguajes de programación más fáciles de leer y entender para los principiantes. Dicho esto, si desea comprender mejor este módulo, hay numerosos libros y tutoriales gratuitos disponibles en Internet (los nuevos programadores pueden querer ver la página de [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) en el wiki de python.org.

## Guías

- [Introducción a Django](/es/docs/Learn/Server-side/Django/Introducci%C3%B3n)
  - : En este primer artículo de Django respondemos a la pregunta "¿Qué es Django?" y te dará una visión general de lo que hace a este framework web especial. Vamos a esbozar las principales características incluyendo algunas de las funciones avanzadas que no tendremos tiempo de cubrir en detalle en este módulo. También te mostraremos algunos de los principales bloques de construcción de una aplicación de Django, para darte una idea de lo que puedes hacer antes de que continúes configurándolo y comiences a jugar.
- [Puesta en marcha de un entorno de desarrollo de Django](/es/docs/Learn/Server-side/Django/development_environment)
  - : Ahora que sabes qué es y para qué sirve Django, te mostraremos cómo configurar y probar un entorno de desarrollo Django en Windows, Linux(Ubuntu), y Mac OS X. Cualquiera que sea el sistema operativo común que estés utilizando, este articulo deberia de ofrecerte lo necesario para iniciarte en el desarrollo de aplicaciones en Django.
- [Tutorial de Django: Sitio web "Biblioteca Local"](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : El primer articulo de nuestra serie de tutoriales explica lo que se aprenderá y proporciona una descripcion general del sitio web de ejemplo "Biblioteca Local" en el cual trabajaremos y evolucionaremos en articulos posteriores.
- [Tutorial de Django Parte 2: Creación del esqueleto de un sitio web](/es/docs/Learn/Server-side/Django/skeleton_website)
  - : Este artículo muestra cómo crear el "esqueleto" de un proyecto de sitio web como base, que luego se puede rellenar con configuraciones, urls, modelos, vistas y plantillas específicas del sitio.
- [Tutorial de Django Parte 3: Uso de modelos](/es/docs/Learn/Server-side/Django/Models)
  - : Este artículo muestra cómo definir modelos para el sitio web de la _Biblioteca Local_ — los modelos representan las estructuras en las que queremos almacenar los datos de nuestra app, y también permiten a Django almacenar datos en una base por nosotros (y modificarlos más tarde). Se explica qué es un modelo, cómo se declara y alguno de los principales tipos de campo. También se muestra brevemente unas pocas de las múltiples formas con las que puedes acceder al modelo de datos.
- [Tutorial de Django Parte 4: Sitio de Administración de Django](/es/docs/Learn/Server-side/Django/Admin_site)
  - : Ahora que hemos creado modelos para el sitio web de la _Biblioteca Local_, usaremos el sito de administración de Django para añadir algunos datos "reales" de libros. Primero te mostraremos cómo registrar los modelos con el sitio de administración, a continuación te mostraremos cómo iniciar sesión y crear algunos datos. Al final te mostramos algunas formas en las que puedes mejorar la presentación del sitio de administración.
- [Tutorial de Django Parte 5: Creación de tu página de inicio](/es/docs/Learn/Server-side/Django/Home_page)
  - : Ahora estamos listos para añadir el código para presentar nuestra primera página completa — una página de inicio para la _Biblioteca Local_ que muestra cuántos registros tenemos de cada tipo de modelo y proporciona una barra lateral con enlaces de navegación a otras páginas. A medida que avanzamos ganaremos experiencia práctica en la escritura de mapas URL y vistas, obtención de registros de la base de datos y la utilización de plantillas.
- [Tutorial de Django Parte 6: Listas genéricas y vistas de detalle](/es/docs/Learn/Server-side/Django/Generic_views)
  - : Este tutorial extiende el sitio web de nuestra _Biblioteca Local_ añadiendo listas y páginas de detalle de libros y autores. Aquí aprenderemos sobre vistas genéricas basadas en clases y se mostrará cómo pueden reducir la cantidad de código que tienes que escribir para casos de uso común. También nos adentraremos en la gestión de URL en gran detalle, mostrando cómo realizar un emparejamiento básico de patrones.
- [Tutorial de Django Parte 7: Framework de sesiones](/es/docs/Learn/Server-side/Django/Sessions)
  - : Este tutorial extiende nuestro sitio web de _Biblioteca Local_ añadiendo a nuestra página de inicio un contador de visitas basado en sesión. Este es un ejemplo relativamente simple, pero muestra de verdad cómo puedes usar el framework de sesión para proporcionar un comportamiento presistente para usuarios anónimos en tus propios sitios.
- [Tutorial de Django Parte 8: Autenticación y permisos de Usuario](/es/docs/Learn/Server-side/Django/Authentication)
  - : En este tutorial te mostraremos cómo permitir a los usuarios iniciar sesión en tu sitio con sus propias cuentas y cómo controlar lo que pueden hacer y ver, basado en si han iniciado sesión o no y en sus _permisos_. Como parte de esta demostración extenderemos el sitio web de la _Biblioteca Local_, añadiendo páginas de inicio y cierre de sesión, y páginas específicas de usuario - y de personal - para ver libros que han sido prestados.
- [Tutorial de Django Parte 9: Trabajo con formularios](/es/docs/Learn/Server-side/Django/Forms)
  - : En este tutorial te mostraremos cómo trabajar con [Formularios HTML](/es/docs/Learn/Forms) en Django, y en particular la forma más fácil de escribir formularios para crear, actualizar y borrar instancias de modelos. Como parte de esta demostración extenderemos el sitio web de la _Biblioteca Local_ de manera que los bibliotecarios puedan renovar libros, y crear, actualizar y borrar autores usando sus propios formularios (en vez de usar la aplicación de administración).
- [Tutorial de Django Parte 10: Probando una aplicación web Django](/es/docs/Learn/Server-side/Django/Testing)
  - : A medida que crecen los sitios web se vuelven más difíciles de probar a mano — no sólo hay más para probar, sino que además, a medida que las interacciones entre los componentes se vuelven más complejas, un pequeño cambio en un área puede suponer muchas pruebas adicionales para verificar su impacto en otras áreas. Una forma de mitigar estos problemas es escribir tests automatizados, que pueden ser ejecutados de manera fácil y fiable cada vez que hagas un cambio. Este tutorial muestra cómo automatizar la _unidad de pruebas_ de tu sitio web usando el framework de pruebas de Django.
- [Tutorial de Django Parte 11: Desplegando Django a producción](/es/docs/Learn/Server-side/Django/Deployment)
  - : Ahora que has creado (y probado) un impresionante sitio web para la _Biblioteca Local_, vas a querer instalarlo en un servidor web público de manera que pueda ser accedido por el personal y los miembros de la biblioteca a través de Internet. Este artículo proporciona una visión general de cómo podrías ir buscando un host para desplegar tu sitio web y lo que necesitas hacer para conseguir que tu sitio esté listo en producción.
- [Seguridad de las aplicaciones web Django](/es/docs/Learn/Server-side/Django/web_application_security)
  - : Proteger los datos de los usuarios es una parte esencial de cualquier diseño de un sitio web. Previamente ya explicamos algunas de las amenazas de seguridad más comunes en el artículo [Seguridad Web](/es/docs/Web/Security) — este artículo proporciona una demostración práctica de cómo las protecciones integradas de Django gestionan estas amenazas.

## Evaluaciones

La siguiente evaluación comprobará tu comprensión de cómo crear un sitio web usando Django, como se describe en las guías listadas arriba.

- [Mini Blog Django Hazlo tu mismo](/es/docs/Learn/Server-side/Django/django_assessment_blog)
  - : En esta evaluación usarás algo del conocimiento que has aprendido en este módulo para crear tu propio blog.
