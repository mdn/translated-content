---
title: Manejo de archivos
slug: Learn/Getting_started_with_the_web/Dealing_with_files
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Un sitio web consta de muchos archivos: texto del contenido, código, hojas de estilo, contenido multimedia, etc. Cuando estás creando un sitio web, necesitas ensamblar estos archivos en una estructura sensible en tu computadora local, asegurarte de que puedan comunicarse entre sí y hacer que todo su contenido se vea bien antes de que eventualmente [los cargues en un servidor](/es/Learn/Getting_started_with_the_web/Publishing_your_website). El _manejo de archivos_ analiza algunos problemas que debes tener en cuenta, para que puedas configurar una estructura de archivos adecuada para tu sitio web.

## ¿Dónde debería estar tu sitio web en tu computadora?

Cuando estés trabajando en un sitio web localmente en tu computadora, debes mantener todos los archivos relacionados en un solo directorio que refleje la estructura de archivos del sitio web publicado en el servidor. Este directorio se puede ubicar en cualquier lugar que desees, pero debes colocarlo en algún lugar donde lo puedas encontrar fácilmente, tal vez en tu escritorio, en tu directorio de inicio o en la raíz de tu disco duro.

1. Elige un lugar para almacenar los proyectos de tus sitios web. Dentro del lugar elegido, crea un nuevo directorio llamado `proyectosweb` (o algo similar). Aquí es donde vivirán todos los proyectos de tus sitios web.
2. Dentro de este primer directorio, crea otro directorio para almacenar tu primer sitio web. Llámalo `pruebasitio` (o algo más imaginativo).

## Una acotación sobre la envoltura y el espaciado

Notarás que a lo largo de este artículo, te pedimos que nombres los directorios y archivos completamente en minúsculas sin espacios. Esto es porque:

1. Muchas computadoras, particularmente los servidores web, distinguen entre mayúsculas y minúsculas. Entonces, por ejemplo, si colocas una imagen en tu sitio web en `pruebasitio/MiImagen.jpg` y luego, en un archivo diferente intentas invocar la imagen como `pruebasitio/miimagen.jpg`, puede que no funcione.
2. Los navegadores, servidores web y lenguajes de programación no manejan los espacios de manera consistente. Por ejemplo, si usas espacios en tu nombre de archivo, algunos sistemas pueden tratar el nombre de archivo como dos nombres de archivo. Algunos servidores reemplazarán las áreas en tus nombres de archivo con "%20" (el código de caracteres para espacios en URI), lo cual provocará que todos tus enlaces se rompan. Es mejor separar las palabras con guiones, en lugar de guiones bajos: `mi-archivo.html` vs. `mi_archivo.html`.

La respuesta corta es que debes usar un guión para los nombres de tus archivos. El motor de búsqueda de Google trata un guión como un separador de palabras, pero no considera un guión bajo de esa manera. Por estos motivos, es mejor adquirir el hábito de escribir los nombres de los directorios y archivos en minúsculas, sin espacios y con palabras separadas por guiones, al menos hasta que sepas lo que estás haciendo. De esa manera, tropezarás con menos problemas en el futuro.

## ¿Qué estructura debe tener tu sitio web?

A continuación, veamos qué estructura debería tener tu sitio de prueba. Las cosas más comunes que tendrás en cualquier proyecto de sitio web que crees son un archivo de índice HTML y directorios para contener imágenes, archivos de estilo y archivos de script. Crea estos ahora:

1. **`index.html`**: Este archivo generalmente tendrá el contenido de tu página de inicio, es decir, el texto y las imágenes que las personas ven cuando visitan tu sitio por primera vez. Usando tu editor de texto, crea un nuevo archivo llamado `index.html` y guárdalo dentro de tu directorio `pruebasitio`.
2. Directorio **`images`**: Este directorio contendrá todas las imágenes que utilices en tu sitio. Crea un directorio llamado `images`, dentro de tu directorio `pruebasitio`.
3. Directorio **`styles`**: Este directorio contendrá el código CSS que se utiliza para aplicar estilo al contenido (por ejemplo, configurar el texto y los colores de fondo). Crea un directorio llamado `styles`, dentro de tu directorio `pruebasitio`.
4. Directorio **`scripts`**: Este directorio contendrá todo el código JavaScript utilizado para agregar funcionalidad interactiva a tu sitio (por ejemplo, botones que cargan datos cuando se hace clic en ellos). Crea un directorio llamado `scripts`, dentro de tu directorio `pruebasitio`.

> **Nota:** En las computadoras con Windows, es posible que tengas problemas para ver los nombres de los archivos, porque de manera predeterminada, Windows tiene activada una opción llamada **Ocultar extensiones para tipos de archivos conocidos**. Generalmente, la puedes desactivar yendo al Explorador de Windows, seleccionando la opción **Opciones de directorio...**, desmarcando la casilla de verificación **Ocultar extensiones para tipos de archivo conocidos** y luego haciendo clic en **Aceptar**. Para obtener información más específica sobre tu versión de Windows, puedes buscar en la web.

## Rutas de archivo

Para que los archivos se comuniquen entre sí, debes proporcionar una ruta de archivo entre ellos, básicamente una ruta, para que un archivo sepa dónde está otro. Para demostrarlo, insertaremos un poco de HTML en nuestro archivo `index.html` y haremos que muestre la imagen que elegiste en el artículo [¿Cómo se verá tu sitio web?](/es/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#Imágenes)

1. Copia la imagen que elegiste anteriormente en tu directorio `images`.
2. Abre tu archivo `index.html` e inserta el siguiente código en el archivo exactamente como se muestra. Por ahora, no te preocupes por lo que significa todo esto; veremos las estructuras con más detalle más adelante en la serie.

   ```html
   <!doctype html>
   <html>
     <head>
       <meta charset="utf-8" />
       <title>Mi página de prueba</title>
     </head>
     <body>
       <img src="" alt="Mi imagen de prueba" />
     </body>
   </html>
   ```

3. La línea `<img src="" alt="Mi imagen de prueba">` es el código HTML que inserta una imagen en la página. Necesitamos decirle al HTML dónde está la imagen. La imagen está dentro del directorio _images_, que está en el mismo directorio que `index.html`. Para recorrer la estructura del archivo desde `index.html` hasta nuestra imagen, la ruta del archivo que necesitamos es `images/nombre-archivo-imagen`. Por ejemplo, nuestra imagen se llama `firefox-icon.png`, por lo que la ruta del archivo es `images/firefox-icon.png`.
4. Inserta la ruta del archivo en tu código HTML entre las comillas dobles del código `src=""`.
5. Guarda tu archivo HTML, luego cárgalo en tu navegador web (haz doble clic en el archivo). ¡Deberías ver tu nueva página web mostrando tu imagen!

![Una captura de pantalla del sitio web básico que muestra solo el logotipo de Firefox: un zorro en llamas envolviendo el mundo](website-screenshot.png)

Algunas reglas generales para las rutas de archivo:

- Para vincular a un archivo destino en el mismo directorio que el archivo HTML de invocación, simplemente usa el nombre del archivo, p. ej. `mi-imagen.jpg`.
- Para hacer referencia a un archivo en un subdirectorio, escribe el nombre del directorio delante de la ruta, más una barra inclinada, p. ej. `subdirectorio/mi-imagen.jpg`.
- Para vincular a un archivo destino en el directorio **arriba** del archivo HTML que lo invoca, escribe dos puntos. Por ejemplo, si `index.html` estuviera dentro de un subdirectorio de `pruebasitio` y `mi-imagen.jpg` estuviera dentro de `pruebasitio`, puedes hacer referencia a `mi-imagen.jpg` desde `index.html` utilizando `../mi-imagen.jpg`.
- Los puedes combinar tanto como desees, por ejemplo, `../subdirectorio/otro-subdirectorio/mi-imagen.jpg`.

Por ahora, esto es todo lo que necesitas saber.

> **Nota:** El sistema de archivos de Windows tiende a utilizar barras invertidas, no barras diagonales, p. ej. `C:\windows`. Esto no importa en HTML, incluso si estás desarrollando tu sitio web en Windows, debes usar barras diagonales en tu código.

## ¿Qué más se debería hacer?

Eso es todo por ahora. La estructura de tu directorio debería verse así:

![Una estructura de archivos en mac os x finder, que muestra un directorio de imágenes con una imagen, directorios de estilos y scripts vacíos, y un archivo index.html](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
