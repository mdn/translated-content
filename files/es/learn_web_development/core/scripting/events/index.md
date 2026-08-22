---
title: Introducción a los eventos
short-title: Eventos
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Los eventos son cosas que ocurren en el sistema que estás programando, y que el sistema te notifica para que tu código pueda reaccionar a ellos.
Por ejemplo, si haces clic en un botón de una página web, podrías querer reaccionar a esa acción mostrando un cuadro de información.
En este artículo veremos algunos conceptos importantes sobre los eventos, y analizaremos los fundamentos de cómo funcionan en los navegadores.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>Comprensión de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, además de familiaridad con los conceptos básicos de JavaScript vistos en lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Qué son los eventos: una señal que emite el navegador cuando ocurre algo importante, a la que el desarrollador puede responder ejecutando código.</li>
          <li>Cómo configurar manejadores de eventos usando <code>addEventListener()</code> (y <code>removeEventListener()</code>) y mediante propiedades de manejador de eventos.</li>
          <li>Los atributos de manejador de eventos en línea, y por qué no deberías usarlos.</li>
          <li>Los objetos evento.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un evento?

Los eventos son cosas que suceden en el sistema que estás programando: el sistema produce (o "lanza") una señal de algún tipo cuando ocurre un evento, y ofrece un mecanismo para que una acción se ejecute automáticamente (es decir, ejecutar algún código) cuando ocurre el evento.
Los eventos se lanzan dentro de la ventana del navegador y suelen estar asociados a un elemento específico dentro de ella. Puede tratarse de un solo elemento, un conjunto de elementos, el documento HTML cargado en la pestaña actual, o toda la ventana del navegador.
Existen muchos tipos distintos de eventos que pueden ocurrir.

Por ejemplo:

- El usuario selecciona, hace clic o pasa el cursor sobre un elemento determinado.
- El usuario presiona una tecla del teclado.
- El usuario cambia el tamaño o cierra la ventana del navegador.
- Una página web termina de cargarse.
- Se envía un formulario.
- Un vídeo se reproduce, se pausa o termina.
- Ocurre un error.

A partir de esto (y echando un vistazo al [índice de eventos](/es/docs/Web/API/Document_Object_Model/Events#event_index)) puedes ver que existen **muchos** eventos que se pueden lanzar.

Para reaccionar a un evento, le asocias un **detector de eventos**. Se trata de una funcionalidad del código que detecta el evento que se lanza. Cuando el evento se lanza, se llama a una función **manejadora de eventos** (referenciada por el detector de eventos, o contenida dentro de él) para responder a dicho evento. Cuando configuramos un bloque de código de este tipo para que se ejecute en respuesta a un evento, decimos que estamos **registrando un manejador de eventos**.

### Un ejemplo: manejar un evento de clic

En el siguiente ejemplo, tenemos un único {{htmlelement("button")}} en la página:

```html
<button>Cambiar el color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Luego tenemos algo de JavaScript. Lo veremos con más detalle en la siguiente sección, pero por ahora basta con decir que: agrega un detector de eventos al evento `"click"` del botón, y la función manejadora de eventos contenida reacciona al evento estableciendo un color de fondo aleatorio en la página:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

El resultado del ejemplo es el siguiente. Intenta hacer clic en el botón:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Uso de addEventListener()

Como vimos en el ejemplo anterior, los objetos que pueden lanzar eventos tienen un método {{domxref("EventTarget/addEventListener", "addEventListener()")}}, y este es el mecanismo recomendado para agregar detectores de eventos.

Veamos más de cerca el código del ejemplo anterior:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

El elemento HTML {{HTMLElement("button")}} lanzará un evento `click` cuando el usuario haga clic en él. Llamamos al método `addEventListener()` sobre ese elemento para agregarle un detector de eventos; este método recibe dos parámetros:

- la cadena `"click"`, para indicar que queremos detectar el evento `click`. Los botones pueden lanzar muchos otros eventos, como [`"mouseover"`](/es/docs/Web/API/Element/mouseover_event) cuando el usuario mueve el ratón sobre el botón, o [`"keydown"`](/es/docs/Web/API/Element/keydown_event) cuando el usuario presiona una tecla y el botón está enfocado.
- una función que se llamará cuando ocurra el evento. En nuestro caso, la función anónima que definimos genera un color RGB aleatorio y establece el {{cssxref("background-color")}} de la página [`<body>`](/es/docs/Web/HTML/Reference/Elements/body) con ese color.

También podrías crear una función independiente con nombre propio, y hacer referencia a ella en el segundo parámetro de `addEventListener()`, de esta forma:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

### Detectar otros eventos

Existen muchos eventos diferentes que puede lanzar un elemento de tipo botón. Experimentemos.

Primero, haz una copia local de [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) y ábrelo en tu navegador.
Es solo una copia del ejemplo sencillo del color aleatorio con el que ya hemos trabajado antes. Ahora intenta cambiar `click` por cada uno de los siguientes valores, y observa los resultados en el ejemplo:

- [`focus`](/es/docs/Web/API/Element/focus_event) y [`blur`](/es/docs/Web/API/Element/blur_event) — El color cambia cuando el botón se enfoca y se desenfoca; intenta presionar la tecla Tabulador para enfocar el botón, y presiónala de nuevo para desenfocarlo.
  Estos eventos se utilizan a menudo para mostrar información al completar campos de un formulario, o para mostrar un mensaje de error si un campo recibe un valor incorrecto.
- [`dblclick`](/es/docs/Web/API/Element/dblclick_event) — El color cambia solo cuando se hace doble clic en el botón.
- [`mouseover`](/es/docs/Web/API/Element/mouseover_event) y [`mouseout`](/es/docs/Web/API/Element/mouseout_event) — El color cambia cuando el puntero del ratón pasa por encima del botón, o cuando sale de él, respectivamente.

Algunos eventos, como `click`, están disponibles en prácticamente cualquier elemento, mientras que otros son más específicos y solo resultan útiles en ciertas situaciones: por ejemplo, el evento [`play`](/es/docs/Web/API/HTMLMediaElement/play_event) solo está disponible en elementos con funcionalidad de reproducción, como {{htmlelement("video")}}.

### Eliminar detectores

Si has agregado un detector de eventos con `addEventListener()`, puedes eliminarlo si lo deseas. La forma más común de hacerlo es mediante el método [`removeEventListener()`](/es/docs/Web/API/EventTarget/removeEventListener). Por ejemplo, la siguiente línea eliminaría el manejador del evento `click` que vimos antes:

```js
btn.removeEventListener("click", changeBackground);
```

Para programas pequeños y sencillos, no es necesario limpiar los manejadores de eventos que ya no se usan, pero en programas más grandes y complejos puede mejorar la eficiencia.
Además, la posibilidad de eliminar manejadores de eventos permite que el mismo botón realice diferentes acciones en diferentes circunstancias: solo tienes que agregar o eliminar manejadores.

### Agregar varios detectores para un solo evento

Al hacer más de una llamada a {{domxref("EventTarget/addEventListener()", "addEventListener()")}}, proporcionando diferentes manejadores, puedes tener varias funciones manejadoras ejecutándose en respuesta a un mismo evento:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Ambas funciones se ejecutarían al hacer clic en el elemento.

## Otros mecanismos para detectar eventos

Te recomendamos que utilices `addEventListener()` para registrar manejadores de eventos. Es el método más potente y el que mejor escala en programas más complejos. Sin embargo, existen otras dos formas de registrar manejadores de eventos que podrías encontrar: _propiedades de manejador de eventos_ y _manejadores de eventos en línea_.

### Propiedades de manejador de eventos

Los objetos que pueden lanzar eventos (como los botones) normalmente también tienen propiedades cuyo nombre es `on` seguido del nombre del evento. Por ejemplo, los elementos tienen una propiedad `onclick`.
Esto se denomina **propiedad de manejador de eventos**. Para detectar el evento, puedes asignar la función manejadora de eventos a esa propiedad.

Por ejemplo, podríamos reescribir el ejemplo del color aleatorio de esta forma:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

También puedes establecer la propiedad manejadora en una función con nombre:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

Las propiedades de manejador de eventos tienen desventajas en comparación con `addEventListener()`. Una de las más importantes es que no puedes [agregar más de un detector para un mismo evento](#agregar_varios_detectores_para_un_solo_evento). El siguiente patrón no funciona, porque cualquier intento posterior de establecer el valor de la propiedad sobrescribirá los anteriores:

```js
element.onclick = function1;
element.onclick = function2;
```

### Manejadores de eventos en línea: no utilices estos

También podrías ver un patrón como este en tu código:

```html example-bad
<button onclick="bgChange()">Haz clic</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

El método más antiguo para registrar manejadores de eventos que se encuentra en la Web implicaba [_atributos HTML de manejador de eventos_](/es/docs/Web/HTML/Reference/Attributes#event_handler_attributes)(o _manejadores de eventos en línea_), como el que se muestra arriba: el valor del atributo contiene el código JavaScript que quieres ejecutar cuando ocurre el evento.
El ejemplo anterior invoca una función definida dentro de un elemento {{htmlelement("script")}} en la misma página, pero también podrías insertar JavaScript directamente dentro del atributo, por ejemplo:

```html example-bad
<button onclick="alert('¡Hola, este es un manejador de eventos anticuado!');">
  Haz clic
</button>
```

Puedes encontrar atributos HTML equivalentes para muchas de las propiedades de manejador de eventos; sin embargo, no deberías usarlos, ya que se consideran una mala práctica.
Puede parecer fácil usar un atributo de manejador de eventos cuando estás haciendo algo rápido y sencillo, pero pronto se vuelven inmanejables e ineficientes.

Para empezar, no es buena idea mezclar tu HTML con tu JavaScript, ya que dificulta la lectura del código. Mantener tu JavaScript por separado es una buena práctica y, si está en un archivo aparte, puedes aplicarlo a varios documentos HTML.

Incluso en un solo archivo, los manejadores de eventos en línea no son buena idea.
Un botón está bien, pero ¿qué pasaría si tuvieras 100 botones? Tendrías que agregar 100 atributos al archivo, y rápidamente se convertiría en una pesadilla de mantenimiento.
Con JavaScript, puedes agregar fácilmente una función manejadora de eventos a todos los botones de la página sin importar cuántos haya, usando algo como esto:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Por último, muchas configuraciones de servidor comunes deshabilitarán el JavaScript en línea, como medida de seguridad.

**Nunca deberías usar los atributos de manejador de eventos HTML** — están obsoletos y usarlos es una mala práctica.

## Objetos evento

A veces, dentro de una función manejadora de eventos, verás un parámetro especificado con un nombre como `event`, `evt` o `e`.
A esto se le conoce como el **objeto evento**, y se pasa automáticamente a los manejadores de eventos para proporcionarles características e información adicionales.
Por ejemplo, vamos a reescribir nuestro ejemplo de color aleatorio para incluir un objeto evento:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> [!NOTE]
> Puedes encontrar el [código fuente completo](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) de este ejemplo en GitHub (además, [verlo funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Aquí puedes ver que estamos incluyendo un objeto evento, **e**, en la función, y en la función estamos estableciendo un estilo de color de fondo en `e.target`, que es el botón en sí.
La propiedad `target` del objeto evento siempre es una referencia al elemento sobre el que se produjo el evento.
Por lo tanto, en este ejemplo estamos estableciendo un color de fondo aleatorio en el botón, no en la página.

> [!NOTE]
> Puedes usar el nombre que prefieras para el objeto evento; solo debes elegir uno al que puedas hacer referencia dentro de la función manejadora de eventos.
> `e`, `evt` y `event` son los nombres más utilizados por los desarrolladores porque son cortos y fáciles de recordar.
> Siempre es recomendable ser consistente, tanto contigo mismo como, en la medida de lo posible, con los demás.

### Propiedades adicionales de los objetos evento

La mayoría de los objetos evento tienen un conjunto estándar de propiedades y métodos disponibles; consulta la referencia del objeto {{domxref("Event")}} para ver la lista completa.

Algunos objetos evento agregan propiedades adicionales relevantes para ese tipo de evento en particular. Por ejemplo, el evento {{domxref("Element/keydown_event", "keydown")}} se lanza cuando el usuario presiona una tecla. Su objeto evento es un {{domxref("KeyboardEvent")}}, que es un objeto `Event` especializado con una propiedad `key` que indica qué tecla se presionó:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `Presionaste "${event.key}".`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Intenta escribir en el cuadro de texto y observa el resultado:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Evitar el comportamiento por defecto

En ocasiones, te encontrarás con una situación en la que quieres evitar que un evento haga lo que hace por defecto.
El ejemplo más común es el de un formulario web, por ejemplo, un formulario de registro personalizado.
Cuando completas los campos y haces clic en el botón de envío, lo normal es que los datos se envíen a una página específica del servidor para su procesamiento, y que el navegador te redirija a una página de "mensaje de éxito" de algún tipo (o a la misma página, si no se especifica otra).

El problema surge cuando el usuario no ha enviado los datos correctamente: como desarrollador, quieres evitar el envío al servidor y mostrar un mensaje de error que indique qué está mal y qué hay que hacer para corregirlo.
Algunos navegadores admiten funciones de validación automática de datos de formularios, pero como muchos no lo hacen, te recomendamos no depender de ellas e implementar tus propias comprobaciones de validación.
Veamos un ejemplo.

Primero, un formulario HTML sencillo que te pide que introduzcas tu nombre y tu apellido:

```html
<form action="#">
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

Ahora un poco de JavaScript: aquí implementamos una comprobación básica dentro de un manejador para el evento [`submit`](/es/docs/Web/API/HTMLFormElement/submit_event) (el evento submit se lanza en un formulario cuando este se envía) que comprueba si los campos de texto están vacíos.
Si lo están, llamamos a la función [`preventDefault()`](/es/docs/Web/API/Event/preventDefault) sobre el objeto evento —lo que detiene el envío del formulario— y mostramos un mensaje de error en el párrafo debajo del formulario para indicarle al usuario cuál es el problema:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "¡Debes completar ambos nombres!";
  }
});
```

Obviamente, esta es una validación de formulario bastante débil —no evitaría, por ejemplo, que el usuario validara el formulario con espacios en blanco o números en los campos—, pero sirve a modo de ejemplo.

Puedes ver el ejemplo completo [funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html); pruébalo ahí. Para consultar el código fuente completo, visita [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## No es solo en páginas web

Los eventos no son exclusivos de JavaScript: la mayoría de los lenguajes de programación tienen algún tipo de modelo de eventos, y su funcionamiento suele ser distinto al de JavaScript.
De hecho, el modelo de eventos de JavaScript en páginas web es diferente del modelo de eventos de JavaScript usado en otros entornos.

Por ejemplo, [Node.js](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) es un entorno de ejecución de JavaScript muy popular que permite a los desarrolladores crear aplicaciones de red y del lado del servidor.
El [modelo de eventos de Node.js](https://nodejs.org/api/events.html) se basa en detectores que escuchan eventos y emisores que los emiten periódicamente; no suena tan distinto, pero el código es bastante diferente, ya que usa funciones como `on()` para registrar un detector de eventos, y `once()` para registrar uno que se elimina después de ejecutarse una vez.
La [documentación sobre el evento connect de HTTP en Node.js](https://nodejs.org/api/http.html#event-connect) ofrece un buen ejemplo.

También puedes usar JavaScript para crear complementos multinavegador —mejoras de funcionalidad del navegador— utilizando una tecnología llamada [WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions).
El modelo de eventos es similar al modelo de eventos web, pero un poco diferente: las propiedades de los detectores de eventos se escriben en {{Glossary("camel_case", "camel case")}} (por ejemplo, `onMessage` en lugar de `onmessage`), y deben combinarse con la función `addListener`.
Consulta la página de [`runtime.onMessage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) para ver un ejemplo.

No necesitas entender nada sobre estos otros entornos en esta etapa de tu aprendizaje; solo queríamos dejar claro que los eventos pueden variar según el entorno de programación.

## Resumen

En este capítulo hemos aprendido qué son los eventos, cómo detectarlos y cómo responder a ellos.

Ya habrás visto que los elementos de una página web pueden estar anidados dentro de otros elementos. Por ejemplo, en el ejemplo de [Evitar el comportamiento por defecto](#evitar_el_comportamiento_por_defecto), tenemos algunos campos de texto ubicados dentro de elementos {{htmlelement("div")}}, que a su vez están ubicados dentro de un elemento {{htmlelement("form")}}. ¿Qué ocurre cuando se asocia un detector del evento click al elemento `<form>` y el usuario haga clic dentro de uno de los campos de texto? La función manejadora de eventos asociada se sigue disparando gracias a un proceso llamado _burbujeo de eventos_ (_event bubbling_), que se tratará en la siguiente lección.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}
