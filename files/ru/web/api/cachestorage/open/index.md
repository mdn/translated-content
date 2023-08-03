---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

**`open()`** метод из {{domxref("CacheStorage")}} интерфейса возвращает {{jsxref("Promise")}} который резолвится в {{domxref("Cache")}} объект с соответствующим `cacheName (именем тега кеша)`.

> **Примечание:** If the specified {{domxref("Cache")}} does not exist, a new cache is created with that `cacheName`.

## Синтаксис

```
caches.open(cacheName).then(function(cache) {
  //обрабатываем кеш например: cache.AddAll(filesToCache); где filesToCache = ['/mypic.png', ...]
});
```

### Возвращает

{{jsxref("Promise")}} который резолвится в запрашиваемый {{domxref("Cache")}} объект.

### Параметры

- cacheName
  - : Имя (тег) кеша заданное заранее которое необходимо открыть.

## Примеры

This code snippet is from the MDN [sw-test example](https://github.com/mdn/sw-test/) (see [sw-test running live](https://mdn.github.io/sw-test/)). Here we wait for a {{domxref("FetchEvent")}} to fire. Then we construct a custom response like so:

1. Check whether a match for the request is found in the {{domxref("CacheStorage")}} using {{domxref("CacheStorage.match")}}. If so, serve that.
2. If not, open the `v1` cache using {{domxref("CacheStorage.open")}}, put the default network request in the cache using {{domxref("Cache.put")}} and return a clone of the default network request using `return response.clone()` — necessary because `put()` consumes the response body.
3. If this fails (e.g., because the network is down), return a fallback response.

```js
var response;
var cachedResponse = caches
  .match(event.request)
  .catch(function () {
    return fetch(event.request);
  })
  .then(function (r) {
    response = r;
    caches.open("v1").then(function (cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  })
  .catch(function () {
    return caches.match("/sw-test/gallery/myLittleVader.jpg");
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
