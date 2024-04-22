---
title: Cache.add()
slug: Web/API/Cache/add
---

{{APIRef("Service Workers API")}}

Метод **`add()`** интерфейса {{domxref("Cache")}} принимает в качестве параметра URL, загружает его и добавляет полученный объект ответа в заданный кеш. Метод `add()` функционально эквивалентен следующему коду:

```js
fetch(url).then(function (response) {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

Для более сложных операций, вам нужно использовать {{domxref("Cache.put","Cache.put()")}}.

> **Примечание:** `add()` перезапишет любую пару ключ/значение, сохранённую ранее в кеше, соответствующем запросу.

## Синтаксис

```
cache.add(request).then(function() {
  //запрос был добавлен в кеш
});
```

### Параметры

- request
  - : Запрос, который вы хотите добавить в кеш. Это может быть объект {{domxref("Request")}}, либо URL.

### Возвращаемое значение

{{jsxref("Promise")}}, который разрешается с пустым значением void.

### Исключения

| **Исключение** | **Когда происходит**                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`    | Схема URL не `http` или `https`.Статус ответа не из диапазона 200 (т.е., ответ не успешен). Это случается если запрос не выполняется успешно, а также, если запрос является _cross-origin no-cors_ запросом (в таком случае, статус всегда 0). |

## Примеры

Этот блок кода ожидает старта события {{domxref("InstallEvent")}} , а затем запускает {{domxref("ExtendableEvent.waitUntil","waitUntil")}} для обработки процесса установки приложения. Этот процесс состоит из вызова {{domxref("CacheStorage.open")}} для создания нового кеша, и использования {{domxref("Cache.add")}} для добавления ресурсов в этот кеш.

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.add("/sw-test/index.html");
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
