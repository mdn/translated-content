---
title: Introducción a los eventos
slug: Learn/JavaScript/Building_blocks/Events
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Los eventos son cosas que pasan en el sistema que estás programando, el cual se encarga de avisarte para que tu código pueda hacer algo al respecto.

Por ejemplo, si el usuario hace click en el botón de una página web, puede que quieras reaccionar a esa acción y mostrar una tarjeta con información.
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

- El usuario selecciona, hace click o pasa el ratón por encima de cierto elemento.
- El usuario presiona una tecla del teclado.
- El usuario redimensiona o cierra la ventana del navegador.
- Una página web terminó de cargarse.
- Un formulario fue enviado.
- Un vídeo se reproduce, se pausa o termina.
- Ocurrió un error.

A partir de esto (y dando un vistazo a la [referencia de eventos](/es/docs/Web/Events) de MDN) puedes observar que existen **muchos** eventos que pueden ser lanzados.

Para reaccionar a un evento, puedes asociarle un **manejador de eventos**. Esto es un bloque de código (normalmente una función de JavaScript que tú como programador creas) que se ejecuta cuando el evento ocurre.
Cuando uno de estos bloques de código se configura para ejecutarse en respuesta de un evento, decimos que estamos **registrando un manejador de evento**.
Nota: Los manejador de eventos a veces son llamados **detectores de eventos**. Estos términos, para lo que nos concierne justo ahora, son intercambiables, aunque hablando de forma estricta, hacen referencia  a dos mecanismos que trabajan juntos.
Los detectores de eventos están pendientes a que ocurra un evento, mientras que el manejador es el código que se ejecuta en respuesta del evento.

> **Nota:** Los eventos en la web no son parte del núcleo del lenguaje JavaScript, éstos están definidos como parte de las APIs del navegador.

### Un ejemplo: manejando un evento de click

En el siguiente ejemplo, tenemos un único {{htmlelement("button")}} en la página:

```html
<button>Change color</button>
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

La salida del ejemplo es de la siguiente forma. Intenta hacer click en el botón:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Utilizando addEventListener()

Como pudimos ver en el anterior ejemplo, los objetos que pueden lanzar eventos tienen el método {{domxref("EventTarget/addEventListener", "addEventListener()")}}, y este es el mecanismo recomendado para registrar manejadores de eventos.

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

El elemento HTML {{HTMLElement("button")}} lanzará un evento cuando el usuario hace click sobre él. Entonces define la función `addEventListener()` que estamos llamando aquí. Le estamos pasando dos parámetros:

- la cadena `"click"`, para indicar que queremos detectar el evento de click.
Los botones pueden lanzar muchos otros eventos, como [`"mouseover"`](/es/docs/Web/API/Element/mouseover_event) cuando el usuario mueve el ratón por encima del botón, o [`"keydown"`](/en-US/docs/Web/API/Element/keydown_event) cuando el usuario presiona una tecla y el botón está enfocado.
- una función a llamar cuando el evento ocurra. En este caso, la función genera un color RGB aleatorio y establece el [`background-color`](/es/docs/Web/CSS/background-color) de la página [`<body>`](/en-US/docs/Web/HTML/Element/body) a ese color.

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

Existen distintos tipos de eventos que pueden ser lanzados por un elemento de tipo *button*. Hagamos algunos experimentos.

Primero, haz una copia local del archivo [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html), y ábrelo en tu navegador.
Se trata de una copia del ejemplo sencillo del color aleatorio con el que ya trabajamos anteriormente. Ahora intenta a cambiar `click` por cada uno de los siguientes valores y observa los resultados en el ejemplo:

- [`focus`](/es/docs/Web/API/Element/focus_event) y [`blur`](/es/docs/Web/API/Element/blur_event) — El color cambia cuando el botón es enfocado y desenfocado; Intenta presionar la tecla "Tabulador" para enfocar el botón y presionala de nuevo para desenfocarlo.
Estos eventos son normalmente utilizados para mostrar información a la hora de completar formularios, o incluso para mostrar un mensaje de error si un campo recibe un valor incorrecto. 
- [`dblclick`](/es/docs/Web/API/Element/dblclick_event) — El color cambia únicamente cuando se hace doble click sobre el botón.
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
  { signal: controller.signal }
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

Ambas functiones se ejecutarían cuando se hace click en dicho elemento.

### Conocer más

Existen otras características y opciones poderosas disponibles para  `addEventListener()`.

Éstas se encuentran un poco fuera del alcance de este artículo, pero si quieres saber más de ellas, visita las páginas de referencia para [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) y [`removeEventListener()`](/es/docs/Web/API/EventTarget/removeEventListener).

## Otros mecanismos para detectar eventos

Te recomendamos que utilices `addEventListener()` para registrar manejadores de eventos. Es el método más potente y que mejor escala para programas más complejos.
No obstante, existen otras dos formas distintas para registrar manejadores de eventos que deberías conocer.

### Propiedades para manejar eventos

Los objetos (como botones) que pueden lanzar eventos, normalmente tienen propiedades cuyo nombre es `on` seguido del nombre del evento. Por ejemplo, elementos con la propiedad `onclick`.
A esto se le conoce como una propiedad para manejar eventos, o _event manager property_.
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
<button onclick="bgChange()">Haz click</button>
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

## Event objects

Sometimes, inside an event handler function, you'll see a parameter specified with a name such as `event`, `evt`, or `e`.
This is called the **event object**, and it is automatically passed to event handlers to provide extra features and information.
For example, let's rewrite our random color example again slightly:

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

> **Note:** You can find the [full source code](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) for this example on GitHub (also [see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Here you can see we are including an event object, **e**, in the function, and in the function setting a background color style on `e.target` — which is the button itself.
The `target` property of the event object is always a reference to the element the event occurred upon.
So, in this example, we are setting a random background color on the button, not the page.

> **Note:** See the [Event delegation](#event_delegation) section below for an example where we use `event.target`.

> **Note:** You can use any name you like for the event object — you just need to choose a name that you can then use to reference it inside the event handler function.
> `e`/`evt`/`event` is most commonly used by developers because they are short and easy to remember.
> It's always good to be consistent — with yourself, and with others if possible.

### Extra properties of event objects

Most event objects have a standard set of properties and methods available on the event object; see the {{domxref("Event")}} object reference for a full list.

Some event objects add extra properties that are relevant to that particular type of event. For example, the {{domxref("Element/keydown_event", "keydown")}} event fires when the user presses a key. Its event object is a {{domxref("KeyboardEvent")}}, which is a specialized `Event` object with a `key` property that tells you which key was pressed:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)
);
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Try typing into the text box and see the output:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default.
The most common example is that of a web form, for example, a custom registration form.
When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right.
Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks.
Let's look at a simple example.

First, a simple HTML form that requires you to enter your first and last name:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
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

Now some JavaScript — here we implement a very simple check inside a handler for the [`submit`](/en-US/docs/Web/API/HTMLFormElement/submit_event) event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty.
If they are, we call the [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```

Obviously, this is pretty weak form validation — it wouldn't stop the user from validating the form with spaces or numbers entered into the fields, for example — but it is OK for example purposes.
The output is as follows:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> **Note:** For the full source code, see [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (also see it [running live](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) here).

## Event bubbling

Event bubbling describes how the browser handles events targeted at nested elements.

### Setting a listener on a parent element

Consider a web page like this:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Here the button is inside another element, a {{HTMLElement("div")}} element. We say that the `<div>` element here is the **parent** of the element it contains. What happens if we add a click event handler to the parent, then click the button?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

You'll see that the parent fires a click event when the user clicks the button:

```
You clicked on a DIV element
```

This makes sense: the button is inside the `<div>`, so when you click the button you're also implicitly clicking the element it is inside.

### Bubbling example

What happens if we add event listeners to the button _and_ the parent?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Let's try adding click event handlers to the button, its parent (the `<div>`), and the {{HTMLElement("body")}} element that contains both of them:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Bubbling example', '100%', 200, "", "") }}

You'll see that all three elements fire a click event when the user clicks the button:

```
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In this case:

- the click on the button fires first
- followed by the click on its parent (the `<div>` element)
- followed by the `<div>` element's parent (the `<body>` element).

We describe this by saying that the event **bubbles up** from the innermost element that was clicked.

This behavior can be useful and can also cause unexpected problems. In the next sections, we'll see a problem that it causes, and find the solution.

### Video player example

In this example our page contains a video, which is hidden initially, and a button labeled "Display video". We want the following interaction:

- When the user clicks the "Display video" button, show the box containing the video, but don't start playing the video yet.
- When the user clicks on the video, start playing the video.
- When the user clicks anywhere in the box outside the video, hide the box.

The HTML looks like this:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

It includes:

- a `<button>` element
- a `<div>` element which initially has a `class="hidden"` attribute
- a `<video>` element nested inside the `<div>` element.

We're using CSS to hide elements with the `"hidden"` class set.

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

The JavaScript looks like this:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

This adds three `'click'` event listeners:

- one on the `<button>`, which shows the `<div>` that contains the `<video>`
- one on the `<video>`, which starts playing the video
- one on the `<div>`, which hides the video

Let's see how this works:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

You should see that when you click the button, the box and the video it contains are shown. But then when you click the video, the video starts to play, but the box is hidden again!

The video is inside the `<div>` — it is part of it — so clicking the video runs _both_ the event handlers, causing this behavior.

### Fixing the problem with stopPropagation()

As we saw in the last section, event bubbling can sometimes create problems, but there is a way to prevent it.
The [`Event`](/en-US/docs/Web/API/Event) object has a function available on it called [`stopPropagation()`](/en-US/docs/Web/API/Event/stopPropagation) which, when called inside an event handler, prevents the event from bubbling up to any other elements.

We can fix our current problem by changing the JavaScript to this:

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

All we're doing here is calling `stopPropagation()` on the event object in the handler for the `<video>` element's `'click'` event. This will stop that event from bubbling up to the box. Now try clicking the button and then the video:

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
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

### Event capture

An alternative form of event propagation is _event capture_. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the _least nested_ element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the `capture` option in `addEventListener()`.

This example is just like the [bubbling example](#bubbling_example) we saw earlier, except that we have used the `capture` option:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

In this case, the order of messages is reversed: the `<body>` event handler fires first, followed by the `<div>` event handler, followed by the `<button>` event handler:

```
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Why bother with both capturing and bubbling? In the bad old days, when browsers were much less cross-compatible than now, Netscape only used event capturing, and Internet Explorer used only event bubbling. When the W3C decided to try to standardize the behavior and reach a consensus, they ended up with this system that included both, which is what modern browsers implement.

By default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time.

## Event delegation

In the last section, we looked at a problem caused by event bubbling and how to fix it. Event bubbling isn't just annoying, though: it can be very useful. In particular, it enables **event delegation**. In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

Let's go back to our first example, where we set the background color of the whole page when the user clicked a button. Suppose that instead, the page is divided into 16 tiles, and we want to set each tile to a random color when the user clicks that tile.

Here's the HTML:

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

We have a little CSS, to set the size and position of the tiles:

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

Now in JavaScript, we could add a click event handler for every tile. But a much simpler and more efficient option is to set the click event handler on the parent, and rely on event bubbling to ensure that the handler is executed when the user clicks on a tile:

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
  (event) => (event.target.style.backgroundColor = bgChange())
);
```

The output is as follows (try clicking around on it):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> **Note:** In this example, we're using `event.target` to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use `event.currentTarget`.

> **Note:** See [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) for the full source code; also see it [running live](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) here.

## It's not just web pages

Events are not unique to JavaScript — most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way.
In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments.

For example, [Node.js](/en-US/docs/Learn/Server-side/Express_Nodejs) is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications.
The [Node.js event model](https://nodejs.org/api/events.html) relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like `on()` to register an event listener, and `once()` to register an event listener that unregisters after it has run once.
The [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) provide a good example.

You can also use JavaScript to build cross-browser add-ons — browser functionality enhancements — using a technology called [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).
The event model is similar to the web events model, but a bit different — event listeners' properties are camel-cased (such as `onMessage` rather than `onmessage`), and need to be combined with the `addListener` function.
See the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) page for an example.

You don't need to understand anything about other such environments at this stage in your learning; we just wanted to make it clear that events can differ in different programming environments.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? To verify you've retained this information before you move on — see [Test your skills: Events](/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events).

## Conclusion

You should now know all you need to know about web events at this early stage.
As mentioned, events are not really part of the core JavaScript — they are defined in browser Web APIs.

Also, it is important to understand that the different contexts in which JavaScript is used have different event models — from Web APIs to other areas such as browser WebExtensions and Node.js (server-side JavaScript).
We are not expecting you to understand all of these areas now, but it certainly helps to understand the basics of events as you forge ahead with learning web development.

If there is anything you didn't understand, feel free to read through the article again, or [contact us](https://discourse.mozilla.org/c/mdn/learn/250) to ask for help.

## See also

- [domevents.dev](https://domevents.dev/) — a very useful interactive playground app that enables learning about the behavior of the DOM Event system through exploration.
- [Event reference](/en-US/docs/Web/Events)
- [Event order](https://www.quirksmode.org/js/events_order.html) (discussion of capturing and bubbling) — an excellently detailed piece by Peter-Paul Koch.
- [Event accessing](https://www.quirksmode.org/js/events_access.html) (discussion of the event object) — another excellently detailed piece by Peter-Paul Koch.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
