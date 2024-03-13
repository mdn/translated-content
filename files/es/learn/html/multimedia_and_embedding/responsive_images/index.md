---
title: Imágenes adaptables
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

En este artículo, aprenderemos sobre el concepto de imágenes adaptables — imágenes que funcionan bien en dispositivos con una amplia diferencia de tamaño de pantallas, resoluciones y otras tantas características — y observar qué herramientas proporciona HTML para ayudar a implementarlas. Esto ayuda a mejorar el rendimiento en diferentes dispositivos.

Las imágenes adaptables son solo una parte del diseño web responsivo, un tema que aprenderás próximamente en nuestro tutorial de [CSS](/es/docs/Learn/CSS).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Deberías tener un conocimiento
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML">básico de HTML</a>
        y cómo
        <a href="/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >agregar imágenes estáticas a un sitio web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">
        Objetivo:
      </th>
      <td>
        Aprende a usar características como
        <a href="/es/docs/Web/HTML/Element/img#srcset"><code>srcset</code></a> y el elemento
        {{htmlelement("picture")}} para implementar soluciones de
        imágenes adaptables a sitios web.
      </td>
    </tr>
  </tbody>
</table>

## ¿Por qué imágenes adaptables?

Examinemos un escenario típico. Un sitio web típico puede contener una imagen de encabezado y algunas imágenes de contenido debajo del encabezado. Es probable que la imagen del encabezado abarque todo el ancho del encabezado y la imagen del contenido quepa en algún lugar dentro de la columna de contenido. He aquí un ejemplo sencillo:

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)

Esto funciona bien en un dispositivo de pantalla ancha, como una computadora portatil o de escritorio (puedes [ver el ejemplo en vivo](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) y encontrar el [código fuente](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html) en Github.) No hablaremos mucho del CSS en esta lección, excepto para decir que:

- El contenido del `body` se ha ajustado a un ancho máximo de 1200 píxeles - en pantallas por encima de ese ancho, el cuerpo permanece a 1200px y se centra en el espacio disponible. En pantallas por debajo de ese ancho, el cuerpo permanecerá al 100% del ancho de la ventana.
- La imagen del encabezado se ha configurado para que su centro siempre permanezca en el centro del encabezado, sin importar el ancho que tenga el encabezado. Por lo tanto, si el sitio se visualiza en una pantalla más estrecha, aún se puede ver el detalle importante en el centro de la imagen (las personas) y el exceso se pierde en ambos lados. Tiene 200px de alto.
- Las imágenes de contenido se han configurado de modo que si el elemento `body` se vuelve más pequeño que la imagen, las imágenes comienzan a encogerse para permanecer siempre dentro del `body`, en lugar de desbordarlo.

Sin embargo, surgen problemas cuando comienza a ver el sitio en un dispositivo de pantalla estrecha — el encabezado de abajo está bien, pero empieza a ocupar gran parte de la altura de la pantalla de un dispositivo móvil. ¡A este tamaño es difícil ver a las personas que aparecen en la foto!

![Our example site as viewed on a narrow screen; the first image has shrunk to the point where it is hard to make out the detail on it.](non-responsive-narrow.png)

Una mejora sería mostrar una versión recortada de la imagen que muestra los detalles importantes de la imagen cuando el sitio se ve en una pantalla estrecha. Se podría mostrar una segunda imagen recortada para un dispositivo de pantalla de ancho medio, como una tableta. A esto se le conoce comúnmente como **el problema de cambio de resolución.**

Además, no es necesario incrustar imágenes más grandes en la página si se está viendo en una pantalla móvil. Y, a la inversa, una [imagen rasterizada](/es/docs/Glossary/Raster_image) pequeña comienza a verse más pixelada cuando se muestra mayor que su tamaño original (una imagen rasterizada es un conjunto determinado de píxeles de ancho y de alto, como vimos cuando vimos los gráficos vectoriales). Esto se denomina problema de cambio de resolución.

Por el contrario, no es necesario mostrar una imagen grande en una pantalla significativamente más pequeña que el tamaño para el que fue diseñada. Hacerlo puede desperdiciar ancho de banda; en particular, los usuarios de dispositivos móviles no quieren desperdiciar ancho de banda descargando una imagen grande destinada al escritorio, cuando una imagen pequeña sería suficiente para su dispositivo. Idealmente, tendría varias resoluciones disponibles y serviría el tamaño apropiado según el dispositivo que acceda a los datos en el sitio web.

Para hacer las cosas más complicadas, algunos dispositivos tienen pantallas de alta resolución que necesitan imágenes más grandes de las que se espera que luzcan bien. Esto es, básicamente, el mismo problema, pero en un contexto ligeramente diferente.

Podrías pensar que las imágenes vectoriales resolverían estos problemas, y lo hacen hasta cierto punto: son pequeñas en tamaño de archivo y escalan bien, y deberías usarlos siempre que sea posible. Sin embargo, no son adecuados para todos tipos de imágenes. Si bien son geniales para gráficos simples, patrones, elementos de interfaz, etc., es muy complejo crear una imagen basada en vectores con la cantidad de detalles que encontrarías, por ejemplo, en una foto. Formatos de imágenes rasterizadas como JPEG son más adecuados para el tipo de imágenes que vemos en el ejemplo anterior.

Este tipo de problemas no existían cuando la web se creó por primera vez, a principios y mediados de los noventa — en ese entonces, los únicos dispositivos disponibles para navegar por la web eran los ordenadores de escritorio y laptops, por lo que los desarrolladores e ingenieros que programaban los navegadores ni siquiera pensaban en implementar estas soluciones. Las tecnologías de imagen adaptable se implementaron recientemente para resolver los problemas descritos anteriormente al permitirle ofrecer al navegador varias versiones de imágenes (en diferentes archivos), ya sea que muestren lo mismo pero contengan diferentes números de píxeles (cambio de resolución), o diferentes imágenes adecuadas para diferentes asignaciones de espacio (dirección de arte).

> **Nota:** Las nuevas características discutidas en este artículo — [`srcset`](/es/docs/Web/HTML/Element/img#srcset)/[`sizes`](/es/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} —son compatibles con las versiones de lanzamiento de los navegadores de escritorio y móviles modernos (incluido el navegador Edge de Microsoft, aunque no Internet Explorer).

## ¿Cómo se crean las imágenes adaptables?

En esta sección, veremos los dos problemas ilustrados anteriormente y mostraremos cómo solucionarlos usando las características de imágenes adaptables con HTML. Debe tener en cuenta que nos centraremos en el elemento HTML {{htmlelement("img")}} para esta sección, tal como se muestra en el área de contenido del ejemplo anterior — la imagen en el encabezado del sitio es solo de decoración y, por lo tanto, implementado usando imágenes de fondo con CSS. Se puede decir que [CSS posee mejores herramientas para el diseño adaptable que HTML](http://blog.cloudfour.com/responsive-images-101-part-8-css-images/), y hablaremos sobre ellas en nuestro módulo [CSS](/es/docs/Web/CSS).

### Cambio de resolución: Diferentes tamaños

Entonces, ¿qué queremos solucionar con el cambio de resolución? Queremos mostrar la misma imagen, más grande o más pequeña dependiendo del dispositivo — Esta es la situación que tenemos en la segunda imagen de nuestro ejemplo. El elemento estándar {{htmlelement("img")}} tradicionalmente solo permite apuntar el navegador a un solo archivo fuente:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Sin embargo, podemos utilizar dos nuevos atributos — [`srcset`](/es/docs/Web/HTML/Element/img#srcset) y [`sizes`](/es/docs/Web/HTML/Element/img#sizes) — para proporcionar varias imágenes de origen adicionales junto con sugerencias para ayudar al navegador a elegir el correcto. Puede ver el ejemplo [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) en Github (vea también [el código fuente](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="
    elva-fairy-320w.jpg 320w,
    elva-fairy-480w.jpg 480w,
    elva-fairy-800w.jpg 800w
  "
  sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Los atributos `srcset` y `sizes` parecen complicados, pero resultan más fáciles de entender si los formatea como se muestra arriba, con valores diferentes para el atributo en cada línea. Cada valor contiene una lista separada por coma, y cada parte de la lista está compuesta por tres sub-partes. Repasemos ahora el contenido de cada uno:

**`srcset`** define el conjunto de imágenes que el navegador podrá elegir, y el tamaño de cada imagen. Cada conjunto de información de imagen está separado del anterior por una coma. Para cada uno, escribimos:

1. Un nombre de archivo de imagen (elva-fairy-480w.jpg)
2. Un espacio.
3. El **ancho intrínseco de la imagen en píxeles** (480w): tenga en cuenta que esto usa la unidad w, no px como cabría esperar. Este es el tamaño real de la imagen, que se puede encontrar inspeccionando el archivo de imagen en su computadora (por ejemplo, en una Mac puede seleccionar la imagen en Finder y presionar <kbd>Cmd</kbd> + <kbd>I</kbd> para que aparezca la pantalla de información).

**`sizes`** define un conjunto de condiciones de medios (por ejemplo, anchos de pantalla) e indica qué tamaño de imagen sería mejor elegir cuando se cumplen ciertas condiciones de medios — estas son las sugerencias de las que hablamos anterriormente. En este caso, antes de cada coma escribimos:

1. Una **condición de medios** ((max-width: 600px)): aprenderá más sobre esto en el [tema CSS](/es/docs/Web/CSS), pero por ahora digamos que una condición de medios describe un posible estado en el que puede estar la pantalla. En este caso, estamos diciendo "cuando el ancho de la ventana gráfica es de 600 píxeles o menos".
2. Un espacio.
3. El **ancho de la ranura** que la imagen llenará cuando la condición de medios sea verdadera (`440px`.)

> **Nota:** Para el **ancho de la ranura**, debe indicar una longitud absoluta (`px`, `em`) o relativa (como un porcentaje.) Usted debe haber advertido que el ancho de la última ranura no tiene condición de medios (esta es la opción por defecto que se elige cuando ninguna de las condiciones de medios se cumplen). El navegador ignora todo lo posterior a la primera condición coincidente, por eso sea cuidadoso con el orden de las condiciones de medios.

Entonces, con estos atributos establecidos, el navegador:

1. Verificará el ancho del dispositivo.
2. Resolverá qué condición de medios en la lista `sizes` es la primera que se cumple.
3. Verificará la medida de la ranura dada a esa consulta de medios.
4. Cargará la imagen referenciada en la lista `srcset` con coincidencia más cercana a la medida de la ranura.

¡Y eso es todo! Hasta este punto, si un navegador compatible con un ancho de ventana de 480px carga la página, la condición de medios `(max-width: 480px)` se cumplirá, por lo que la ranura de `440px` será elegida y se cargará el archivo de imagen `elva-fairy-480w.jpg`, ya que el ancho inherente (`480w`) es el más cercano a `440px`. La imagen de 800px tiene 128KB en disco mientras que la versión de 480px tiene solo 63KB — un ahorro de 65KB. Ahora imagine si esta fuera una página que tuviera muchas imágenes. Usar esta técnica puede ahorrarle a los usuarios de dispositivos móviles mucho ancho de banda.

> **Nota:** Al probar esto con un navegador de escritorio, si el navegador no carga las imágenes más estrechas cuando tiene su ventana configurada en el ancho más estrecho, eche un vistazo a cuál es la ventana gráfica (puede aproximarla yendo a la **Consola JavaScript** del navegador y escribiendo `document.querySelector('html').clientWidth`). Los diferentes navegadores tienen tamaños mínimos a los que te permitirán reducir el ancho de la ventana y pueden ser más anchos de lo que piensas. Al probarlo con un navegador móvil, puede usar herramientas como la página de depuración de Firefox `about:debugging` para inspeccionar la página cargada en el dispositivo móvil usando las herramientas de desarrollo de escritorio. Para ver qué imágenes se cargaron, puede usar la pestaña [Monitor de red](/es/docs/Tools/Network_Monitor) en las herramientas del desarrollador de Firefox.

Los navegadores más antiguos que no soportan estas características solo las ignorarán y seguirán adelante con la carga de la imagen referenciada en el atributo [`src`](/es/docs/Web/HTML/Element/img#src) como lo hacen habitualmente.

> **Nota:** En el {{htmlelement("head")}} del documento usted hallará la línea `<meta name="viewport" content="width=device-width">`: esto fuerza a los dispositivos móviles a adoptar su ancho real de ventana para cargar las páginas web (algunos navegadores móviles mienten sobre el ancho de su ventana gráfica y, en su lugar, cargan páginas con un ancho de ventana más grande y luego reducen la página cargada, lo que no es muy útil para imágenes o diseño receptivos).

### Resolution switching: Same size, different resolutions

If you're supporting multiple display resolutions, but everyone sees your image at the same real-world size on the screen, you can allow the browser to choose an appropriate resolution image by using `srcset` with x-descriptors and without `sizes` — a somewhat easier syntax! You can find an example of what this looks like in [srcset-resolutions.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (see also [the source code](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

![A picture of a little girl dressed up as a fairy, with an old camera film effect applied to the image](resolution-example.png)In this example, the following CSS is applied to the image so that it will have a width of 320 pixels on the screen (also called CSS pixels):

```css
img {
  width: 320px;
}
```

In this case, `sizes` is not needed — the browser simply works out what resolution the display is that it is being shown on, and serves the most appropriate image referenced in the `srcset`. So if the device accessing the page has a standard/low resolution display, with one device pixel representing each CSS pixel, the `elva-fairy-320w.jpg` image will be loaded (the 1x is implied, so you don't need to include it.) If the device has a high resolution of two device pixels per CSS pixel or more, the `elva-fairy-640w.jpg` image will be loaded. The 640px image is 93KB, whereas the 320px image is only 39KB.

### Art direction

To recap, the **art direction problem** involves wanting to change the image displayed to suit different image display sizes. For example, if a large landscape shot with a person in the middle is shown on a website when viewed on a desktop browser, then shrunk down when the website is viewed on a mobile browser, it will look bad as the person will be really tiny and hard to see. It would probably be better to show a smaller, portrait image on mobile, which shows the person zoomed in. The {{htmlelement("picture")}} element allows us to implement just this kind of solution.

Returning to our original [not-responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) example, we have an image that badly needs art direction:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Let's fix this, with {{htmlelement("picture")}}! Like [`<video>` and `<audio>`](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), The `<picture>` element is a wrapper containing several {{htmlelement("source")}} elements that provide several different sources for the browser to choose between, followed by the all-important {{htmlelement("img")}} element. The code in [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) looks like so:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- The `<source>` elements include a `media` attribute that contains a media condition — as with the first `srcset` example, these conditions are tests that decide which image is shown — the first one that returns true will be displayed. In this case, If the viewport width is 799px wide or less, the first `<source>` element's image will be displayed. If the viewport width is 800px or more, it'll be the second one.
- The `srcset` attributes contain the path to the image to display. Note that just as we saw with `<img>` above, `<source>` can take a `srcset` attribute with multiple images referenced, and a `sizes` attribute too. So you could offer multiple images via a `<picture>` element, but then also offer multiple resolutions of each one too. Realistically, you probably won't want to do this kind of thing very often.
- In all cases, you must provide an `<img>` element, with `src` and `alt`, right before `</picture>`, otherwise no images will appear. This provides a default case that will apply when none of the media conditions return true (you could actually remove the second `<source>` element in this example), and a fallback for browsers that don't support the `<picture>` element.

This code allows us to display a suitable image on both wide screen and narrow screen displays, as shown below:

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)![Our example site as viewed on a narrow screen with the picture element used to switch the first image to a portrait close up of the detail, making it a lot more useful on a narrow screen](picture-element-narrow.png)

> **Nota:** You should use the `media` attribute only in art direction scenarios; when you do use `media`, don't also offer media conditions within the `sizes` attribute.

### ¿Por qué no podemos usar, simplemente, CSS o Javascript?

Cuando el navegador comienza a cargar una página, empieza a descargar (precargar) cualquier imagen before the main parser has started to load and interpret the page's CSS and JavaScript. This is a useful technique, which on average has shaved 20% off page load times. However, it is not helpful for responsive images, hence the need to implement solutions like `srcset`. You couldn't for example load the {{htmlelement("img")}} element, then detect the viewport width with JavaScript and dynamically change the source image to a smaller one if desired. By then, the original image would already have been loaded, and you would load the small image as well, which is even worse in responsive image terms.

### Use modern image formats boldly

There are several exciting new image formats (such as WebP and JPEG-2000) that can maintain a low file size and high quality at the same time. However, browser support is spotty.

`<picture>` lets us continue catering to older browsers. You can supply MIME types inside `type` attributes so the browser can immediately reject unsupported file types:

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg" />
  <source type="image/webp" srcset="pyramid.webp" />
  <img
    src="pyramid.png"
    alt="regular pyramid built from four equilateral triangles" />
</picture>
```

- No uses el atributo `media`, unless you also need art direction.
- En un elemento `<source>` , solo puedes enlazar a imágenes del tipo que has declarado en `type`.
- Al igual que antes, puedes usar sin ningún problema listas separadas con comas tanto en `srcset` , como en `sizes`, así como lo necesites.

## Aprendizaje activo: Implementando sus propias imágenes adaptables

For this active learning, we're expecting you to be brave and go it alone ... mostly. We want you to implement your own suitable art directed narrow screen/wide screen shot using `<picture>`, and a resolution switching example that uses `srcset`.

1. Write some simple HTML to contain your code (use `not-responsive.html` as a starting point, if you like)
2. Find a nice wide screen landscape image with some kind of detail contained in it somewhere. Create a web-sized version of it using a graphics editor, then crop it to show a smaller part that zooms in on the detail, and create a second image (about 480px wide is good for this.)
3. Use the `<picture>` element to implement an art direction picture switcher!
4. Create multiple image files of different sizes, each showing the same picture.
5. Use `srcset`/`size` to create a resolution switcher example, either to serve the same size image at different resolutions, or different image sizes at different viewport widths.

> **Nota:** Use the browser devtools to help work out what sizes you need, as mentioned above.

## Resumen

That's a wrap for responsive images — we hope you enjoyed playing with these new techniques. As a recap, there are two distinct problems we've been discussing here:

- **Art direction**: The problem whereby you want to serve cropped images for different layouts — for example a landscape image showing a full scene for a desktop layout, and a portrait image showing the main subject zoomed in close for a mobile layout. This can be solved using the {{htmlelement("picture")}} element.
- **Resolution switching**: The problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do — and also optionally that you want to serve different resolution images to high density/low density screens. This can be solved using [vector graphics](/es/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG images), and the [`srcset`](/es/docs/Web/HTML/Element/img#srcset) and [`sizes`](/es/docs/Web/HTML/Element/img#sizes) attributes.

This also draws to a close the entire [Multimedia and embedding](/es/docs/Learn/HTML/Multimedia_and_embedding) module! The only thing to do now before moving on is to try our multimedia assessment, and see how you get on. Have fun.

## Vea también

- [Excelente introducción de Jason Grigsby excellent a las imágenes adaptables](http://blog.cloudfour.com/responsive-images-101-definitions)
- [Imagenes adaptables: Si solo está cambiando resoluciones , use srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — incluye más explicaciones sobre como el navegador resuelve qué imagen utilizar
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
