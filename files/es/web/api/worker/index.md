---
title: Worker
slug: Web/API/Worker
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{APIRef("Web Workers API")}}

La interfaz **`Worker`** de la [API de Web Workers](/es/docs/Web/API/Web_Workers_API) representa una tarea en segundo plano que se puede crear a través de un script, que puede enviar mensajes a su creador.

La creación de un _worker_ se realiza llamando al constructor `Worker("path/to/worker/script")`.

Los _workers_ pueden generar nuevos _workers_, siempre y cuando esos _workers_ estén alojados en el mismo [origen](/es/docs/Web/Security/Same-origin_policy) que la página principal. (Nota: [los trabajadores anidados aún no están implementados en WebKit](https://webkit.org/b/22723)).

[No todas las interfaces y funciones están disponibles](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) para scripts dentro de un `Worker`. Los _workers_ pueden usar {{domxref("XMLHttpRequest")}} para la comunicación de red, pero sus atributos `responseXML` y `channel` son siempre `null`. ([`fetch`](/es/docs/Web/API/Fetch_API) también está disponible, sin tales restricciones).

{{InheritanceDiagram}}

## Constructor

- {{domxref("Worker.Worker", "Worker()")}}
  - : Crea un _worker_ web dedicado que ejecuta el script en la URL especificada. Esto también funciona para [Blob URLs](/es/docs/Web/API/Blob).

## Propiedades de instancia

_Hereda las propiedades de su padre, {{domxref("EventTarget")}}._

## Métodos de instancia

_Hereda los métodos de su padre, {{domxref("EventTarget")}}._

- {{domxref("Worker.postMessage()")}}
  - : Envía un mensaje, que consta de cualquier objeto de JavaScript, al ámbito interno del _worker_.
- {{domxref("Worker.terminate()")}}
  - : Termina inmediatamente el _worker_. Esto no permite que el _worker_ finalice sus operaciones; se detiene de una vez. Las instancias de [`ServiceWorker`](/es/docs/Web/API/ServiceWorker) no admiten este método.

## Eventos

- [`error`](/es/docs/Web/API/Worker/error_event)
  - : Se activa cuando se produce un error en el _worker_.
- [`message`](/es/docs/Web/API/Worker/message_event)
  - : Se activa cuando el padre del _worker_ recibe un mensaje de ese _worker_.
- [`messageerror`](/es/docs/Web/API/Worker/messageerror_event)
  - : Se activa cuando un objeto `Worker` recibe un mensaje que no puede ser [deserializado](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`rejectionhandled`](/es/docs/Web/API/Window/rejectionhandled_event)
  - : Se activa cada vez que se rechaza una {{jsxref("Promise","Promesa")}}, independientemente de si hay o no un controlador para capturar el rechazo.
- [`unhandledrejection`](/es/docs/Web/API/Window/unhandledrejection_event)
  - : Se activa cuando una {{jsxref("Promise","Promesa")}} se rechaza sin un controlador para detectar el rechazo.

## Ejemplo

El siguiente fragmento de código crea un objeto {{domxref("Worker")}} usando el constructor {{domxref("Worker.Worker", "Worker()")}}, luego usa el objeto _worker_:

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Mensaje enviado al worker");
};
```

Para ver un ejemplo completo, consulte nuestro [Ejemplo básico de un _worker_ dedicado](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([ejecutar _worker_ dedicado](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

El apoyo varía para los diferentes tipos de _workers_. Consulte la página de cada tipo de trabajador para obtener información específica.

{{Compat}}

### Comportamiento de error del worker de origen cruzado

En las primeras versiones de la especificación, la carga de un script de _worker_ de origen cruzado generaba un `SecurityError`. Hoy en día, en su lugar, se lanza un evento {{domxref("Worker/error_event", "error")}}.

## Véase también

- [Usando Web Workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funciones y clases disponibles para Web Workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- Otro tipo de _workers_: {{domxref("SharedWorker")}} y [Service Worker](/es/docs/Web/API/Service_Worker_API).
- Interfaz [`OffscreenCanvas`](/es/docs/Web/API/OffscreenCanvas).
