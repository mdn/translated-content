---
title: setTimeout()
slug: Web/API/setTimeout
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("HTML DOM")}}

El método global **`setTimeout()`** establece un temporizador que ejecuta una función o una pieza de código específica una vez que expira el temporizador.

## Sintaxis

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
```

### Parámetros

- `functionRef`
  - : Una {{jsxref("function","función")}} que se ejecutará después de que expire el temporizador.
- `code`
  - : Una sintaxis alternativa que le permite incluir una cadena en lugar de una función, que se compila y ejecuta cuando expira el temporizador. Esta sintaxis **no se recomienda** por las mismas razones que hacen que el uso de {{jsxref("Global_Objects/eval", "eval()")}} sea un riesgo para la seguridad.
- `delay` {{optional_inline}}

  - : El tiempo, en milisegundos, que el temporizador debe esperar antes de que se ejecute la función o el código especificado. Si se omite este parámetro, se utiliza un valor de 0, lo que significa ejecutar "inmediatamente", o más exactamente, el siguiente ciclo de eventos.

    Tenga en cuenta que, en cualquier caso, la demora real puede ser mayor de lo previsto; consulte [Motivos de los retrasos superiores a los especificados](#motivos_de_los_retrasos_superiores_a_los_especificados) a continuación.

    También tenga en cuenta que si el valor no es un número, se realiza una [coerción](/es/docs/Glossary/Type_coercion) implícita silenciosamente en el valor para convertirlo en un número, lo que puede generar resultados inesperados y sorprendentes; consulte [Los valores de retardo no numéricos se transforman silenciosamente en números](#los_valores_de_retardo_no_numéricos_se_convierten_silenciosamente_en_números) para ver un ejemplo.

- `param1`, …, `paramN` {{optional_inline}}

  - : Argumentos adicionales que se pasan a través de la función especificada por `functionRef`.

### Valor devuelto

El `timeoutID` devuelto es un valor entero positivo que identifica el temporizador creado por la llamada a `setTimeout()`. Este valor se puede pasar a {{domxref("clearTimeout","clearTimeout()")}} para cancelar el tiempo de espera.

Se garantiza que un valor de `timeoutID` nunca será reutilizado por una llamada posterior a `setTimeout()` o `setInterval()` en el mismo objeto (una ventana o un _worker_). Sin embargo, los diferentes objetos usan grupos separados de ID.

## Descripción

Los tiempos de espera se cancelan usando {{domxref("clearTimeout()")}}.

Para llamar a una función repetidamente (por ejemplo, cada _N_ milisegundos), considere usar {{domxref("setInterval()")}}.

### Los valores de retardo no numéricos se convierten silenciosamente en números

Si se llama a `setTimeout()` con un valor de [_delay_](#delay) que no es un número, una [coerción](/es/docs/Glossary/Type_coercion) implícita se realiza silenciosamente en el valor para convertirlo en un número. Por ejemplo, el siguiente código usa incorrectamente la cadena `"1000"` para el valor _delay_, en lugar del número `1000`, pero aún así funciona, porque cuando se ejecuta el código, la cadena se convierte en el número `1000`. y así el código se ejecuta 1 segundo después.

```js example-bad
setTimeout(() => {
  console.log("Retrasado por 1 segundo.");
}, "1000");
```

Pero en muchos casos, la coerción de tipo implícito puede conducir a resultados inesperados y sorprendentes. Por ejemplo, cuando se ejecuta el siguiente código, la cadena `"1 segundo"` finalmente se convierte en el número `0` y, por lo tanto, el código se ejecuta inmediatamente, sin demora.

```js example-bad
setTimeout(() => {
  console.log("Retrasado por 1 segundo.");
}, "1 segundo");
```

Por lo tanto, no use cadenas para el valor de _delay_, sino que use siempre números:

```js example-good
setTimeout(() => {
  console.log("Retrasado por 1 segundo.");
}, 1000);
```

### Trabajando con funciones asíncronas

`setTimeout()` es una función asíncrona, lo que significa que la función del temporizador no pausará la ejecución de otras funciones en la pila de funciones.
En otras palabras, no puede usar `setTimeout()` para crear una "pausa" antes de que se active la siguiente función en la pila de funciones.

Vea el siguiente ejemplo:

```js
setTimeout(() => {
  console.log("este es el primer mensaje");
}, 5000);
setTimeout(() => {
  console.log("este es el segundo mensaje");
}, 3000);
setTimeout(() => {
  console.log("este es el tercer mensaje");
}, 1000);

// Salida:

// este es el tercer mensaje
// este es el segundo mensaje
// este es el primer mensaje
```

Tenga en cuenta que la primera función no crea una "pausa" de 5 segundos antes de llamar a la segunda función. En su lugar, se llama a la primera función, pero espera 5 segundos para ejecutarse.
Mientras la primera función está esperando para ejecutarse, se llama a la segunda función y se aplica una espera de 3 segundos a la segunda función antes de que se ejecute.
Dado que ni los temporizadores de la primera ni la segunda función se han completado, se llama a la tercera función y completa su ejecución primero. Luego sigue el segundo.
Luego, finalmente, la primera función se ejecuta después de que finalmente se completa su temporizador.

Para crear una progresión en la que una función solo se dispara después de la finalización de otra función, consulte la documentación de [Promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### El problema de "this"

Cuando pasa un método a `setTimeout()`, se invocará con un valor `this` que puede diferir de sus expectativas. El tema general se explica detalladamente en la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method).

El código ejecutado por `setTimeout()` se llama desde un contexto de ejecución separado de la función desde la que se llamó a `setTimeout`.
Se aplican las reglas habituales para configurar la palabra clave `this` para la función llamada, y si no ha configurado `this` en la llamada o con `bind`, se establecerá por defecto en el objeto `window` (o `global`). No será lo mismo que el valor `this` para la función que llamó a `setTimeout`.

Vea el siguiente ejemplo:

```js
const myArray = ["cero", "uno", "dos"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // muestra "cero,uno,dos"
myArray.myMethod(1); // muestra "uno"
```

Lo anterior funciona porque cuando se llama a `myMethod`, `this` se establece en `myArray` mediante la llamada, por lo que dentro de la función, `this[sProperty]` es equivalente a `myArray[sProperty]`. Sin embargo, en lo siguiente:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // muestra "[object Window]" después de 1 segundo
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // muestra "undefined" después de 1.5 segundos
```

La función `myArray.myMethod` se pasa a `setTimeout`, luego, cuando se llama, `this` no está configurado, por lo que se establece de manera predeterminada en el objeto `window`.

Tampoco existe la opción de pasar un `thisArg` a `setTimeout` como ocurre en los métodos Array como {{jsxref("Array.forEach()", "forEach()")}} y {{jsxref("Array.reduce()", "reduce()")}}. Como se muestra a continuación, usar `call` para configurar `this` tampoco funciona.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // mismo error
```

#### Soluciones

##### Usar una función contenedora

Una forma común de resolver el problema es usar una función contenedora que establece `this` en el valor requerido:

```js
setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // muestra "cero,uno,dos" después de 2 segundos
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // muestra "uno" después de 2.5 segundos
```

La función contenedora puede ser una función de flecha:

```js
setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // muestra "cero,uno,dos" después de 2 segundos
setTimeout(() => {
  myArray.myMethod("1");
}, 2.5 * 1000); // muestra "uno" después de 2.5 segundos
```

##### Usar bind()

Alternativamente, puede usar {{jsxref("Function.bind()", "bind()")}} para establecer el valor de `this` para todas las llamadas a una función determinada:

```js
const myArray = ["cero", "uno", "dos"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // muestra "cero,uno,dos" ya que 'this' está vinculado a myArray en la función
myBoundMethod(1); // muestra "uno"
setTimeout(myBoundMethod, 1.0 * 1000); // sigue mostrando "cero,uno,dos" después de 1 segundo debido a que está vinculado
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // muestra "uno" después de 1.5 segundos
```

### Pasar cadenas

Pasar una cadena en lugar de una función a `setTimeout()` tiene los mismos problemas que usar [`eval()`](/es/docs/Web/JavaScript/Reference/Global_Objects/eval).

```js example-bad
// No hacer esto
setTimeout("console.log('¡Hola mundo!');", 500);
```

```js example-good
// Hacer esto en su lugar
setTimeout(() => {
  console.log("¡Hola mundo!");
}, 500);
```

Una cadena pasada a {{domxref("setTimeout()")}} se evalúa en el contexto global, por lo que los símbolos locales en el contexto donde se llamó a {{domxref("setTimeout()")}} no estarán disponibles cuando la cadena se evalúa como código.

### Motivos de los retrasos superiores a los especificados

Hay una serie de razones por las que un tiempo de espera puede tardar más de lo previsto en activarse.
Esta sección describe las razones más comunes.

#### Tiempos de espera anidados

Como se especifica en el [estándar HTML](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers), los navegadores impondrán un tiempo de espera mínimo de 4 milisegundos una vez que una llamada anidada a `setTimeout` se ha programado 5 veces.

Esto se puede ver en el siguiente ejemplo, en el que anidamos una llamada a `setTimeout` con un retraso de `0` milisegundos, y registramos el retraso cada vez que se llama al manejador. Las primeras cuatro veces, el retraso es de aproximadamente 0 milisegundos, y después de eso, es de aproximadamente 4 milisegundos:

```html
<button id="run">Ejecutar</button>
<table>
  <thead>
    <tr>
      <th>Anterior</th>
      <th>Éste</th>
      <th>Retraso actual</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // registra la hora de esta llamada
  logline(new Date().getMilliseconds());
  // si no ha terminado, programa la próxima llamada
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // borrar el registro
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // inicializar el recuento de iteraciones y la marca de tiempo de inicio
  iterations = 10;
  last = new Date().getMilliseconds();
  // temporizador de inicio
  setTimeout(timeout, 0);
}

function logline(now) {
  // registrar la última marca de tiempo, la nueva marca de tiempo y la diferencia
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("", 100, 420)}}

#### Tiempos de espera en pestañas inactivas

Para reducir la carga (y el uso de batería asociado) de las pestañas en segundo plano, los navegadores impondrán un tiempo de espera mínimo en las pestañas inactivas. También se puede renunciar si una página está reproduciendo sonido usando una API de audio web {{domxref("AudioContext")}}.

Los detalles de esto dependen del navegador:

- Firefox Desktop y Chrome tienen un tiempo de espera mínimo de 1 segundo para pestañas inactivas.
- Firefox para Android tiene un tiempo de espera mínimo de 15 minutos para las pestañas inactivas y puede limpiarla por completo.
- Firefox no acelera las pestañas inactivas si la pestaña contiene un {{domxref("AudioContext")}}.

#### Limitación de scripts de seguimiento

Firefox impone una limitación adicional para las secuencias de comandos que reconoce como secuencias de comandos de seguimiento.
Cuando se ejecuta en primer plano, el retraso mínimo de limitación sigue siendo de 4 ms. Sin embargo, en las pestañas en segundo plano, el retraso mínimo de limitación es de 10 000 ms, o 10 segundos, que entra en vigor 30 segundos después de que se haya cargado un documento por primera vez.

Consulte [Protección de rastreo](https://wiki.mozilla.org/Security/Tracking_protection) para obtener más detalles.

#### Tiempos de espera tardíos

El tiempo de espera también puede activarse más tarde de lo esperado si la página (o el sistema operativo/navegador) está ocupado con otras tareas.
Un caso importante a tener en cuenta es que la función o el fragmento de código no se puede ejecutar hasta que el hilo que llamó `setTimeout()` haya terminado. Por ejemplo:

```js
function foo() {
  console.log("foo ha sido llamado");
}
setTimeout(foo, 0);
console.log("Después de setTimeout");
```

Escribirá en la consola:

```
Después de setTimeout
foo ha sido llamado
```

Esto se debe a que, aunque se llamó a `setTimeout` con un retraso de cero, se coloca en una cola y se programa para ejecutarse en la próxima oportunidad; no inmediatamente.
El código que se está ejecutando actualmente debe completarse antes de que se ejecuten las funciones en la cola, por lo que el orden de ejecución resultante puede no ser el esperado.

#### Aplazamiento de tiempos de espera durante la carga de la página

Firefox aplazará la activación de los temporizadores `setTimeout()` mientras se carga la pestaña actual. La activación se difiere hasta que el subproceso principal se considera inactivo (similar a [window.requestIdleCallback()](/es/docs/Web/API/Window/requestIdleCallback)), o hasta que se activa el evento de carga.

### Temporizadores y páginas de WebExtension

En [WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions), `setTimeout()` no funciona de forma fiable. Los autores de extensiones deben usar la API [`alarms`](/es/docs/Mozilla/Add-ons/WebExtensions/API/alarms) en su lugar.

### Valor de retardo máximo

Los navegadores almacenan internamente el retraso como un entero con signo de 32 bits. Esto provoca un desbordamiento de enteros cuando se utilizan retrasos superiores a 2 147 483 647 ms (alrededor de 24,8 días), lo que hace que el tiempo de espera se ejecute inmediatamente.

## Ejemplo

### Configuración y borrado de tiempos de espera

El siguiente ejemplo configura dos botones simples en una página web y los vincula a las rutinas `setTimeout()` y `clearTimeout()`. Al presionar el primer botón, se establecerá un tiempo de espera que muestra un mensaje después de dos segundos y almacena la identificación del tiempo de espera para que la use `clearTimeout()`. Opcionalmente, puede cancelar este tiempo de espera presionando el segundo botón.

#### HTML

```html
<button onclick="delayedMessage();">
  Mostrar un mensaje después de dos segundos
</button>
<button onclick="clearMessage();">Cancelar mensaje antes de que suceda</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "¡Eso fue muy lento!");
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### Resultado

{{EmbedLiveSample('Configuración_y_borrado_de_tiempos_de_espera')}}

Ver también el [ejemplo `clearTimeout()`](/es/docs/Web/API/clearTimeout#example).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `setTimeout` que permite pasar argumentos a la devolución de llamada en `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("clearTimeout")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
- {{domxref("queueMicrotask()")}}
