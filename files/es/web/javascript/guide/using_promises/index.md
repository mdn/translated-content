---
title: Usar promesas
slug: Web/JavaScript/Guide/Using_promises
---

{{jsSidebar("JavaScript Guide")}}

Una {{jsxref("Promise")}} (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen `promises` ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.

Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones `callback`, en lugar de pasar callbacks a una función.

Considera la función `crearArchivoAudioAsync()`, la cual genera de manera asíncrona un archivo de sonido de acuerdo a un archivo de configuración, y dos funciones callback, una que es llamada si el archivo de audio es creado satisfactoriamente, y la otra que es llamada si ocurre un error. El código podría verse de la siguiente forma:

```js
function exitoCallback(resultado) {
  console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
  console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
```

... las funciones modernas devuelven un objeto `promise` al que puedes adjuntar funciones de retorno (callbacks). Si `crearArchivoAudioAsync` fuera escrita de manera tal que devuelva un objeto `promise`, usarla sería tan simple como esto:

```js
crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);
```

Lo cual es la versión corta de:

```js
const promesa = crearArchivoAudioAsync(audioConfig);
promesa.then(exitoCallback, falloCallback);
```

Llamamos a esto una _llamada a función asíncrona_. Esta convención tiene varias ventajas. Exploraremos cada una de ellas.

## Garantías

A diferencia de las funciones callback pasadas al "viejo estilo", una promesa viene con algunas garantías:

- Las funciones callback nunca serán llamadas antes de la [terminación de la ejecución actual](/es/docs/Web/JavaScript/EventLoop#Ejecutar_hasta_completar) del bucle de eventos de JavaScript.
- Las funciones callback añadidas con `then()` incluso después del éxito o fracaso de la operación asíncrona serán llamadas como se mostró anteriormente.
- Múltiples funciones callback pueden ser añadidas llamando a `then()` varias veces. Cada una de ellas es ejecutada una seguida de la otra, en el orden en el que fueron insertadas.

Una de las grandes ventajas de usar `promises` es el encadenamiento, explicado a continuación.

## Encadenamiento

Una necesidad común es el ejecutar dos o más operaciones asíncronas seguidas, donde cada operación posterior se inicia cuando la operación previa tiene éxito, con el resultado del paso previo. Logramos esto creando una cadena de objetos `promises`.

Aquí está la magia: la función `then()` devuelve una promesa nueva, diferente de la original:

```js
const promesa = hazAlgo();
const promesa2 = promesa.then(exitoCallback, falloCallback);
```

o

```js
let promesa2 = hazAlgo().then(exitoCallback, falloCallback);
```

Esta segunda promesa (`promesa2`) representa no sólo la terminación de `hazAlgo()`, sino también de `exitoCallback` o `falloCallback` que pasaste, las cuales pueden ser otras funciones asíncronas devolviendo una promesa. Cuando ese es el caso, cualquier función callback añadida a `promesa2` se queda en cola detrás de la promesa devuelta por `exitoCallback` o `falloCallback`.

Básicamente, cada promesa representa la terminación de otro paso (asíncrono on no) en la cadena.

En el pasado, hacer varias operaciones asíncronas en fila conduciría a la clásica pirámide de funciones callback:

```js
hazAlgo(function(resultado) {
  hazAlgoMas(resultado, function(nuevoResultado) {
    hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Obtenido el resultado final: ' + resultadoFinal
    }, falloCallback);
  }, falloCallback);
}, falloCallback);
```

Con las funciones modernas, adjuntamos nuestras functiones callback a las promesas devueltas, formando una cadena de promesa:

```js
hazAlgo()
  .then(function (resultado) {
    return hazAlgoMas(resultado);
  })
  .then(function (nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
  })
  .then(function (resultadoFinal) {
    console.log("Obtenido el resultado final: " + resultadoFinal);
  })
  .catch(falloCallback);
```

Los argumentos a `then` son opcionales, y `catch(falloCallBack)` es un atajo para `then(null, falloCallBack)`. Es posible que veas esto expresado con [funciones de flecha](/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) :

```js
hazAlgo()
  .then((resultado) => hazAlgoMas(resultado))
  .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
  .then((resultadoFinal) => {
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  })
  .catch(falloCallback);
```

**Importante**: Devuelve siempre resultados, de otra forma las funciones callback no se encadenarán, y los errores no serán capturados.

### Encadenar después de una captura

Es posible encadenar después de un fallo - por ejemplo: un `catch`- lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena. Lea el siguiente ejemplo:

```js
new Promise((resolver, rechazar) => {
  console.log("Inicial");

  resolver();
})
  .then(() => {
    throw new Error("Algo falló");

    console.log("Haz esto");
  })
  .catch(() => {
    console.log("Haz aquello");
  })
  .then(() => {
    console.log("Haz esto sin que importe lo que sucedió antes");
  });
```

Esto devolverá el siguiente texto:

```
Inicial
Haz aquello
Haz esto sin que importe lo que sucedió antes
```

Note que el texto "Haz esto" no es escrito porque el error "Algo falló" causó un rechazo.

## Propagación de errores

Tal vez recuerdes haber visto `falloCallback` tres veces en la pirámide en un ejemplo anterior, en comparación con sólo una vez al final de la cadena de promesas:

```js
hazAlgo()
  .then((resultado) => hazAlgoMas(valor))
  .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
  .then((resultadoFinal) =>
    console.log(`Obtenido el resultado final: ${resultadoFinal}`),
  )
  .catch(falloCallback);
```

Básicamente, una cadena de promesas se detiene si hay una excepción, y recorre la cadena buscando manejadores de captura. Lo siguiente está mucho más adaptado a la forma de trabajo del código síncrono:

```js
try {
  let resultado = syncHazAlgo();
  let nuevoResultado = syncHazAlgoMas(resultado);
  let resultadoFinal = syncHazLaTerceraCosa(nuevoResultado);
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
} catch (error) {
  falloCallback(error);
}
```

Esta simetría con el código síncrono culmina con la mejora sintáctica [async/await](/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona) en ECMASCript 2017:

```js
async function foo() {
  try {
    let resultado = await hazAlgo();
    let nuevoResultado = await hazAlgoMas(resultado);
    let resultadoFinal = await hazLaTerceraCosa(nuevoResultado);
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  } catch (error) {
    falloCallback(error);
  }
}
```

Se construye sobre `promesas`, por ejemplo, `hazAlgo()` es la misma función que antes. Puedes leer más sobre la sintaxis [aquí](https://web.dev/async-functions/).

Las `promesas` resuelven un fallo fundamental de la pirámide de funciones callback, capturando todos los errores, incluso excepciones lanzadas y errores de programación. Esto es esencial para la composición funcional de operaciones asíncronas.

## Eventos de rechazo de Promesas

Cuando una `promesa` es rechazada, uno de los dos eventos se envía al ámbito global (generalmente, éste es el {{domxref("window")}}, o, si se utiliza en un trabajador web, es el {{domxref("Worker")}} u otra interfaz basada en un trabajador). Los dos eventos son:

**{{domxref("Window.rejectionhandled_event", "rejectionhandled")}}**

Se envía cuando se rechaza una promesa, una vez que el rechazo ha sido manejado por la función `reject` del ejecutor.

**{{domxref("Window.unhandledrejection_event", "unhandledrejection")}}**

Se envía cuando se rechaza una promesa pero no hay un controlador de rechazo disponible.

En ambos casos, el evento (del tipo {{domxref("PromiseRejectionEvent")}}) tiene como miembros una propiedad {{domxref("PromiseRejectionEvent.promise", "promise")}} que indica que la promesa fue rechazada, y una propiedad {{domxref("PromiseRejectionEvent.reason", "reason")}} que proporciona el motivo por el cuál se rechaza la promesa.

Esto hace posible ofrecer el manejo de errores de promesas, y también ayuda a depurarlos. Estos controladores son globales, por lo tanto, todos los errores serán manejados por éstos independientemente de la fuente.

**Un caso de especial utilidad**: al escribir código para {{Glossary("Node.js")}}, es común que los módulos que incluyas en tu proyecto no cuenten con un controlador de evento para promesas rechazadas. Estos se registran en la consola en tiempo de ejecución de Node. Puedes capturarlos para analizarlos y manejarlos en tu código - o solo evitar que abarroten tu salida - agregando un controlador para el evento {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}, como se muestra a continuación:

```js
window.addEventListener(
  "unhandledrejection",
  (event) => {
    /* Podrías comenzar agregando código para examinar
      la promesa específica analizando event.promise
      y la razón del rechazo, accediendo a event.reason */

    event.preventDefault();
  },
  false,
);
```

Llamando al método {{domxref("Event.preventDefault", "preventDefault()")}} del evento, le dices a Javascript en tiempo de ejecución que no realice su acción predeterminada cuando las promesas rechazadas no cuenten con manejadores. En el caso de Node, esa acción predeterminada usualmente registra el error en la consola.

Lo ideal, por supuesto, sería examinar las promesas rechazadas para asegurarte que ninguna de ellas tienen errores de código reales antes de descartar esos eventos.

## Crear una promesa alrededor de una vieja API de callbacks

Una {{jsxref("Promise")}} puede ser creada desde cero usando su constructor. Esto debería ser sólo necesario para envolver viejas APIs.

En un mundo ideal, todas las funciones asíncronas devolverían promesas. Desafortunadamente, algunas APIs aún esperan que se les pase callbacks con resultado fallido/exitoso a la forma antigua. El ejemplo más obvio es la función {{domxref("WindowTimers.setTimeout", "setTimeout()")}}:

```js
setTimeout(() => diAlgo("pasaron 10 segundos"), 10000);
```

Combinar callbacks del viejo estilo con promesas es problemático. Si `diAlgo` falla o contiene un error de programación, nada lo captura. La función `setTimeout` es culpable de esto.

Afortunadamente podemos envolverlas en una promesa. La mejor práctica es envolver las funciones problemáticas en el nivel más bajo posible, y después nunca llamarlas de nuevo directamente:

```js
const espera = (ms) => new Promise((resuelve) => setTimeout(resuelve, ms));

espera(10000)
  .then(() => diAlgo("10 segundos"))
  .catch(falloCallback);
```

Básicamente, el constructor de la promesa toma una función ejecutora que nos permite resolver o rechazar manualmente una promesa. Dado que `setTimeout` no falla realmente, descartamos el rechazo en este caso.

## Composición

{{jsxref("Promise.resolve()")}} y {{jsxref("Promise.reject()")}} son atajos para crear manualmente una promesa resuelta o rechazada respectivamente. Esto puede ser útil a veces.

{{jsxref("Promise.all()")}} son {{jsxref("Promise.race()")}} son dos herramientas de composición para ejecutar operaciones asíncronas en paralelo.

Podemos comenzar operaciones en paralelo y esperar que finalicen todas ellas de la siguiente manera:

```js
Promise.all([func1(), func2(), func3()]).then(
  ([resultado1, resultado2, resultado3]) => {
    /* usa resultado1, resultado2 y resultado3 */
  },
);
```

La composición secuencial es posible usando Javascript inteligente:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

Básicamente, reducimos un conjunto de funciones asíncronas a una cadena de promesas equivalente a: `Promise.resolve().then(func1).then(func2).then(func3);`

Esto se puede convertir en una función de composición reutilizable, que es común en la programación funcional:

```js
const aplicarAsync = (acc, val) => acc.then(val);
const componerAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(aplicarAsync, Promise.resolve(x));
```

La función `componerAsync()` aceptará cualquier número de funciones como argumentos, y devolverá una nueva función que acepta un valor inicial que es pasado a través del conducto de composición. Esto es beneficioso porque cualquiera o todas las funciones pueden ser o asíncronas o síncronas y se garantiza que serán ejecutadas en el orden correcto:

```js
const transformData = componerAsync(func1, asyncFunc1, asyncFunc2, func2);
const resultado3 = transformData(data);
```

En ECMAScript 2017, la composición secuencial puede ser realizada usando simplemente async/await:

```js
let resultado;
for (const f of [func1, func2, func3]) {
  resultado = await f(resultado);
}
```

## Sincronización

Para evitar sorpresas, las funciones pasadas a `then()` nunca serán llamadas sincrónicamente, incluso con una promesa ya resuelta:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

En lugar de ejecutarse inmediatamente, la función pasada es colocada en una cola de microtareas, lo que significa que se ejecuta más tarde cuando la cola es vaciada al final del actual ciclo de eventos de JavaScript:

```js
const espera = (ms) => new Promise((resuelve) => setTimeout(resuelve, ms));

espera().then(() => console.log(4));
Promise.resuelve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

## Anidamiento

Las cadenas de promesas simples se mantienen planas sin anidar, ya que el anidamiento puede ser el resultado de una composición descuidada. Vea [errores comunes](/es/docs/Web/JavaScript/Guide/Usar_promesas#Common_mistakes).

El anidamiento es una estructura de control para limitar el alcance de las sentencias `catch`. Específicamente, un `catch` anidado sólo captura fallos dentro de su contexto y por debajo, no captura errores que están más arriba en la cadena fuera del alcance del anidamiento. Cuando se usa correctamente, da mayor precisión en la recuperación de errores:

```js
hacerAlgoCritico()
  .then((resultado) =>
    hacerAlgoOpcional()
      .then((resultadoOpcional) => hacerAlgoSuper(resultadoOpcional))
      .catch((e) => {}),
  ) // Ignorar si hacerAlgoOpcional falla.
  .then(() => masAsuntosCriticos())
  .catch((e) => console.log("Acción crítica fallida: " + e.message));
```

Nota que aquí los pasos opcionales están anidados, por la precaria colocación de lo externo (y) alrededor de ellos.

La declaración interna `catch` solo detecta errores de `hacerAlgoOpcional()` y `hacerAlgoSuper()`, después de lo cuál el código se reanuda con `masAsuntosCriticos()`. Es importante destacar que si `hacerAlgoCritico()` falla, el error es capturado únicamente por el `catch` final.

## Errores comunes

Aquí hay algunos errores comunes que deben tenerse en cuenta al componer cadenas de promesas. Varios de estos errores se manifiestan en el siguiente ejemplo:

```js
// ¡Mal ejemplo!
hacerlAlgo()
  .then(function (resultado) {
    hacerOtraCosa(resultado) // Olvida devolver una promesa desde el interior de la cadena + anidamiento innecesario
      .then((nuevoResultado) => hacerUnaTerceraCosa(nuevoResultado));
  })
  .then(() => hacerUnaCuartaCosa());
// Olvida terminar la cadena con un catch!
```

El primer error es no encadenar las acciones adecuadamente. Esto sucede cuando creamos una promesa y olvidamos devolverla. Como consecuencia, la cadena se rompe, o mejor dicho, tenemos dos cadenas independientes que compiten. Esto significa que `hacerUnaCuartaCosa()` no esperará a que finalicen `hacerOtraCosa()` o `hacerUnaTerceraCosa()`, y se ejecutará paralelamente a ellas. Las cadenas separadas también tienen un manejador de errores separado, lo que provoca errores no detectados.

El segundo error es el anidamiento innecesario, que da lugar al primer error. La anidación también limita el alcance de los manejadores de errores internos, que - si no son deseados - pueden llevar a errores no detectados. Una variante de esto es el [constructor anti-patrón de promesas](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it), el cuál combina el anidamiento con el uso redundante del constructor de promesa para envolver el código que ya usa promesas.

El tercer error es olvidar cerrar las cadenas con catch.Las cadenas de promesas no terminadas conducen a errores no capturados en la mayoría de los navegadores.

Una buena regla es devolver o terminar siempre las cadenas de promesas, y tan pronto como obtenga una nueva promesa, devolverla de inmediato, para aplanar las cosas:

```js
hacerAlgo()
  .then(function (resultado) {
    return hacerOtraCosa(resultado);
  })
  .then((nuevoResultado) => hacerUnaTerceraCosa(nuevoResultado))
  .then(() => hacerUnaCuartaCosa())
  .catch((error) => console.log(error));
```

Nota que `() => x` es un atajo para `() => { return x; }`.

Ahora tenemos una cadena determinística simple con un manejador de error adecuado.

El uso de [async / await](/es/docs/Web/JavaScript/Reference/Statements/async_function) aborda la mayoría, si no todos estos problemas, la desventaja es que el error más común con esa sintaxis es olvidar la palabra clave [await](/es/docs/Web/JavaScript/Reference/Statements/async_function).

## Vea también

- {{jsxref("Promise.then()")}}
- [Promises/A+ specification](http://promisesaplus.com/)
- [Nolan Lawson: Tenemos un problema con las promesas — Errores comunes con las promesas](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
