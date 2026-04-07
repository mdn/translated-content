---
title: "ServiceWorker: propiedad scriptURL"
short-title: scriptURL
slug: Web/API/ServiceWorker/scriptURL
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Devuelve la URL del script serializado del `ServiceWorker` definido como parte de [`ServiceWorkerRegistration`](/es/docs/Web/API/ServiceWorkerRegistration).
Debe tener el mismo origen que el documento que registra el `ServiceWorker`.

## Valor

Una cadena de texto.

## Ejemplos

```js
const sw = navigator.serviceWorker.controller;
console.log(sw.scriptURL);
// https://example.com/scripts/service-worker.js
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
