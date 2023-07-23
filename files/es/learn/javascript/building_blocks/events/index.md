---
title: Introducción a los eventos
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: ac5dfaa2f71a7381cd8fdd4cb554507f375ac19c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Los eventos son cosas que pasan en el sistema que estás programando, el cual se encarga de avisarte para que tu código pueda hacer algo al respecto.

Por ejemplo, si el usuario hace clic en el botón de una página web, puede que quieras reaccionar a esa acción y mostrar una tarjeta con información.
En este artículo vamos a discutir algunos conceptos importantes sobre los eventos y cómo funcionan en el navegador.
Este no será un estudio exhaustivo, solo veremos lo que necesitas saber en esta etapa.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
  Conocimientos básicos de informática, entendimiento básico de HTML y CSS, <a href="/es/docs/Learn/JavaScript/First_steps"
          >Primeros pasos con JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
Entender la teoría fundamental sobre los eventos, cómo funcionan en el navegador y cómo los eventos son diferentes según el entorno de programación.</td>
    </tr>
  </tbody>
</table>

## ¿Qué es un evento?

Los eventos son cosas que suceden en el sistema que estás programando. El sistema se encarga de producir una señal de cierto tipo cuando un evento ocurre, y proporciona un mecanismo para que una acción se lleve a cabo (ejecutar código) de forma automática cuando el evento ocurra.
Los eventos se lanzan dentro de la ventana del navegador y usualmente están asociados a un elemento en específico dentro de dicha ventana. Esto puede ser un solo elemento, un grupo de elementos, el documento HTML cargado la pestaña actual, o la ventana del navegador en su totalidad.
Existen distintos tipos de eventos que pueden ocurrir.

Por ejemplo:

- El usuario selecciona, hace clic o pasa el ratón por encima de cierto elemento.
- El usuario presiona una tecla del teclado.
- El usuario redimensiona o cierra la ventana del navegador.
- Una página web terminó de cargarse.
- Un formulario fue enviado.
- Un vídeo se reproduce, se pausa o termina.
- Ocurrió un error.

A partir de esto (y dando un vistazo a la [referencia de eventos](/es/docs/Web/Events) de MDN) puedes observar que existen **muchos** eventos que pueden ser lanzados.

Para reaccionar a un evento, puedes asociarle un **manejador de eventos**. Esto es un bloque de código (normalmente una función de JavaScript que tú como programador creas) que se ejecuta cuando el evento ocurre.
Cuando uno de estos bloques de código se configura para ejecutarse en respuesta de un evento, decimos que estamos **registrando un manejador de eventos**.
Nota: Los manejadores de eventos a veces son llamados **detectores de eventos**. Estos términos, para lo que nos concierne justo ahora, son intercambiables, aunque hablando de forma estricta, hacen referencia a dos mecanismos que trabajan juntos.
Los detectores de eventos están pendientes a que ocurra un evento, mientras que el manejador es el código que se ejecuta en respuesta del evento.

> **Nota:** Los eventos en la web no son parte del núcleo del lenguaje JavaScript, éstos están definidos como parte de las API del navegador.

### Un ejemplo: manejando un evento de clic

En el siguiente ejemplo, tenemos un único elemento {{htmlelement("button")}} en la página:

```html
<button>Cambiar el color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Ahora tenemos algo de JavaScript. Veremos esto más a detalle en la siguiente sección pero, por ahora, nos basta decir que: agrega un manejador de evento al evento `"click"` del botón, y el manejador reacciona al evento estableciendo un color de fondo aleatorio en la página:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

La salida del ejemplo es de la siguiente forma. Intenta hacer clic en el botón:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Utilizando addEventListener()

Como pudimos ver en el ejemplo anterior, los objetos que pueden lanzar eventos tienen el método {{domxref("EventTarget/addEventListener", "addEventListener()")}}, y este es el mecanismo recomendado para registrar manejadores de eventos.

Ahora veamos más de cerca el código del ejemplo anterior:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

El elemento HTML {{HTMLElement("button")}} lanzará un evento cuando el usuario hace clic sobre él. Entonces define la función `addEventListener()` que estamos llamando aquí. Le estamos pasando dos parámetros:

- la cadena `"click"`, para indicar que queremos detectar el evento de clic.
  Los botones pueden lanzar muchos otros eventos, como [`"mouseover"`](/es/docs/Web/API/Element/mouseover_event) cuando el usuario mueve el ratón por encima del botón, o [`"keydown"`](/es/docs/Web/API/Element/keydown_event) cuando el usuario presiona una tecla y el botón está enfocado.
- una función a llamar cuando el evento ocurra. En este caso, la función genera un color RGB aleatorio y establece el [`background-color`](/es/docs/Web/CSS/background-color) de la página [`<body>`](/es/docs/Web/HTML/Element/body) a ese color.

Es válido crear una función manejador con su propio nombre, de la siguiente forma:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

### Detectando otros eventos

Existen distintos tipos de eventos que pueden ser lanzados por un elemento de tipo botón. Hagamos algunos experimentos.

Primero, haz una copia local del archivo [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html), y ábrelo en tu navegador.
Se trata de una copia del ejemplo sencillo del color aleatorio con el que ya trabajamos anteriormente. Ahora intenta a cambiar `click` por cada uno de los siguientes valores y observa los resultados en el ejemplo:

- [`focus`](/es/docs/Web/API/Element/focus_event) y [`blur`](/es/docs/Web/API/Element/blur_event) — El color cambia cuando el botón es enfocado y desenfocado; Intenta presionar la tecla "Tabulador" para enfocar el botón y presionala de nuevo para desenfocarlo.
  Estos eventos son normalmente utilizados para mostrar información a la hora de completar formularios, o incluso para mostrar un mensaje de error si un campo recibe un valor incorrecto.
- [`dblclick`](/es/docs/Web/API/Element/dblclick_event) — El color cambia únicamente cuando se hace doble clic sobre el botón.
- [`mouseover`](/es/docs/Web/API/Element/mouseover_event) y [`mouseout`](/es/docs/Web/API/Element/mouseout_event) — El color cambia cuando el puntero del ratón pasa por encima del botón, o cuando el puntero sale del botón, respectivamente.

Algunos eventos, como `click`, están disponibles prácticamente en cualquier elemento. Mientras que otros son más específicos y solo son útiles en ciertas situaciones: por ejemplo, el evento [`play`](/es/docs/Web/API/HTMLMediaElement/play_event) solo está disponible en algunos elementos, como {{htmlelement("video")}}.

### Removiendo detectores

Si has agregado un manejador de eventos usando `addEventListener()`, puedes removerlo utilizando el método [`removeEventListener()`](/es/docs/Web/API/EventTarget/removeEventListener). Por ejemplo, esto removería el manejador de evento `changeBackground()`:

```js
btn.removeEventListener("click", changeBackground);
```

Los manejadores de eventos también pueden ser removidos al pasarles una {{domxref("AbortSignal")}} al método {{domxref("EventTarget/addEventListener()", "addEventListener()")}} y después llamar al método {{domxref("AbortController/abort()", "abort()")}} sobre el control al que le pertenece la `AbortSignal`.
Por ejemplo, para agregar un manejador de evento que podemos remover con una `AbortSignal`:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal },
); // se pasa una AbortSignal a este manejador
```

De esta forma, el manejador de evento creado por el código anterior puede ser removido de la siguiente manera:

```js
controller.abort(); // remueve cualquier manejador de evento asociado con este controlador.
```

Para programas pequeños y simples, limpiar los rastros de manejadores de eventos sin utilizar resulta innecesario. Sin embargo, para programas más complejos, puede traer mejoras de eficiencia.
Además, la habilidad de remover manejadores de eventos te permite tener al mismo botón ejecutando diferentes acciones en diferentes circunstancias: todo lo que tienes que hacer es agregar o remover manejadores.

### Agregando varios detectores para un solo evento

Al realizar más de una llamada al método {{domxref("EventTarget/addEventListener()", "addEventListener()")}}, proporcionando distintos manejadores, puedes tener varios detectores para un solo evento:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Ambas functiones se ejecutarían cuando se hace clic en dicho elemento.

### Conocer más

Existen otras características y opciones poderosas disponibles para `addEventListener()`.

Éstas se encuentran un poco fuera del alcance de este artículo, pero si quieres saber más de ellas, visita las páginas de referencia para [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) y [`removeEventListener()`](/es/docs/Web/API/EventTarget/removeEventListener).

## Otros mecanismos para detectar eventos

Te recomendamos que utilices `addEventListener()` para registrar manejadores de eventos. Es el método más potente y que mejor escala para programas más complejos.
No obstante, existen otras dos formas distintas para registrar manejadores de eventos que deberías conocer.

### Propiedades para manejar eventos

Los objetos (como botones) que pueden lanzar eventos, normalmente tienen propiedades cuyo nombre es `on` seguido del nombre del evento. Por ejemplo, elementos con la propiedad `onclick`.
A esto se le conoce como una propiedad para manejar eventos, o _event handler property_.
Para detectar un evento, puedes asignar la función manejador a dicha propiedad.

Por ejemplo, podemos reescribir el ejemplo del color aleatorio de esta forma:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

También puedes establecer la propiedad manejador a una función con nombre:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

Al utilizar propiedades para manejar eventos, no es posible agregar más de un manejador para un solo evento.
Por ejemplo, puedes llamar el método `addEventListener('click', handler)` en un elemento varias veces, pasando diferentes funciones al segundo argumento:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Esto es imposible de lograr con propiedades para manejar eventos debido a que cualquier intento subsecuente para establecer dicha propiedad, habrá sobreescrito las anteriores asignaciones.

```js
element.onclick = function1;
element.onclick = function2;
```

### Manejadores de eventos en línea: No los utilices

Quizá hayas visto un patrón como este en tu código:

```html
<button onclick="bgChange()">Haz clic</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

El primer método para el registro de manejadores de eventos en la Web, utilizaba [_atributos HTML para manejar eventos_](/es/docs/Web/HTML/Attributes#event_handler_attributes) (o _manejadores de eventos en línea_) como el que se mostró anteriormente. El valor del atributo es literalmente el código JavaScript que quieres ejecutar cuando el evento ocurra.
El ejemplo anterior invoca a la función definida dentro de un elemento {{htmlelement("script")}} en la misma página, pero también pueden insertar JavaScript directamente en el atributo, por ejemplo:

```html
<button onclick="alert('¡Hola, este es un manejador de eventos anticuado!');">
  Haz click
</button>
```

Puedes encontrar atributos HTML equivalentes para varias de las propiedades para manejar eventos. Sin embargo, no deberías utilizarlos, ya que se consideran una mala práctica.
Puede parecer fácil utilizar un atributo para manejar un evento si estás haciendo sencillo de forma rápida, pero más adelante se puede volver ineficiente e imposible de manejar.

Para empezar, no es buena idea mezclar tu código HTML y JavaScript, ya que se vuelve difícil de leer. Mantener tu código JavaScript por separado es una buena práctica, además de que si se encuentra en un archivo separado, puedes aplicarlo a distintos documentos HTML.

Incluso en un solo archivo, los manejadores de eventos en línea no son una buena idea.
Un botón está bien, pero ¿qué tal si tuvieras 100 botones? Tendrías que agregar 100 atributos a ese archivo; de inmediato se convertiría en una pesadilla para mantener.
Con JavaScript, fácilmente puedes agregar una función para manejar eventos en todos los botones de la página sin importar cuántos de ellos haya, usando algo como esto:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Finalmente, varias configuraciones comunes en servidores desactivan el código JavaScript en línea, como parte de una medida de seguridad.

**Nunca deberías utilizar atributos HTML para manejar eventos** — Estos están obsoletos y utilizarlos es mala práctica.

## Objetos evento

A menudo, dentro de la función manejadora de eventos verás un parámetro especificado con el nombre de `event`, `evt`, or `e`.
A este se le conoce como **objeto evento**,
y es pasado automáticamente a los manejadores de eventos para proporcionar información y características extra.
Por ejemplo, vamos a reestructurar ligeramente nuestro ejemplo de color aleatorio una vez más:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> **Nota:** Puedes encontrar el [código fuente completo](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) de este ejemplo en Github (además [mira cómo se ejecuta en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Aquí puedes ver que estamos incluyendo un objeto evento **e** en la función, y dentro de nuestra función estamos cambiando el estilo de color de fondo sobre `e.target`, que es el botón como tal.
La propiedad `target` del objeto evento siempre es una referencia al elemento sobre el cual ocurrió el evento.
Por lo tanto, en este ejemplo, estamos estableciendo el color de fondo aleatorio en el botón, no la página.

> **Nota:** Mira la sección de [delegación de Eventos](#event_delegation) más abajo para ver un ejemplo donde usamos `event.target`.

> **Nota:** Puedes utilizar cualquier nombre para el objeto evento, simplemente debes elegir un nombre que puedas usar para hacer referencia a él dentro de la función manejadora.
> `e`/`evt`/`event` son los nombres más comunes utilizados por desarrolladores porque son cortos y fáciles de recordar.
> Siempre es bueno ser consistente, contigo mismo y los demás siempre que sea posible.

### Propiedades extra en los objetos evento

La mayoría de objetos eventos tienen un conjunto estándar de propiedades y métodos disponibles en el objeto evento; visita la referencia del objeto {{domxref("Event")}} para una lista completa.

Algunos objetos evento agregan propiedades extra que son relevantes para un tipo de evento en particular. Por ejemplo, el evento {{domxref("Element/keydown_event", "keydown")}} se lanza cuando el usuario presiona una tecla. Su objeto evento es un {{domxref("KeyboardEvent")}}, el cual es un objeto `Event` especializado con una propiedad `key` que nos indica la tecla que fue presionada.

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `Presionaste "${event.key}".`),
);
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Intenta escribir en la caja de texto y mira el resultado:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Evitando el comportamiento por defecto

En algunas ocasiones, te encontrarás en una situación donde quieres evitar que un evento realice su acción por defecto.
El escenario más común es el de un formulario web, por ejemplo, un formulario personalizado para un registro.
Cuando llenas todos los campos y haces clic en el botón para enviar, el comportamiento normal es que la información sea enviada a un servidor para que sea procesada, mientras que el navegador se redirecciona a una página donde se muestra un mensaje de "envío exitoso" (o a la misma página si no se especifica otra).

El problema viene cuando el usuario no ha introducido sus datos correctamente. Como desarrollador, quieres evitar que la información sea enviada al servidor y, en su lugar, mostrar un mensaje de error que señale cuáles son los problemas y qué se necesita para corregirlos.
Algunos navegadores tienen soporte para características de validación automática de formularios, pero tomando en cuenta que muchos otros no, se te recomienda que no confies en estos mecanismos e implementes tus propias pruebas de validación.
Veamos un ejemplo.

Primero, un formulario HTML simple que requiere que introduzcas tu nombre y apellido:

```html
<form>
  <div>
    <label for="fname">Nombre: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Apellido: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Ahora un poco de JavaScript. Aquí vamos a implementar una simple prueba dentro del manejador del evento [`submit`](/es/docs/Web/API/HTMLFormElement/submit_event) (el evento _submit_ es lanzado en un formulario cuando este se envía) que determina si los campos de texto están vacíos o no.
En caso de que lo estén, llamamos al método [`preventDefault()`](/es/docs/Web/API/Event/preventDefault) del objeto evento, el cual detiene el envío del formulario y muestra un mensaje de error en el párrafo debajo de nuestro formulario para hacerle saber al usuario cuál es el problema:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "¡Necesitas completar ambos campos!";
  }
});
```

Obviamente esta es una validación bastante débil, esto no detendría al usuario de, por ejemplo, llenar los campos del formulario con espacios en blanco o números, pero, es suficiente para los propósitos de nuestro ejemplo.
El resultado es el siguiente:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> **Nota:** Para ver el código fuente completo, aquí tienes el archivo [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (también puedes [verlo ejecutándose en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) aquí).

## Burbujeo de eventos

El burbujeo de eventos (o _event bubbling_) describe como el navegador maneja eventos dirigidos a elementos anidados.

### Estableciendo un detector de eventos en un elemento padre

Considera una página web como la siguiente:

```html
<div id="container">
  <button>¡Haz clic en mi!</button>
</div>
<pre id="output"></pre>
```

Aquí el botón se encuentra dentro de otro elemento, de forma específica, un elemento {{HTMLElement("div")}}. En este caso, decimos que el elemento `<div>` es el **padre** del elemento que contiene. ¿Qué sucede si agregamos un manejador para el evento `click` en el padre y luego hacemos clic en el botón?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Como puedes ver, el padre lanza el evento `click` cuando el usuario hace clic en el botón:

```
Hiciste clic en un elemento DIV
```

Esto tiene sentido, el botón está dentro del elemento `<div>`, por lo tanto, cuando haces clic en el botón, de forma implícita estás haciendo clic en el elemento en el que se encuentra.

### Ejemplo de burbujeo

¿Qué sucede si agregamos un detector de eventos al botón _y_ al padre?

```html
<body>
  <div id="container">
    <button>¡Haz clic en mi!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Intentemos agregar un manejador de eventos al botón, a su padre (el `<div>`) y, además, al elemento {{HTMLElement("body")}} que contiene a ambos:

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

{{ EmbedLiveSample('Bubbling example', '100%', 200, "", "") }}

Te darás cuenta que los tres elementos lanzan un evento de clic cuando el usuario hace clic en el botón:

```
Hiciste clic en un elemento BUTTON
Hiciste clic en un elemento DIV
Hiciste clic en un elemento BODY
```

En este caso:

- el clic en el botón se lanza primero
- seguido del clic en el padre (el elemento `<div>`)
- por último, se lanza en el padre del elemento `<div>` (el elemento `<body>`).

Para describir esta situación, decimos que el evento **burbujea hacia arriba** (_bubbles up_, en inglés) desde el elemento más interno que recibió un clic.

Este comportamiento puede ser útil a la par de causar problemas inesperados. En las siguientes secciones veremos los problemas que causa y econtraremos una solución.

### Ejemplo de un reproductor de video

En este ejemplo, nuestra página contiene un video, el cual se encuentra oculto inicialmente, y un botón con la etiqueta "Display video". Queremos lograr la siguiente interacción:

- Cuando el usuario hace clic en el botón de "Display video", muestra la caja que contiene el video, pero sin iniciar la reproducción del video todavía.
- Cuando el usuario hace clic en el video, inicia la reproducción del video.
- Cuando el usuario hace clic en cualquier lugar fuera de la caja del video, oculta la caja nuevamente.

El HTML se ve así:

```html
<button>Mostrar vídeo</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Su navegador no es compatible con video HTML. Aquí hay un
      <a href="rabbit320.mp4">enlace al video</a> en su lugar.
    </p>
  </video>
</div>
```

Además incluye:

- un element `<button>`
- un elemento `<div>` que inicialmente tiene un atributo `class="hidden"`
- un elemento `<video>` anidado dentro del elemento `<div>`.

Estamos usando CSS para ocultar elementos con la clase `"hidden"`.

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
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

El código JavaScript se ve así:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Éste añade tres manejadores para el evento `'click'`:

- uno en el `<button>`, el cual muestra el `<div>` que contiene al `<video>`
- uno en el `<video>`, el cual inicia la reproducción del video
- uno en el `<div>`, el cual oculta el video.

Veamos como funciona esto:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Deberías ver que cuando haces clic en el botón, la caja y el video que contiene son mostrados. Pero cuando haces clic en el video, éste empieza a reproducirse pero, ¡la caja se oculta de nuevo!

El video se encuentra dentro del `<div>`, ya que es parte de él, por lo tanto, hacer clic en el video ejecuta ambos manejadores de eventos, ocasionando este comportamiento.

### Resolviendo el problema con stopPropagation()

Como pudimos ver en la anterior sección, a veces el _event bubbling_ puede ocasionar problemas, pero existe una manera de prevenirlos.
El objeto [`Event`](/es/docs/Web/API/Event)
contiene un método llamado [`stopPropagation()`](/es/docs/Web/API/Event/stopPropagation) que cuando es llamado dentro de un manejador de evento, evita que el evento burbujee hacia los elementos de más arriba.

Podemos solucionar nuestro problema actual al cambiar el código JavaScript por lo siguiente:

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

Todo lo que estamos haciendo aquí es llamar al método `stopPropagation()` en el objeto evento dentro del manejador del evento `'click'` para el elemento `<video>`. Esto evitará que el evento burbujee hacia la caja de más arriba. Ahora intenta hacer clic en el botón y luego en el video:

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>Mostrar vídeo</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Su navegador no es compatible con video HTML. Aquí hay un
      <a href="rabbit320.mp4">enlace al video</a> en su lugar.
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
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

### Captura de eventos

Una forma alternativa para la propagación de eventos es la _captura de eventos_ (_event capture_, en inglés). Esta es parecida al _bubbling_ pero el sentido está invertido: en vez de que el evento se lance primero en el elemento objetivo más anidado y, sucesivamente, en elementos menos anidados, el evento se lanza primero en el elemento _menos anidado_, y luego en los elementos más anidados, hasta que el objetivo es alcanzado.

La captura de eventos está desactivada por defecto. Para activarla debes pasar la opción `capture` al método `addEventListener()`.

Este ejemplo es parecido al [ejemplo de burbujeo](#bubbling_example) que vimos anteriormente, a excepción de que ahora hemos usado la opción `capture`:

```html
<body>
  <div id="container">
    <button>¡Haz clic en mi!</button>
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

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

En este caso, el orden de los mensajes está invertido: el manejador de evento del `<body>` se lanza primero, seguido del manejador del `<div>` y por el último el manejador del `<button>`:

```
Hiciste clic en un elemento BODY
Hiciste clic en un elemento DIV
Hiciste clic en un elemento BUTTON
```

¿Por qué molestarse con ambos métodos, captura y burbujeo? En los malos viejos tiempos, cuando los navegadores eran mucho menos compatibles entre sí, Netscape utilizaba solamente captura de eventos, mientras que Internet Explorer solo usaba burbujeo de eventos. Cuando W3C decidió tratar de estandarizar este comportamiento y llegar a un acuerdo, terminaron con este sistema que incluye ambos métodos, el cual está implementado por los navegadores modernos.

Por defecto, casi todos los manejadores de eventos están registrados en la fase de burbujeo, lo cual tiene sentido la mayoría de veces.

## Delegación de eventos

En la sección anterior, vimos un problema ocasionado por el burbujeo de eventos y cómo solucionarlo.
El burbujeo de eventos no simplemente es molesto, sino que puede resultar bastante útil. Particularmente, hace posible la **delegación de eventos**. En esta técnica, cuando queremos que cierto código se ejecute cuando el usuario interacciona con cualquiera de un gran número de elementos descendientes, establecemos el detector de eventos en el padre y dejamos que los eventos burbujeen hasta el padre, en vez de establecer el detector de eventos individualmente en cada descendiente.

Regresemos a nuestro primer ejemplo, donde establecemos el color de toda la página cuando el usuario hace clic en un botón. Imagina que en su lugar, la página está dividida en 16 secciones, y queremos establecer un color de fondo aleatorio en cada sección cuando el usuario hace clic en una sección.

Aquí está el HTML:

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

Estamos usando un poco de CSS para establecer el tamaño y posición de las secciones:

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

Ahora desde JavaScript podemos agregar un manejador del evento clic para cada sección.
Pero una solución más sencilla y más eficiente sería agregar un solo detector de eventos en el padre, y aprovecharnos del burbujeo de eventos para asegurarnos de que el manejador se ejecuta cuando el usuario hace clic en una sección:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener(
  "click",
  (event) => (event.target.style.backgroundColor = bgChange()),
);
```

El resultado es de la siguiente forma (intenta hacer clic alreador):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> **Nota:** En este ejemplo, estamos usando `event.target` para obtener el elemento objetivo del evento (es decir, el elemento más interno). Si queremos acceder al elemento que manejó el evento (en este caso, el contenedor), podemos usar `event.currentTarget`.

> **Nota:** Ve el archivo [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) para el código completo; además velo [ejecutándose en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) aquí.

## No es solamente en paǵinas web

Los eventos no son exclusivos de JavaScript, la mayoría de lenguajes de programación poseen algún tipo de modelo de eventos. El funcionamiento de estos modelos puede ser diferente de lo que tenemos en JavaScript.
De hecho, el modelo de eventos en JavaScript para páginas web es diferente del modelo de eventos de JavaScript cuando se usa en otros entornos.

Por ejemplo, [Node.js](/es/docs/Learn/Server-side/Express_Nodejs) es un entorno de ejecución (_runtime, en inglés_) bastante popular que le permite a los desarrolladores usar JavaScript para crear aplicaciones de redes y del lado del servidor.
El [modelo de eventos de Node.js](https://nodejs.org/api/events.html) se basa en detectores para detectar eventos y emisores para emitir eventos periodicamente, esto no suena muy alejado de lo que conocemos pero, el código sí es bastante diferente. En este modelo, se usan funciones como `on()` para registrar un detector de eventos, y `once()` para registrar un detector de eventos que elimina su registro después de haber sido ejecutado una vez.

La [documentación del evento HTTP connect](https://nodejs.org/api/http.html#event-connect) proporciona un buen ejemplo.

También puedes utilizar JavaScript para construir extensiones multi-navegador (mejoras en la funcionalidad de los navegadores) usando una tecnología llamada [WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions).
El modelo de eventos es similar al modelo de los eventos de la web, salvo por pequeñas diferencias. Por ejemplo, las propiedades para detectar eventos utilizan el estilo _camel-case_ (`onMessage` en vez de `onmessage`), y necesitan ser combinadas con la función `addListener`.
Visita la página de [`runtime.onMessage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) para ver un ejemplo.

No necesitas entender nada sobre otros entornos de ejecución en este punto en tu camino de aprendizaje, simplemente queriamos aclarar que los eventos suelen ser diferentes en distintos entornos de programación.

## ¡Pon a prueba tus habilidades!

Haz llegado al final de este artículo pero, ¿Recuerdas la información más importante? Para verificar que has retenido esta información antes de que continúes, visita la página de [Pon a prueba tus habilidades: Eventos](/es/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events).

## Conclusión

Por ahora deberías saber todo lo que necesitas sobre eventos en la web. Como mencionamos anteriormente, los eventos en realidad no son parte del núcleo de JavaScript, ya que estos son definidos como parte de la API del navegador.

De igual forma, es importante entender que los diferentes contextos en los que JavaScript se usa, tienen diferentes modelos de eventos, desde las API Web a otras áreas como WebExtensions y Node.js (JavaScript del lado del servidor).

No estamos esperando que entiendas todas estás áreas justo ahora, pero sin duda mencionar estos temas te ayudará a entender los aspectos básicos de los eventos mientras sigues adelante en tu proceso de aprendizaje de desarrollo web.

Si hay algo que no te quedó muy claro, tómate la libertad de leer de nuevo el artículo o [contáctanos](https://discourse.mozilla.org/c/mdn/learn/250) para pedir ayuda.

## Véase también

- [domevents.dev](https://domevents.dev/) — una aplicación interactiva bastante útil para aprender el comportamiento del sistema de eventos del DOM a través de la exploración.
- [Referencia de eventos](/es/docs/Web/Events)
- [Orden de eventos](https://www.quirksmode.org/js/events_order.html) (debate sobre captura y burbujeo) - un excelente y detallado artículo por Peter-Paul Koch.
- [Event accessing](https://www.quirksmode.org/js/events_access.html) (debate sobre el objeto evento) - otro excelente y detallado artículo por Peter-Paul Koch.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
