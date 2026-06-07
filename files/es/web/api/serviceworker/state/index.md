---
title: "ServiceWorker: propiedad state"
short-title: state
slug: Web/API/ServiceWorker/state
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`state`** de la interfaz {{domxref("ServiceWorker")}} devuelve una cadena de texto que representa el estado actual del service worker. Puede ser uno de los siguientes valores: `parsed`, `installing`, `installed`, `activating`, `activated`, o `redundant`.

## Valor

Un {{jsxref("String")}} que puede tomar uno de los siguientes valores:

- `"parsed"`
  - : El estado inicial de un service worker después de ser descargado y confirmado que es ejecutable.
    Un service worker nunca se actualiza a este estado, por lo que este nunca será el valor del evento {{DOMxRef("ServiceWorker.statechange_event", "statechange")}}.
- `"installing"`
  - : El service worker en este estado se considera un worker en instalación. Durante este estado, se puede llamar a {{DOMxRef("ExtendableEvent.waitUntil()")}} dentro del manejador del evento `install` para extender la vida del worker en instalación hasta que la promesa pasada se resuelva exitosamente. Esto se usa principalmente para asegurar que el service worker no esté activo hasta que todas las cachés principales se hayan poblado.
- `"installed"`
  - : El service worker en este estado se considera un worker en espera.
- `"activating"`
  - : El service worker en este estado se considera un worker activo. Durante este estado, se puede llamar a {{DOMxRef("ExtendableEvent.waitUntil()")}} dentro del manejador del evento `onactivate` para extender la vida del worker activo hasta que la promesa pasada se resuelva exitosamente. No se dispatchan eventos funcionales hasta que el estado pase a activado.
- `"activated"`
  - : El service worker en este estado se considera un worker activo listo para manejar eventos funcionales.
- `"redundant"`
  - : Un nuevo service worker está reemplazando al service worker actual, o el service worker actual está siendo descartado debido a un fallo de instalación.

## Ejemplos

Este fragmento de código proviene del [ejemplo de eventos de registro de service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([demo en vivo](https://googlechrome.github.io/samples/service-worker/registration-events/)). El código escucha cualquier cambio en `ServiceWorker.state` y devuelve su valor.

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
