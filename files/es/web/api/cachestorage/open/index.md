---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
page-type: web-api-instance-method
tags:
  - API
  - CacheStorage
  - Method
  - Método
  - Referencia
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - open
browser-compat: api.CacheStorage.open
---

{{APIRef("Service Workers API")}}

El método **`open()`** de la interfaz {{DOMxRef("CacheStorage")}} devuelve una {{jsxref("Promise")}} que se resuelve en el objeto {{DOMxRef("Cache")}} que coincide con `cacheName`.

Puedes acceder a `CacheStorage` a través de la propiedad global
{{DOMxRef("caches")}}.

> **Nota:** Si la {{DOMxRef("Cache")}} especificada no existe, se crea
> una nueva caché con ese `cacheName` y una {{jsxref("Promise")}} que
> resuelve este nuevo objeto {{DOMxRef("Cache")}} devuelto.

## Sintaxis

```js-nolint
open(cacheName)
```

### Parámetros

- `cacheName`
  - : El nombre de la caché que deseas abrir.

### Valor de retorno

Una {{jsxref("Promise")}} que se resuelve en el objeto {{DOMxRef("Cache")}} solicitado.

## Ejemplos

Este ejemplo es de MDN [ejemplo de *service worker* simple](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (ve el [*service worker* simple ejecutándose en vivo](https://bncb2v.csb.app/)).
Aquí esperamos a que se active un {{DOMxRef("InstallEvent")}}, luego se ejecuta
{{DOMxRef("ExtendableEvent.waitUntil","waitUntil()")}} para gestionar el proceso de instalación de
la aplicación. Esto consiste en llamar a `CacheStorage.open()` para crear una nueva
caché, luego usa {{DOMxRef("Cache.addAll()")}} para agregarle una serie de recursos.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ])
      )
  );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [Usar *Service Workers*](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{DOMxRef("Cache")}}
- {{DOMxRef("caches")}}
