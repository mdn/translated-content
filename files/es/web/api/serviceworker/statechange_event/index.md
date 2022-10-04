---
title: 'ServiceWorker: Evento statechange'
slug: Web/API/ServiceWorker/statechange_event
page-type: web-api-event
tags:
  - API
  - Event
  - Evento
  - Referencia
  - Reference
  - Service Workers
  - ServiceWorker
  - statechange
browser-compat: api.ServiceWorker.statechange_event
---

{{APIRef("Service Workers API")}}

El evento `statechange` se activa cada vez que {{domxref("ServiceWorker.state")}} cambia.

## Sintaxis

Utiliza el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de controlador de eventos.

```js
addEventListener('statechange', (event) => { });

onstatechange = (event) => { };
```

## Tipo Event

Un {{domxref("Event")}} genérico.

## Ejemplos

Este fragmento de código es de el [ejemplo de eventos de registro de *service worker*](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([demostración en vivo](https://googlechrome.github.io/samples/service-worker/registration-events/)). El código detecta cualquier cambio en {{domxref("ServiceWorker.state")}}
y devuelve su valor.

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installing';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'waiting';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'active';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', (e) => {
    logState(e.target.state);
  });
}
```

Ten en cuenta que cuando se dispara `statechange`, las referencias del *service worker* pueden haber cambiado. Por ejemplo:

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // En este punto, swr.waiting O swr.active podrían ser true. Esto se debe a que el estado cambia
    // el evento se pone en cola, mientras tanto, el worker subyacente puede haber entrado
    // en estado de espera y se activará inmediatamente si es posible.
  }
})
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}
