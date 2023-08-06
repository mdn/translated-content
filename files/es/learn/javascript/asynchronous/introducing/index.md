---
title: Introducción a JavaScript asíncrono
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

En este artículo, explicaremos qué es la programación asíncrona, por qué la necesitamos, y discutiremos brevemente algunas de las formas en que las funciones asíncronas se han implementado históricamente en JavaScript.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos</th>
      <td>
        Conocimientos básicos de informática así como una comprensión razonable de los fundamentos de JavaScript, incluyendo funciones y manejadores de eventos.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con lo que es JavaScript asíncrono, en qué se diferencia de JavaScript síncrono y por qué lo necesitamos.
      </td>
    </tr>
  </tbody>
</table>

La programación asíncrona es una técnica que permite a tu programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado.
Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.

Muchas de las funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden tardar mucho tiempo en ejecutarse. Es precisamente por eso por lo que esas funciones son asíncronas. Por ejemplo:

- Realizar peticiones HTTP utilizando {{domxref("fetch()")}}
- Acceder a la cámara o micrófono de un usuario mediante {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}
- Pedir a un usuario que seleccione archivos usando {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}}

Por lo tanto, aunque no tenga que implementar sus propias funciones asíncronas muy a menudo, necesitará utilizarlas correctamente.

En este artículo, comenzaremos viendo el problema de las funciones síncronas de larga duración, que hacen que la programación asíncrona sea una necesidad.

## Programación síncrona

Considere el siguiente código:

```js
const name = "Miriam";
const greeting = `¡Hola, mi nombre es ${name}!`;
console.log(greeting);
// "¡Hola, mi nombre es Miriam!"
```

Este código:

1. Declara una cadena (string) con el nombre `name`.
2. Declara otra cadena con el nombre `greeting`, que utiliza `name`.
3. Envía a la consola JavaScript el saludo.

Debemos notar aquí que el navegador recorre el programa línea a línea, en el mismo orden en que nosotros lo escribimos. En cada punto, el navegador espera a que la línea termine su trabajo antes de pasar a la siguiente línea. Tiene que hacer esto porque cada línea depende del trabajo realizado en las líneas precedentes.

Esto hace que este sea un **programa síncrono**. Seguiría siendo síncrono incluso si llamáramos a una función separada, como aquí:

```js
function makeGreeting(name) {
  return `¡Hola, mi nombre es ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "¡Hola, mi nombre es Miriam!"
```

En este caso, `makeGreeting` es una **función síncrona** porque quién la llama (`greeting`) tiene que esperar a que la función termine su trabajo y devuelva un valor antes poder continuar.

### Una función síncrona de larga duración

¿Y si la función síncrona tarda mucho tiempo?

El programa que se muestra a continuación utiliza un algoritmo muy ineficiente para generar múltiples números primos grandes cuando un usuario hace clic en el botón "Generar números primos". Cuanto mayor sea la cantidad de números primos que especifique el usuario, más tardará la operación.

```html
<label for="quota">Cantidad de números primos:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generar números primos</button>
<button id="reload">Recargar</button>

<div id="output"></div>
```

```js
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `¡Finalizado! se han generado ${quota.value} números primos`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

Pruebe a hacer clic en "Generar números primos". Dependiendo de la velocidad de su ordenador, es probable que el programa tarde unos segundos en mostrar el mensaje "¡Finalizado!"

### El problema de las funciones sincrónicas de larga duración

El siguiente ejemplo es igual que el anterior, excepto que hemos añadido un cuadro de texto para que escriba en él. Esta vez, haga clic en "Generar primos", y trate de escribir en el cuadro de texto inmediatamente después.

Verás que mientras nuestra función `generatePrimes()` se está ejecutando, nuestro programa no responde en absoluto: no puedes escribir nada, ni hacer clic, ni nada más.

```html hidden
<label for="quota">Cantidad de números primos:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generar números primos</button>
<button id="reload">Recargar</button>

<textarea id="user-input" rows="5" cols="62">
  Prueba a escribir algo aquí inmediatamente después de presionar el botón "Generar números primos"
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `¡Finalizado! se han generado ${quota.value} números primos`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

Este es el problema básico de las funciones síncronas de larga duración. Necesitamos buscar una forma de que nuestro programa:

1. Inicie una operación de larga duración llamando a una función.
2. Haga que esa función inicie la operación y regrese inmediatamente, de manera que nuestro programa pueda seguir respondiendo a otros eventos.
3. Notifique el resultado de la operación cuando se complete.

Eso es precisamente lo que pueden hacer las funciones asíncronas. El resto de este módulo explica cómo se implementan en JavaScript.

## Manejador de eventos

La descripción que acabamos de ver de las funciones asíncronas podría recordarte a los manejadores de eventos, y si es así, tendrías razón. Los manejadores de eventos son, en realidad, una forma de programación asíncrona: proporcionas una función (el manejador de eventos) que será llamada, no de inmediato, sino cuando ocurra el evento. Si "el evento" es: "la operación asíncrona se ha completado", entonces ese evento podría usarse para notificar el resultado de una llamada a una función asíncrona.

Algunas de las primeras APIs asíncronas utilizaban eventos de esta manera. La API {{domxref("XMLHttpRequest")}} le permite hacer peticiones HTTP a un servidor remoto usando JavaScript. Dado que esto puede llevar mucho tiempo, esta es una API asíncrona, y se le notifica el progreso y la finalización de una solicitud adjuntando oyentes de eventos al objeto `XMLHttpRequest`.

El siguiente ejemplo muestra esto en acción. Pulsamos "Pulse para iniciar la solicitud" para enviar una petición. Creamos un nuevo {{domxref("XMLHttpRequest")}} y escuchamos su evento {{domxref("XMLHttpRequest/loadend_event", "loadend")}}. El manejador registra un mensaje "¡Finalizado!" junto con el código de estado.

Después de añadir el escuchador de eventos enviamos la petición. Obsérvese que después de esto, podemos registrar "Inicio de la solicitud XHR": es decir, nuestro programa puede seguir ejecutándose mientras la petición está en marcha, y nuestro manejador de eventos será llamado cuando la petición se complete.

```html
<button id="xhr">Pulse para iniciar la solicitud</button>
<button id="reload">Recargar</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finalizado con el estado: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Inicio de la solicitud XHR\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

Esto es igual que los [manejadores de eventos que hemos encontrado en un módulo anterior](/es-US/docs/Learn/JavaScript/Building_blocks/Events), excepto que en lugar de que el evento sea una acción del usuario, como que el usuario haga clic en un botón, el evento es un cambio en el estado de algún objeto.

## Callbacks (devoluciones de llamada)

Un manejador de eventos es un tipo particular de devolución de llamada. Un _callback_ es simplemente una función que se pasa a otra función, con la expectativa de que el _callback_ sea llamado en el momento apropiado. Como acabamos de ver, las devoluciones de llamada solían ser la principal forma de implementar funciones asíncronas en JavaScript.

Sin embargo, el código basado en _callbacks_ puede volverse difícil de entender cuando el propio _callback_ tiene que llamar a funciones que aceptan un _callback_. Esta es una situación común si necesitas realizar alguna operación que se descompone en una serie de funciones asíncronas. Por ejemplo, considere lo siguiente:

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`resultado: ${result}`);
}

doOperation();
```

Aquí tenemos una sola operación que se divide en tres pasos, donde cada paso depende del último. En nuestro ejemplo, el primer paso añade 1 a la entrada, el segundo añade 2 y el tercero añade 3. Partiendo de una entrada de 0, el resultado final es 6 (0 + 1 + 2 + 3). Como programa síncrono, esto es muy sencillo. ¿Pero qué pasaría si implementáramos los pasos utilizando callbacks?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`resultado: ${result3}`);
      });
    });
  });
}

doOperation();
```

Debido a que tenemos que llamar a _callbacks_ dentro de _callbacks_, obtenemos una función `doOperation()` profundamente anidada, que es mucho más difícil de leer y depurar. Esto, a veces es llamado "callback hell" (el infierno de las devoluciones de llamada) o la "pirámide de la perdición" (porque la indentación parece una pirámide de lado).

Cuando anidamos devoluciones de llamada de esta manera, también puede ser muy difícil manejar errores: a menudo tienes que manejar los errores en cada nivel de la "pirámide", en lugar de poder manejarlos sólo una vez en el nivel superior.

Por estas razones, la mayoría de las APIs asíncronas modernas no utilizan _callbacks_. En su lugar, la base de la programación asíncrona en JavaScript es la {{jsxref("Promise")}}, y ese es el tema del siguiente artículo.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
