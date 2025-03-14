---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**Los Web Workers** hacen posible ejecutar la operación de un script en un hilo en segundo plano separado de la ejecución el hilo principal de la aplicación web. La ventaja de esto es que un proceso laborioso puede actuar en un hilo separado, permitiendo al hilo principal (normlamente la UI) ejecutarse sin ser bloqueado o ralentizado.

## Web Workers conceptos y uso

Un worker es un objeto que se crea a través del constructor ( {{domxref("Worker.Worker", "Worker()")}}) este ejecuta un archivo javascript — este fichero contiene los scripts que se van a ejecutan en el hilo del worker; los workers se ejecutan en un contexto global diferente al actual del navegador {{domxref("window")}}. Este contexto está representado por el objeto {{domxref("DedicatedWorkerGlobalScope")}} en el caso de los workers dedicados (los workers standard utilizan un solo script; y los shared workers usan {{domxref("SharedWorkerGlobalScope")}}).

Podemos ejecutar los script que necesitemos dentro del hilo del worker, pero con algunas excepciones. Por ejemplo no se puede manipular directamente el DOM, ni usar algunos métodos y propiedades por defecto del objeto {{domxref("window")}}. Pero puede usar un gran número de elementos que están dentro de `window`, incluyendo [WebSockets](/es/docs/Web/API/WebSockets_API), y data storage formas de almacenamiento como [IndexedDB](/es/docs/Web/API/IndexedDB_API) y solo en Firefox OS [Data Store API](/es/docs/Web/API/Data_Store_API). Mira [Funciones y clases disponibles para workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) para saber más.

Los datos se comunican entre los workers y el hilo principal a través de un sistema de mensajes — tanto del hilo principal como del worker para enviar un mensaje se invoca al método `postMessage()` , y a través del listener del evento `onmessage` se pueden escuchar los mensajes (El mensaje está dentro de la propiedad `data` del evento) . Los datos se copian en lugar de compartirse.

Los workers también pueden generar nuevos workers, siempre que los workers estén en la misma página que el principal. Además, los workers pueden usar [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) para la network I/O, con la excepción de que los atributos `responseXML` y `channel` de `XMLHttpRequest` siempre retornan valor `null`.

Ademas de los workers dedicados, hay otro tipo de workers:

- Los Shared workers son workers que pueden ser utilizados por multiples scripts corriendo en diferenes ventanas, IFrames, etc., esto siempre que estén en el mismo dominio que el worker. Son un poco más complejos que los workers dedicados— los scripts deben comunicarse a través de un puerto activo. Mira {{domxref("SharedWorker")}} para mas detalles.
- [ServiceWorkers](/es/docs/Web/API/Service_Worker_API) esencialmente actuan como servidores proxy que se ubican entre las aplicaciones web, el navegador y la red (cuando están disponibles). Están destinados (entre otras cosas) para poder manejar experiencias y comportamientos offline, interceptando peticiones de red y tomando la acción apropiada tomando en cuenta si la conexión está disponible y actualizando los assets desde el servidor. También notificaciones push y sincronización desde la API en segundo plano.
- Chrome Workers es un worker solo de Firefox puedes utilizar si estás desarrollando complementos se puede tener acceso a [js-ctypes](/en-US/js-ctypes) en el worker. Mira {{domxref("ChromeWorker")}} para mas detalles.
- [Audio Workers](/es/docs/Web/API/Web_Audio_API#audio_workers) nos dan la capacidad de procesar audio directamente dentro del contexto del worker.

> [!NOTE]
> Según el [Web workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), los errores del worker no deberían bubujear (mira [Error 1188141 en Firefox](https://bugzil.la/1188141). Esto está implementado en Firefox 42.

## Web Worker interfaces

- {{domxref("AbstractWorker")}}
  - : Abstrae todas las propiedades y métodos comunes a toda clase de workers (i.e. {{domxref("Worker")}} or {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Representa el hilo del worker en ejecución, pudiendo pasar mensajes a este.
- {{domxref("WorkerLocation")}}
  - : Define la ruta absoluta del script que ejecuta el [`Worker`](/es/docs/Web/API/Worker).

<!---->

- {{domxref("SharedWorker")}}
  - : Representa un tipo de worker al que se puede acceder desde distintos contextos de navegación, tanto de varias ventanas, iframes, y otros workers.
- {{domxref("WorkerGlobalScope")}}
  - : Representa el ámbito genérico de cualquier worker (similar a {{domxref("Window")}} en un contenido web normal). Los diferentes tipos de workers tienen objetos de ámbito que heredan de esta interfaz y añade características más específicas.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Representa el ámbito de un worker dedicado, hereda de {{domxref("WorkerGlobalScope")}} y añade algunas características.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Representa el ámbito de un shared worke, hereda de {{domxref("WorkerGlobalScope")}} y añade algunas características.
- {{domxref("WorkerNavigator")}}
  - : Representa la identidad y estado del user agent (El cliente):

## Examples

Hemos creado un par de demostraciones para ver su uso básico:

- [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/)).

You can find out more information on how these demos work in [Using web workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers).

## Especificaciones

{{Specifications}}

## See also

- [Using Web Workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Worker Interface](/es/docs/Web/API/Worker)
- [SharedWorker interface](/es/docs/Web/API/SharedWorker)
- [ServiceWorker API](/es/docs/Web/API/Service_Worker_API)
- [Functions and classes available to workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ChromeWorker](/es/docs/Web/API/ChromeWorker): for using workers in privileged/chrome code
