---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

La interfaz `ServiceWorkerContainer` de la [API Service Worker](/es/docs/Web/API/Service_Worker_API) proporciona un objeto que representa al _service worker_ como una unidad general en el ecosistema de la red, incluidas las facilidades para registrar, cancelar y actualizar los _service worker_, y acceder al estado de los _service worker_ y sus altas.

Lo que es más importante, expone el método {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} que se usa para registrar los _service worker_ y la propiedad {{domxref("ServiceWorkerContainer.controller")}} que se usa para determinar si la página actual se controla activamente o no.

{{InheritanceDiagram}}

## Propiedades de instancia

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("ServiceWorker")}} si su estado es `activating` o `activated` (el mismo objeto devuelto por {{domxref("ServiceWorkerRegistration.active")}}). Esta propiedad devuelve `null` durante una solicitud de actualización forzada (_Shift_ + actualizar) o si no hay ningún _worker_ activo.
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : Proporciona una forma de retrasar la ejecución del código hasta que un _service worker_ esté activo. Devuelve un {{jsxref("Promise")}} que nunca se rechazará y que espera indefinidamente hasta que el {{domxref("ServiceWorkerRegistration")}} asociado con la página actual tenga un {{domxref("ServiceWorkerRegistration.active" )}}. Una vez que se cumple esa condición, se resuelve con {{domxref("ServiceWorkerRegistration")}}.

## Eventos

- [`controllerchange`](/es/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Ocurre cuando el {{domxref("ServiceWorkerRegistration")}} asociado del documento adquiere un nuevo {{domxref("ServiceWorkerRegistration.active","active")}} _worker_.
- [`error`](/es/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se activa cada vez que se produce un error en los _service worker_ asociados.
- [`message`](/es/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Ocurre cuando el objeto {{domxref("ServiceWorkerContainer")}} recibe los mensajes entrantes (por ejemplo, a través de una llamada {{domxref("MessagePort.postMessage()")}}).

## Métodos de instancia

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : Crea o actualiza un {{domxref("ServiceWorkerRegistration")}} para el `scriptURL` dado.
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Obtiene un objeto {{domxref("ServiceWorkerRegistration")}} cuyo alcance coincide con la URL del documento proporcionado. El método devuelve un {{jsxref("Promise")}} que se resuelve en {{domxref("ServiceWorkerRegistration")}} o `undefined`.
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Devuelve todos los objetos {{domxref("ServiceWorkerRegistration")}} asociados con un `ServiceWorkerContainer` en una matriz. El método devuelve un {{jsxref("Promise")}} que se resuelve en una matriz de {{domxref("ServiceWorkerRegistration")}}.
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : Inicia explícitamente el flujo de mensajes que se envían desde un _service worker_ a las páginas bajo su control (por ejemplo, enviados a través de {{domxref("Client.postMessage()")}}). Esto se puede usar para reaccionar antes a los mensajes enviados, incluso antes de que el contenido de esa página haya terminado de cargarse.

## Ejemplos

El siguiente ejemplo primero verifica si el navegador es compatible con _service worker_. Si se admite, el código registra el _service worker_ y determina si controla activamente la página. Si no es así, solicita al usuario que vuelva a cargar la página para que el _service worker_ pueda tomar el control. El código también informa de cualquier error de registro.

```js
if ("serviceWorker" in navigator) {
  // Registre un service worker alojado en la raíz del
  // sitio utilizando el alcance predeterminado.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log(
        "El registro del service worker se realizó correctamente:",
        registration,
      );

      // En este punto, opcionalmente puede hacer algo
      // con el registro. Ver https://developer.mozilla.org/es/docs/Web/API/ServiceWorkerRegistration
    })
    .catch((error) => {
      console.error(`El registro del service worker falló: ${error}`);
    });

  // Independientemente del registro, también mostremos información
  // sobre si la página actual está controlada por un service worker
  // existente y cuándo cambia ese controlador.

  // Primero, haga una verificación única si actualmente
  // hay un service worker en control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "Esta página está actualmente controlada por: ",
      navigator.serviceWorker.controller,
    );
  }

  // Luego, registre un controlador para detectar cuándo
  // un service worker nuevo o actualizado toma el control.
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "Esta página ahora está controlada por: ",
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

- [Uso de _Service Workers_](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Ejemplo de código básico de _service worker_](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [¿Está listo _ServiceWorker_?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Uso de trabajadores web](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
