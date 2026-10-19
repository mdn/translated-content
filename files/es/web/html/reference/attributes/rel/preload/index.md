---
title: Valor del atributo HTML `rel="preload"`
short-title: preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

El valor `preload` del atributo [`rel`](/es/docs/Web/HTML/Reference/Elements/link#rel) del elemento {{htmlelement("link")}} te permite declarar solicitudes en el {{htmlelement("head")}} del HTML, y especifica los recursos que tu página necesitará muy pronto, que quieres empezar a cargar en una etapa temprana del ciclo de vida de la página, antes de que se active el motor de renderizado principal del navegador. Esto garantiza que estén disponibles antes y reduce la probabilidad de que bloqueen el renderizado de la página, lo que mejora el rendimiento. Aunque el nombre contiene el término _load_, esto no implica que el script se cargue y ejecute: solo se programa su descarga y almacenamiento en caché con una prioridad más alta.

## Lo básico

Lo más habitual es usar `<link>` para cargar un archivo CSS y así darle estilo a tu página:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Aquí, sin embargo, usaremos el valor `preload` para `rel`, que convierte `<link>` en un precargador para cualquier recurso que quieras. También tendrás que especificar:

- La ruta al recurso en el atributo [`href`](/es/docs/Web/HTML/Reference/Elements/link#href).
- El tipo de recurso en el atributo [`as`](/es/docs/Web/HTML/Reference/Elements/link#as).

Un ejemplo podría verse así (consulta el [código fuente del ejemplo de JS y CSS](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) y [pruébalo en vivo](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Ejemplo de precarga de JS y CSS</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>pelotas rebotando</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

Aquí precargamos nuestros archivos CSS y JavaScript para que estén disponibles en cuanto se necesiten para renderizar la página más adelante. Este ejemplo es trivial, ya que el navegador probablemente descubre los elementos `<link rel="stylesheet">` y `<script>` en el mismo fragmento de HTML que las precargas, pero los beneficios se aprecian mucho mejor cuanto más tarde se descubran los recursos y cuanto más grandes sean. Por ejemplo:

- Recursos referenciados desde dentro del CSS, como fuentes o imágenes.
- Recursos que JavaScript puede solicitar, como scripts importados.

`preload` tiene otras ventajas. Usar `as` para especificar el tipo de contenido que se va a precargar le permite al navegador:

- Almacenarlo en la caché para futuras solicitudes, reutilizando el recurso cuando corresponda.
- Aplicar la [política de seguridad de contenido](/es/docs/Web/HTTP/Guides/CSP) correcta al recurso.
- Establecer las cabeceras de solicitud {{HTTPHeader("Accept")}} correctas para él.

### ¿Qué tipos de contenido se pueden precargar?

Se pueden precargar muchos tipos de contenido. Los valores posibles para el atributo `as` son:

- `fetch`: recurso al que se accede mediante una solicitud fetch o XHR, como un ArrayBuffer, un binario de WebAssembly o un archivo JSON.
- `font`: archivo de fuente.
- `image`: archivo de imagen.
- `script`: archivo JavaScript.
- `style`: hoja de estilos CSS.
- `track`: archivo WebVTT.

> [!NOTE]
> La precarga de `font` y `fetch` requiere que se establezca el atributo `crossorigin`; consulta [Solicitudes con CORS habilitado](#solicitudes_con_cors_habilitado) más abajo.

> [!NOTE]
> Puedes encontrar más detalles sobre estos valores y las características web que se espera que consuman en la especificación de HTML — consulta [Link type "preload"](https://html.spec.whatwg.org/multipage/links.html#link-type-preload). Ten en cuenta también que la lista completa de valores que puede tomar el atributo `as` está definida en la especificación de HTML — consulta [Link type "preload" destinations](https://html.spec.whatwg.org/multipage/links.html#preload-destination).

## Incluir un tipo MIME

Los elementos `<link>` pueden aceptar un atributo [`type`](/es/docs/Web/HTML/Reference/Elements/link#type), que contiene el tipo MIME del recurso al que apunta el elemento. Esto resulta especialmente útil al precargar recursos: el navegador usa el valor del atributo `type` para determinar si es compatible con ese recurso y solo lo descarga si es así; en caso contrario, lo ignora.

```html
<head>
  <meta charset="utf-8" />
  <title>Ejemplo de precarga de imagen</title>

  <link rel="preload" href="flower.avif" as="image" type="image/avif" />
</head>
<body>
  <picture>
    <source src="flower.avif" type="image/avif" />
    <source src="flower.webp" type="image/webp" />
    <img src="flower.jpg" />
  </picture>
</body>
```

El código del ejemplo anterior hace que la imagen `image/avif` se precargue solo en los navegadores compatibles, y para los usuarios cuyo navegador admite `image/avif`, hace que esa imagen se use realmente (ya que es el primer {{htmlelement("source")}} especificado). Esto hace que la descarga de la imagen sea, con suerte, más pequeña para los usuarios cuyo navegador admite `image/avif`.

Ten en cuenta que, para los usuarios cuyo navegador admite tanto `image/avif` como `image/webp`, si en ese código también se especificara un elemento `<link rel="preload" href="flower.webp" as="image" type="image/webp">`, entonces se precargarían _ambas_ imágenes, `image/avif` y `image/webp`, aunque solo se usara una de ellas.

Por lo tanto, no se recomienda especificar la precarga para varios tipos del mismo recurso. En su lugar, la mejor práctica es especificar la precarga únicamente para el tipo que probablemente use la mayoría de tus usuarios. Es por esto que el código del ejemplo anterior no especifica la precarga para la imagen `image/webp`.

Sin embargo, el hecho de no precargarla no impide que la imagen `image/webp` se use cuando se necesita: para los usuarios cuyo navegador no admite `image/avif` pero sí `image/webp`, el código del ejemplo anterior sigue haciendo que se use la imagen `image/webp`, pero sin precargarla también de forma innecesaria para la mayoría de los demás usuarios.

## Solicitudes con CORS habilitado

Cuando precargas recursos que se obtienen con [CORS](/es/docs/Web/HTTP/Guides/CORS) habilitado (por ejemplo, [`fetch()`](/es/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) o [fuentes](/es/docs/Web/CSS/Reference/At-rules/@font-face)), debes prestar especial atención al establecer el atributo [`crossorigin`](/es/docs/Web/HTML/Reference/Elements/link#crossorigin) en tu elemento [`<link>`](/es/docs/Web/HTML/Reference/Elements/link). Este atributo debe configurarse para que coincida con el modo CORS y de credenciales del recurso, incluso cuando la solicitud no sea de origen cruzado.

Como se mencionó antes, un caso interesante en el que esto se aplica es el de los archivos de fuentes. Por varias razones, estos deben obtenerse usando CORS en modo anónimo (consulta [Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Usemos este caso como ejemplo. Puedes ver el [código fuente completo del ejemplo en GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([o verlo en vivo](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Ejemplo de fuente web</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

No solo proporcionamos las pistas de tipo MIME en los atributos `type`, sino que también incluimos el atributo `crossorigin` para asegurarnos de que el modo CORS de la precarga coincida con el de la solicitud final del recurso de fuente.

## Incluir contenido multimedia

Una característica interesante de los elementos `<link>` es que pueden aceptar atributos [`media`](/es/docs/Web/HTML/Reference/Elements/link#media). Estos aceptan [tipos de medios](/es/docs/Web/CSS/Reference/At-rules/@media#tipos_de_medios) o [consultas de medios](/es/docs/Web/CSS/Guides/Media_queries/Using) completas, ¡lo que te permite hacer precarga responsiva!

Veamos un ejemplo (míralo en GitHub: [código fuente](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [ejemplo en vivo](https://mdn.github.io/html-examples/link-rel-preload/media/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Ejemplo de precarga responsiva</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(width <= 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(width > 600px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>Mi sitio</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(width <= 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url("bg-image-narrow.png")';
    } else {
      header.style.backgroundImage = 'url("bg-image-wide.png")';
    }
  </script>
</body>
```

Incluimos atributos `media` en nuestros elementos `<link>` para que se precargue una imagen estrecha si el usuario tiene un viewport angosto, y se cargue una imagen más ancha si tiene un viewport amplio. Para esto usamos {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} (consulta [Testing media queries](/es/docs/Web/CSS/Guides/Media_queries/Testing) para más información).

Esta misma técnica también se aplica a otros tipos de recursos. Por ejemplo, cuando se usa con fuentes, la precarga aumenta la probabilidad de que la fuente esté disponible en el momento del renderizado, lo que reduce la posibilidad de un destello de texto sin estilo (FOUT, por sus siglas en inglés).

Esto no tiene por qué limitarse a imágenes, ni siquiera a archivos del mismo tipo: ¡piensa en grande! Por ejemplo, podrías precargar y mostrar un diagrama SVG simplificado si el usuario está en una pantalla pequeña donde el ancho de banda y la CPU podrían ser más limitados, o precargar un fragmento complejo de JavaScript y usarlo luego para renderizar un modelo 3D interactivo si el usuario cuenta con más recursos disponibles.

## Scripting y precargas

> [!NOTE]
> Usa [`<link rel="modulepreload">`](/es/docs/Web/HTML/Reference/Attributes/rel/modulepreload) en su lugar si trabajas con [módulos de JavaScript](/es/docs/Web/JavaScript/Guide/Modules).

Otra ventaja de estas precargas es que puedes ejecutarlas mediante scripts.
Por ejemplo, aquí creamos una instancia de {{domxref("HTMLLinkElement")}} y luego la añadimos al DOM:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Esto significa que el navegador precargará el archivo `myscript.js`, pero sin usarlo todavía. Para usarlo, podrías hacer esto:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Esto resulta útil cuando quieres precargar un script, pero aplazar su ejecución hasta el momento exacto en que lo necesites.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Speculative loading](/es/docs/Web/Performance/Guides/Speculative_loading) para una comparación entre `<link rel="preload">` y otras características similares de mejora del rendimiento.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/), de Yoav Weiss
