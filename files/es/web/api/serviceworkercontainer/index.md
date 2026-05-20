---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 981e2d17e897c6280fd27364746a34d8560d30d1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La interfaz **`ServiceWorkerContainer`** de la [API Service Worker](/es/docs/Web/API/Service_Worker_API) proporciona un objeto que representa al _service worker_ como una unidad general en el ecosistema de la red, incluidas las facilidades para registrar, cancelar el registro y actualizar los _service workers_, y acceder al estado de los _service workers_ y sus registros.

Lo más importante es que expone el método {{domxref("ServiceWorkerContainer.register()")}} que se usa para registrar _service workers_, y la propiedad {{domxref("ServiceWorkerContainer.controller")}} que se usa para determinar si la página actual está siendo controlada activamente o no.

Los objetos `ServiceWorkerContainer` se exponen en el ámbito de la ventana a través de {{domxref("Navigator.serviceWorker")}} y en los _workers_ mediante {{domxref("WorkerNavigator.serviceWorker")}} (si es compatible — consulte [compatibilidad con navegadores](#compatibilidad_con_navegadores)).

{{InheritanceDiagram}}

## Propiedades de instancia

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("ServiceWorker")}} que representa al _service worker_ activo que controla la página actual, o `null` si la página no tiene un _service worker_ activo o en proceso de activación.
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : Devuelve un {{jsxref('Promise')}} que se resuelve con el {{domxref("ServiceWorkerRegistration")}} asociado a la página actual, pero solo cuando hay un _service worker_ activo.
    Esto proporciona un mecanismo para diferir la ejecución del código hasta que un _service worker_ esté activo.

## Métodos de instancia

- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Obtiene un objeto {{domxref("ServiceWorkerRegistration")}} cuyo alcance coincide con la URL del documento proporcionado. El método devuelve un {{jsxref("Promise")}} que se resuelve en un {{domxref("ServiceWorkerRegistration")}} o `undefined`.
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Devuelve todos los objetos {{domxref("ServiceWorkerRegistration")}} asociados con un `ServiceWorkerContainer` en un arreglo. El método devuelve un {{jsxref("Promise")}} que se resuelve en un arreglo de {{domxref("ServiceWorkerRegistration")}}.
- {{domxref("ServiceWorkerContainer.register()")}}
  - : Crea o actualiza un {{domxref("ServiceWorkerRegistration")}} para el `scriptURL` dado.
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : Inicia explícitamente el flujo de mensajes que se envían desde un _service worker_ a las páginas bajo su control (por ejemplo, enviados a través de {{domxref("Client.postMessage()")}}). Esto se puede usar para reaccionar antes a los mensajes enviados, incluso antes de que el contenido de esa página haya terminado de cargarse.

## Eventos

- {{domxref("ServiceWorkerContainer/controllerchange_event", "controllerchange")}}
  - : Se dispara cuando el {{domxref("ServiceWorkerRegistration")}} asociado al documento adquiere un nuevo _worker_ {{domxref("ServiceWorkerRegistration.active","active")}}.
- {{domxref("ServiceWorkerContainer/message_event", "message")}}
  - : Se dispara cuando el objeto `ServiceWorkerContainer` recibe mensajes entrantes (por ejemplo, a través de una llamada a {{domxref("MessagePort.postMessage()")}}).
- {{domxref("ServiceWorkerContainer/messageerror_event", "messageerror")}}
  - : Se dispara cuando el objeto `ServiceWorkerContainer` no puede deserializar los mensajes entrantes (por ejemplo, a través de una llamada a {{domxref("MessagePort.postMessage()")}}).

## Ejemplos

El siguiente ejemplo primero verifica si el navegador es compatible con _service workers_. Si es compatible, el código registra el _service worker_ y determina si la página está siendo controlada activamente por el _service worker_. Si no es así, solicita al usuario que vuelva a cargar la página para que el _service worker_ pueda tomar el control. El código también informa de cualquier error de registro.

```js
if ("serviceWorker" in navigator) {
  // Registrar un service worker alojado en la raíz del
  // sitio utilizando el alcance predeterminado.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log(
        "El registro del service worker se realizó correctamente:",
        registration,
      );

      // En este punto, opcionalmente se puede hacer algo
      // con el registro. Ver https://developer.mozilla.org/es/docs/Web/API/ServiceWorkerRegistration
    })
    .catch((error) => {
      console.error(`El registro del service worker falló: ${error}`);
    });

  // Independientemente del registro, también mostremos
  // información sobre si la página actual está controlada
  // por un service worker existente y cuándo cambia ese
  // controlador.

  // Primero, hacer una verificación única para saber si
  // actualmente hay un service worker en control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "Esta página está actualmente controlada por:",
      navigator.serviceWorker.controller,
    );
  }

  // Luego, registrar un manejador para detectar cuándo
  // un service worker nuevo o actualizado toma el control.
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "Esta página ahora está controlada por",
      navigator.serviceWorker.controller,
    );
  };
} else {
  console.log("Los service workers no son compatibles.");
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de Service Workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Ejemplo de código básico de service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Uso de web workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
