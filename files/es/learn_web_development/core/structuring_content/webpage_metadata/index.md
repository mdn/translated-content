---
title: ¿Qué hay en la cabecera? Metadatos de la página web
short-title: Metadatos de la página web
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

El {{Glossary("Head", "head")}} de un documento HTML es la parte que no se muestra en el navegador cuando se carga la página. Contiene información de metadatos como el {{htmlelement("title")}} de la página, enlaces a {{Glossary("CSS")}} (si eliges aplicar estilo a tu contenido HTML con CSS), enlaces a favicons personalizados y otros metadatos (datos sobre el HTML, como el autor y palabras clave importantes que describen el documento).

Los navegadores usan la información contenida en el {{Glossary("Head", "head")}} para renderizar correctamente el documento HTML. En este artículo veremos todo esto y más, para darte una buena base para trabajar con el marcado.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, como se describe en la lección anterior.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>La cabecera HTML, y su propósito como contenedor de metadatos del documento.</li>
          <li>Configurar la codificación de caracteres y el título del documento.</li>
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

Repasemos el sencillo [documento HTML que vimos en el artículo anterior](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomía_de_un_documento_html):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

La cabecera HTML es el contenido del elemento {{htmlelement("head")}}. A diferencia del contenido del elemento {{htmlelement("body")}} (que sí se muestra en la página cuando se carga en el navegador), el contenido de la cabecera no se muestra en la página. En cambio, la función de la cabecera es contener los {{Glossary("Metadata", "metadatos")}} del documento. En el ejemplo anterior, la cabecera es bastante reducida:

```html
<head>
  <meta charset="utf-8" />
  <title>Mi página de prueba</title>
</head>
```

En páginas más grandes, sin embargo, la cabecera puede llegar a ser bastante extensa. Prueba a ir a algunos de tus sitios web favoritos y usa las [herramientas de desarrollo](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) para revisar el contenido de su cabecera. Nuestro objetivo aquí no es mostrarte cómo usar todo lo que se puede incluir en la cabecera, sino enseñarte a usar los elementos principales que vas a querer incluir en ella, y darte cierta familiaridad. Empecemos.

## Añadir un título

Ya hemos visto el elemento {{htmlelement("title")}} en acción — se puede usar para añadir un título al documento. Sin embargo, esto se puede confundir con el elemento {{htmlelement("Heading_Elements", "h1")}}, que se usa para añadir un encabezado de primer nivel al contenido de tu cuerpo — a esto también se le suele llamar el título de la página. ¡Pero son cosas distintas!

- El elemento {{htmlelement("Heading_Elements", "h1")}} aparece en la página cuando se carga en el navegador — por lo general debería usarse una sola vez por página, para marcar el título del contenido de tu página (el título de la historia, el titular de la noticia, o lo que sea apropiado según el uso que le des).
- El elemento {{htmlelement("title")}} es un metadato que representa el título de todo el documento HTML (no del contenido del documento).

### Inspeccionar un ejemplo

1. En este ejercicio, nos gustaría que empieces yendo a nuestro repositorio de GitHub y descargando una copia de nuestra página [title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html). Para hacerlo, puedes:
   1. Copiar y pegar el código de la página en un archivo de texto nuevo en tu editor de código, y luego guardarlo en un lugar apropiado.
   2. Presionar el botón "Raw" en la página de GitHub, lo que hace que aparezca el código sin procesar (posiblemente en una nueva pestaña del navegador). Luego, elige la opción _Guardar página como…_ de tu navegador y elige un lugar adecuado para guardar el archivo.

2. Ahora abre el archivo en tu navegador. Deberías ver algo como esto:

   ![Una página web con el texto 'title' en la pestaña del navegador y el texto 'h1' como encabezado de página en el cuerpo del documento.](title-example.png)

   ¡Ahora debería quedar completamente claro dónde aparece el contenido de `<h1>` y dónde aparece el contenido de `<title>`!

3. También deberías intentar abrir el código en tu editor, editar el contenido de estos elementos y luego actualizar la página en tu navegador. Diviértete un poco con ello.

El contenido del elemento `<title>` también se usa de otras formas. Por ejemplo, si intentas marcar la página como favorita (_Marcadores > Marcar esta página_ o el ícono en forma de estrella en la barra de direcciones de Firefox), verás que el contenido de `<title>` aparece como el nombre de marcador sugerido.

![Una página web siendo marcada como favorita en Firefox. El nombre del marcador se completó automáticamente con el contenido del elemento 'title'](bookmark-example.png)

El contenido de `<title>` también se usa en los resultados de búsqueda, como verás a continuación.

## Metadatos: el elemento `<meta>`

Los metadatos son datos que describen datos, y HTML tiene una forma «oficial» de añadir metadatos a un documento: el elemento {{htmlelement("meta")}}. Por supuesto, las demás cosas de las que hablamos en este artículo también podrían considerarse metadatos. Hay muchos tipos diferentes de elementos `<meta>` que se pueden incluir en la `<head>` de tu página, pero no intentaremos explicarlos todos en esta etapa, ya que resultaría demasiado confuso. En su lugar, explicaremos algunas cosas que podrías encontrar habitualmente, solo para que te hagas una idea.

### Especificar la codificación de caracteres de tu documento

En el ejemplo que vimos arriba, se incluía esta línea:

```html
<meta charset="utf-8" />
```

Este elemento especifica la codificación de caracteres del documento — el conjunto de caracteres que el documento tiene permitido usar. `utf-8` es un conjunto de caracteres universal que incluye prácticamente cualquier carácter de cualquier idioma humano. Esto significa que tu página web podrá mostrar cualquier idioma; por lo tanto, es una buena idea configurar esto en cada página web que crees. Por ejemplo, tu página podría manejar inglés y japonés sin problemas:

![Una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres configurada como universal, o utf-8. Ambos idiomas se muestran correctamente.](correct-encoding.png)

Si configuras tu codificación de caracteres como `ISO-8859-1`, por ejemplo (el conjunto de caracteres para el alfabeto latino), la representación de tu página puede aparecer completamente desordenada:

![Una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres configurada como latina. Los caracteres japoneses no se muestran correctamente.](bad-encoding.png)

> [!NOTE]
> Algunos navegadores (como Chrome) corrigen automáticamente las codificaciones incorrectas, así que dependiendo del navegador que uses, podrías no ver este problema. De todos modos, deberías configurar una codificación `utf-8` en tu página para evitar posibles problemas en otros navegadores.

### Experimentar con la codificación de caracteres

Para probar esto, vuelve a la plantilla HTML simple que obtuviste en la sección anterior sobre `<title>` (la página [title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), intenta cambiar el valor de `meta charset` a `ISO-8859-1`, y añade el japonés a tu página. Este es el código que usamos:

```html
<p>Ejemplo en japonés: ご飯が熱い。</p>
```

### Añadir un autor y una descripción

Muchos elementos `<meta>` incluyen los atributos `name` y `content`:

- `name` especifica el tipo de elemento meta del que se trata; qué tipo de información contiene.
- `content` especifica el contenido real del metadato.

Dos de esos elementos meta que resultan útiles incluir en tu página definen el autor de la página y proporcionan una descripción concisa de la página. Veamos un ejemplo:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="El área de aprendizaje de MDN Web Docs busca proporcionar a quienes recién comienzan
en la Web todo lo que necesitan saber para empezar a
desarrollar sitios web y aplicaciones." />
```

Especificar un autor es beneficioso de muchas maneras: es útil poder saber quién escribió la página, si tienes alguna pregunta sobre el contenido y quieres contactarlo. Algunos sistemas de gestión de contenido tienen herramientas para extraer automáticamente la información del autor de la página y ponerla a disposición para tales fines.

Especificar una descripción que incluya palabras clave relacionadas con el contenido de tu página es útil, ya que tiene el potencial de hacer que tu página aparezca más arriba en las búsquedas relevantes realizadas en los motores de búsqueda (estas actividades se denominan [optimización para motores de búsqueda](/es/docs/Glossary/SEO), o {{Glossary("SEO")}}).

### Explorar el uso de la descripción en los motores de búsqueda

La descripción también se usa en las páginas de resultados de los motores de búsqueda. Hagamos un ejercicio para explorar esto:

1. Ve a la [página de inicio de The Mozilla Developer Network](/es/).
2. Observa el código fuente de la página (haz clic derecho en la página y elige _Ver código fuente de la página_ en el menú contextual).
3. Busca la etiqueta meta de descripción. Se verá algo así (aunque puede cambiar con el tiempo):

   ```html
   <meta
     name="description"
     content="El sitio de MDN Web Docs
     proporciona información sobre tecnologías de la Open Web,
     incluyendo HTML, CSS y APIs, tanto para sitios web como para
     aplicaciones web progresivas." />
   ```

4. Ahora busca «MDN Web Docs» en tu motor de búsqueda favorito (nosotros usamos Google). Notarás que se usa el contenido del `<meta>` de descripción y del elemento `<title>` en el resultado de búsqueda — ¡sin duda vale la pena tenerlo!

   ![Un resultado de búsqueda de Yahoo para "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> En Google, verás algunas subpáginas relevantes de MDN Web Docs listadas debajo del enlace principal a la página de inicio — se les llama sitelinks, y son configurables en las [herramientas para webmasters de Google](https://search.google.com/search-console/about?hl=en) — una forma de mejorar los resultados de búsqueda de tu sitio en el motor de búsqueda de Google.

> [!NOTE]
> Muchas funciones de `<meta>` simplemente ya no se usan. Por ejemplo, el elemento `<meta>` de palabras clave (`<meta name="keywords" content="pon, tus, palabras clave, aquí">`) — que se suponía que debía proporcionar palabras clave para que los motores de búsqueda determinaran la relevancia de esa página para diferentes términos de búsqueda — es ignorado por los motores de búsqueda, porque los spammers simplemente llenaban la lista de palabras clave con cientos de palabras clave, sesgando los resultados.

### Otros tipos de metadatos

A medida que recorres la web, encontrarás otros tipos de metadatos también. Muchas de las funciones que verás en los sitios web son creaciones propietarias diseñadas para proporcionar a ciertos sitios (como las redes sociales) información específica que puedan usar.

Por ejemplo, [Open Graph Data](https://ogp.me/) es un protocolo de metadatos que Facebook inventó para proporcionar metadatos más ricos para los sitios web. En el código fuente de MDN Web Docs, encontrarás esto:

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) proporciona información
sobre tecnologías de la Open Web, incluyendo HTML, CSS y APIs, tanto para sitios web
como para aplicaciones HTML." />
<meta property="og:title" content="Mozilla Developer Network" />
```

Un efecto de esto es que cuando enlazas a MDN Web Docs en Facebook, el enlace aparece junto con una imagen y una descripción: una experiencia más completa para los usuarios.

![Datos de Open Graph Protocol de la página de inicio de MDN mostrados en Facebook, con una imagen, un título y una descripción.](facebook-output.png)

## Añadir iconos personalizados a tu sitio

Para enriquecer aún más el diseño de tu sitio, puedes añadir referencias a iconos personalizados en tus metadatos, que se mostrarán en determinados contextos. El más usado de ellos es el **favicon** (abreviatura de "favorites icon", en referencia a su uso en las listas de "favoritos" o "marcadores" de los navegadores).

El humilde favicon existe desde hace muchos años. Es el primer ícono de este tipo: un ícono cuadrado de 16 píxeles que se usa en varios lugares. Es posible que veas (según el navegador) favicons mostrados en la pestaña del navegador que contiene cada página abierta, y junto a las páginas marcadas en el panel de marcadores.

Se puede añadir un favicon a tu página de la siguiente manera:

1. Guárdalo en un formato compatible como `.ico`, `.gif`, o `.png` en algún lugar dentro de la estructura de carpetas de tu sitio web.
2. Añadiendo un elemento {{htmlelement("link")}} en el bloque {{HTMLElement("head")}} de tu HTML, que referencie la ruta al archivo del favicon:

   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> En este ejemplo, la ruta al archivo del favicon comienza con `/`, lo que significa "busca el archivo en el directorio de nivel superior (o _raíz_) de tu sitio". Esto puede estar en un lugar diferente en el código fuente, dependiendo del sistema que uses para crear tu sitio: los frameworks web suelen reservar una carpeta especial para los archivos en la raíz del sitio, como `static` o `public`.
>
> No te preocupes demasiado por los detalles de las rutas de archivos por ahora; aprenderás más sobre ellas más adelante (consulta [Una breve introducción a las URL y las rutas](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links#primer_acercamiento_a_urls_y_rutas) si tienes curiosidad).
>
> La mayoría de los navegadores y aplicaciones de software actuales usan automáticamente un archivo `favicon.ico` que se encuentra en la raíz del sitio como favicon, por lo que muchos sitios ni siquiera se molestan en incluir el elemento `<link>`. Un elemento explícito sigue siendo útil en caso de que quieras ubicar tu archivo de favicon en otro lugar.

Aquí tienes un ejemplo de un favicon en un panel de marcadores:

![El panel de marcadores de Firefox, mostrando un ejemplo marcado con un favicon junto a él.](bookmark-favicon.png)

También podrías querer incluir diferentes íconos para diferentes contextos. Por ejemplo:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Esta es una forma de hacer que el sitio muestre un ícono cuando se guarda en la pantalla de inicio de un dispositivo Apple. Incluso podrías querer proporcionar diferentes íconos para diferentes dispositivos, para asegurarte de que el ícono se vea bien en todos ellos. Por ejemplo:

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
<!-- iPad sin pantalla Retina, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- iPhone con resolución 2x y otros dispositivos: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- favicon básico -->
<link rel="icon" href="/favicon.ico" />
```

Los comentarios explican para qué se usa cada ícono — estos elementos cubren cosas como proporcionar un ícono de alta resolución para usar cuando el sitio web se guarda en la pantalla de inicio de un iPad.

No te preocupes demasiado por implementar todos estos tipos de íconos ahora mismo — esta es una característica bastante avanzada, y no se espera que tengas conocimiento de esto para avanzar en el curso. El propósito principal aquí es que sepas qué son estas cosas, en caso de que te las encuentres mientras exploras el código fuente de otros sitios web. Si quieres aprender más sobre todos estos valores y cómo elegirlos, lee la página de referencia del elemento {{HTMLElement("link")}}.

## Aplicar CSS y JavaScript a HTML

Prácticamente todos los sitios web que usarás en la actualidad emplean {{Glossary("CSS")}} para verse bien, y {{Glossary("JavaScript")}} para dar vida a funcionalidades interactivas, como reproductores de video, mapas, juegos y más. Estos se aplican más comúnmente a una página web mediante el elemento {{htmlelement("link")}} y el elemento {{htmlelement("script")}}, respectivamente.

- El elemento {{htmlelement("link")}} siempre debe ir dentro de la cabecera de tu documento. Este toma dos atributos, `rel="stylesheet"`, que indica que es la hoja de estilo del documento, y `href`, que contiene la ruta al archivo de la hoja de estilo:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- El elemento {{htmlelement("script")}} también debe ir en la cabecera, y debe incluir un atributo `src` que contenga la ruta al JavaScript que quieres cargar, y `defer` (un [atributo booleano](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#atributos_booleanos)), que le indica al navegador que cargue el JavaScript después de haber terminado de analizar el HTML. El atributo `defer` es útil porque garantiza que todo el HTML esté cargado antes de que se ejecute el JavaScript, de modo que no obtengas errores por intentar acceder a un elemento HTML que todavía no existe en la página. Hay [varias formas](/es/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#estrategias_para_la_carga_de_scripts) de gestionar la carga de JavaScript en tu página, pero esta es la más confiable para los navegadores modernos.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > El elemento `<script>` puede parecer un {{Glossary("void element", "elemento vacío")}}, pero no lo es, así que necesita una etiqueta de cierre. En lugar de apuntar a un archivo de script externo, también puedes optar por poner tu script dentro del elemento `<script>`.

### Tu turno: aplicar CSS y JavaScript a una página

1. Para comenzar este ejercicio, obtén una copia de nuestros archivos [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) y [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css), y guárdalos en tu computadora local en el mismo directorio. Asegúrate de guardarlos con los nombres y extensiones de archivo correctos.
2. Abre el archivo HTML tanto en tu navegador como en tu editor de texto.
3. Siguiendo la información dada anteriormente, añade los elementos {{htmlelement("link")}} y {{htmlelement("script")}} a tu HTML, para que tu CSS y JavaScript se apliquen a tu HTML.

Si lo hiciste correctamente, al guardar tu HTML y actualizar tu navegador deberías poder ver que las cosas han cambiado:

![Ejemplo que muestra una página con CSS y JavaScript aplicados. El CSS ha hecho que la página se vuelva verde, mientras que el JavaScript ha añadido una lista dinámica a la página.](js-and-css.png)

- El JavaScript ha añadido una lista vacía a la página. Ahora, cuando haces clic en cualquier lugar fuera de la lista, aparecerá un cuadro de diálogo pidiéndote que introduzcas un texto para un nuevo elemento de la lista. Cuando presionas el botón OK, se añadirá un nuevo elemento a la lista con ese texto. Cuando haces clic en un elemento existente de la lista, aparecerá un cuadro de diálogo que te permitirá cambiar el texto del elemento.
- El CSS ha hecho que el fondo se vuelva verde, y que el texto sea más grande. También ha aplicado estilo a parte del contenido que el JavaScript ha añadido a la página (la barra roja con el borde negro es el estilo que el CSS le ha aplicado a la lista generada por JS).

> [!NOTE]
> Si te quedas atascado en este ejercicio y no logras que se apliquen el CSS/JS, prueba a revisar nuestra página de ejemplo [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html).

## Establecer el idioma principal del documento

Por último, vale la pena mencionar que puedes (y realmente deberías) establecer el idioma de tu página. Esto se puede hacer añadiendo el [atributo lang](/es/docs/Web/HTML/Reference/Global_attributes/lang) a la etiqueta de apertura del HTML (como se ve en [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) y se muestra a continuación).

```html
<html lang="en-US">
  …
</html>
```

Esto es útil de muchas maneras. Tu documento HTML será indexado de forma más efectiva por los motores de búsqueda si su idioma está definido (permitiendo que aparezca correctamente en los resultados específicos de ese idioma, por ejemplo), y es útil para las personas con discapacidad visual que usan lectores de pantalla (por ejemplo, la palabra "six" existe tanto en francés como en inglés, pero se pronuncia de forma diferente).

También puedes establecer que subsecciones de tu documento se reconozcan como idiomas diferentes. Por ejemplo, podríamos establecer que nuestra sección en japonés se reconozca como japonés, así:

```html
<p>Ejemplo en japonés: <span lang="ja">ご飯が熱い。</span>.</p>
```

Estos códigos están definidos por el estándar [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1). Puedes encontrar más información sobre ellos en [Etiquetas de idioma en HTML y XML](https://www.w3.org/International/articles/language-tags/).

## Resumen

Eso marca el final de nuestro recorrido rápido por la cabecera de HTML — hay mucho más que puedes hacer aquí, pero un recorrido exhaustivo sería aburrido y confuso en esta etapa, ¡y solo queríamos darte una idea de las cosas más comunes que encontrarás allí por ahora! En el próximo artículo, veremos [Encabezados y párrafos en HTML](/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs).

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
