---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
---

{{APIRef ("API de Service Workers")}}

El **`keys()`** método de la interfaz {{domxref ("CacheStorage")}} devuelve un {{jsxref ("Promise")}} que se resolverá con una matriz que contiene las cadenas correspondientes a todos los {{domxref ("Cache")}} objetos rastreados por el objeto {{domxref ("CacheStorage")}} en el orden en que fueron creados. Use este método para iterar sobre una lista de todos los objetos {{domxref ("Cache")}}.

Puede acceder a `CacheStorage` través de la propiedad global {{domxref ("caches", "caches")}}.

## Sintaxis

```
caches.keys().then(function(keyList) {
  // haz algo con tu keyList
});
```

### Parámetros

Ninguna.

### Valor de retorno

a {{jsxref("Promise")}} that resolves with an array of the {{domxref("Cache")}} names inside the {{domxref("CacheStorage")}} object.

## Examples

In this code snippet we wait for an {{domxref("ServiceWorkerGlobalScope.onactivate", "activate")}} event, and then run a {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} block that clears up any old, unused caches before a new service worker is activated. Here we have a whitelist containing the names of the caches we want to keep (`cacheWhitelist`). We return the keys of the caches in the {{domxref("CacheStorage")}} object using `keys()`, then check each key to see if it is in the whitelist. If not, we delete it using {{domxref("CacheStorage.delete()")}}.

```js
then.addEventListener('activar', función (evento) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
    })
  );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Uso de trabajadores del servicio](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
