---
title: caches
slug: Web/API/caches
---

{{APIRef()}}{{SeeCompatTable}}

La propiedad de sólo-lectura **`caches`** devuelve el objeto {{domxref("CacheStorage")}} asociado al contexto actual. Este objeto habilita funcionalidades como guardar assets para su utilización _offline_, y generar respuestas personalizadas a las peticiones.

## Sintaxis

```
var myCacheStorage = self.caches; // or just caches
```

### Valor

Un objeto {{domxref("CacheStorage")}}.

## Ejemplo

El siguiente ejemplo muestra la forma en la que utilizarías una cache en un contexto de [service worker](/es/docs/Web/API/Service_Worker_API) para guardar assets _offline_.

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll(
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      );
    }),
  );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Service Workers](/es/docs/Web/API/ServiceWorker_API)
- [Web Workers](/es/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
