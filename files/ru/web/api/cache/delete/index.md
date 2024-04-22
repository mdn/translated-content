---
title: Cache.delete()
slug: Web/API/Cache/delete
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Метод **`delete()`** интерфейса {{domxref("Cache")}} ищет запись {{domxref("Cache")}}, чей ключ совпадает с запросом, и, в случае находки, удаляет запись {{domxref("Cache")}} и возвращает {{jsxref("Promise")}}, который разрешается со значением `true`. Если запись не была найдена {{domxref("Cache")}}, метод возвращает `false`.

## Синтаксис

```js
cache.delete(request,{options}).then(function(true) {
  // запись была удалена
});
```

### Возвращаемое значение

{{jsxref("Promise")}}, который разрешается со значением true в случае, если запись была удалена, или false в другом случае.

### Параметры

- request
  - : {{domxref("Request")}}, который вы хотите удалить.
- options {{optional_inline}}

  - : Объект, чьи свойства контролируют как будет выполняться сопоставление ключей при вызове `delete`. Допустимые значения:

    - `ignoreSearch`: Булево значение {{domxref("Boolean")}}, которое определяет будет ли процесс сопоставления игнорировать строку запроса в url. Если установлено в `true`, часть `?value=bar` запроса `http://foo.com/?value=bar` будет проигнорирована при сопоставлении ключей. По умолчанию установлено в `false`.
    - `ignoreMethod`: Булево значение {{domxref("Boolean")}}, которое, если равно `true`, предотвращает проверку {{domxref("Request")}} при сопоставлении ключей на `HTTP` метод (обычно допускаются только `GET` и `HEAD`). По умолчанию установлено в `false`.
    - `ignoreVary`: Булево значение {{domxref("Boolean")}}, которое, если равно `true,` указывает операции сопоставления ключей не проводить проверку заголовка `VARY`. Другими словами, если URL совпадает, вы получите соответствие, независимо от того, есть ли заголовок `VARY` на объекте запроса {{domxref("Response")}}. По умолчанию установлено в `false`.
    - `cacheName`: Строка {{domxref("DOMString")}}, которая представляет собой определённый кеш, в котором вести поиск. Заметьте, что этот параметр игнорируется методом `Cache.delete()`.

## Примеры

```js
caches.open("v1").then(function (cache) {
  cache.delete("/images/image.png").then(function (response) {
    someUIUpdateFunction();
  });
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
