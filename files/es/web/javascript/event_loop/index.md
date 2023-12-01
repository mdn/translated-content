---
title: Modelo de concurrencia y loop de eventos
slug: Web/JavaScript/Event_loop
---

{{JsSidebar("Advanced")}}JavaScript poseé un modelo de concurrencia basado en un "loop de eventos". Este modelo es bastante diferente al modelo de otros lenguajes como C o Java.

## Conceptos de un programa en ejecución

Las siguientes secciones explican un modelo teórico. Los motores modernos de JavaScript implementan y optimizan fuertemente la semántica descrita a continuación.

### Representación visual

![Stack, heap, queue](the_javascript_runtime_environment_example.svg)

### Pila (Stack)

Las llamadas a función forman una pila de _frames._ Un frame encapsula información como el contexto y las variables locales de una función.

```js
function f(b) {
  var a = 12;
  return a + b + 35;
}

function g(x) {
  var m = 4;
  return f(m * x);
}

g(21);
```

Cuando se llama a `g`, un primer frame es creado, el cual contiene `g` argumentos y variables locales. Cuando `g` llama a `f`, un segundo frame es creado y colocado encima del primero, con `f` argumentos y variables locales. Cuando `f` termina de ejecutarse, el último frame (en este caso `f`) es sacado de la pila (déjando solo el frame de `g`). Cuando `g` termina de ejecutarse, la pila está vacía.

### Montículo (Heap)

Los objetos son colocados en un montículo, el cual, como su nombre lo dice, denota una gran región de memoria, mayormente sin estructura u orden.

### Cola (Queue)

Un programa en ejecución en JavaScript contiene una cola de mensajes, la cual es una lista de mensajes a ser procesados. Cada mensaje se asocia con una función. Cuando la pila está vacía, un mensaje es sacado de la cola y procesado. Procesar un mensaje consiste en llamar a la función asociada al mensaje (y por ende crear una frame en la pila). El mensaje procesado termina cuando la pila está vacía de nuevo.

## Loop de eventos

El `loop de eventos` obtiene su nombre por la forma en que es usualmente implementado, la cual generalmente se parece a:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage` espera de manera síncrona a que llegue un mensaje si no hay ninguno actualmente.

### "Ejecutar-hasta-completar"

Cada mensaje es procesado completamente antes que cualquier otro mensaje sea procesado. Esto ofrece algunas propiedades convenientes al momento de pensar en un programa, incluido el hecho de que cada vez que una función se ejecuta, ésta no puede ser terminada y se ejecutará totalmente antes de que cualquier otro código se ejecute (y de este modo pueda modificar la información que la función manipula). Esto es diferente de C, por ejemplo, donde si una función se ejecuta en un hilo, esta puede ser detenida en cualquier punto para ejecutar código en otro hilo.

Una desventaja de este modelo es que, si un mensaje toma mucho tiempo en completarse, la aplicación es incapaz de procesar las interacciones de usuario, tales como clicks o scrolling. El navegador mitiga esta desventaja con el mensaje "un script esta tomando mucho tiempo en ejecutarse". Una buena práctica es hacer que el procesamiento del mensaje sea corto y, si es posible, dividir une mensaje en varios más.

### Añadiendo mensajes

En los navegadores web, los mensajes son añadidos cada vez que un evento ocurre y hay un escuchador de eventos asociado a él. Si no hay un escuchador, el evento se pierde. De este modo, al hacer click en un elemento con un manejador de eventos tipo click, se añadirá un mensaje. Lo mismo sucede en otros tipos de eventos.

Al llamar [`setTimeout`](/es/docs/Web/API/setTimeout) se añadirá un mensaje a la cola después de el tiempo especificado como segundo parámetro. Si no hay ningún otro mensaje en la cola, el mensaje es procesado en el momento; sin embargo, si hay mensajes en la cola, el mensaje de `setTimeout` tendrá que esperar a que los otros mensajes sean procesados. Por esta razón el segundo parámetro indica el tiempo mínimo tiempo esperado y no es una garantía.

### Cero retraso

Cero retraso no significa que una llamada a una función (call back) se disparará después de cero milisegundos. Al llamar {{domxref("WindowTimers.setTimeout", "setTimeout")}} con un retraso de 0 (cero) milisegundos, no se ejecuta la llamada de la función después de el intervado dado. La ejecución depende del número de tareas en espera en la cola. En el ejemplo de abajo el mensaje "this is just a message" será escrito en la terminal antes de que el mensaje de la llamada a la función sea procesado, esto es por que el retraso es el tiempo mínimo requerido para que el programa procese la petición, pero no es un tiempo garantizado.

```js
(function () {
  console.log("this is the start");

  setTimeout(function cb() {
    console.log("this is a msg from call back");
  });

  console.log("this is just a message");

  setTimeout(function cb1() {
    console.log("this is a msg from call back1");
  }, 0);

  console.log("this is the  end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// cabe notar que la función retorna en este punto (undefined)
// "this is a msg from call back"
// "this is a msg from call back1"
```

### Varios programas comunicandose al mismo tiempo

Un web worker o cross-origin `iframe` tiene su propia pila, montículo y cola de mensajes. Dos programas diferentes solo se pueden comunicar enviando mensajes a través del método [`postMessage`](/es/docs/Web/API/Window/postMessage). Este método añade un mensaje al otro programa si éste último escucha eventos de tipo `message`.

## Nunca se interrumpe

Una propiedad muy interesante del modelo de loop de eventos es que JavaScript, a diferencia de otros lenguajes, nunca interrumpe otros programas en ejecución. Manejar operaciones de I/O (entrada/salida) es normalmente hecho a través de eventos y llamadas a función, de modo que cuando la aplicación, por ejemplo, está esperando por el retorno de una consulta [IndexedDB](/es/docs/Web/API/IndexedDB_API) o una petición [XHR](/es/docs/Web/API/XMLHttpRequest), ésta puede continuar procesando otras cosas como interacciones con el usuario (e.g. clicks).

Excepciones a esta regla existe en versiones anteriores del lenguaje, tales como `alert` o XHR síncrono, pero es considerada una buena práctica evitar su uso. Finalmente, hay que estar conscientes que hay [excepciones](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) a las excepciones (pero son usualmente errores de implementación mas que otra cosa).
