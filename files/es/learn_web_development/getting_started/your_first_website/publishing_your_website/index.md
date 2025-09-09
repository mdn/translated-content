---
title: Publicar tu sitio web
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 12c76ea107c3caacd28c39e33b9ab2dd879f0855
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Una vez que termines de escribir el código y organizar los archivos que componen tu sitio web, necesitas ponerlo todo en línea para que la gente pueda encontrarlo. Este artículo explica cómo poner en línea tu sitio web de ejemplo con poco esfuerzo.

> [!NOTE]
> Necesitarás un sitio web de ejemplo disponible en tu ordenador local para seguir este artículo. Debería contener al menos un archivo `index.html` válido. Si aún no lo has hecho, te aconsejamos que construyas uno trabajando con los artículos anteriores de este módulo, empezando por [¿Cómo será tu sitio web?](/es/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu ordenador, el software básico que utilizarás para construir un sitio web y los sistemas de archivos.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Las herramientas y conceptos básicos involucrados en la publicación de un sitio web: alojamiento, dominios, programas FTP.</li>
          <li>Qué opciones alternativas de alojamiento están disponibles, por ejemplo, Google App Engine, GitHub y CodePen.</li>
          <li>Publicar un sitio web utilizando GitHub Pages.</li>
          <li>Alojamiento, cómo comprarlo y cómo poner un sitio web en línea.</li>
          <li>Cómo registrar un dominio.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Cuáles son las opciones?

Publicar un sitio web es un tema complejo porque hay muchas maneras de hacerlo. Este artículo no pretende documentar todos los métodos posibles. En cambio, explica las ventajas y desventajas de tres enfoques que son prácticos para los principiantes. Luego, describe un método que puede funcionar de inmediato para muchos lectores.

### Obtener alojamiento y un nombre de dominio

Para tener más control sobre el contenido y la apariencia del sitio web, la mayoría de los profesionales/empresas optan por comprar alojamiento web y un nombre de dominio:

- El alojamiento web es el espacio de archivo alquilado en el [servidor web](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) de una empresa de alojamiento. Colocas los archivos del sitio web en el servidor web. El servidor web proporciona el contenido del sitio web a los visitantes del sitio web.
- Un [nombre de dominio](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) es la dirección web única donde la gente encuentra tu sitio web, como `https://www.mozilla.org` o `https://www.bbc.co.uk`. Puedes alquilar tu nombre de dominio por tantos años como quieras de un **registrador de dominios**.

Si obtienes tu alojamiento web _y_ tu nombre de dominio de la misma empresa, tienden a estar configurados automáticamente para comunicarse entre sí. Sin embargo, si los obtienes de empresas separadas, o quieres cambiar tu alojamiento a una empresa diferente, necesitas hacer un poco de configuración para apuntar el nombre de dominio al servidor correcto. Esto es para que la gente vea tu sitio web cuando navegue a esa dirección web. Esto se hace normalmente accediendo al sitio web de tu registrador de dominios y configurando los [servidores de nombres](https://kinsta.com/knowledgebase/what-is-a-nameserver/) de tu dominio a los proporcionados por tu empresa de alojamiento.

Las empresas utilizan varios mecanismos para transferir archivos a sus servidores web. Muchas tendrán más de una opción; las opciones típicas incluyen:

- Una interfaz de arrastrar y soltar (verás un ejemplo de esto en [Publicar a través de GitHub](#publishing_via_github), más adelante).
- Un programa de {{Glossary("FTP", "Protocolo de Transferencia de Archivos (FTP)")}}. Los programas FTP varían mucho, pero generalmente, tienes que conectarte a tu servidor web utilizando los detalles proporcionados por tu empresa de alojamiento (típicamente nombre de usuario, contraseña, nombre de dominio). Entonces el programa te muestra tus archivos locales y los archivos del servidor web en dos ventanas, y te proporciona una forma de transferir archivos de un lado a otro.
- Mantener el código fuente del sitio web en un repositorio de GitHub (véase más abajo) y conceder acceso a la empresa de alojamiento para que pueda obtener el código fuente, construirlo si es necesario y publicarlo.
- Algunas empresas proporcionarán [herramientas de línea de comandos](/es/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) para que las uses para transferir tus archivos.

#### Consejos para encontrar alojamiento y dominios

- MDN no promueve ninguna empresa comercial de alojamiento o registrador de nombres de dominio específicos. Para encontrar empresas de alojamiento y registradores, simplemente busca "alojamiento web" y "nombres de dominio". Todos los registradores tendrán una función para permitirte comprobar si el nombre de dominio que quieres está disponible.
- Tu {{Glossary("ISP", "proveedor de servicios de Internet")}} doméstico o de la oficina puede proporcionar algún alojamiento limitado para un sitio web pequeño. El conjunto de características disponibles será limitado, pero podría ser perfecto para tus primeros experimentos.
- También hay servicios gratuitos disponibles como [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) y [WordPress](https://wordpress.com/). Estos servicios pueden ser limitados en su alcance, pero son lo suficientemente buenos para los experimentos iniciales.

### Usar una herramienta en línea como GitHub o Google App Engine

Algunas herramientas te permiten publicar tu sitio web en línea:

- [GitHub](https://github.com/) es un sitio de "codificación social". Te permite subir repositorios de código para su almacenamiento en el **sistema de control de versiones** [Git](https://git-scm.com/). Puedes entonces colaborar en proyectos de código, y el sistema es de código abierto por defecto, lo que significa que cualquiera en el mundo puede encontrar tu código de GitHub, usarlo, aprender de él y mejorarlo. GitHub tiene una característica muy útil llamada [GitHub Pages](https://pages.github.com/), que te permite exponer el código de tu sitio web en vivo en la web.
- [Google App Engine](https://cloud.google.com/appengine/) es una potente plataforma que te permite construir y ejecutar aplicaciones en la infraestructura de Google, ya sea que necesites construir una aplicación web de múltiples niveles desde cero o alojar un sitio web estático. Véase [¿Cómo alojar tu sitio web en Google App Engine?](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) para más información.

Estas opciones son generalmente gratuitas, con un conjunto de características limitado.

### Usar un IDE basado en la web como CodePen

Hay una serie de aplicaciones web que emulan un entorno de desarrollo de sitios web, permitiéndote escribir HTML, CSS y JavaScript, que luego se renderiza y se muestra en un panel de salida. En términos generales, estas herramientas son fáciles de usar, geniales para el aprendizaje, buenas para compartir código (por ejemplo, si quieres compartir una técnica o pedir ayuda para la depuración a colegas en una oficina diferente) y gratuitas (para las características básicas). Alojan tu página renderizada en una dirección web única. Sin embargo, las características son limitadas, y estas aplicaciones a menudo no proporcionan espacio de alojamiento para activos (como imágenes).

Intenta jugar con algunos de estos ejemplos para averiguar cuál funciona mejor para ti:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Publicar a través de GitHub

Ahora vamos a examinar cómo publicar tu sitio a través de GitHub Pages.

1. En primer lugar, [regístrate en GitHub](https://github.com/) y verifica tu dirección de correo electrónico.
2. A continuación, necesitas [crear un repositorio](https://github.com/new) para almacenar los archivos. En esta página:
   1. en el cuadro _Repository name_, introduce _username_.github.io, donde _username_ es tu nombre de usuario. Por ejemplo, nuestro amigo Bob Smith introduciría _bobsmith.github.io_.
   2. Haz clic en el botón _Create repository_ en la parte inferior de la página.
3. En la página siguiente, encuentra el enlace _uploading an existing file_, y haz clic en él. Esto debería llevarte a la página de carga de archivos.
4. En este punto, deberías poder arrastrar y soltar archivos desde tu sistema de archivos local a la página web para subirlos al repositorio de GitHub. Para ello:
   1. Abre una ventana del explorador de archivos/finder en tu ordenador.
   2. Asegúrate de que puedes ver la ventana del explorador de archivos _y_ la del navegador web: colócalas una al lado de la otra en tu pantalla.
   3. Navega por la ventana del explorador de archivos hasta la carpeta que contiene tu sitio web de ejemplo.
      > [!NOTE]
      > Asegúrate de que tu carpeta tiene un archivo `index.html`.
   4. Selecciona todos los archivos de tu sitio web de ejemplo (por ejemplo, utilizando el atajo de teclado <kbd>Ctrl</kbd> + <kbd>A</kbd>, o <kbd>Cmd</kbd> + <kbd>A</kbd> en macOS).
   5. Arrastra los archivos desde tu explorador de archivos a la sección "Arrastra los archivos aquí para añadirlos a tu repositorio" de la página de GitHub.
   6. El borde y el texto de la sección cambian para indicar que se puede soltar. Suelta los archivos en este punto.
   7. Haz clic en el botón _Commit changes_ en la parte inferior de la página.
5. Navega con tu navegador a _username_.github.io para ver tu sitio web en línea. Por ejemplo, para el nombre de usuario _chrisdavidmills_, ve a [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Puede tardar unos minutos en que tu sitio web se active. Si tu sitio web no se muestra inmediatamente, espera unos minutos y vuelve a intentarlo.

Para obtener más información, véase [Ayuda de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Lecturas adicionales

- [¿Qué es un servidor web?](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Comprensión de los nombres de dominio](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [¿Cuánto cuesta hacer algo en la web?](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Despliega un sitio web](https://www.codecademy.com/learn/deploy-a-website): Un buen tutorial de Codecademy que va un poco más allá y muestra algunas técnicas adicionales.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
