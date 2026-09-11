---
title: ¿Qué contiene la cabecera? Metadatos de la página web
short-title: Metadatos de la página web
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

La {{glossary("Head", "cabecera")}} de un documento HTML es la parte que no se muestra en el navegador web cuando se carga la página. Contiene información de metadatos como el {{htmlelement("title")}} de la página, enlaces a {{glossary("CSS")}} (si eliges dar estilo a tu contenido HTML con CSS), enlaces a favicons personalizados, y otros metadatos (datos sobre el HTML, como el autor y palabras clave importantes que describen el documento).

Los navegadores web usan la información contenida en la {{glossary("Head", "cabecera")}} para renderizar correctamente el documento HTML. En este artículo cubriremos todo lo anterior y más, para darte una buena base para trabajar con el marcado.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, tal como se explicó en la lección anterior.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>La cabecera HTML, y su propósito como contenedor de metadatos del documento.</li>
          <li>Establecer la codificación de caracteres y el título del documento.</li>
          <li>Proporcionar metadatos para los motores de búsqueda.</li>
          <li>Enlazar iconos para su uso en navegadores y plataformas móviles.</li>
          <li>Enlazar hojas de estilo y archivos de script.</li>
          <li>La necesidad de establecer el idioma de un documento usando el atributo <code>lang</code> en la etiqueta de apertura <code>&lt;html&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es la cabecera HTML?

Volvamos a ver el documento HTML sencillo [que vimos en el artículo anterior](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomía_de_un_documento_html):

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

La cabecera HTML es el contenido del elemento {{htmlelement("head")}}. A diferencia del contenido del elemento {{htmlelement("body")}} (que se muestra en la página al cargarla en un navegador), el contenido de la cabecera no se muestra en la página. En cambio, el trabajo de la cabecera es contener {{glossary("Metadata", "metadatos")}} sobre el documento. En el ejemplo anterior, la cabecera es bastante pequeña:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Sin embargo, en páginas más grandes, la cabecera puede llegar a ser bastante extensa. Intenta ir a algunos de tus sitios web favoritos y usa las [herramientas de desarrollo](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) para revisar el contenido de su cabecera. Nuestro objetivo aquí no es mostrarte cómo usar todo lo que se puede incluir en la cabecera, sino más bien enseñarte a usar los elementos principales que querrás incluir en ella, y darte algo de familiaridad con el tema. Empecemos.

## Añadiendo un título

Ya hemos visto el elemento {{htmlelement("title")}} en acción, este se puede usar para añadir un título al documento. Sin embargo, esto puede confundirse con el elemento {{htmlelement("Heading_Elements", "h1")}}, que se usa para añadir un encabezado de nivel superior al contenido del cuerpo, a esto también se le suele llamar el título de la página. ¡Pero son cosas distintas!

- El elemento {{htmlelement("Heading_Elements", "h1")}} aparece en la página al cargarla en el navegador, generalmente debería usarse una vez por página, para marcar el título del contenido de tu página (el título de la historia, el titular de una noticia, o lo que sea apropiado para tu caso de uso).
- El elemento {{htmlelement("title")}} es metadato que representa el título del documento HTML en su totalidad (no el contenido del documento).

### Inspeccionando un ejemplo

1. En este ejercicio, nos gustaría que empezaras yendo a nuestro repositorio de GitHub y descargando una copia de nuestra página [title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html). Para hacer esto, puedes:
   1. Copiar y pegar el código de la página en un nuevo archivo de texto en tu editor de código, y luego guardarlo en un lugar adecuado.
   2. Presionar el botón "Raw" en la página de GitHub, lo que hace que aparezca el código sin procesar (posiblemente en una nueva pestaña del navegador). Luego, elige la opción _Guardar página como…_ de tu navegador y elige un lugar adecuado para guardar el archivo.

2. Ahora abre el archivo en tu navegador. Deberías ver algo como esto:

   ![Una página web con el texto 'title' en la pestaña del navegador y el texto 'h1' como encabezado de página en el cuerpo del documento.](title-example.png)

   ¡Ahora debería ser completamente obvio dónde aparece el contenido de `<h1>` y dónde aparece el contenido de `<title>`!

3. También deberías intentar abrir el código en tu editor de código, editar el contenido de estos elementos y luego actualizar la página en tu navegador. Diviértete con ello.

El contenido del elemento `<title>` también se usa de otras formas. Por ejemplo, si intentas guardar la página en marcadores (_Marcadores > Guardar esta página en marcadores_ o el ícono de estrella en la barra de URL en Firefox), verás que el contenido de `<title>` aparece como el nombre sugerido para el marcador.

![Una página web siendo guardada en marcadores en Firefox. El nombre del marcador se ha completado automáticamente con el contenido del elemento 'title'](bookmark-example.png)

El contenido de `<title>` también se usa en los resultados de búsqueda, como verás a continuación.

## Metadatos: el elemento `<meta>`

Los metadatos son datos que describen otros datos, y HTML tiene una forma "oficial" de añadir metadatos a un documento: el elemento {{htmlelement("meta")}}. Por supuesto, las otras cosas de las que hablamos en este artículo también podrían considerarse metadatos. Hay muchos tipos distintos de elementos `<meta>` que se pueden incluir en el `<head>` de tu página, pero no intentaremos explicarlos todos en esta etapa, ya que eso resultaría demasiado confuso. En su lugar, explicaremos algunas cosas que podrías ver comúnmente, solo para darte una idea.

### Especificando la codificación de caracteres de tu documento

En el ejemplo que vimos anteriormente, se incluía esta línea:

```html
<meta charset="utf-8" />
```

Este elemento especifica la codificación de caracteres del documento, es decir, el conjunto de caracteres que el documento tiene permitido usar. `utf-8` es un conjunto de caracteres universal que incluye prácticamente cualquier carácter de cualquier idioma humano. Esto significa que tu página web podrá manejar la visualización de cualquier idioma; por lo tanto, es una buena idea establecer esto en cada página web que crees. Por ejemplo, tu página podría manejar inglés y japonés sin problemas:

![Una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres establecida como universal, o utf-8. Ambos idiomas se muestran correctamente.](correct-encoding.png)

Si estableces tu codificación de caracteres como `ISO-8859-1`, por ejemplo (el conjunto de caracteres para el alfabeto latino), la representación de tu página podría verse toda desordenada:

![Una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres establecida como latina. Los caracteres japoneses no se muestran correctamente.](bad-encoding.png)

> [!NOTE]
> Algunos navegadores (como Chrome) corrigen automáticamente codificaciones incorrectas, así que dependiendo del navegador que uses, es posible que no veas este problema. Aun así, deberías establecer una codificación `utf-8` en tu página de todos modos, para evitar posibles problemas en otros navegadores.

### Experimentando con la codificación de caracteres

Para probar esto, vuelve a la plantilla HTML sencilla que obtuviste en la sección anterior sobre `<title>` (la página [title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), intenta cambiar el valor de meta charset a `ISO-8859-1`, y añade el japonés a tu página. Este es el código que usamos:

```html
<p>Ejemplo en japonés: ご飯が熱い。</p>
```

### Añadiendo un autor y una descripción

Muchos elementos `<meta>` incluyen los atributos `name` y `content`:

- `name` especifica el tipo de elemento meta que es; qué tipo de información contiene.
- `content` especifica el contenido meta en sí.

Dos elementos meta como estos que son útiles de incluir en tu página definen el autor de la página, y proporcionan una descripción concisa de la página. Veamos un ejemplo:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Especificar un autor es beneficioso de muchas formas: es útil poder saber quién escribió la página, por si tienes alguna pregunta sobre el contenido y te gustaría contactarlo. Algunos sistemas de gestión de contenido tienen funciones para extraer automáticamente la información del autor de la página y ponerla a disposición para estos fines.

Especificar una descripción que incluya palabras clave relacionadas con el contenido de tu página es útil ya que tiene el potencial de hacer que tu página aparezca más arriba en búsquedas relevantes realizadas en motores de búsqueda (a estas actividades se les llama [Optimización para motores de búsqueda](/es/docs/Glossary/SEO), o {{glossary("SEO")}}).

### Explorando el uso de la descripción en los motores de búsqueda

La descripción también se usa en las páginas de resultados de los motores de búsqueda. Hagamos un ejercicio para explorar esto:

1. Ve a la [página principal de MDN Web Docs](/es/).
2. Mira el código fuente de la página (haz clic derecho en la página, elige _Ver código fuente de la página_ en el menú contextual).
3. Encuentra la etiqueta meta de descripción. Se verá algo así (aunque puede cambiar con el tiempo):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Ahora busca "MDN Web Docs" en tu motor de búsqueda favorito (nosotros usamos Google). Notarás que el contenido de los elementos `<meta>` de descripción y `<title>` se usa en el resultado de búsqueda, ¡sin duda vale la pena tenerlos!

   ![Un resultado de búsqueda de Yahoo para "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> En Google, verás algunas subpáginas relevantes de MDN Web Docs listadas debajo del enlace principal a la página de inicio, estas se llaman sitelinks, y son configurables en las [herramientas para webmasters de Google](https://search.google.com/search-console/about?hl=en), una forma de mejorar los resultados de búsqueda de tu sitio en el motor de búsqueda de Google.

> [!NOTE]
> Muchas funciones de `<meta>` simplemente ya no se usan. Por ejemplo, el elemento `<meta>` de palabras clave (`<meta name="keywords" content="fill, in, your, keywords, here">`), que se supone que proporciona palabras clave para que los motores de búsqueda determinen la relevancia de esa página para diferentes términos de búsqueda, es ignorado por los motores de búsqueda, ya que los spammers llenaban la lista de palabras clave con cientos de palabras clave, sesgando los resultados.

### Otros tipos de metadatos

Mientras navegas por la web, también encontrarás otros tipos de metadatos. Muchas de las funciones que verás en los sitios web son creaciones propietarias diseñadas para proporcionar a ciertos sitios (como las redes sociales) información específica que puedan usar.

Por ejemplo, [Open Graph Data](https://ogp.me/) es un protocolo de metadatos que Facebook inventó para proporcionar metadatos más completos para los sitios web. En el código fuente de MDN Web Docs, encontrarás esto:

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both websites
and HTML Apps." />
<meta property="og:title" content="Mozilla Developer Network" />
```

Un efecto de esto es que cuando enlazas a MDN Web Docs en Facebook, el enlace aparece junto con una imagen y una descripción: una experiencia más completa para los usuarios.

![Datos del protocolo open graph de la página principal de MDN mostrados en facebook, con una imagen, un título y una descripción.](facebook-output.png)

## Añadiendo íconos personalizados a tu sitio

Para enriquecer aún más el diseño de tu sitio, puedes añadir referencias a íconos personalizados en tus metadatos, y estos se mostrarán en ciertos contextos. El más usado de estos es el **favicon** (abreviatura de "favorites icon" o "ícono de favoritos", en referencia a su uso en las listas de "favoritos" o "marcadores" de los navegadores).

El humilde favicon existe desde hace muchos años. Es el primer ícono de este tipo: un ícono cuadrado de 16 píxeles usado en múltiples lugares. Es posible que veas (dependiendo del navegador) favicons mostrados en la pestaña del navegador que contiene cada página abierta, y junto a las páginas guardadas en marcadores en el panel de marcadores.

Se puede añadir un favicon a tu página de la siguiente forma:

1. Guardándolo en un formato compatible como `.ico`, `.gif`, o `.png` en algún lugar dentro de la estructura de carpetas de tu sitio web.
2. Añadiendo un elemento {{htmlelement("link")}} dentro del bloque {{HTMLElement("head")}} de tu HTML, que haga referencia a la ruta del archivo favicon:

   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> En este ejemplo, la ruta al archivo favicon empieza con `/`, lo que significa "busca el archivo en el directorio de nivel superior (o _raíz_) de tu sitio". Esto puede estar en un lugar distinto en el código fuente, dependiendo de qué sistema estés usando para crear tu sitio: los frameworks web suelen reservar una carpeta especial para los archivos en la raíz del sitio, como `static` o `public`.
>
> No te preocupes demasiado por los detalles de las rutas de archivo por ahora; aprenderás más sobre ellas más adelante (revisa [Una introducción rápida a las URL y rutas](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#primer_acercamiento_a_urls_y_rutas) si tienes curiosidad).
>
> Hoy en día, la mayoría de los navegadores y aplicaciones de software usan automáticamente un archivo `favicon.ico` encontrado en la raíz del sitio como favicon, así que muchos sitios ni siquiera se molestan en incluir el elemento `<link>`. Un elemento explícito sigue siendo útil por si quieres ubicar tu archivo favicon en otro lugar.

Aquí tienes un ejemplo de un favicon en un panel de marcadores:

![El panel de marcadores de Firefox, mostrando un marcador de ejemplo con un favicon mostrado junto a él.](bookmark-favicon.png)

También podrías querer incluir íconos distintos para contextos distintos. Por ejemplo:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Esta es una forma de hacer que el sitio muestre un ícono cuando se guarda en la pantalla de inicio de un dispositivo Apple. Incluso podrías querer proporcionar íconos distintos para dispositivos distintos, para asegurarte de que el ícono se vea bien en todos ellos. Por ejemplo:

```html
<!-- iPad Pro con pantalla Retina de alta resolución: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- iPhone con resolución 3x: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- iPad sin Retina, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- iPhone con resolución 2x y otros dispositivos: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- favicon básico -->
<link rel="icon" href="/favicon.ico" />
```

Los comentarios explican para qué se usa cada ícono, estos elementos cubren cosas como proporcionar un ícono de alta resolución para usar cuando el sitio web se guarda en la pantalla de inicio de un iPad.

No te preocupes demasiado por implementar todos estos tipos de íconos ahora mismo, esta es una función bastante avanzada, y no se espera que tengas conocimiento de esto para avanzar en el curso. El propósito principal aquí es que sepas qué son estas cosas, por si te las encuentras mientras navegas por el código fuente de otros sitios web. Si quieres aprender más sobre todos estos valores y cómo elegirlos, lee la página de referencia del elemento {{HTMLElement("link")}}.

## Aplicando CSS y JavaScript al HTML

Prácticamente todos los sitios web que usas hoy en día emplean {{glossary("CSS")}} para que se vean bien, y {{glossary("JavaScript")}} para dar vida a funciones interactivas, como reproductores de video, mapas, juegos, y más. Estos se aplican comúnmente a una página web usando el elemento {{htmlelement("link")}} y el elemento {{htmlelement("script")}}, respectivamente.

- El elemento {{htmlelement("link")}} siempre debe ir dentro de la cabecera de tu documento. Este toma dos atributos, `rel="stylesheet"`, que indica que es la hoja de estilo del documento, y `href`, que contiene la ruta al archivo de la hoja de estilo:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- El elemento {{htmlelement("script")}} también debe ir en la cabecera, y debe incluir un atributo `src` que contenga la ruta al JavaScript que quieres cargar, y `defer` (un [atributo booleano](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#atributos_booleanos)), que le indica al navegador que cargue el JavaScript después de que la página haya terminado de procesar el HTML. El atributo `defer` es útil ya que garantiza que todo el HTML esté cargado antes de que se ejecute el JavaScript, de modo que no obtengas errores debido a que el JavaScript intenta acceder a un elemento HTML que aún no existe en la página. Hay [varias formas](/es/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies) de manejar la carga de JavaScript en tu página, pero esta es la más confiable para usar en navegadores modernos.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > El elemento `<script>` puede parecer un {{glossary("void element", "elemento vacío")}}, pero no lo es, y por lo tanto necesita una etiqueta de cierre. En lugar de apuntar a un archivo de script externo, también puedes optar por poner tu script dentro del elemento `<script>`.

### Tu turno: Aplicando CSS y JavaScript a una página

1. Para comenzar este ejercicio, obtén una copia de nuestros archivos [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) y [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css), y guárdalos en tu computadora local en el mismo directorio. Asegúrate de que se guarden con los nombres y extensiones de archivo correctos.
2. Abre el archivo HTML tanto en tu navegador como en tu editor de texto.
3. Siguiendo la información dada anteriormente, añade elementos {{htmlelement("link")}} y {{htmlelement("script")}} a tu HTML, para que tu CSS y JavaScript se apliquen a tu HTML.

Si lo haces correctamente, al guardar tu HTML y actualizar el navegador deberías poder ver que las cosas han cambiado:

![Ejemplo mostrando una página con CSS y JavaScript aplicados. El CSS ha hecho que la página se vuelva verde, mientras que el JavaScript ha añadido una lista dinámica a la página.](js-and-css.png)

- El JavaScript ha añadido una lista vacía a la página. Ahora, al hacer clic en cualquier lugar fuera de la lista, aparecerá un cuadro de diálogo pidiéndote que ingreses texto para un nuevo elemento de la lista. Al presionar el botón OK, se añadirá un nuevo elemento a la lista con ese texto. Al hacer clic en un elemento existente de la lista, aparecerá un cuadro de diálogo que te permitirá cambiar el texto del elemento.
- El CSS ha hecho que el fondo se vuelva verde, y que el texto sea más grande. También ha dado estilo a parte del contenido que el JavaScript ha añadido a la página (la barra roja con el borde negro es el estilo que el CSS ha añadido a la lista generada por JS).

> [!NOTE]
> Si te atascas en este ejercicio y no logras que el CSS/JS se apliquen, intenta revisar nuestra página de ejemplo [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html).

## Estableciendo el idioma principal del documento

Finalmente, vale la pena mencionar que puedes (y realmente deberías) establecer el idioma de tu página. Esto se puede hacer añadiendo el [atributo lang](/es/docs/Web/HTML/Reference/Global_attributes/lang) a la etiqueta HTML de apertura (como se ve en [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) y se muestra a continuación).

```html
<html lang="en-US">
  …
</html>
```

Esto es útil de muchas formas. Tu documento HTML será indexado de forma más efectiva por los motores de búsqueda si su idioma está establecido (permitiendo que aparezca correctamente en resultados específicos de idioma, por ejemplo), y es útil para las personas con discapacidad visual que usan lectores de pantalla (por ejemplo, la palabra "six" existe tanto en francés como en inglés, pero se pronuncia de forma distinta).

También puedes establecer que subsecciones de tu documento sean reconocidas como idiomas distintos. Por ejemplo, podríamos hacer que nuestra sección en japonés sea reconocida como japonés, así:

```html
<p>Ejemplo en japonés: <span lang="ja">ご飯が熱い。</span>.</p>
```

Estos códigos están definidos por el estándar [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1). Puedes encontrar más información sobre ellos en [Etiquetas de idioma en HTML y XML](https://www.w3.org/International/articles/language-tags/) (en inglés).

## Resumen

Con esto termina nuestro recorrido rápido por la cabecera HTML. Hay mucho más que puedes hacer aquí, pero un recorrido exhaustivo sería aburrido y confuso en esta etapa, y solo queríamos darte una idea de las cosas más comunes que encontrarás allí por ahora. En el próximo artículo, veremos [Encabezados y párrafos en HTML](/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs).

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
