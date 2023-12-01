---
title: Usando Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
---

Los Web Workers dedicados proveen un medio sencillo para que el contenido web ejecute scripts en hilos en segundo plano. Una vez creado, un worker puede enviar mensajes a la tarea creada mediante envio de mensajes al manejador de eventos especificado por el creador. Sin embargo, **los workers trabajan dentro de un [contexto global](/es/docs/JavaScript/DedicatedWorkerGlobalScope) diferente de la ventana actual** (usar el atajo {{ domxref("window") }} en lugar de {{ domxref("window.self","self") }} con el fin de obtener el scope actual dentro de un {{ domxref("Worker") }} retornaría, de hecho, un error).

El hilo worker puede realizar tareas sin interferir con la interfaz de usuario. Ademas, pueden realizar I/O usando [`XMLHttpRequest`](/en/nsIXMLHttpRequest) (aunque el responseXML y los atributos channel son siempre null).

Para documentacion de referencia acerca de workers busca {{ domxref("Worker") }} ; este articulo complementa ese ofreciendo ejemplos y detalles adicionales. Para una lista de las funciones disponibles sobre workers, visita [Functions and interfaces available to workers](/es/docs/Web/Guide/Needs_categorization/Functions_available_to_workers?redirect=no).

## Acerca de seguridad de hilos

La interfaz {{ domxref("Worker") }} crea hilos a nivel de SO reales, y la concurrencia puede causar effectos interesantes en tu código si no eres cuidadoso. Sin embargo, en el caso de los web workers, el control cuidadoso de los puntos de comunicacion con otros hilos indica que es realmente muy dificil causar problemas de concurrencia. No existe acceso a componentes no-hilo seguros o al DOM y debes pasar la informacion entrante o saliente del hilo a traves de objetos serializados. Así que debes poner esfuerzo para causar problemas en tu código.

**Creando un web worker**

Crear un nuevo worker es simple. Sólo tienes que llamar el constructor {{ domxref("Worker.Worker", "Worker()") }}, especificando la URI de un script a ejecutar en el hilo del worker (_worker thread_), y, si deseas poder recibir notificaciones del worker, establece la propiedad {{domxref("Worker.onmessage")}} del worker a una función de manejo de eventos apropiada.

```js
var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Called back by the worker!\n");
};
```

Alternativamente, puedes usar `addEventListener()` :

```js
var myWorker = new Worker("my_task.js");

myWorker.addEventListener(
  "message",
  function (oEvent) {
    console.log("Called back by the worker!\n");
  },
  false,
);

myWorker.postMessage(""); // start the worker.
```

La Línea 1 en este ejemplo crea un nuevo worker (_worker thread)_. La Línea 3 configura un manejador de eventos (_listener_) para encargarse de los eventos `message` del worker. Este manejador de eventos se llamará cuando el worker llame a su propia función {{domxref("Worker.postMessage()")}}. Finalmente, la Linea 7 inicia el worker _(worker thread)_.

> **Nota:** : La URI pasada como parámetro del constructor de `Worker` debe obedecer la política [same-origin policy](/en/Same_origin_policy_for_JavaScript) . Actualmente hay desacuerdo entre los desarolladores de navegadores sobre qué URIs son del mismo origen; Gecko 10.0 (Firefox 10.0 / Thunderbird 10.0 / SeaMonkey 2.7) y posteriores sí permiten data URIs e Internet Explorer 10 no permite Blob URIs como un script válido para los workers.

## Pasando datos

Los datos pasan entre la página principal y los workers son **copiados**, no compartidos. Los objetos se serializan a medida que se entregan al worker, y posteriormente, se deserializan en el otro extremo. La página y el worker **no comparten la misma instancia**, por lo que el resultado final es que un duplicado es creado en cada extremo. La mayoría de los navegadores implementan esta característica como [structured cloning](/en/DOM/The_structured_clone_algorithm).

Antes de continuar, vamos a crear con fines didácticos una función llamada `emulateMessage()` que simulará el comportamiento de un valor el cual es clonado y no compartido durante el paso desde un _worker_ a la página principal o viceversa:

```js
function emulateMessage(vVal) {
  return eval("(" + JSON.stringify(vVal) + ")");
}

// Tests

// test #1
var example1 = new Number(3);
alert(typeof example1); // object
alert(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
alert(typeof example2); // boolean
alert(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String("Hello World");
alert(typeof example3); // object
alert(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
  name: "John Smith",
  age: 43,
};
alert(typeof example4); // object
alert(typeof emulateMessage(example4)); // object

// test #5
function Animal(sType, nAge) {
  this.type = sType;
  this.age = nAge;
}
var example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

A Un valor que es clonado y no compartido se denomina _mensaje_. De vuelta con los workers, los _mensajes_ pueden ser enviados hacia y desde el hilo principal empleando `postMessage()`. Los eventos de `mensaje` {{domxref("MessageEvent.data", "data")}} atributo contienen datos devueltos desde el worker.

**example.html**: (la página principal):

```js
var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

myWorker.postMessage("ali");
```

**my_task.js** (el worker):

```js
postMessage("I'm working before postMessage('ali').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};
```

> **Nota:** Como siempre, los hilos en segundo plano -incluyendo workers- **no pueden manipular el DOM**. Si acciones tomadas por el hilo en segundo planos resultarían en cambios en el DOM, deberian enviar mensajes a sus creadores para llevarlos a cabo.

The [structured cloning](/es/docs/Web/Guide/DOM/The_structured_clone_algorithm) algorithm can accept JSON and a few things that JSON can't like circular references.

### Ejemplos pasando datos

#### Example 1: Crear un "`eval() asíncrono`" genérico

El siguiente ejemplo muestra como usar un worker para ejecutar **asíncronamente** cualquier tipo de código en Javascript a traves de [`eval`](/es/docs/JavaScript/Reference/Global_Objects/eval) dentro del worker:

```js
// Syntax: asyncEval(code[, listener])

var asyncEval = (function () {
  var aListeners = [],
    oParser = new Worker(
      "data:text/javascript;charset=US-ASCII,onmessage%20%3D%20function%20%28oEvent%29%20%7B%0A%09postMessage%28%7B%0A%09%09%22id%22%3A%20oEvent.data.id%2C%0A%09%09%22evaluated%22%3A%20eval%28oEvent.data.code%29%0A%09%7D%29%3B%0A%7D",
    );

  oParser.onmessage = function (oEvent) {
    if (aListeners[oEvent.data.id]) {
      aListeners[oEvent.data.id](oEvent.data.evaluated);
    }
    delete aListeners[oEvent.data.id];
  };

  return function (sCode, fListener) {
    aListeners.push(fListener || null);
    oParser.postMessage({
      id: aListeners.length - 1,
      code: sCode,
    });
  };
})();
```

Ejemplo de uso:

```js
// asynchronous alert message...
asyncEval("3 + 2", function (sMessage) {
  alert("3 + 2 = " + sMessage);
});

// asynchronous print message...
asyncEval('"Hello World!!!"', function (sHTML) {
  document.body.appendChild(document.createTextNode(sHTML));
});

// asynchronous void...
asyncEval(
  '(function () {\n\tvar oReq = new XMLHttpRequest();\n\toReq.open("get", "http://www.mozilla.org/", false);\n\toReq.send(null);\n\treturn oReq.responseText;\n})()',
);
```

#### Ejemplo 2: Paso avanzado de JSON Data y creación de un sistema de conmutación

Si tiene que pasar datos complejos y tienes que llamar a muchas funciones diferentes tanto en la página principal como en el Worker, puede crear un sistema como el siguiente.

**example.html** (the main page):

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
      /*
    QueryableWorker instances methods:
     * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc): calls a Worker's queryable function
     * postMessage(string or JSON Data): see Worker.prototype.postMessage()
     * terminate(): terminates the Worker
     * addListener(name, function): adds a listener
     * removeListener(name): removes a listener
    QueryableWorker instances properties:
     * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
  */
      function QueryableWorker(sURL, fDefListener, fOnError) {
        var oInstance = this,
          oWorker = new Worker(sURL),
          oListeners = {};
        this.defaultListener = fDefListener || function () {};
        oWorker.onmessage = function (oEvent) {
          if (
            oEvent.data instanceof Object &&
            oEvent.data.hasOwnProperty("vo42t30") &&
            oEvent.data.hasOwnProperty("rnb93qh")
          ) {
            oListeners[oEvent.data.vo42t30].apply(
              oInstance,
              oEvent.data.rnb93qh,
            );
          } else {
            this.defaultListener.call(oInstance, oEvent.data);
          }
        };
        if (fOnError) {
          oWorker.onerror = fOnError;
        }
        this.sendQuery =
          function (/* queryable function name, argument to pass 1, argument to pass 2, etc. etc */) {
            if (arguments.length < 1) {
              throw new TypeError(
                "QueryableWorker.sendQuery - not enough arguments",
              );
              return;
            }
            oWorker.postMessage({
              bk4e1h0: arguments[0],
              ktp3fm1: Array.prototype.slice.call(arguments, 1),
            });
          };
        this.postMessage = function (vMsg) {
          //I just think there is no need to use call() method
          //how about just oWorker.postMessage(vMsg);
          //the same situation with terminate
          //well,just a little faster,no search up the prototye chain
          Worker.prototype.postMessage.call(oWorker, vMsg);
        };
        this.terminate = function () {
          Worker.prototype.terminate.call(oWorker);
        };
        this.addListener = function (sName, fListener) {
          oListeners[sName] = fListener;
        };
        this.removeListener = function (sName) {
          delete oListeners[sName];
        };
      }

      // your custom "queryable" worker
      var oMyTask = new QueryableWorker(
        "my_task.js" /* , yourDefaultMessageListenerHere [optional], yourErrorListenerHere [optional] */,
      );

      // your custom "listeners"

      oMyTask.addListener("printSomething", function (nResult) {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(" The difference is " + nResult + "!"),
          );
      });

      oMyTask.addListener("alertSomething", function (nDeltaT, sUnit) {
        alert("Worker waited for " + nDeltaT + " " + sUnit + " :-)");
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:oMyTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:oMyTask.sendQuery('waitSomething');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:oMyTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (el worker):

```js
// your custom PRIVATE functions

function myPrivateFunc1() {
  // do something
}

function myPrivateFunc2() {
  // do something
}

// etc. etc.

// your custom PUBLIC functions (i.e. queryable from the main page)

var queryableFunctions = {
  // example #1: get the difference between two numbers:
  getDifference: function (nMinuend, nSubtrahend) {
    reply("printSomething", nMinuend - nSubtrahend);
  },
  // example #2: wait three seconds
  waitSomething: function () {
    setTimeout(function () {
      reply("alertSomething", 3, "seconds");
    }, 3000);
  },
};

// system functions

function defaultQuery(vMsg) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply(/* listener name, argument to pass 1, argument to pass 2, etc. etc */) {
  if (arguments.length < 1) {
    throw new TypeError("reply - not enough arguments");
    return;
  }
  postMessage({
    vo42t30: arguments[0],
    rnb93qh: Array.prototype.slice.call(arguments, 1),
  });
}

onmessage = function (oEvent) {
  if (
    oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty("bk4e1h0") &&
    oEvent.data.hasOwnProperty("ktp3fm1")
  ) {
    queryableFunctions[oEvent.data.bk4e1h0].apply(self, oEvent.data.ktp3fm1);
  } else {
    defaultQuery(oEvent.data);
  }
};
```

Es un método posible para conmutar el contenido de cada mensaje de cada mainpage-worker y viceversa.

### Pasando datos mediante transferencia de propiedades (objetos transferibles)

Google Chrome 17 y Firefox 18 implementan un método adicional para enviar ciertos tipos de objetos desde o hacia el worker con un mejor rendimiento. Estos objetos se denominan objetos transferibles (transferable objects), es decir, objetos que implementan la interfaz {{domxref("Transferable")}}. Los objetos transferibles se transfieren de un contexto a otro con una operación "zero-copy". Esto supone una gran mejora de rendimiento al enviar grandes cantidades de datos. Piensa en ello como un paso por referencia si vienes del mundo de C/C++. Sin embargo, a diferecia del paso por referencia, la "versión" original no queda disponible una vez transferida. Su contenido es transferido al nuevo contexto. Por ejemplo, cuando se transfiere un {{domxref("ArrayBuffer")}} de tu aplicacion al Worker, el contenido del {{domxref("ArrayBuffer")}} original se vacía y no se puede utilizar posteriormente. Su contenido es (literalmente) transferido al contexto del Worker.

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

Para más información sobre los objetos transferibles, [visita HTML5Rocks](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) .

## Spawning subworkers

Workers may spawn more workers if they wish. So-called subworkers must be hosted within the same origin as the parent page. Also, the URIs for subworkers are resolved relative to the parent worker's location rather than that of the owning page. This makes it easier for workers to keep track of where their dependencies are.

Subworkers are currently not supported in Chrome. See [crbug.com/31666](http://code.google.com/p/chromium/issues/detail?id=31666) .

## Embedded workers

There is not an "official" way to embed the code of a worker within a web page as for the {{ HTMLElement("script") }} elements. But a {{ HTMLElement("script") }} element which does not have a `src` attribute and has a `type` attribute that does not identify an executable mime-type will be considered a data block element, that JavaScript could use. "Data blocks" is a more general feature of HTML5 that can carry almost any textual data. So, a worker could be embedded in this way:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its mime-type is text/js-worker.
      var myVar = "Hello World!";
      // Rest of your worker code goes here.
    </script>
    <script type="text/javascript">
      // This script WILL be parsed by JS engines because its mime-type is text/javascript.
      function pageLog(sMsg) {
        // Use a fragment: browser will only render/reflow once.
        var oFragm = document.createDocumentFragment();
        oFragm.appendChild(document.createTextNode(sMsg));
        oFragm.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(oFragm);
      }
    </script>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its mime-type is text/js-worker.
      onmessage = function (oEvent) {
        postMessage(myVar);
      };
      // Rest of your worker code goes here.
    </script>
    <script type="text/javascript">
      // This script WILL be parsed by JS engines because its mime-type is text/javascript.

      // In the past...:
      // blob builder existed
      // ...but now we use Blob...:
      var blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll('script[type="text\/js-worker"]'),
          function (oScript) {
            return oScript.textContent;
          },
        ),
        { type: "text/javascript" },
      );

      // Creating a new document.worker property containing all our "text/js-worker" scripts.
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = function (oEvent) {
        pageLog("Received: " + oEvent.data);
      };

      // Start the worker.
      window.onload = function () {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

The embedded worker is now nested into a new custom `document.worker` property.

## Tiempos fuera e intervalos

Los trabajadores pueden usar tiempos fuera e intervalos de la misma forma que el "hilo principal". Esto puede ser útil, por ejemplo, si quieres tener a tu hilo trabajador corriendo codigo periodicamente en lugar de sin parar.

Ver [`setTimeout()`](/en/DOM/window.setTimeout), [`clearTimeout()`](/en/DOM/window.clearTimeout), [`setInterval()`](/en/DOM/window.setInterval), y [`clearInterval()`](/en/DOM/window.clearInterval)para más detalles. Ver también: [JavaScript Timers](/es/docs/JavaScript/Timers).

## Terminating a worker

If you need to immediately terminate a running worker, you can do so by calling the worker's `terminate()` method:

```
myWorker.terminate();
```

The worker thread is killed immediately without an opportunity to complete its operations or clean up after itself.

Workers may close themselves by calling their own `nsIWorkerScope.close()` method:

```
self.close();
```

## Manejo de errores

When a runtime error occurs in worker, its `onerror` event handler is called. It receives an event named `error` which implements the `ErrorEvent` interface. The event doesn't bubble and is cancelable; to prevent the default action from taking place, the worker can call the error event's [`preventDefault()`](/en/DOM/event.preventDefault)method.

The error event has the following three fields that are of interest:

- `message`
  - : A human-readable error message.
- `filename`
  - : The name of the script file in which the error occurred.
- `lineno`
  - : The line number of the script file on which the error occurred.

## Accediendo al objeto navigator

Los workers pueden acceder al objeto `navigator`, el cuál está disponible dentro de su scope actual. Este contiene los siguientes strings que pueden ser usados para identificar el navegador, al igual que puede realizarse usando scripts normales:

- `appName`
- `appVersion`
- `platform`
- `userAgent`

## Importing scripts and libraries

Worker threads have access to a global function, `importScripts()` , which lets them import scripts or libraries into their scope. It accepts as parameters zero or more URIs to resources to import; all of the following examples are valid:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
```

The browser loads each listed script and executes it. Any global objects from each script may then be used by the worker. If the script can't be loaded, `NETWORK_ERROR` is thrown, and subsequent code will not be executed. Previously executed code (including code deferred using {{ domxref("window.setTimeout()") }}) will still be functional though. Function declarations **after** the `importScripts()` method are also kept, since these are always evaluated before the rest of the code.

> **Nota:** Scripts may be downloaded in any order, but will be executed in the order in which you pass the filenames into `importScripts()` . This is done synchronously; `importScripts()` does not return until all the scripts have been loaded and executed.

## Examples

This section provides several examples of how to use DOM workers.

### Performing computations in the background

One way workers are useful is to allow your code to perform processor-intensive calculations without blocking the user interface thread. In this example, a worker is used to calculate Fibonacci numbers.

#### The JavaScript code

The following JavaScript code is stored in the "fibonacci.js" file referenced by the HTML in the next section.

```js
var results = [];

function resultReceiver(event) {
  results.push(parseInt(event.data));
  if (results.length == 2) {
    postMessage(results[0] + results[1]);
  }
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function (event) {
  var n = parseInt(event.data);

  if (n == 0 || n == 1) {
    postMessage(n);
    return;
  }

  for (var i = 1; i <= 2; i++) {
    var worker = new Worker("fibonacci.js");
    worker.onmessage = resultReceiver;
    worker.onerror = errorReceiver;
    worker.postMessage(n - i);
  }
};
```

The worker sets the property `onmessage` to a function which will receive messages sent when the worker object's `postMessage()` is called. (Note that this differs from defining a global _variable_ of that name, or defining a _function_ with that name. `var onmessage` and `function onmessage` will define global properties with those names, but they will not register the function to receive messages sent by the web page that created the worker.) This starts the recursion, spawning new copies of itself to handle each iteration of the calculation.

#### The HTML code

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Test threads fibonacci</title>
  </head>
  <body>
    <div id="result"></div>

    <script language="javascript">
      var worker = new Worker("fibonacci.js");

      worker.onmessage = function (event) {
        document.getElementById("result").textContent = event.data;
        dump("Got: " + event.data + "\n");
      };

      worker.onerror = function (error) {
        dump("Worker error: " + error.message + "\n");
        throw error;
      };

      worker.postMessage("5");
    </script>
  </body>
</html>
```

The web page creates a `div` element with the ID `result` , which gets used to display the result, then spawns the worker. After spawning the worker, the `onmessage` handler is configured to display the results by setting the contents of the `div` element, and the `onerror` handler is set to [dump](</en/Debugging_JavaScript#dump()> "https://developer.mozilla.org/editor/fckeditor/core/editor/en/Debugging_JavaScript#dump()") the error message.

Finally, a message is sent to the worker to start it.

[Try this example](/samples/workers/fibonacci) .

### Performing web I/O in the background

You can find an example of this in the article [Using workers in extensions](/En/Using_workers_in_extensions) .

### Dividing tasks among multiple workers

As multi-core computers become increasingly common, it's often useful to divide computationally complex tasks among multiple workers, which may then perform those tasks on multiple-processor cores.

example coming soon

### Creating workers from within workers

The Fibonacci example shown previously demonstrates that workers can in fact [spawn additional workers](#Spawning_subworkers). This makes it easy to create recursive routines.

## See also

- [File API Specification: Web Workers](https://dev.w3.org/html5/workers/)
- [`Worker`](/en/DOM/Worker) interface
- [`SharedWorker`](/en/DOM/SharedWorker) interface
- [Functions available to workers](/en/DOM/Worker/Functions_available_to_workers)
- [HTML5Rocks - The Basics of Web Workers](http://www.html5rocks.com/en/tutorials/workers/basics/#toc-enviornment-subworkers)
- [Chrome has problems when using too many worker](http://code.google.com/p/chromium/issues/detail?id=127990)
