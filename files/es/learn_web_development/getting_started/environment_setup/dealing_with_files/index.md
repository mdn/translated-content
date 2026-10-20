---
title: Manejo de archivos
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: a92a495c8483b26e18e677a364b0fc687832345c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Un sitio web consta de muchos archivos: contenido de texto, código, hojas de estilo, contenido multimedia, etc. Cuando construyes un sitio web, tienes que reunir estos archivos en una estructura lógica en tu computadora local, asegurarte de que puedan comunicarse entre sí y conseguir que todo el contenido se vea bien antes de ponerlos finalmente en un servidor para que todo el mundo los vea. Este artículo explica cómo usar la interfaz de usuario (IU) del explorador de archivos de tu computadora y cómo configurar una estructura de archivos lógica para un sitio web.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo (SO) de tu computadora y el software básico que usarás para construir un sitio web.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Manipular archivos y carpetas.</li>
          <li>Buenas prácticas para los nombres.</li>
          <li>La estructura de carpetas estándar de un sitio web.</li>
          <li>Manejar las rutas de archivo</li>
          <li>Trabajar con las extensiones de archivo.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipular archivos y carpetas

Hay muchas formas distintas de crear y editar los archivos y carpetas de tu computadora. Puedes hacerlo desde la línea de comandos o terminal de tu computadora con una serie de comandos de texto, sobre lo que aprenderás más en el siguiente artículo. Sin embargo, a mucha gente le resulta más fácil empezar a aprender sobre los sistemas de archivos de forma visual, que es lo que veremos aquí. Los sistemas operativos (SO) modernos tienen una interfaz de usuario (IU) del sistema de archivos muy completa que puedes usar para manipular archivos y carpetas según necesites.

En macOS, por ejemplo, tienes el programa Finder:

![La aplicación Finder de macOS, que muestra el contenido de una carpeta de inicio típica](finder.png)

Mientras que Windows tiene el Explorador de archivos:

![La aplicación Explorador de archivos de Windows, que muestra el contenido de una carpeta de inicio típica](file-explorer.png)

> [!NOTE]
> Esta guía se escribió con Windows 11 y macOS 15. Puede que uses otra versión del SO, o un SO completamente distinto, en cuyo caso la experiencia será diferente. En la web hay muchísimas guías sobre el uso básico del SO; te animamos a buscar en la web información sobre tu SO en particular.

### Estructura básica

La mayoría de los sistemas operativos modernos tienen una carpeta `Users` (Usuarios), que contiene una carpeta por cada cuenta de usuario que existe en el sistema, también conocida como la carpeta de _inicio_ del usuario. Normalmente se representa con un icono de una casa para que sea más fácil de encontrar. A su vez, la carpeta de _inicio_ contiene otras carpetas (y archivos) estándar importantes para ese usuario en particular, como _Documentos_, _Música_, etc. En tu computadora también hay muchísimos otros archivos y carpetas, pero no te preocupes por ellos por ahora.

De forma predeterminada, el usuario que ha iniciado sesión solo puede acceder a su propia carpeta de _inicio_.

Deberías crear los archivos de los proyectos relacionados con tu trabajo en algún lugar dentro de tu carpeta de _inicio_, quizá dentro de _Documentos_. Tiene sentido, porque a los archivos de las páginas web a menudo se les llama _documentos_.

> [!WARNING]
> Si empiezas a crear y editar archivos en otros lugares de tu sistema (por ejemplo, en zonas que controlan el sistema operativo o aplicaciones importantes), podrías romper algo. Limítate a crear y editar archivos dentro de tu carpeta de _inicio_ hasta que sepas lo que haces.

### Crear una carpeta

Vamos a crear una carpeta nueva para guardar todos nuestros proyectos web.

1. En la IU del sistema de archivos, haz clic en tu carpeta de _inicio_ y después haz doble clic en la carpeta _Documentos_.
2. Crea en esta ubicación una carpeta nueva llamada `web-projects`:
   1. En Windows, puedes hacerlo seleccionando el botón _Nuevo_ de la ventana del Explorador de archivos y eligiendo _Carpeta_ (o pulsando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>), escribiendo `web-projects` como nombre del nuevo icono de carpeta que aparece y pulsando <kbd>Enter</kbd>/<kbd>Return</kbd>.
   2. En macOS, puedes hacerlo seleccionando _Archivo_ > _Nueva carpeta_ en el menú del Finder (o pulsando <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>): verás aparecer una carpeta nueva llamada _carpeta sin título_. Haz clic en el nombre de la carpeta para empezar a editarlo, escribe `web-projects` y pulsa <kbd>Enter</kbd>/<kbd>Return</kbd>.

Si te equivocas al escribir, puedes editar el nombre de la carpeta para corregirlo (también funciona con los archivos):

- En Windows, haz clic derecho en la carpeta, selecciona _Cambiar nombre_ en el menú y edítalo. Algunas versiones de Windows muestran al principio un menú simplificado: ¡puede que tengas que hacer clic derecho, seleccionar _Mostrar más opciones_ y después _Cambiar nombre_!
- En macOS, haz clic en el nombre de la carpeta (o selecciónalo) para editarlo.

### Abrir una carpeta de proyecto y crear archivos en VS Code

Aunque puedes crear archivos de texto desde la IU del sistema de archivos del SO, normalmente es más fácil y menos propenso a errores crearlos en tu editor de código. De hecho, VS Code tiene su propio explorador de archivos, que te permite crear todas las carpetas y archivos que necesites para tus proyectos web.

Entonces, ¿por qué te hicimos pasar por el trabajo de crear una carpeta con la IU del sistema de archivos del SO? ¡Porque hay que indicarle a VS Code una carpeta inicial de nivel superior!

También es útil entender un poco cómo está estructurado el sistema de archivos de tu SO. Te resultará más útil a medida que empieces a usar herramientas más complejas.

Ahora vamos a abrir nuestra carpeta `web-projects` en VS Code:

1. Abre VS Code.
2. Selecciona _Archivo_ > _Abrir carpeta..._ en el menú.
   > [!NOTE]
   > Si usas el teclado, en Windows puedes ejecutar el comando _Abrir carpeta_ manteniendo pulsada la tecla <kbd>Ctrl</kbd> y pulsando <kbd>K</kbd> y después <kbd>O</kbd>. La forma más sencilla de hacerlo en macOS es abrir la _Paleta de comandos_ con <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, escribir «Abrir carpeta» para filtrar la lista de comandos, usar las teclas de cursor para bajar hasta _Archivo: Abrir carpeta_ y después pulsar <kbd>Enter</kbd>.
3. Aparecerá una versión reducida de la IU del sistema de archivos del SO. Úsala para encontrar tu carpeta `web-projects`, selecciónala y pulsa el botón _Seleccionar carpeta_.
4. Se te mostrará un cuadro de diálogo titulado _¿Confía en los autores de los archivos de esta carpeta?_ Léelo con atención para entender de qué se trata. Por ahora eres la única persona que va a crear archivos en esta carpeta, así que puedes hacer clic en _Sí, confío en los autores_.

Deberías ver tu carpeta `web-projects` abierta en el panel _EXPLORADOR_ de VS Code, como se muestra a continuación:

![El panel Explorador de VS Code, que muestra una carpeta vacía llamada web-projects](vs-code-explorer.png)

> [!WARNING]
> De nuevo, asegúrate de limitarte por ahora a editar tus propios archivos dentro de tu carpeta de _inicio_, para no causar problemas en tu sistema.

#### Un inciso sobre la navegación con el teclado en VS Code

VS Code, aunque no es perfecto ni mucho menos, tiene un amplio conjunto de atajos de teclado. A lo largo de este artículo hemos intentado incluir los más útiles cuando ha sido posible, pero puedes encontrar listas más completas en la [referencia de atajos de teclado](https://code.visualstudio.com/docs/configure/keybindings) de VS Code.

En general, si quieres moverte por VS Code con el teclado, puedes pulsar la tecla <kbd>Tab</kbd> para recorrer las distintas zonas de la IU (<kbd>Shift</kbd> + <kbd>Tab</kbd> te lleva a la posición de foco anterior). Si hay varios botones en una misma posición de foco, puedes usar las teclas de cursor para moverte entre ellos.

Si estás editando un archivo, la tecla de tabulación no recorre la IU, sino que añade tabulaciones al archivo. Para salir del archivo que estás editando e ir al panel _EXPLORADOR_, puedes pulsar <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> en macOS, o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> en Windows.

Para volver al panel del editor de archivos y empezar a moverte entre los distintos archivos abiertos en distintas pestañas, mantén pulsada la tecla <kbd>Ctrl</kbd> y usa <kbd>Tab</kbd> y <kbd>Shift</kbd> + <kbd>Tab</kbd> para subir y bajar por la lista de pestañas abiertas (tanto en macOS como en Windows). Cuando hayas resaltado el archivo que quieres editar, suelta las teclas para ir a esa pestaña.

#### Crear un archivo

Desde aquí, puedes crear archivos y carpetas nuevos con los botones correspondientes de la parte superior del panel _EXPLORADOR_.

1. Crea un archivo nuevo haciendo clic en el icono _Nuevo archivo..._ (o llega a él con <kbd>Tab</kbd> y pulsa <kbd>Enter</kbd>/<kbd>Return</kbd>).
2. Escribe «index.html» como nombre del archivo en el cuadro de texto que aparece y pulsa <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> No uses los botones de la parte superior de la pestaña _Bienvenida_ para crear archivos y carpetas, porque funcionan de forma un poco distinta. De hecho, puedes cerrar la pestaña _Bienvenida_, porque no la necesitas. Para ello, haz clic en la «x» de la parte derecha de la pestaña o pulsa <kbd>Cmd</kbd> + <kbd>W</kbd> en macOS (<kbd>Ctrl</kbd> + <kbd>W</kbd> en Windows).

En este punto, vuelve a la IU del sistema de archivos del SO, entra en tu carpeta `web-projects` haciendo doble clic en ella y deberías ver también allí tu archivo `index.html`. VS Code usa el sistema de archivos subyacente del SO, no un extraño sistema de archivos propio.

### Mover index.html a su propia subcarpeta

Puedes crear carpetas dentro de otras carpetas (llamadas _subcarpetas_) con tantos niveles de profundidad como quieras. También puedes mover archivos (y carpetas) dentro de otras carpetas arrastrándolos y soltándolos encima de esa carpeta.

Vamos a probarlo y, de paso, mover nuestro archivo `index.html` a su propia subcarpeta. En realidad no queremos que esté en la carpeta principal `web-projects`.

1. Crea una carpeta nueva dentro de `web-projects` con el botón _Nueva carpeta..._ del panel _EXPLORADOR_ de VS Code.
2. Llámala `test-site`.
3. Ahora deberías poder arrastrar el archivo `index.html` y soltarlo encima de la carpeta `test-site` para moverlo dentro de ella.
   > [!NOTE]
   > Si usas el teclado, puedes hacerlo siguiendo estos pasos:
   >
   > 1. Usa las teclas de flecha arriba y abajo para mover el contorno de foco sobre el archivo `index.html`.
   > 2. Pulsa <kbd>Cmd</kbd> + <kbd>X</kbd> en macOS (<kbd>Ctrl</kbd> + <kbd>X</kbd> en Windows) para seleccionar el archivo que vas a mover.
   > 3. Usa las teclas de flecha para mover el contorno de foco sobre la carpeta.
   > 4. Pulsa <kbd>Cmd</kbd> + <kbd>V</kbd> en macOS (<kbd>Ctrl</kbd> + <kbd>V</kbd> en Windows) para mover el archivo a esa carpeta.

Podríamos explicar muchísimo más sobre el uso de las IU de los sistemas de archivos del SO y de VS Code, pero tenemos un espacio limitado, así que lo dejaremos aquí por ahora. Con esto tienes información suficiente para empezar, y te animamos a buscar en la web cómo hacer otras cosas con archivos y carpetas.

Pasemos a una breve explicación sobre la estructura de un sitio web.

## ¿Qué estructura debe tener un sitio web?

Cuando trabajas en sitios web en local (en tu computadora), deberías guardar todos los archivos relacionados de cada sitio en una sola carpeta. A su vez, deberías guardar todas las carpetas de tus sitios web en una carpeta central, para que todas sean fáciles de encontrar.

Antes en el artículo, te indicamos que crearas una carpeta central llamada `web-projects` para guardar todos tus proyectos de sitios web. También te pedimos que crearas una subcarpeta llamada `test-site` con un archivo `index.html` vacío dentro.

Vamos a añadir algunas cosas más dentro de `test-site` para mostrar la estructura típica de un sitio web; en el próximo módulo te pediremos que construyas dentro un ejemplo completo de sitio web. Lo más habitual que contiene cualquier proyecto de sitio web es un archivo HTML índice y carpetas para las imágenes, los archivos de estilo y los archivos de script:

1. **`index.html`**: este archivo suele contener el contenido de tu página de inicio, es decir, el texto y las imágenes que la gente ve cuando entra por primera vez en tu sitio.
2. **Carpeta `images`**: esta carpeta contendrá todas las imágenes que uses en tu sitio.
3. **Carpeta `styles`**: esta carpeta contendrá el código CSS que se usa para dar estilo al contenido (por ejemplo, para establecer los colores del texto y del fondo).
4. **Carpeta `scripts`**: esta carpeta contendrá todo el código JavaScript que se usa para añadir funcionalidad interactiva a tu sitio (por ejemplo, para definir qué ocurre cuando se hace clic en los botones).

Ya deberías tener un archivo `index.html` dentro de `test-site`. Crea ahora dentro las carpetas `images`, `styles` y `scripts`.

## Nombres de archivo

Un nombre de archivo suele tener dos partes: el **nombre** y la **extensión**. Fíjate en el archivo que creamos antes, `index.html`:

- En este caso, el nombre es `index`. Los nombres de archivo pueden contener, en general, los caracteres que quieras, aunque cada sistema informático tiene distintas restricciones sobre los caracteres que se pueden usar. Es mejor limitarse a números y letras, al menos al principio. Además, los sistemas pueden dar un significado especial a ciertos nombres o partes de nombres; como ya dijimos, los archivos `index` suelen reconocerse como el archivo de la página de inicio principal de un sitio web.
- La extensión del archivo identifica el tipo de archivo con el que trabajamos, y los sistemas informáticos la usan para saber qué tipo de contenido pueden esperar en el archivo, qué programa deben usar para abrirlo, etc. En este caso, la extensión es `.html`, lo que significa que el archivo debe contener texto plano y, más concretamente, código HTML. Gracias a la extensión, tu computadora sabe que, cuando intentes abrir el archivo, debe abrirlo con tu editor de texto predeterminado, que debería ser VS Code si has seguido todas nuestras instrucciones hasta ahora.

No ocurre en todos los casos, pero la mayoría de los archivos necesitan una extensión para manejarse correctamente. Quitar o cambiar la extensión del archivo probablemente cause errores, así que no deberías modificarla a menos que sepas muy bien lo que haces.

> [!NOTE]
> Es posible poner más de un punto en un nombre de archivo, por ejemplo, `my.cats.html`. En esos casos, se supone que el último punto es el inicio de la extensión del archivo.

En las computadoras con Windows, puede que te cueste ver las extensiones de algunos archivos, porque Windows tiene activada de forma predeterminada una opción llamada **Ocultar las extensiones de archivo para tipos de archivo conocidos**. Puedes desactivarla en el Explorador de archivos: selecciona la opción **Opciones de carpeta…**, desmarca la casilla **Ocultar las extensiones de archivo para tipos de archivo conocidos** y haz clic en **Aceptar**. Para obtener información más concreta sobre tu versión de Windows, puedes buscar en la web.

### Buenas prácticas para nombrar archivos

A medida que sigas este curso, verás que siempre te pedimos que pongas nombres a las carpetas y los archivos completamente en minúsculas y sin espacios. Ignorar este consejo causa problemas de muchas formas; algunas de las más comunes son las siguientes:

1. Muchos sistemas informáticos, incluidos la mayoría de los servidores web, distinguen entre mayúsculas y minúsculas. Así que, por ejemplo, si pones una imagen en tu sitio web en `test-site/images/MyImage.jpg` y después, en otro archivo, intentas hacer referencia a la imagen con `test-site/images/myimage.jpg`, puede que no funcione.
2. Cuando ejecutas comandos en la línea de comandos, tienes que poner comillas alrededor de los nombres de archivo que contienen espacios; si no, se interpretarán como dos elementos separados.
3. Algunos lenguajes de programación (por ejemplo, Python) no funcionan bien con espacios en los nombres de archivo en ciertas circunstancias (por ejemplo, si esos archivos son módulos que hay que importar).
4. Los nombres de archivo suelen corresponderse con direcciones web o URL. Si, por ejemplo, tienes un archivo llamado <code>my&nbsp;file.html</code> en la carpeta raíz de tu servidor, normalmente será accesible en una URL como `https://example.com/my%20file.html`. Los servidores web suelen sustituir los espacios de los nombres de archivo por `%20` (porque las URL usan {{Glossary("Percent-encoding", "codificación por porcentaje")}}), lo que puede crear errores sutiles en algunos sistemas si suponen que los nombres de archivo y las URL coinciden exactamente.

En lugar de espacios, muchos desarrolladores usan un carácter separador como el guion (`-`); por ejemplo, `my-file.html` en lugar de <code>my&nbsp;file.html</code>. Es una buena práctica.

Lo mejor es que te acostumbres a escribir los nombres de las carpetas y los archivos en minúsculas, sin espacios y con las palabras separadas por guiones, al menos hasta que sepas lo que haces. Así te encontrarás con menos problemas más adelante.

> [!NOTE]
> Puedes encontrar más buenas prácticas sobre los nombres de archivo y las URL en [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Rutas de archivo

Para hacer referencia a un archivo desde otro, tienes que indicar una ruta de archivo, que es básicamente un camino para que un archivo sepa dónde está el otro. Por ejemplo, al crear una página web que contiene una imagen, el código de tu página web tendrá que incluir una ruta de archivo que indique la ubicación de la imagen que quieres mostrar.

Veamos un ejemplo básico. Puede que por ahora no entiendas todo lo que significa, pero no pasa nada.

1. Busca en la web una imagen que te guste (por ejemplo, con un servicio como [Google Imágenes](https://www.google.com/imghp)) y descárgala. También puedes usar nuestra [imagen del icono de Firefox](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) para este ejemplo.
2. Pon la imagen dentro de tu carpeta _images_.
3. Asegúrate de que el archivo de imagen tenga un nombre corto y sencillo, sin espacios. Por ejemplo, `firefox-icon.png` está bien, y `cat.jpg` está bien, pero `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` no está bien. Asegúrate también de conservar la extensión del archivo.

Ahora añadiremos contenido al archivo `index.html` para que pueda localizar el archivo de imagen y mostrarlo.

1. Abre tu `index.html` en VS Code e inserta en el archivo el siguiente contenido, exactamente como se muestra. Esto es HTML, el lenguaje que usamos para definir y estructurar el contenido de las páginas web. ¡Muy pronto aprenderás mucho más sobre él!

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Mi página de prueba</title>
     </head>
     <body>
       <img src="" alt="Mi imagen de prueba" />
     </body>
   </html>
   ```

2. La línea `<img src="" alt="Mi imagen de prueba">` es el código HTML que inserta una imagen en la página. Tenemos que indicarle al HTML dónde está la imagen. La imagen está dentro de la carpeta _images_, que está en la misma carpeta que `index.html`. Para bajar por la estructura de archivos desde `index.html` hasta nuestra imagen, la ruta de archivo que necesitaríamos es `images/your-image-filename`. Por ejemplo, si tu imagen se llamara `firefox-icon.png`, la ruta de archivo sería `images/firefox-icon.png`.
3. Inserta la ruta de archivo en tu código HTML, entre las comillas dobles de `src=""`.
4. Guarda tu archivo HTML y después cárgalo en tu navegador web. Puedes hacerlo haciendo <kbd>Ctrl</kbd>+clic o clic derecho en el archivo HTML, eligiendo _Abrir con_ y seleccionando un navegador web en el submenú que aparece. También puedes abrir la IU del sistema de archivos y una ventana del navegador web en la misma pantalla, y arrastrar y soltar el archivo HTML sobre la ventana del navegador.

¡Deberías ver una página web básica que muestra tu imagen!

![Una captura de pantalla de nuestro sitio web básico, que solo muestra el logotipo de Firefox: un zorro en llamas que envuelve el mundo](website-screenshot.png)

### Reglas generales para las rutas de archivo

- Para enlazar a un archivo de destino que está en la misma carpeta que el archivo HTML que lo invoca, basta con usar el nombre del archivo, por ejemplo, `my-image.jpg`.
- Para hacer referencia a un archivo de una subcarpeta, escribe el nombre de la carpeta delante de la ruta, seguido de una barra, por ejemplo, `subfolder/my-image.jpg`.
- Para enlazar a un archivo de destino que está en la carpeta **superior** a la del archivo HTML que lo invoca, escribe dos puntos. Por ejemplo, si `index.html` estuviera dentro de una subcarpeta de `test-site` y `my-image.jpg` estuviera dentro de `test-site`, podrías hacer referencia a `my-image.jpg` desde `index.html` con `../my-image.jpg`.
- Puedes combinarlas todo lo que quieras, por ejemplo, `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> El sistema de archivos de Windows suele usar barras invertidas, no barras normales, p. ej., `C:\Windows`. Esto no importa en HTML: aunque desarrolles tu sitio web en Windows, deberías seguir usando barras normales en tu código.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
