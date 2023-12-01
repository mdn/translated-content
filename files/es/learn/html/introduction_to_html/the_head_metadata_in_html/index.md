---
title: ¿Qué hay en la cabecera? Metadatos en HTML
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

El elemento {{Glossary("Head", "head")}} de un documento HTML es la parte que no se muestra en el navegador cuando se carga la página. Contiene información como el título ({{htmlelement("title")}}) de la página, enlaces al {{Glossary("CSS")}} (si quieres aplicar estilo a tu contenido HTML con CSS), enlaces para personalizar `favicon`, y otros metadatos (datos sobre el HTML, como quién lo escribió y palabras claves importantes que describen el documento). En este artículo abarcaremos todo esto y más, para darte bases sólidas en el manejo del marcado y otro código que debería estar presente en tu cabecera.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con el HTML básico, que se expone en
        [Empezar con el HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender acerca de la cabecera HTML
        {{Glossary("Head", "head")}}, cuál es su propósito, los
        elementos más importantes que puede contener, y qué efecto puede tener
        sobre el documento HTML.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué hay en la cabecera HTML?

Vamos a revisar el [documento HTML que se revisó en el artículo anterior](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document):

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

La cabecera HTML es el contenido del elemento {{htmlelement("head")}} — a diferencia del contenido del elemento {{htmlelement("body")}} (que sí se muestra en la página cuando se carga en el navegador), el contenido de la cabecera no se muestra en la página. Por el contrario, la función de la cabecera es contener los {{Glossary("Metadata", "metadatos")}} del documento. En el ejemplo anterior, la cabecera es bastante reducida:

```html
<head>
  <meta charset="utf-8" />
  <title>Mi página de prueba</title>
</head>
```

En páginas más grandes, sin embargo, la cabecera puede llegar a contener bastantes elementos. Prueba a ir a algunos de tus sitios web favoritos y comprueba el contenido de la cabecera usando las [herramientas para el desarrollador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools). Nuestro objetivo aquí no es mostrarte cómo usar todo lo que puedes incluir en la cabecera, sino enseñarte cómo usar los elementos principales que vas a incluir en la cabecera y que te familiarices con ellos. Empecemos.

## Añadir un título

Ya hemos visto el elemento {{htmlelement("title")}} en acción — se puede usar para poner un título al documento. Sin embargo, esto se puede confundir con el elemento {{htmlelement("h1")}}, que se utiliza para poner un encabezado de nivel superior al cuerpo de tu contenido — esto también se conoce como el título de la página. ¡Pero son cosas diferentes!

- El elemento {{htmlelement("h1")}} aparece en la página cuando se carga en el navegador — en general debería haber uno solo por página, para especificar el título del contenido de tu página (el título de tu historia, el título de la noticia, o de lo que sea apropiado según el uso que le des).
- El elemento {{htmlelement("title")}} es un metadato que representa el título de todo el documento HTML (no del contenido del documento).

### Aprendizaje activo: Análisis de un ejemplo sencillo

1. Para comenzar este aprendizaje activo, te proponemos ir a nuestro repositorio de GitHub y descargues una copia de nuestra página [title-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html). Lo puedes hacer de las siguientes maneras:

   1. Copia y pega el código de la página en un archivo de texto nuevo en tu editor de código, luego guárdalo en un lugar conveniente.
   2. Presiona el botón "Raw" en la página de GitHub, lo cual hace que aparezca el código sin procesar (posiblemente en una nueva pestaña del navegador). A continuación, en el menú de tu navegador elige _Archivo → Guardar página como..._ y selecciona un lugar adecuado para guardar el archivo.

2. Ahora abre el archivo en tu navegador. Deberías ver algo como esto:

   ![Una sencilla página web con el título configurado a 'title' element, y el 'h1' configurado a 'h1' element.](title-example.png)
   Ahora debería quedar claro dónde aparece el contenido de `<h1>` y dónde aparece el contenido de `<title>`.

3. También podrías probar a abrir el código en tu editor de código, editar el contenido de estos elementos y luego actualizar la página en tu navegador. Juega un poco con ello.

El contenido del elemento `<title>` también se usa de otras formas. Por ejemplo, si intentas marcar la página como favorita (**Marcadores → Marcar esta página**, o el icono en forma de estrella de Firefox), verás que el nombre que se sugiere para el marcado es el contenido del elemento `<title>`.

![Se está marcando una página web en Firefox; el nombre del marcador se ha completado automáticamente con el contenido del elemento 'title'](bookmark-example.png)

El contenido de `<title>` también se usa en el resultado de las búsquedas, como verás a continuación.

## Metadatos: el elemento \<meta>

Los metadatos son datos que describen datos, y HTML tiene una forma «oficial» de introducir metadatos en un documento — el elemento {{htmlelement("meta")}}. Por supuesto, el resto de los elementos de los que hablaremos en este artículo también se podrían considerar metadatos. Hay muchos diferentes tipos de elementos `<meta>` que se pueden incluir en el \<head> de tu página, pero no vamos a intentar explicarlos todos en esta etapa porque resultaría demasiado confuso. En lugar de ello vamos a explicar algunas cuestiones con las que seguramente te vas a encontrar, solo para que te hagas una idea.

### La codificación de caracteres de tu documento

El ejemplo que vimos arriba incluía esta línea:

```html
<meta charset="utf-8" />
```

Este elemento simplemente especifica la codificación de caracteres del documento — es decir, el conjunto de caracteres que el documento puede usar. `utf-8` es un conjunto de caracteres universal que incluye casi todos los caracteres de casi cualquier idioma humano. Esto significa que tu página web podrá gestionar la visualización de cualquier idioma; por lo tanto, resulta una buena idea configurarlo en cada página web que crees. Por ejemplo, tu página podría gestionar inglés y japonés sin problemas:

![Una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres establecida en universal o utf-8. Ambos idiomas se muestran bien.](correct-encoding.png)Si configuras tu codificación de caracteres en `ISO-8859-1`, por ejemplo (el juego de caracteres para el alfabeto latino), la representación de tu página puede aparecer desordenada:

![una página web que contiene caracteres en inglés y japonés, con la codificación de caracteres configurada en latín. Los caracteres japoneses no se muestran correctamente](bad-encoding.png)

> **Nota:** Algunos navegadores (Chrome, por ejemplo) automáticamente arreglan la codificación de caracteres incorrecta, de modo que según el navegador que uses, puede que no te topes con este problema. Aun así, deberías incluir una codificación de caracteres `utf-8` en tu página web para evitar que se presenten potenciales problemas con otros navegadores.

### Aprendizaje activo: Experimenta con la codificación de caracteres

Para probar esto, vuelve a visitar la plantilla HTML simple que obtuviste en la sección anterior sobre `<title>` (la página [title-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html)) e intenta cambiar el valor de la propiedad `meta charset` por `ISO-8859-1` y añade el japonés a tu página. Este es el código que usamos:

```html
<p>Ejemplo en japonés: ご飯が熱い。</p>
```

### Añadir un autor y descripción

Muchos elementos `<meta>` incluyen atributos `name` y `content`:

- `name` especifica el tipo de metadato del que se trata; es decir, qué tipo de información contiene.
- `content` especifica el contenido del metadato en sí.

Dos de esos metadatos que resultan útiles de incluir en tu página definen al autor de la página y proporcionan una descripción concisa de la página. Veamos un ejemplo:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="El área de aprendizaje de MDN pretende
proporcionar a los recién llegados a la web todo lo que deben
saber para empezar a desarrollar páginas web y aplicaciones web." />
```

Especificar un autor resulta ventajoso por diversos motivos: es útil saber quién escribió la página para poder ponerte en contacto con el autor si tienes preguntas sobre el contenido. Algunos sistemas de gestión de contenido tienen herramientas para extraer automáticamente la información del autor de la página y ponerla a disposición para tales fines.

Especificar una descripción que incluya palabras clave relacionadas con el contenido de tu página resulta útil porque tiene el potencial de hacer que la página aparezca más arriba en las búsquedas relevantes que efectúan los motores de búsqueda (tales actividades se denominan optimizaciones del motor de búsqueda ([Optimización de motores de búsqueda](/es/docs/Glossary/SEO)) o {{Glossary("SEO")}}.)

### Aprendizaje activo: El uso de la descripción en los motores de búsqueda

La descripción también se usa en las páginas de resultados del motor de búsqueda. Repasemos un ejercicio para explorar esto:

1. Ve a la página de inicio de [Mozilla Developer Network](/es/).
2. Observa el código fuente de la página (

   <kbd>Ctrl</kbd>

   \+clic o clic con el botón derecho en la página y selecciona la opción del menú **Ver código fuente de la página**).

3. Encuentra la etiqueta del metadato **description**. Se verá más o menos así (aunque puede cambiar con el tiempo):

   ```html
   <meta
     name="description"
     content="The Mozilla Developer
     Network (MDN) proporciona información sobre tecnologías
     de código abierto que incluyen HTML, CSS y APIs tanto para sitios web como para aplicaciones HTML5.
     También documenta productos Mozilla como el sistema operativo Firefox." />
   ```

4. Ahora busca "Mozilla Developer Network" en tu motor de búsqueda favorito (nosotros hemos utilizado Google). Observarás que efectivamente merece la pena que tener el contenido de la descripción `<meta>` y el elemento `<title>` que se utiliza en la búsqueda.

   ![Resultado de búsqueda en Yahoo para "Mozilla Developer Network"](mdn-search-result.png)

> **Nota:** En Google verás algunas subpáginas relevantes de MDN enumeradas debajo del enlace principal a la página principal de MDN (se trata de los llamados **sitelinks** y se pueden configurar con las [Herramientas de administrador de Google](http://www.google.com/webmasters/tools/)), una forma de mejorar los resultados para tu sitio con el motor de búsqueda de Google.

> **Nota:** Muchas características `<meta>` ya no se usan. Por ejemplo, los motores de búsqueda ignoran el elemento `<meta>` (`<meta name="keywords" content="pon, tus, palabras clave, aquí">`), que se supone que facilita palabras clave para motores de búsqueda de forma que se determine la relevancia de esa página según diferentes términos de búsqueda, porque los **spammers** rellenaban la lista de palabras clave con cientos de palabras clave que sesgaban los resultados.

### Otros tipos de metadatos

Al navegar por la web también puedes encontrar otros tipos de metadatos. Muchas de las funciones que verás en los sitios web son creaciones propietarias diseñadas para proporcionar a ciertos sitios (como los sitios de redes sociales) información específica que puedan usar.

Por ejemplo, [Open Graph Data](http://ogp.me/) es un protocolo de metadatos que Facebook inventó para proveer metadatos más ricos para los sitios web. En las fuentes de código de MDN, encontrarás esto:

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) proporciona información
sobre tecnologías Open Web, incluidas HTML, CSS y APIs para ambos sitios web
y aplicaciones HTML5. También documenta productos Mozilla, como el sistema operativo Firefox." />
<meta property="og:title" content="Mozilla Developer Network" />
```

Un efecto de esto es que cuando desde Facebook enlazas a un MDN, el enlace aparece con una imagen y una descripción, lo que resulta en una experiencia más enriquecedora para los usuarios.

![Datos abiertos del protocolo de gráficos de la página de inicio de MDN como se muestra en Facebook, mostrando una imagen, título y descripción.](facebook-output.png)

Twitter también tiene sus metadatos propios, las [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards), que tienen un efecto similar cuando la URL del sitio se muestra en twitter.com. Por ejemplo:

```html
<meta name="twitter:title" content="Mozilla Developer Network" />
```

## Agregar iconos personalizados a tu sitio

Para enriquecer un poco más el diseño de tu sitio puedes añadir en tus metadatos referencias a iconos personalizados, que se mostrarán en determinados contextos. El más común de ellos es el **favicon** (abreviatura de **_favorite icon_** —**icono** «**favorito**», referido al uso que se le da en las listas de «favoritos» o de marcadores («**bookmarks**»).

El humilde `favicon` ha existido durante muchos años. Es el primer icono de este tipo: un icono cuadrado de 16 píxeles que se utiliza en varios lugares. Es posible que veas (según el navegador) `favicon`s que se muestran en la pestaña del navegador que contiene cada página abierta y junto a las páginas marcadas en el panel de marcadores.

Para añadir un `favicon` a tu página:

1. Guárdalo en el mismo directorio que la página **index** de tu sitio, en formato `.ico` (la mayoría de los buscadores admiten `favicon` en los formatos más comunes como `.gif` o `.png`, pero usar el formato _ICO_ garantiza que funcionará hasta en Internet Explorer 6.)
2. Añade la siguiente línea de referencia en el {{HTMLElement("head")}} de tu HTML:

   ```html
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
   ```

Los navegadores modernos usan `favicon`s en diversos lugares, como en la etiqueta de la página que está abierta y en el panel de favoritos cuando la añades a tu lista de páginas favoritas:

![El panel de marcadores de Firefox, que muestra un ejemplo marcado con un favicon junto a él.](bookmark-favicon.png)

Hoy día hay un montón de otros tipos de iconos a tener presentes. Por ejemplo, los encontrarás en el código fuente de la página de inicio de MDN:

```html
<!-- iPad de tercera generación con pantalla de alta resolución: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="https://developer.mozilla.org/static/img/favicon144.png" />
<!-- iPhone con pantalla de alta resolución: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="https://developer.mozilla.org/static/img/favicon114.png" />
<!-- iPad de primera y segunda generación: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="72x72"
  href="https://developer.mozilla.org/static/img/favicon72.png" />
<!-- Dispositivos iPhone sin pantalla Retina, iPod Touch y Android 2.1+: -->
<link
  rel="apple-touch-icon-precomposed"
  href="https://developer.mozilla.org/static/img/favicon57.png" />
<!-- favicon básico -->
<link
  rel="shortcut icon"
  href="https://developer.mozilla.org/static/img/favicon32.png" />
```

Los comentarios explican para qué se usa cada icono (estos elementos abarcan situaciones como aportar un buen icono de alta resolución para usarlo cuando la página web se guarda en la página de inicio de un iPad).

No te preocupes demasiado sobre la implementación de todos estos tipos de iconos por el momento; se trata de una característica bastante avanzada y no se espera que tengas conocimientos de ello para avanzar en el curso. El propósito principal aquí es darte a conocer estos elementos por si te los encuentras mientras examinas el código fuente de otros sitios web.

> **Nota:** Si tu sitio web utiliza una política de seguridad de contenido (_content security policy o CSP_) para mejorar la seguridad, la política afecta al `favicon`. Si te encuentras con problemas como que el `favicon` no se carga, comprueba que la respuesta a {{HTTPHeader("Content-Security-Policy")}} del `header` para la [directriz `img-src`](/es/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) en la cabecera no impide el acceso a este.

## Aplicar CSS y JavaScript a HTML

Prácticamente todos los sitios web usan {{Glossary("CSS")}} para darles un buen aspecto y {{Glossary("JavaScript")}} para añadir funcionalidades interactivas, como reproductores de vídeo, mapas, juegos y demás. La manera más habitual de añadir CSS y JavaScript a una página web es con los elementos `<link>` y el elemento `<script>`, respectivamente.

- El elemento {{HTMLElement("link")}} siempre debe ir dentro del {{HTMLElement("head")}} de tu documento. Este toma dos atributos, `rel="stylesheet"`, que indica que es la hoja de estilo del documento, y `href`, que contiene la ruta al archivo de la hoja de estilo:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- El elemento `<script>` también debería ir en el `head`, y debería incluir un atributo `src` con la ruta al JavaScript que quieres cargar, y `defer`, que básicamente le dice al navegador que cargue el JavaScript al mismo tiempo que el HTML de la página. Esto es útil porque hace que todo el HTML se cargue antes de ejecutar el JavaScript, para que no haya errores porque el JavaScript ha intentado acceder a un elemento HTML que todavía no existe. De hecho hay múltiples formas de gestionar la carga del JavaScript en una página, pero esta es «a prueba de bombas» para los navegadores modernos (para el resto de las formas, lee el artículo [Estrategias de carga de scripts](/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Script_loading_strategies)).

  ```html
  <script src="my-js-file.js"></script>
  ```

  > **Nota:** El elemento `<script>` puede parecer un elemento vacío pero no lo es, y por lo tanto necesita una etiqueta de cierre. En vez de apuntar a un archivo de `script` externo, también puedes colocar tu código dentro del elemento `<script>`.

### Aprendizaje activo: aplicar CSS y JavaScript a una página

1. Para iniciar este aprendizaje activo, haz una copia de nuestros archivos [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/script.js) y [style.css](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/style.css), y guárdalos en un mismo directorio de tu ordenador. Asegúrate de que se guardan con los nombres y extensiones correctas.
2. Abre el archivo HTML tanto en tu navegador como en tu editor de texto.
3. Sigue la información facilitada anteriormente y añade los elementos `<link>` y `<script>` a tu HTML para aplicarle CSS y JavaScript.

Si lo has hecho correctamente, al guardar tu HTML y actualizar tu navegador, deberías poder ver que las cosas han cambiado:

![Ejemplo que muestra una página con CSS y JavaScript aplicados. El CSS ha hecho que la página se vuelva verde, mientras que JavaScript ha agregado una lista dinámica a la página](js-and-css.png)

- El JavaScript ha añadido una lista vacía a la página. Ahora, cuando haces clic en cualquier sitio de la lista, aparece un cuadro de diálogo que te solicita que introduzcas el texto para un nuevo elemento de la lista. Cuando pulsas el botón OK, se añade a la lista el elemento con el texto nuevo. Cuando haces clic a un elemento de la lista aparece un cuadro de diálogo que te permite cambiar el texto del elemento.
- El CSS ha pintado el fondo de verde y ha agrandado el texto. También ha aplicado estilo a algún contenido que el JavaScript ha añadido a la página (la barra roja con el borde negro es el estilo que el CSS ha aplicado a la lista generada con JavaScript).

> **Nota:** Si te encallas en este ejercicio y no logras ejecutar los archivos CSS/JS, comprueba tu página de ejemplo [css-and-js.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/css-and-js.html).

## Establecer el idioma principal del documento

Por último, merece la pena mencionar que puedes (y realmente deberías) especificar el idioma de tu página. Esto se puede hacer añadiendo el atributo [lang](/es/docs/Web/HTML/Global_attributes/lang) a la etiqueta de apertura del HTML (como se ve en el [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html) y se muestra abajo).

```html
<html lang="es-MX"></html>
```

Esto resulta útil en muchos sentidos. Los motores de búsqueda indizarán tu documento HTML de modo más efectivo si estableces el idioma (permitiendo, por ejemplo, que aparezca correctamente en los resultados del idioma especificado), y resulta útil para que las personas con discapacidad visual que utilizan los lectores de pantalla (por ejemplo, la palabra «six» existe tanto en francés como en inglés, pero su pronunciación es diferente).

También puedes establecer que las subsecciones de tu documento se reconozcan en diferentes idiomas. Por ejemplo, podemos establecer que nuestra sección de japonés se reconozca como japonés, de la siguiente manera:

```html
<p>Ejemplo Japonés: <span lang="ja">ご飯が熱い。</span>.</p>
```

El estándar [ISO_639-1](https://es.wikipedia.org/wiki/ISO_639-1) define estos códigos. Puedes encontrar más información sobre ello en [Etiquetas de idioma en HTML y XML](https://www.w3.org/International/articles/language-tags/).

## Resumen

Esto marca el final de nuestra guía rápida del {{Glossary("head")}} de HTML — aún hay muchas más cosas que puedes hacer aquí, pero una guía exhaustiva puede ser aburrida y confusa a estas alturas, ¡y nosotros queremos darte una idea de las cuestiones más comunes con las que te encontrarás aquí por ahora! En el siguiente artículo veremos los fundamentos de texto de HTML.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
