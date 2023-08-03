---
title: WindowOrWorkerGlobalScope.caches
slug: Web/API/caches
---

{{APIRef()}}{{SeeCompatTable}}

**`caches`** {{domxref("WindowOrWorkerGlobalScope")}} свойство только для чтения интерфейса возвращающее объект ассоциированный с текущим контекстом {{domxref("CacheStorage")}}.

Этот объект реализует такую функциональность как строгое соответствие для офлайн-использования и генерирование пользовательских ответов на запросы.

## Синтаксис

```
var myCacheStorage = self.caches; // or just caches
```

### Значение

Возвращает значение {{domxref("CacheStorage")}} .

## Пример

Данный пример показывает как надо использовать кеш в контексте [service worker](/ru/docs/Web/API/Service_Worker_API) для хранения в автономном режиме

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
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
      ]);
    }),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Также смотрите

- [Service Workers](/ru/docs/Web/API/ServiceWorker_API)
- [Web Workers](/ru/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
