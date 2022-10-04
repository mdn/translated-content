---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Propiedad
  - Referencia
  - Reference
  - Service Workers
  - ServiceWorker
  - state
browser-compat: api.ServiceWorker.state
---

{{APIRef("Service Workers API")}}

La propiedad de solo lectura **`state`** de la interfaz {{domxref("ServiceWorker")}} devuelve una cadena que representa el estado actual del *service worker*. Puede ser uno de los siguientes valores: `parsed`, `installing`,
`installed`, `activating`, `activated` o
`redundant`.

## Valor

Una {{jsxref("String")}} que puede tomar uno de los siguientes valores:

- `"parsed"`
  - : El estado inicial de un *service worker* después de descargarlo y confirmar que se puede ejecutar.
    Un *service worker* nunca se actualiza a este estado, por lo que este nunca será el valor de {{DOMxRef("ServiceWorker.statechange_event")}}
  - : El *service worker* en este estado se considera un *worker* instalador.¿ Durante este estado, se puede llamar a {{DOMxRef("ExtendableEvent.waitUntil()")}} dentro del controlador de eventos `install` para extender la vida útil del *worker* de instalación hasta que la promesa pasada se resuelva correctamente. Esto se usa principalmente para garantizar que el *service worker* no esté activo hasta que se llenen todas las memorias caché principales.
- `"installed"`
  - : El *service worker* en este estado se considera un *worker* en espera.
- `"activating"`
  - : El *service worker* en este estado se considera un *worker* activo. Durante este estado, se puede llamar a {{DOMxRef("ExtendableEvent.waitUntil()")}} dentro del controlador de eventos `onactivate` para extender la vida útil del *worker* activo hasta que la promesa pasada se resuelva correctamente. No se envían eventos funcionales hasta que el estado se activa.
- `"activated"`
  - : El *service worker* en este estado se considera un *worker* activo listo para manejar eventos funcionales.
- `"redundant"`
  - : Un nuevo *service worker* está reemplazando al *service worker* actual, o el *service worker* actual se está descartando debido a una falla en la instalación.

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

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}
