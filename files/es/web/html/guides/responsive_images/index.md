---
title: Uso de imágenes adaptables en HTML
short-title: Imágenes adaptables
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

En este artículo, aprenderemos sobre el concepto de imágenes adaptables — imágenes que funcionan bien en dispositivos con una amplia diferencia de tamaños de pantalla, resoluciones y otras tantas características — y observaremos qué herramientas proporciona HTML para ayudar a implementarlas. Esto ayuda a mejorar el rendimiento en diferentes dispositivos.

## ¿Por qué imágenes adaptables?

Examinemos un escenario típico. Un sitio web típico puede contener una imagen de encabezado y algunas imágenes de contenido debajo del encabezado. Es probable que la imagen del encabezado abarque todo el ancho del encabezado y la imagen del contenido quepa en algún lugar dentro de la columna de contenido. He aquí un ejemplo:

![Our example site as viewed on a wide screen - here the first image works OK, as it is big enough to see the detail in the center.](picture-element-wide.png)

Esto funciona bien en un dispositivo de pantalla ancha, como una computadora portátil o de escritorio (puedes [ver el ejemplo en vivo](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) y encontrar el [código fuente](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) en GitHub). No hablaremos mucho del CSS en esta lección, excepto para decir que:

- El contenido del `body` se ha ajustado a un ancho máximo de 1200 píxeles — en ventanas gráficas por encima de ese ancho, el cuerpo permanece a 1200px y se centra en el espacio disponible. En ventanas gráficas por debajo de ese ancho, el cuerpo permanecerá al 100% del ancho de la ventana gráfica.
- La imagen del encabezado se ha configurado para que su centro siempre permanezca en el centro del encabezado, sin importar el ancho que tenga el encabezado. Si el sitio se visualiza en una pantalla más estrecha, aún se puede ver el detalle importante en el centro de la imagen (las personas), y el exceso se pierde en ambos lados. Tiene 200px de alto.
- Las imágenes de contenido se han configurado de modo que, si el elemento `body` se vuelve más pequeño que la imagen, las imágenes comienzan a encogerse para permanecer siempre dentro del `body`, en lugar de desbordarlo.

Sin embargo, surgen problemas cuando comienzas a ver el sitio en un dispositivo de pantalla estrecha. El encabezado de abajo se ve bien, pero empieza a ocupar gran parte de la altura de la pantalla de un dispositivo móvil. Y a este tamaño, es difícil ver los rostros de las dos personas dentro de la primera imagen de contenido.

![Our example site as viewed on a narrow screen; the first image has shrunk to the point where it is hard to make out the detail on it.](non-responsive-narrow.png)

Una mejora sería mostrar una versión recortada de la imagen que muestre los detalles importantes cuando el sitio se ve en una pantalla estrecha. Se podría mostrar una segunda imagen recortada para un dispositivo de pantalla de ancho medio, como una tableta. Al problema general de querer servir diferentes imágenes recortadas de esta manera, para distintos diseños, se le conoce comúnmente como **el problema de la dirección de arte**.

Además, no es necesario incrustar imágenes tan grandes en la página si se está viendo en una pantalla móvil. Hacerlo puede desperdiciar ancho de banda; en particular, los usuarios de dispositivos móviles no quieren desperdiciar ancho de banda descargando una imagen grande destinada a usuarios de escritorio, cuando una imagen pequeña sería suficiente para su dispositivo. Por el contrario, una [imagen rasterizada](/es/docs/Glossary/Raster_image) pequeña comienza a verse granulada cuando se muestra más grande que su tamaño original (una imagen rasterizada tiene un número determinado de píxeles de ancho y un número determinado de píxeles de alto). Idealmente, se pondrían a disposición del navegador web del usuario múltiples resoluciones. El navegador podría entonces determinar la resolución óptima a cargar según el tamaño de pantalla del dispositivo del usuario. Esto se denomina **el problema del cambio de resolución**.

Para hacer las cosas más complicadas, algunos dispositivos tienen pantallas de alta resolución que necesitan imágenes más grandes de las que cabría esperar para lucir bien. Esto es, esencialmente, el mismo problema, pero en un contexto ligeramente diferente.

Podrías pensar que las imágenes vectoriales resolverían estos problemas, y lo hacen hasta cierto punto — son pequeñas en tamaño de archivo y escalan bien, y deberías usarlas siempre que sea posible. Sin embargo, no son adecuadas para todos los tipos de imágenes. Las imágenes vectoriales son geniales para gráficos simples, patrones, elementos de interfaz, etc., pero se vuelve muy complejo crear una imagen basada en vectores con el nivel de detalle que encontrarías, por ejemplo, en una foto. Los formatos de imágenes rasterizadas, como los JPEG, son más adecuados para el tipo de imágenes que vemos en el ejemplo anterior.

Este tipo de problema no existía cuando la web se creó por primera vez, a principios y mediados de los noventa — en ese entonces, los únicos dispositivos que existían para navegar por la web eran los ordenadores de escritorio y portátiles, por lo que los ingenieros de navegadores y los redactores de especificaciones ni siquiera pensaban en implementar soluciones. Las _tecnologías de imágenes adaptables_ se implementaron recientemente para resolver los problemas indicados anteriormente, permitiéndote ofrecer al navegador varios archivos de imagen, ya sea mostrando todos lo mismo pero conteniendo diferentes números de píxeles (_cambio de resolución_), o imágenes diferentes adecuadas para diferentes asignaciones de espacio (_dirección de arte_).

> [!NOTE]
> Las nuevas características discutidas en este artículo — [`srcset`](/es/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/es/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — son compatibles con las versiones de lanzamiento de los navegadores de escritorio y móviles modernos.

## ¿Cómo se crean las imágenes adaptables?

En esta sección, veremos los dos problemas ilustrados anteriormente y mostraremos cómo solucionarlos usando las características de imágenes adaptables de HTML. Debes tener en cuenta que nos centraremos en elementos {{htmlelement("img")}} en esta sección, tal como se muestra en el área de contenido del ejemplo anterior — la imagen del encabezado del sitio es solo decorativa y, por lo tanto, está implementada usando imágenes de fondo con CSS. [CSS posee, sin duda, mejores herramientas para el diseño adaptable](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) que HTML, y hablaremos sobre ellas en un futuro módulo de CSS.

### Cambio de resolución: Diferentes tamaños

Entonces, ¿qué queremos solucionar con el cambio de resolución? Queremos mostrar el mismo contenido de imagen, solo que más grande o más pequeño dependiendo del dispositivo — esta es la situación que tenemos con la segunda imagen de contenido de nuestro ejemplo. El elemento estándar {{htmlelement("img")}} tradicionalmente solo te permite apuntar el navegador a un único archivo fuente:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Sin embargo, podemos utilizar dos atributos — [`srcset`](/es/docs/Web/HTML/Reference/Elements/img#srcset) y [`sizes`](/es/docs/Web/HTML/Reference/Elements/img#sizes) — para proporcionar varias imágenes de origen adicionales junto con sugerencias para ayudar al navegador a elegir la correcta. Puedes ver un ejemplo de esto en nuestro ejemplo [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) en GitHub (consulta también [el código fuente](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Los atributos `srcset` y `sizes` parecen complicados, pero no son tan difíciles de entender si los formateas como se muestra arriba, con una parte distinta del valor del atributo en cada línea. Cada valor contiene una lista separada por comas, y cada parte de esas listas está compuesta por tres subpartes. Repasemos ahora el contenido de cada uno:

**`srcset`** define el conjunto de imágenes entre las que permitiremos elegir al navegador, y el tamaño de cada imagen. Cada conjunto de información de imagen está separado del anterior por una coma. Para cada uno, escribimos:

1. Un **nombre de archivo de imagen** (`elva-fairy-480w.jpg`).
2. Un espacio.
3. El **ancho intrínseco de la imagen en píxeles** (`480w`) — ten en cuenta que esto usa la unidad `w`, no `px` como cabría esperar. El [tamaño intrínseco](/es/docs/Glossary/Intrinsic_Size) de una imagen es su tamaño real, que se puede encontrar inspeccionando el archivo de imagen en tu computadora (por ejemplo, en una Mac puedes seleccionar la imagen en Finder y presionar <kbd>Cmd</kbd> + <kbd>I</kbd> para que aparezca la pantalla de información).

**`sizes`** define un conjunto de condiciones de medios (por ejemplo, anchos de pantalla) e indica qué tamaño de imagen sería mejor elegir cuando se cumplen ciertas condiciones de medios — estas son las sugerencias de las que hablamos anteriormente. En este caso, antes de cada coma escribimos:

1. Una **condición de medios** (`(width <= 600px)`) — aprenderás más sobre esto en el [tema de CSS](/es/docs/Learn_web_development/Core/Styling_basics), pero por ahora digamos que una condición de medios describe un posible estado en el que puede estar la pantalla. En este caso, estamos diciendo "cuando el ancho de la ventana gráfica es de 600 píxeles o menos".
2. Un espacio.
3. El **ancho de la ranura** que la imagen llenará cuando la condición de medios sea verdadera (`480px`).

> [!NOTE]
> En `sizes`, puedes usar cualquier [valor de longitud](/es/docs/Web/CSS/Reference/Values/length). Por ejemplo, en lugar de proporcionar un ancho absoluto (por ejemplo, `480px`), puedes proporcionar alternativamente un ancho relativo a la ventana gráfica (por ejemplo, `50vw`). Sin embargo, no puedes usar un porcentaje como ancho de ranura. Es posible que hayas notado que el ancho de la última ranura no tiene condición de medios (esta es la opción predeterminada que se elige cuando ninguna de las condiciones de medios es verdadera). El navegador ignora todo lo que va después de la primera condición coincidente, así que ten cuidado con el orden en que colocas las condiciones de medios.

Entonces, con estos atributos establecidos, el navegador:

1. Observará el tamaño de la pantalla, la densidad de píxeles, el nivel de zoom, la orientación de la pantalla y la velocidad de la red.
2. Resolverá qué condición de medios en la lista `sizes` es la primera en ser verdadera.
3. Observará el tamaño de ranura asignado a esa consulta de medios.
4. Cargará la imagen referenciada en la lista `srcset` que tenga el mismo tamaño que la ranura. Si no hay una coincidencia exacta para el tamaño de visualización, el navegador elegirá la primera imagen que sea más grande que el tamaño de ranura elegido y la reducirá para que se ajuste.

¡Y eso es todo! Llegados a este punto, si un navegador compatible con un ancho de ventana gráfica de 480px carga la página, la condición de medios `(width <= 600px)` será verdadera, por lo que el navegador elige la ranura de `480px`. Se cargará `elva-fairy-480w.jpg`, ya que su ancho inherente (`480w`) es el más cercano al tamaño de la ranura. La imagen de 800px pesa 128KB en disco, mientras que la versión de 480px pesa solo 63KB — un ahorro de 65KB. Ahora, imagina si esta fuera una página que tuviera muchas imágenes. Usar esta técnica podría ahorrarles a los usuarios móviles mucho ancho de banda.

> [!NOTE]
> Al probar esto con un navegador de escritorio, si el navegador no logra cargar las imágenes más estrechas cuando tienes su ventana configurada en el ancho más estrecho, echa un vistazo a cuál es la ventana gráfica (puedes aproximarla yendo a la consola de JavaScript del navegador y escribiendo `document.querySelector('html').clientWidth`). Los diferentes navegadores tienen tamaños mínimos a los que te permitirán reducir el ancho de la ventana, y pueden ser más anchos de lo que piensas. Al probarlo con un navegador móvil, puedes usar herramientas como la página `about:debugging` de Firefox para inspeccionar la página cargada en el móvil usando las herramientas de desarrollo de escritorio.
>
> Para ver qué imágenes se cargaron, puedes usar la pestaña [Monitor de red](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) de las herramientas de desarrollo de Firefox o el panel [Red](https://developer.chrome.com/docs/devtools/network/) de las herramientas de desarrollo de Chrome. En el caso de Chrome, también es posible que quieras [deshabilitar la caché](https://stackoverflow.com/a/7000899/13725861) para evitar que use imágenes ya descargadas.

Los navegadores más antiguos que no admiten estas características simplemente las ignorarán. En su lugar, esos navegadores seguirán adelante y cargarán la imagen referenciada en el atributo [`src`](/es/docs/Web/HTML/Reference/Elements/img#src) como de costumbre.

> [!NOTE]
> En el {{htmlelement("head")}} del ejemplo enlazado arriba, encontrarás la línea `<meta name="viewport" content="width=device-width">`: esto obliga a los navegadores móviles a adoptar su ancho de ventana gráfica real para cargar las páginas web (algunos navegadores móviles mienten sobre el ancho de su ventana gráfica y, en su lugar, cargan las páginas con un ancho de ventana gráfica más grande para luego reducir la página cargada, lo cual no es muy útil para las imágenes o el diseño adaptables).

### Cambio de resolución: mismo tamaño, diferentes resoluciones

Supongamos que tienes una imagen que se representará con el mismo tamaño real en pantallas que tienen diferentes resoluciones. Puedes ofrecer una mejor experiencia de usuario en pantallas de alta resolución sirviendo una versión de mayor resolución de la imagen.

Para lograrlo, puedes permitir que el navegador elija una imagen de resolución apropiada usando `srcset` con descriptores x y sin `sizes` — ¡una sintaxis algo más sencilla! Puedes encontrar un ejemplo de cómo se ve esto en [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (consulta también [el código fuente](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Ten en cuenta que, aunque la imagen siempre se muestra con el mismo tamaño, en pantallas de mayor resolución podrás ver más detalles.

![A picture of a little girl dressed up as a fairy, with an old camera film effect applied to the image](resolution-example.png)

En este ejemplo, se aplica el siguiente CSS a la imagen para que tenga un ancho de 320 píxeles en la pantalla (también llamados píxeles CSS):

```css
img {
  width: 320px;
}
```

En este caso, `sizes` no es necesario — el navegador simplemente calcula con qué resolución se muestra la pantalla en la que se está mostrando, y sirve la imagen más apropiada referenciada en `srcset`. Así que, si el dispositivo que accede a la página tiene una pantalla de resolución estándar/baja, con un [píxel de dispositivo](/es/docs/Glossary/Device_pixel) que representa cada píxel CSS, se cargará la imagen `elva-fairy-320w.jpg` (el 1x está implícito, así que no es necesario incluirlo). Si el dispositivo tiene una resolución alta de dos o más píxeles de dispositivo por píxel CSS, se cargará la imagen `elva-fairy-640w.jpg`. La imagen de 640px pesa 93KB, mientras que la de 320px pesa solo 39KB.

### Dirección de arte

Para recapitular, el **problema de la dirección de arte** implica querer cambiar la imagen mostrada para adaptarla a diferentes tamaños de visualización de imagen. Por ejemplo, una página web incluye una gran toma panorámica con una persona en el medio cuando se visualiza en un navegador de escritorio. Cuando se visualiza en un navegador móvil, esa misma imagen se reduce, haciendo que la persona en la imagen se vea muy pequeña y difícil de ver. Probablemente sería mejor mostrar una imagen más pequeña, en formato vertical, en el móvil, que muestre a la persona ampliada. El elemento {{htmlelement("picture")}} nos permite implementar precisamente este tipo de solución.

Volviendo a nuestro ejemplo original [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html), tenemos una imagen que necesita urgentemente dirección de arte:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

¡Arreglemos esto con {{htmlelement("picture")}}! Al igual que [`<video>` y `<audio>`](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), el elemento `<picture>` es un envoltorio que contiene varios elementos {{htmlelement("source")}} que ofrecen diferentes fuentes entre las que el navegador puede elegir, seguidos del imprescindible elemento {{htmlelement("img")}}. El código en [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) se ve así:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Los elementos `<source>` incluyen un atributo `media` que contiene una condición de medios — al igual que en el primer ejemplo de `srcset`, estas condiciones son pruebas que deciden qué imagen se muestra; la primera que devuelva verdadero será la que se muestre. En este caso, si el ancho de la ventana gráfica es menor a 800px, se mostrará la imagen del primer elemento `<source>`. Si el ancho de la ventana gráfica es de 800px o más, será la segunda.
- Los atributos `srcset` contienen la ruta a la imagen que se mostrará. Tal como vimos con `<img>` arriba, `<source>` puede recibir un atributo `srcset` con varias imágenes referenciadas, así como un atributo `sizes`. Así que podrías ofrecer múltiples imágenes a través de un elemento `<picture>`, pero también ofrecer múltiples resoluciones de cada una. En la práctica, probablemente no querrás hacer este tipo de cosas muy a menudo.
- En todos los casos, debes proporcionar un elemento `<img>`, con `src` y `alt`, justo antes de `</picture>`; de lo contrario, no aparecerá ninguna imagen. Esto proporciona un caso predeterminado que se aplicará cuando ninguna de las condiciones de medios sea verdadera (de hecho, podrías eliminar el segundo elemento `<source>` en este ejemplo), y una alternativa para los navegadores que no admiten el elemento `<picture>`.

Este código nos permite mostrar una imagen adecuada tanto en pantallas anchas como en pantallas estrechas, como se muestra a continuación:

![Our example site as viewed on a wide screen - here the first image works OK, as it is big enough to see the detail in the center.](picture-element-wide.png)![Our example site as viewed on a narrow screen with the picture element used to switch the first image to a portrait close up of the detail, making it a lot more useful on a narrow screen](picture-element-narrow.png)

> [!NOTE]
> Debes usar el atributo `media` únicamente en escenarios de dirección de arte; cuando uses `media`, no ofrezcas también condiciones de medios dentro del atributo `sizes`.

### ¿Por qué no podemos simplemente hacer esto con CSS o JavaScript?

Cuando el navegador comienza a cargar una página, empieza a descargar (precargar) cualquier imagen antes de que el analizador principal haya comenzado a cargar e interpretar el CSS y el JavaScript de la página. Ese mecanismo es útil en general para reducir los tiempos de carga de la página, pero no es útil para las imágenes adaptables — de ahí la necesidad de implementar soluciones como `srcset`. Por ejemplo, no podrías cargar el elemento {{htmlelement("img")}}, luego detectar el ancho de la ventana gráfica con JavaScript, y después cambiar dinámicamente la imagen de origen a una más pequeña si se desea. Para ese entonces, la imagen original ya se habría cargado, y cargarías la imagen pequeña también, lo cual es incluso peor en términos de imágenes adaptables.

## Implementando tus propias imágenes adaptables

En este ejercicio, esperamos que seas valiente y lo hagas solo, en su mayor parte. Queremos que implementes tu propia captura adecuada con dirección de arte para pantalla estrecha/pantalla ancha usando `<picture>`, y un ejemplo de cambio de resolución que use `srcset`.

1. Escribe algo de HTML para contener tu código (usa `not-responsive.html` como punto de partida, si quieres).
2. Encuentra una bonita imagen panorámica de pantalla ancha con algún tipo de detalle contenido en algún lugar. Crea una versión de tamaño web usando un editor gráfico, luego recórtala para mostrar una parte más pequeña que amplíe el detalle, y crea una segunda imagen (unos 480px de ancho es bueno para esto).
3. Usa el elemento `<picture>` para implementar un selector de imágenes con dirección de arte.
4. Crea varios archivos de imagen de diferentes tamaños, cada uno mostrando la misma imagen.
5. Usa `srcset`/`sizes` para crear un ejemplo de cambio de resolución, ya sea para servir la misma imagen en diferentes resoluciones dependiendo de la resolución del dispositivo, o para servir diferentes tamaños de imagen dependiendo del ancho de la ventana gráfica.

## Resumen

Eso es todo sobre imágenes adaptables — esperamos que hayas disfrutado experimentando con estas nuevas técnicas. A modo de recapitulación, hay dos problemas distintos de los que hemos estado hablando aquí:

- **Dirección de arte**: El problema en el que quieres servir imágenes recortadas para diferentes diseños — por ejemplo, una imagen panorámica que muestra una escena completa para un diseño de escritorio, y una imagen vertical que muestra el sujeto principal ampliado para un diseño móvil. Puedes resolver este problema usando el elemento {{htmlelement("picture")}}.
- **Cambio de resolución**: El problema en el que quieres servir archivos de imagen más pequeños a los dispositivos de pantalla estrecha, ya que no necesitan imágenes enormes como sí lo hacen las pantallas de escritorio — y también servir imágenes de diferente resolución a pantallas de alta/baja densidad. Puedes resolver este problema usando [gráficos vectoriales](/es/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (imágenes SVG) y los atributos [`srcset`](/es/docs/Web/HTML/Reference/Elements/img#srcset) junto con [`sizes`](/es/docs/Web/HTML/Reference/Elements/img#sizes).

## Vea también

- [Aprende: Diseño adaptable](/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Excelente introducción de Jason Grigsby a las imágenes adaptables](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Imágenes adaptables: si solo estás cambiando resoluciones, usa srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — incluye más explicaciones sobre cómo el navegador determina qué imagen usar
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
