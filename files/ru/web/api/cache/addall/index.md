---
title: Cache.addAll()
slug: Web/API/Cache/addAll
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

## Описание

Метод **`addAll()`** интерфейса {{domxref("Cache")}} принимает массив URLS в качестве параметра, получает данные по ним, и добавляет полученные объекты ответов в заданный кеш. Объекты запросов, созданные в ходе получения данных, становятся ключами для хранимых ответов.

> [!NOTE]
> Метод `addAll()` перезапишет любые пары ключ/значение ранее записанные в кеш, соответствующие запросу, но выдаст ошибку, если операция `put()` перезапишет один из кешей, созданный за время выполнения одного и того же метода `addAll()`.

## Синтаксис

```js
cache.addAll(requests[]).then(function() {
  //запросы были добавлены в кеш
});
```

### Параметры

- requests
  - : Массив объектов {{domxref("Request")}}, которые вы хотите добавить в кеш.

### Возвращаемое значение

{{jsxref("Promise")}}, которые разрешается с пустым значением void.

### Исключения

| **Исключение** | **Когда происходит**                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`    | Схема URL не `http` или `https`.Статус ответа не из диапазона 200 (т.е., ответ не успешен). Это случается если запрос не выполняется успешно, а также, если запрос является _cross-origin no-cors_ запросом (в таком случае, статус всегда 0). |

## Примеры

Этот блок кода ожидает старта события {{domxref("InstallEvent")}}, а затем запускает {{domxref("ExtendableEvent.waitUntil","waitUntil")}} для обработки процесса установки приложения. Этот процесс состоит из вызова {{domxref("CacheStorage.open")}} для создания нового кеша, и вызова `addAll()` для добавления набора ресурсов в этот кеш.

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

## Смотрите также

- [Использование сервис воркеров](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
