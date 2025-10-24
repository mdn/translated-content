---
title: Express Web Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
original_slug: Learn/Server-side/Express_Nodejs
---

{{LearnSidebar}}

Express es un framework web transigente, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS. El modulo explica algunos de los beneficios clave de este framework, como configurar tu entorno de desarrollo y como realizar tareas comunes en desarrollo y publicación web.

## Prerequisitos

Antes de empezar con este módulo necesitaras entender los conceptos de programación web en el lado del servidor y los frameworks, de preferencia leyendo acerca de estos temas en nuestro modulo [Primeros pasos en la programación web del lado del servidor](/es/docs/Learn_web_development/Extensions/Server-side/First_steps). Un conocimiento general de conceptos de programación y JavaScript es altamente recomendado, pero no esencial para entender los conceptos básicos.

> [!NOTE]
> Esta web posee muchos recursos útiles para aprender JavaScript _en el contexto del desarrollo en el lado del cliente:_ [JavaScript](/es/docs/Web/JavaScript), [Guía de JavaScript](/es/docs/Web/JavaScript/Guide), [JavaScript Básico](/es/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/es/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792) (aprendizaje). El lenguaje JavaScript y sus conceptos son los mismos para el desarrollo en el lado del servidor en NodeJS y este material será relevante. NodeJS ofrece [APIs adicionales](https://nodejs.org/dist/latest-v6.x/docs/api/) para soportar funcionalidades que son útiles en entornos sin navegador web, por ejemplo para crear servidores HTTP y acceder al sistema de archivos, pero no soportan APIs de JavaScript para trabajar con el navegador y el DOM.
>
> Esta guía proporciona información útil para trabajar con Node.js y Express, además hay numerosos y excelentes recursos en Internet y en libros - algunos de estos referenciados en [Cómo empezar con Node.js](https://stackoverflow.com/a/5511507/894359) (Inglés - StackOverflow) y [¿Cuáles son los mejores recursos para aprender Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Inglés - Quora).

## Guías

- [Introducción a Express/Node](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : En el primer artículo de Express respondemos las preguntas "¿Qué es Node?" y "¿Qué es Express?" y te daremos una visión general de qué hace especial al framework web Express. Destacaremos las principales caracteristicas, y mostraremos algunos de los bloques principales de una aplicación Express (aunque en este punto aún no tendrás un entorno de desarrollo para probarlo).
- [Preparando un entorno de desarrollo Node (Express)](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Ahora que sabes para que sirve Express, te mostraremos como preparar y probar un entorno de desarrollo Node/Express en Windows, Linux (Ubuntu), y Mac OS X. Sin importar el sistema operativo que estes usando, este artículo te proporcionará lo que necesites para empezar a desarrollar aplicaciones Express.
- **[Tutorial Express: la web de Librería local](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)**
  - : El primer artículo en nuestra serie de tutoriales prácticos en los que se explica lo que aprenderás así como una breve introducción al proyecto de _"Librería local",_ que será en el que trabajaremos y desarrollaremos a lo largo de la serie.
- [Tutorial Express 2: Creando el esqueleto de un sitio web](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Este artículo muestra cómo puede crear el "esqueleto" de un proyecto web, al cual podremos ir agregando nuestras rutas específicas para el sitio, plantillas/vistas, y bases de datos.
- [Tutorial Express 3: Usando una base de datos (con Mongoose)](/es/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Este artículo nos introducirá brevemente en las bases de datos para Node/Express. Entonces nos mostrara como podemos usar [Mongoose](http://mongoosejs.com/) para agregar acceso a una base de datos para el sitio web LocalLibrary. Explica como son declarados los objetos de esquema y modelos, los principales tipos para los campos, y validación básica. También mostrara brevemente algunas de las principales formas con las que puedes acceder a los modelos de datos.
- [Tutorial Express 4: Rutas y controladores](/es/docs/Learn/Server-side/Express_Nodejs/routes)
  - : En este tutorial prepararemos las rutas (URL handling code) con un manejador de funciones "dummy" para todos los puntos de obtención de recursos que iremos a necesitar en nuestra web LocalLibrary. Al finalizar, tendremos una estructura modular para manejar nuestro código manejador de rutas, que podremos extender con funciones manejadoras reales en los artículos siguientes. También tendremos un muy buen entendimiento de cómo crear rutas modulares usando Express.
- [Tutorial Express 5: Mostrado datos de la librería](/es/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Ahora estamos listos para añadir paginas donde mostrar los libros de LocalLibrary y otros datos. Las paginas incluirán una página de inicio que muestre cuantos elementos tenemos de cada tipo de modelo, y páginas de lista y detalles para todos nuestros modelos. En el camino iremos ganando experiencia práctica en obtener elementos de la base de datos, y usando plantillas.
- [Tutorial Express 6: Trabajando con formularios](/es/docs/Learn/Server-side/Express_Nodejs/forms)
  - : En este tutorial mostraremos como trabajar con [formularios HTML](/es/docs/Learn_web_development/Extensions/Forms) en Express, usando Pug, y en particular como escribir formularios para crear, actualizar y borrar documentos en la base de datos.
- [Tutorial Express 7: Desplegando para producción](/es/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Ahora que has creado una increíble web llamada LocalLibrary, la querrás instalar en un servidor web público para que pueda acceder a ella el personal de la librería y los usuarios por Internet. Este artículo te ofrece una visión general de como deberías buscar un alojamiento para tu página web, y que necesitas para tener tu sitio listo para producción.

## Ver también

- [Instalando LocalLibrary en PWS/Cloud Foundry](/es/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry)
  - : Este artículo nos da una demonstración práctica de cómo instalar _LocalLibrary_ en la [nube Pivotal Web Services PaaS](http://run.pivotal.io) — ésta es una alternativa, muy completa y de código libre, a Heroku, el servicio en la nube PaaS es usado en la parte 7 de este tutorial, listado más adelante. PWS/Cloud Foundry es un recurso digno de revisar si estás en busca de una alternativa a Heroku ( o cualquier otro servicio en la nube PaaS), o simplemente si tienes ganas de intentar algo diferente.

## Añadiendo mas tutoriales

Este es el final de los tutoriales (por ahora). Si quisieras extenderlos, hay otros temas interesantes por tratar como:

- Uso de sesiones.
- Autenticación de usuarios.
- Autorizaciones y permisos de usuario.
- Probando una aplicación web Express.
- Seguridad web para aplicaciones web Express.

Y por supuesto, ¡seria excelente tener una tarea de evaluación!
