---
title: "ServiceWorker: evento error"
short-title: error
slug: Web/API/ServiceWorker/error_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

El evento `error` se dispara cada vez que ocurre un error en el service worker.

## Sintaxis

Usa el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de manejador de eventos.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Tipo de evento

Un {{domxref("Event")}} genérico.

## Ejemplo

El siguiente fragmento de código obtiene una referencia al objeto {{domxref("ServiceWorker")}} a través de {{domxref("ServiceWorkerRegistration.active")}} y establece un manejador `onerror` en el objeto resultante:

```js
// en la página controlada
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.onerror = (event) => {
      console.log("¡Ocurrió un error en el service worker!");
    };
  });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
