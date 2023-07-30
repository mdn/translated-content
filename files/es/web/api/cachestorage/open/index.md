---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}

El método **`open()`** de la interfaz {{domxref("CacheStorage")}} devuelve una {{jsxref("Promise")}} que se resuelve en el objeto {{domxref("Cache")}} que coincide con `cacheName`.

Puedes acceder a `CacheStorage` a través de la propiedad global
{{domxref("caches")}}.

> **Nota:** Si la {{domxref("Cache")}} especificada no existe, se crea
> una nueva caché con ese `cacheName` y una {{jsxref("Promise")}} que
> resuelve este nuevo objeto {{domxref("Cache")}} devuelto.

## Sintaxis

```js-nolint
open(cacheName)
```

### Parámetros

- `cacheName`
  - : El nombre de la caché que deseas abrir.

### Valor de retorno

Una {{jsxref("Promise")}} que se resuelve en el objeto {{domxref("Cache")}} solicitado.

## Ejemplos

Este ejemplo es de MDN [ejemplo de _service worker_ simple](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (ve el [_service worker_ simple ejecutándose en vivo](https://bncb2v.csb.app/)).
Aquí esperamos a que se active un {{domxref("InstallEvent")}}, luego se ejecuta
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} para gestionar el proceso de instalación de
la aplicación. Esto consiste en llamar a `CacheStorage.open()` para crear una nueva
caché, luego usa {{domxref("Cache.addAll()")}} para agregarle una serie de recursos.

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
        ]),
      ),
  );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usar _Service Workers_](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
