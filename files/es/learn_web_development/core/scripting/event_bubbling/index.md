---
title: Burbujeo de eventos
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

Hemos visto que una página web está compuesta por _elementos_ —encabezados, párrafos de texto, imágenes, botones, etc.— y que puedes detectar los eventos que ocurren en ellos. Por ejemplo, puedes añadir un detector de eventos a un botón para que se ejecute cuando el usuario haga clic en él.

También hemos visto que estos elementos pueden estar _anidados_ unos dentro de otros: por ejemplo, un {{htmlelement("button")}} puede colocarse dentro de un elemento {{htmlelement("div")}}. En ese caso, diríamos que el elemento `<div>` es el elemento _padre_ y que el `<button>` es el elemento _hijo_.

En este capítulo veremos el **burbujeo de eventos**: lo que ocurre cuando añades un detector de eventos a un elemento padre y el usuario hace clic en el elemento hijo.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>Conocimientos de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, y familiaridad con los conceptos básicos de JavaScript que se vieron en las lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Delegación de eventos, lograda mediante el burbujeo o la captura de eventos.</li>
          <li>Detener la delegación de eventos con <code>stopPropagation()</code>.</li>
          <li>Acceder al objetivo del evento desde el objeto de evento.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Introducción al burbujeo de eventos

Vamos a presentar y definir el burbujeo de eventos mediante un ejemplo.

### Configurar un detector de eventos en un elemento padre

Considera una página web como esta:

```html
<div id="container">
  <button>¡Haz clic en mí!</button>
</div>
<pre id="output"></pre>
```

Aquí, el botón está dentro de otro elemento, un elemento {{HTMLElement("div")}}. Decimos que el elemento `<div>` es el **padre** del elemento que contiene. ¿Qué sucede si añadimos un manejador de eventos de clic al elemento padre y luego hacemos clic en el botón?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Configurar un detector de eventos en un elemento padre', '100%', 200, "", "") }}

Verás que el elemento padre dispara un evento de clic cuando el usuario hace clic en el botón:

```plain
Hiciste clic en un elemento DIV
```

Esto tiene sentido: el botón está dentro del `<div>`, así que, al hacer clic en el botón, también estás haciendo clic de forma implícita en el elemento que lo contiene.

### Ejemplo de burbujeo

¿Qué ocurre si añadimos detectores de eventos al botón _y_ al elemento padre?

```html
<body>
  <div id="container">
    <button>¡Haz clic en mí!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Vamos a probar a añadir manejadores de eventos de clic al botón, a su elemento padre (el `<div>`) y al elemento {{HTMLElement("body")}} que contiene a ambos:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Ejemplo de burbujeo', '100%', 200, "", "") }}

Verás que los tres elementos disparan un evento de clic cuando el usuario hace clic en el botón:

```plain
Hiciste clic en un elemento BUTTON
Hiciste clic en un elemento DIV
Hiciste clic en un elemento BODY
```

En este caso:

- Primero se dispara el clic del botón.
- Después, el del elemento padre (el elemento `<div>`).
- Y por último, el del elemento padre del `<div>` (el elemento `<body>`).

Describimos esto diciendo que el evento **burbujea** desde el elemento más interno en el que se hizo clic.

Este comportamiento puede ser útil, pero también puede causar problemas inesperados. En las siguientes secciones veremos un problema que provoca y cómo resolverlo.

### Ejemplo del reproductor de video

En este ejemplo, nuestra página contiene un video, que al principio está oculto, y un botón con la etiqueta "Mostrar video". Queremos la siguiente interacción:

- Cuando el usuario hace clic en el botón "Mostrar video", se muestra el recuadro que contiene el video, pero sin iniciar todavía su reproducción.
- Cuando el usuario hace clic en el video, este empieza a reproducirse.
- Cuando el usuario hace clic en cualquier punto del recuadro fuera del video, el recuadro se oculta.

El HTML tiene este aspecto:

```html
<button>Mostrar video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Tu navegador no admite video HTML. En su lugar, aquí tienes un
      <a href="rabbit320.mp4">enlace al video</a>.
    </p>
  </video>
</div>
```

Incluye:

- un elemento `<button>`.
- un elemento `<div>` que, al principio, tiene el atributo `class="hidden"`.
- un elemento `<video>` anidado dentro del elemento `<div>`.

Usamos CSS para ocultar los elementos que tienen la clase `"hidden"`.

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

El JavaScript tiene este aspecto:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Esto añade tres detectores de eventos `'click'`:

- uno en el `<button>`, que muestra el `<div>` que contiene el `<video>`.
- uno en el `<video>`, que inicia la reproducción del video.
- uno en el `<div>`, que oculta el video.

Veamos cómo funciona:

{{ EmbedLiveSample('Ejemplo_del_reproductor_de_video', '100%', 500) }}

Deberías ver que, al hacer clic en el botón, se muestran el recuadro y el video que contiene. Pero cuando haces clic en el video, este comienza a reproducirse, ¡pero el recuadro vuelve a ocultarse!

El video está dentro del `<div>` —forma parte de él—, así que al hacer clic en el video se ejecutan _ambos_ manejadores de eventos, lo que provoca este comportamiento.

### Solucionar el problema con `stopPropagation()`

Como vimos en la sección anterior, el burbujeo de eventos a veces puede crear problemas, pero existe una forma de evitarlo. El objeto [`Event`](/es/docs/Web/API/Event) tiene un método llamado [`stopPropagation()`](/es/docs/Web/API/Event/stopPropagation) que, cuando se llama dentro de un manejador de eventos, impide que el evento burbujee hacia otros elementos.

Podemos resolver el problema modificando el JavaScript así:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

Lo único que hacemos aquí es llamar a `stopPropagation()` en el objeto de evento dentro del manejador del evento `'click'` del elemento `<video>`. Así se evita que ese evento burbujee hasta el recuadro. Ahora prueba a hacer clic en el botón y después en el video:

{{EmbedLiveSample("Solucionar el problema con stopPropagation()", '100%', 500)}}

```html hidden
<button>Mostrar video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Tu navegador no admite video HTML. En su lugar, aquí tienes un
      <a href="rabbit320.mp4">enlace al video</a>.
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

## Captura de eventos

Existe otra forma de propagación de eventos: la _captura de eventos_. Es similar al burbujeo, pero en orden inverso: en lugar de que el evento se dispare primero en el elemento más interno al que iba dirigido y después en los elementos cada vez menos anidados, se dispara primero en el elemento _menos anidado_ y después en los elementos cada vez más anidados, hasta llegar al objetivo.

La captura de eventos está desactivada por defecto. Para activarla, tienes que pasar la opción `capture` a `addEventListener()`.

Este ejemplo es igual que el [ejemplo de burbujeo](#ejemplo_de_burbujeo) que vimos antes, salvo que aquí hemos usado la opción `capture`:

```html
<body>
  <div id="container">
    <button>¡Haz clic en mí!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Captura de eventos', '100%', 200, "", "") }}

En este caso, el orden de los mensajes se invierte: primero se dispara el manejador de eventos del `<body>`, después el del `<div>` y, por último, el del `<button>`:

```plain
Hiciste clic en un elemento BODY
Hiciste clic en un elemento DIV
Hiciste clic en un elemento BUTTON
```

¿Por qué existen tanto la captura como el burbujeo? Antiguamente, cuando los navegadores eran mucho menos compatibles entre sí que ahora, Netscape solo usaba la captura de eventos e Internet Explorer solo usaba el burbujeo. Cuando el W3C decidió estandarizar el comportamiento y llegar a un consenso, acabó creando este sistema que incluye ambos, y es el que implementan los navegadores modernos.

Por defecto, casi todos los manejadores de eventos se registran en la fase de burbujeo, y casi siempre tiene más sentido que sea así.

## Delegación de eventos

En la sección anterior, analizamos un problema causado por el burbujeo de eventos y cómo solucionarlo. Sin embargo, el burbujeo de eventos no es solo un inconveniente: también puede ser muy útil. En concreto, permite la **delegación de eventos**. Con esta práctica, cuando queremos ejecutar código ante la interacción del usuario con cualquiera de los numerosos elementos hijos, configuramos el detector de eventos en su elemento padre y dejamos que los eventos que ocurren en los hijos burbujeen hasta él, en lugar de tener que asignar un detector de eventos en cada hijo por separado.

Volvamos a nuestro [primer ejemplo](/es/docs/Learn_web_development/Core/Scripting/Events#un_ejemplo_manejar_un_evento_de_clic), en el que cambiábamos el color de fondo de toda la página cuando el usuario hacía clic en un botón. Supongamos que, en cambio, la página está dividida en 16 recuadros y queremos asignar a cada recuadro un color aleatorio cuando el usuario hace clic en él.

Este es el HTML:

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

Usamos un poco de CSS para establecer el tamaño y la posición de los recuadros:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

En JavaScript, podríamos añadir un manejador de eventos de clic a cada recuadro. Sin embargo, una opción mucho más sencilla y eficiente es asignar el manejador de eventos de clic en el elemento padre y aprovechar el burbujeo de eventos para garantizar que dicho manejador se ejecute cuando el usuario haga clic en un recuadro:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

El resultado es el siguiente (prueba a hacer clic por distintas zonas):

{{ EmbedLiveSample('Delegación de eventos', '100%', 430, "", "") }}

> [!NOTE]
> En este ejemplo usamos `event.target` para obtener el elemento que fue el objetivo del evento (es decir, el elemento más interno). Si quisiéramos acceder al elemento que manejó este evento (en este caso, el contenedor), podríamos usar `event.currentTarget`.

## `target` y `currentTarget`

Si observas con atención los ejemplos que hemos presentado en esta página, verás que usamos dos propiedades distintas del objeto de evento para acceder al elemento en el que se hizo clic. En [Configurar un detector de eventos en un elemento padre](#configurar_un_detector_de_eventos_en_un_elemento_padre) usamos {{domxref("Event.currentTarget", "event.currentTarget")}}. En cambio, en [Delegación de eventos](#delegación_de_eventos) usamos {{domxref("Event.target", "event.target")}}.

La diferencia es que `target` hace referencia al elemento en el que se disparó el evento inicialmente, mientras que `currentTarget` hace referencia al elemento al que está asociado este manejador de eventos.

Mientras que `target` no cambia a medida que el evento burbujea, `currentTarget` varía según el elemento de la jerarquía al que esté vinculado el manejador de eventos.

Podemos comprobar esto si realizamos una pequeña modificación al [ejemplo de burbujeo](#ejemplo_de_burbujeo) anterior. Usamos el mismo HTML que antes:

```html
<body>
  <div id="container">
    <button>¡Haz clic en mí!</button>
  </div>
  <pre id="output"></pre>
</body>
```

El JavaScript es casi igual, salvo que ahora mostramos tanto `target` como `currentTarget`:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Objetivo: ${e.target.tagName}`;
  const logCurrentTarget = `Objetivo actual: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

Ten en cuenta que, al hacer clic en el botón, `target` es siempre el elemento botón, tanto si el manejador de eventos está asociado al propio botón como al `<div>` o al `<body>`. Por otro lado, `currentTarget` identifica el elemento cuyo manejador de eventos se está ejecutando en ese momento:

{{embedlivesample("target y currentTarget")}}

La propiedad `target` se usa con frecuencia en la delegación de eventos, como vimos en el ejemplo de [Delegación de eventos](#delegación_de_eventos) anterior.

## Resumen

Ya deberías saber todo lo que necesitas sobre los eventos web en esta etapa inicial. Como mencionamos, los eventos no forman parte, en realidad, del núcleo del lenguaje JavaScript; están definidos en las API web de los navegadores.

En el próximo artículo, te propondremos algunos ejercicios para que compruebes qué tan bien has comprendido y retenido toda la información que te hemos dado sobre los eventos.

## Véase también

- [domevents.dev](https://domevents.dev/)
  - : Una práctica aplicación interactiva que permite aprender cómo se comporta el sistema de eventos del DOM mediante la exploración.
- [Eventos del DOM](/es/docs/Web/API/Document_Object_Model/Events)
  - : Una guía completa para comprender y manejar eventos.
- [Orden de los eventos](https://www.quirksmode.org/js/events_order.html)
  - : Un análisis excelente y muy detallado de la captura y el burbujeo, escrito por Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}
