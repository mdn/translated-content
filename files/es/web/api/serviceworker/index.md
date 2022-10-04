---
title: ServiceWorker
slug: Web/API/ServiceWorker
page-type: web-api-interface
tags:
  - API
  - API Caché
  - Interfaz
  - Interface
  - Offline
  - Desconectado
  - Fuera de línea
  - Referencia
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
browser-compat: api.ServiceWorker
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

La interfaz **`ServiceWorker`** de la [API *Service Worker*](/es/docs/Web/API/Service_Worker_API) proporciona una referencia a un *service worker*. Múltiples {{glossary("browsing context", "browsing contexts")}} (por ejemplo, páginas, *workers*, etc.) se pueden asociar con el mismo *service worker*, cada uno a través de un objeto `ServiceWorker` único.

Un objeto `ServiceWorker` está disponible en la propiedad {{domxref("ServiceWorkerRegistration.active")}}, y la propiedad {{domxref("ServiceWorkerContainer.controller")}} — este es un *service worker* que ha sido activado y está controlando la página (el *service worker* se ha registrado correctamente y la página controlada se ha vuelto a cargar).

La interfaz `ServiceWorker` recibe un conjunto de eventos del ciclo de vida, `install` y `activate` — y eventos funcionales que incluyen `fetch`. Un objeto `ServiceWorker` tiene un {{domxref("ServiceWorker.state")}} asociado, relacionado con su ciclo de vida.

{{InheritanceDiagram}}

## Propiedades

_La interfaz `ServiceWorker` hereda propiedades de su padre, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : Devuelve la URL del script serializado `ServiceWorker` definida como parte de {{domxref("ServiceWorkerRegistration")}}. La URL debe estar en el mismo origen que el documento que registra el `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : Devuelve el estado del *service worker*. Devuelve uno de los siguientes valores: `parsed`, `installing`, `installed`, `activating`, `activated` o `redundant`.

## Métodos

_La interfaz `ServiceWorker` hereda métodos de su padre, {{domxref("EventTarget")}}._

## Eventos

- {{domxref("ServiceWorker.statechange_event", "statechange")}} {{ReadOnlyInline}}
  - : Se activa cada vez que cambia {{domxref("ServiceWorker.state")}}.

## Ejemplos

Este fragmento de código es de el [ejemplo de eventos de registro de *service worker*](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([demostración en vivo](https://googlechrome.github.io/samples/service-worker/registration-events/)). El código detecta cualquier cambio en {{domxref("ServiceWorker.state")}} y devuelve su valor.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        document.querySelector("#kind").textContent = "installing";
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector("#kind").textContent = "waiting";
      } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector("#kind").textContent = "active";
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Algo salió mal durante el registro. El archivo service-worker.js
      // podría no estar disponible o contener un error de sintaxis.
    });
} else {
  // El navegador actual no admite service workers.
  // Quizás es demasiado antiguo o no estamos en un Contexto Seguro.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [El manual de Offline](https://web.dev/offline-cookbook/)(*service workers*)
- [Usar *Service Workers*](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Ejemplo de código básico de Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [¿Está listo el *ServiceWorker*?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Usar *web workers*](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
