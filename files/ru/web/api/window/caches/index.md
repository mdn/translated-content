---
title: Глобальное свойство caches
slug: Web/API/Window/caches
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Доступное только для чтения глобальное свойство **`caches`** возвращает объект {{domxref("CacheStorage")}} связанный с текущим контекстом.
С помощью этого объекта можно реализовать хранение ресурсов в автономном режиме и генерацию индивидуальных ответов на запросы.

{{securecontext_header}}

## Значение

Объект {{domxref("CacheStorage")}}.

## Примеры

Данный пример показывает как использовать кеш в контексте [service worker](/ru/docs/Web/API/Service_Worker_API) для хранения в автономном режиме.

```js
this.addEventListener("install", (event) => {
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
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Service Workers](/ru/docs/Web/API/Service_Worker_API)
- [Web Workers](/ru/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
