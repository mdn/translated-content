---
title: "ServiceWorker: evento statechange"
short-title: statechange
slug: Web/API/ServiceWorker/statechange_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

El evento `statechange` se dispara cada vez que cambia {{domxref("ServiceWorker.state")}}.

## Sintaxis

Usa el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de manejador de eventos.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Tipo de evento

Un {{domxref("Event")}} genérico.

## Ejemplos

Este fragmento de código proviene del [ejemplo de eventos de registro de service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([demo en vivo](https://googlechrome.github.io/samples/service-worker/registration-events/)). El código escucha cualquier cambio en {{domxref("ServiceWorker.state")}} y devuelve su valor.

```js
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
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

Ten en cuenta que cuando se dispara `statechange`, las referencias del service worker pueden haber cambiado. Por ejemplo:

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // En este punto, swr.waiting O swr.active podrían ser true. Esto se debe a que el evento statechange
    // se encola, mientras tanto el worker subyacente puede haber pasado al estado waiting
    // y será activado inmediatamente si es posible.
  };
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
