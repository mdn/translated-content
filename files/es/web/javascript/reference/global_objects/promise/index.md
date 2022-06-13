---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
original_slug: Web/JavaScript/Reference/Global_Objects/Promise
browser-compat: javascript.builtins.Promise
---
{{JSRef}}

El objeto **`Promise`** representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

{{AvailableInWorkers}}

Para conocer cómo funcionan las promesas y cómo puede usarlas, le recomendamos que lea primero [Usando promesas](/es/docs/Web/JavaScript/Guide/Using_promises).

## Descripción

Una _Promesa_ (**`Promise`**) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.

Un `Promise` está en uno de estos estados:

- _pending (pendiente)_: estado inicial, ni cumplido ni rechazado.
- _fulfilled (cumplida)_: lo que significa que la operación se completó con éxito.
- _rejected (rechazada)_: lo que significa que la operación falló.

Una promesa pendiente puede _cumplirse_ con un valor o _rechazarse_ con un motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método `then` de una promesa. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

Como los métodos `{{JSxRef("Promise.then", "Promise.prototype.then()")}}` y `{{JSxRef("Promise.catch", "Promise.prototype.catch()")}}` devuelven promesas, se pueden encadenar.

![](promises.png)

> **Nota:** Varios otros lenguajes tienen mecanismos para la evaluación diferida y el aplazamiento de un cálculo, a los que también llaman "promesas", p.ej. _Scheme_. Las promesas en JavaScript representan procesos que ya están sucediendo, que se pueden encadenar con funciones de devolución de llamada. Si está buscando evaluar lentamente una expresión, considere usar una función sin argumentos, p.ej. `f = () => expression` para crear la expresión evaluada de forma diferida, y `f()` para evaluar la expresión inmediatamente.

> **Nota:** Se dice que una promesa está _establecida_ si se cumple o se rechaza, pero no está pendiente. También escuchará el término _resuelto_ usado con promesas; esto significa que la promesa se establece o "bloquea" para que coincida con el estado de otra promesa. [Estados y destinos](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) contiene más detalles sobre la terminología de promesas.

### Promesas encadenadas

Los métodos `{{jsxref("Promise.prototype.then()")}}`, `{{jsxref("Promise.prototype.catch()")}}` y `{{jsxref("Promise.prototype.finally()")}}` se utilizan para asociar una acción posterior con una promesa que se establece.

El método `.then()` toma hasta dos argumentos; el primer argumento es una función de devolución de llamada (_callback_) para el caso resuelto de la promesa, y el segundo argumento es una función de devolución de llamada para el caso rechazado. Cada `.then()` devuelve un objeto de promesa recién generado, que opcionalmente se puede usar para encadenar; por ejemplo:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

El procesamiento continúa hasta el siguiente eslabón de la cadena incluso cuando `.then()` carece de una función de devolución de llamada que devuelve un objeto `Promise`. Por lo tanto, una cadena puede omitir con seguridad cada función de devolución de llamada de rechazo hasta el `.catch()` final.

Manejar una promesa rechazada en cada `.then()` tiene consecuencias más adelante en la cadena de promesas. A veces no hay otra opción, porque un error debe manejarse de inmediato. En tales casos, debemos generar un error de algún tipo para mantener el estado de error en la cadena. Por otro lado, en ausencia de una necesidad inmediata, es más sencillo omitir el manejo de errores hasta una sentencia `.catch()` final. Un `.catch()` es realmente solo un `.then()` sin una ranura de argumento para una función de devolución de llamada para el caso en que se resuelva la promesa.

```js
myPromise
  .then(handleResolvedA)
  .then(handleResolvedB)
  .then(handleResolvedC)
  .catch(handleRejectedAny);
```

Usando {{JSxRef("Functions/Arrow_functions", "Expresiones de funciones de flecha", "", 1)}} para las funciones de devolución de llamada, una implementación de una cadena de promesa podría verse así:

```js
promise1
  .then(value => { return value + ' y barra'; })
  .then(value => { return value + ' y barra de nuevo'; })
  .then(value => { return value + ' y de nuevo'; })
  .then(value => { return value + ' y de nuevo'; })
  .then(value => { console.log(value) })
  .catch(err => { console.log(err) });
```

La condición de terminación de una promesa determina el estado "establecido" de la próxima promesa en la cadena. Un estado "resuelto" indica una finalización exitosa de la promesa, mientras que un estado "rechazado" indica una falta de éxito. El valor de retorno de cada promesa resuelta en la cadena se pasa al siguiente `.then()`, mientras que el motivo del rechazo se pasa a la siguiente función de manejo de rechazo en la cadena.

Las promesas de una cadena se anidan como muñecas rusas, pero se lanzan como la parte superior de una pila. La primera promesa de la cadena está anidada más profundamente y es la primera en aparecer.

```plain
(promise D, (promise C, (promise B, (promise A) ) ) )
```

Cuando `nextValue` es una promesa, el efecto es un reemplazo dinámico. `return` hace que se lance una promesa, pero la promesa `nextValue` se coloca en su lugar. Para el anidamiento que se muestra arriba, suponga que `.then()` asociado con "promise B" devuelve un `nextValue` de "promise X". El anidamiento resultante se vería así:

```plain
(promise D, (promise C, (promise X) ) )
```

Una promesa puede participar en más de un anidamiento. Para el siguiente código, la transición de `promiseA` a un estado "establecido" hará que se invoquen ambas instancias de `.then()`.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Se puede asignar una acción a una promesa ya "establecida". En ese caso, la acción (si corresponde) se realizará en la primera oportunidad asíncrona. Tenga en cuenta que se garantiza que las promesas serán asincrónicas. Por lo tanto, una acción para una promesa ya "establecida" ocurrirá solo después de que la pila se haya borrado y haya pasado un ciclo de reloj. El efecto es muy parecido al de `setTimeout(action,10)`.

```js
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
  resolutionFunc(777);
});
// En este punto, "promiseA" ya está resuelto.
promiseA.then( (val) => console.log("el registro asíncrono tiene val:",val) );
console.log("registro inmediato");

// produce salida en este orden:
// registro inmediato
// el registro asíncrono tiene val: 777
```

### Seguimiento de objetos de configuración titular

Un objeto de configuración es un [entorno](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-objec) que proporciona información adicional cuando se ejecuta código JavaScript. Esto incluye el mapa del campo y del módulo, así como información específica de HTML, como el origen. El objeto de configuración titular se rastrea para garantizar que el navegador sepa cuál usar para un código de usuario determinado.

Para representar mejor esto, podemos echar un vistazo más de cerca a cómo el campo podría ser un problema. Se puede pensar aproximadamente en un **campo** como el objeto global. Lo que es único acerca de los campos es que contienen toda la información necesaria para ejecutar código JavaScript. Esto incluye objetos como [Array](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) y [Error](/es/docs/Web/JavaScript/Reference/Global_Objects/Error). Cada objeto de configuración tiene su propia "copia" de estos y no se comparten. Eso puede causar algún comportamiento inesperado en relación con las promesas. Para evitar esto, hacemos un seguimiento de algo llamado **objeto de configuración titular**. Esto representa información específica del contexto del código de usuario responsable de una determinada llamada de función.

Para ilustrar esto un poco más, podemos echar un vistazo a cómo un [`<iframe>`](/es/docs/Web/HTML/Element/iframe) incrustado en un documento se comunica con su _host_. Dado que todas las API web conocen el objeto de configuración correspondiente, lo siguiente funcionará en todos los navegadores:

```html
<!DOCTYPE html>
<iframe></iframe> <!-- tenemos un campo aqui -->
<script> // tenemos un campo aquí también
  const bound = frames[0].postMessage.bind(
    frames[0], "algunos datos", "*");
    // bound es una función incorporada: no hay código de usuario
    // en la pila, entonces, ¿qué campo usamos?
  window.setTimeout(bound);
  // esto todavía funciona, porque usamos el campo 
  // más actual (el titular) en la pila
</script>
```

El mismo concepto se aplica a las promesas. Si modificamos un poco el ejemplo anterior, obtenemos esto:

```html
<!DOCTYPE html>
<iframe></iframe> <!-- tenemos un campo aqui -->
<script> // tenemos un campo aquí también
  const bound = frames[0].postMessage.bind(
    frames[0], "algunos datos", "*");
    // bound es una función incorporada: no hay código de usuario
    // en la pila, entonces, ¿qué campo usamos?
  Promise.resolve(undefined).then(bound);
  // esto todavía funciona, porque usamos el campo 
  // más actual (el titular) en la pila
</script>
```

Si cambiamos esto para que el `<iframe>` en el documento escuche los mensajes de publicación, podemos observar el efecto del objeto de configuración actual:

```html
<!-- y.html -->
<!DOCTYPE html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "algunos datos", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!DOCTYPE html>
<script>
window.addEventListener("message", (event) => {
  document.querySelector("#text").textContent = "Hola";
  // este código solo se ejecutará en navegadores que rastrean 
  // el objeto de configuración titular
  console.log(event);
}, false);
</script>
```

En el ejemplo anterior, el texto interno del `<iframe>` se actualizará solo si se realiza un seguimiento del objeto de configuración correspondiente. Esto se debe a que sin rastrear al titular, podemos terminar usando el entorno incorrecto para enviar el mensaje.

> **Nota:** Actualmente, el seguimiento del campo titular está completamente implementado en Firefox y tiene implementaciones parciales en Chrome y Safari.

## Constructor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Crea un nuevo objeto `Promise`. El constructor se usa principalmente para envolver funciones que aún no admiten promesas.

## Métodos estáticos

- {{JSxRef("Promise.all", "Promise.all(iterable)")}}

  - : Espere a que se resuelvan todas las promesas, o que se rechace alguna.

    Si la promesa devuelta se resuelve, se resuelve con una matriz agregada de los valores de las promesas resueltas, en el mismo orden definido en la iteración de varias promesas.

    Si se echaza, se rechaza con el motivo de la primera promesa en el iterable que fue rechazada.

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : Espera hasta que todas las promesas se hayan establecido (cada una puede resolverse o rechazarse).

    Devuelve una promesa que se resuelve después de que todas las promesas dadas se cumplan o se rechacen, con una matriz de objetos que describen el resultado de cada promesa.

- {{JSxRef("Promise.any", "Promise.any(iterable)")}}
    - : Toma un iterable de objetos `Promise` y, tan pronto como se cumple una de las promesas en el iterable, devuelve una única promesa que se resuelve con el valor de esa promesa.
- {{JSxRef("Promise.race", "Promise.race(iterable)")}}

  - : Espera hasta que alguna de las promesas se cumpla o se rechace.

    Si la promesa devuelta se resuelve, se resuelve con el valor de la primera promesa en el iterable que resolvió.

    Si se rechaza, se rechaza con la razón de la primera promesa que se rechazó.

- {{JSxRef("Promise.reject", "Promise.reject(reason)")}}
  - : Devuelve un nuevo objeto `Promise` que se rechaza por el motivo indicado.
- {{JSxRef("Promise.resolve", "Promise.resolve(value)")}}

  - : Devuelve un nuevo objeto `Promise` que se resuelve con el valor dado. Si el valor tiene un método `then`, la promesa devuelta "seguirá" ese método, adoptando su estado eventual; de lo contrario, la promesa devuelta se cumplirá con el valor.
    
    Generalmente, si no sabe si un valor es una promesa o no, {{JSxRef("Promise.resolve", "Promise.resolve(value)")}} actua en su lugar y trabaja con el valor de retorno como una promesa.

## Métodos de instancia

Consulte la [guía de Microtask](/es/docs/Web/API/HTML_DOM_API/Microtask_guide) para obtener más información sobre cómo estos métodos utilizan la cola y los servicios de Microtask.

- {{jsxref("Promise.prototype.catch()")}}
  - : Agrega un _callback_ del controlador de rechazo a la promesa y devuelve una nueva promesa que se resuelve en el valor de devolución del _callback_ si se llama, o en su valor de cumplimiento original si la promesa se cumple.
  
- {{jsxref("Promise.prototype.then()")}}
  - : Agrega manejadores de cumplimiento y rechazo a la promesa, y devuelve una nueva promesa resolviendo el valor de retorno del manejador llamado, o su valor establecido original si la promesa no fue manejada (es decir, si el manejador relevante `onFulfilled` u `onRejected` no es una función).
- {{jsxref("Promise.prototype.finally()")}}
  - : Agrega un manejador a la promesa y devuelve una nueva promesa que se resuelve cuando se resuelve la promesa original. Se llama al manejador cuando se termina la promesa, ya sea cumplida o rechazada.

## Ejemplos

### Ejemplo básico

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estábamos haciendo de forma 
  // asíncrona fue exitoso, y reject(...) cuando falló.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En realidad, probablemente usará algo como XHR o una API HTML5.
  setTimeout( function() {
    resolve("Éxito!")  // ¡Hurra! ¡Todo salió bien!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage es lo que hayamos pasado en la función resolve(...) anterior.
  // No tiene que ser una cadena, pero si es solo un mensaje de éxito, 
  // probablemente lo sea.
  console.log("¡Hurra! " + successMessage)
});
```

### Ejemplo con diversas situaciones

Este ejemplo muestra diversas técnicas para usar las capacidades de `Promise` y diversas situaciones que pueden ocurrir. Para comprender esto, comience desplazándose hasta la parte inferior del bloque de código y examine la cadena de promesa. Tras la provisión de una promesa inicial, puede seguir una cadena de promesas. La cadena se compone de llamadas `.then()` y normalmente (pero no necesariamente) tiene un solo `.catch()` al final, seguido opcionalmente por `.finally()`. En este ejemplo, la cadena de promesas se inicia con un constructor `new Promise()` escrito de forma personalizada; pero en la práctica real, las cadenas de promesas suelen comenzar con una función API (escrita por otra persona) que devuelve una promesa.

La función de ejemplo `tetheredGetNumber()` muestra que un generador de promesa utilizará `reject()` al configurar una llamada asíncrona, o dentro de la devolución de llamada, o ambas. La función `promiseGetWord()` ilustra cómo una función API puede generar y devolver una promesa de forma independiente.

Tenga en cuenta que la función `troubleWithGetNumber()` termina con `throw()`. Eso es forzado porque una cadena de promesas de ES6 pasa por todas las promesas `.then()`, incluso después de un error, y sin el `throw()`, el error parecería "arreglado". Esto es una molestia, y por esta razón, es común omitir `rejectionFunc` a lo largo de la cadena de promesas `.then()`, y solo tener una sola `rejectionFunc` en el `catch()` final. La alternativa es arrojar un valor especial (en este caso, "-999", pero un tipo de error personalizado sería más apropiado).

Este código se puede ejecutar en NodeJS. La comprensión se mejora al ver que los errores realmente ocurren. Para forzar más errores, cambie los valores de `threshold`.

```js
"use strict";

// Para experimentar con el manejo de errores, los valores de "threshold" 
// causan errores aleatoriamente
const THRESHOLD_A = 8; // puede usar cero 0 para garantizar el error

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(
      function() {
        const randomInt = Date.now();
        const value = randomInt % 10;
        try {
          if(value >= THRESHOLD_A) {
            throw new Error(`Demasiado grande: ${value}`);
          }
        } catch(msg) {
            reject(`Error en el  callback ${msg}`);
        }
      resolve(value);
      return;
    }, 500);
    // Para experimentar con un error en la configuración, 
    // descomente el siguiente 'throw'.
    // throw new Error("Mala configuración");
  } catch(err) {
    reject(`Error durante la configuración: ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Problemas para obtener el número: ${reason}`);
  throw -999; // debe "lanzar" algo, para mantener el estado de error en la cadena
}

function promiseGetWord(parityInfo) {
  // La función "tetheredGetWord()" obtiene "parityInfo" como variable de cierre.
  const tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if(theNumber >= threshold_B) {
      reject(`Todavía demasiado grande: ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'impar' : 'par';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))
  .then(determineParity,troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if(reason === -999) {
      console.error("Había manejado previamente el error");
    }
    else {
      console.error(`Problema con promiseGetWord(): ${reason}`);
    }
   })
  .finally((info) => console.log("Todo listo"));
```

### Ejemplo avanzado

Este pequeño ejemplo muestra el mecanismo de un `Promise`. El método `testPromise()` se llama cada vez que se hace clic en {{HTMLElement("button")}}. Crea una promesa que se cumplirá, usando {{domxref("setTimeout()")}}, para el conteo de promesas (número a partir de 1) cada 1-3 segundos, al azar. El constructor `Promise()` se usa para crear la promesa.

El cumplimiento de la promesa se registra mediante un conjunto de _callback_ de cumplimiento mediante {{JSxRef("Promise.prototype.then()","p1.then()")}}. Algunos registros muestran cómo la parte sincrónica del método se desacopla de la finalización asincrónica de la promesa.

Al hacer clic en el botón varias veces en un corto período de tiempo, verá incluso cómo se cumplen las diferentes promesas una tras otra.

#### HTML

```html
<button id="make-promise">¡Crea una promesa!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";
let promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  // inicio
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Inicio<br>');
  // Hacemos una nueva promesa: prometemos un recuento numérico de esta promesa,
  // a partir de 1 (después de esperar 3 segundos)
  let p1 = new Promise((resolve, reject) => {
    // Se llama a la función ejecutora con la capacidad de resolver
    // o rechazar la promesa.
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promesa construida<br>');
    // Esto es solo un ejemplo para crear asincronismo.
    window.setTimeout(function() {
        // ¡Cumplimos la promesa!
        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  // Definimos qué hacer cuando la promesa se resuelve con la llamada then()
  // y qué hacer cuando la promesa se rechaza con la llamada catch()
  p1.then(function(val) {
    // Mostrar el valor de cumplimiento
    log.insertAdjacentHTML('beforeend', val + ') Promesa completada<br>');
  }).catch((reason) => {
    // Mostrar el motivo del rechazo
    console.log(`Manejar la promesa rechazada (${reason}) aquí.`);
  });
  // fin
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promesa creada<br>');
}

if ("Promise" in window) {
  let btn = document.getElementById("make-promise");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.textContent = "El ejemplo en vivo no está disponible porque su navegador no es compatible con la interfaz <code>Promise<code>.";
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo_avanzado", "500", "200")}}

### Cargando una imagen con XHR

Otro ejemplo simple que usa `Promise` y {{domxref("XMLHttpRequest")}} para cargar una imagen está disponible en el repositorio MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test). También puedes [verlo en acción](https://mdn.github.io/js-examples/promises-test/). Cada paso está comentado y le permite seguir de cerca la arquitectura de Promise y XHR.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Promise` en `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Usando promesas](/es/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ especificación](https://promisesaplus.com/)
- [JavaScript Promises: introducción](https://web.dev/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Patrones de programación asíncrona en JavaScript](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
