---
title: Cache.keys()
slug: Web/API/Cache/keys
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Метод **`keys()`** интерфейса {{domxref("Cache")}} возвращает {{jsxref("Promise")}}, который разрешается в массив ключей {{domxref("Cache")}}.

Запросы возвращаются в том же порядке, в котором были добавлены.

> **Примечание:** Запросы с дублирующимися URL, но с разными заголовками, могут быть возвращены, если в ответах на них установлен заголовок `VARY`.

## Синтаксис

```js
cache.keys(request, { options }).then(function (keys) {
  // сделать что-нибудь с вашим массивом запросов
});
```

### Возвращаемое значение

{{jsxref("Promise")}}, который разрешается в массив ключей {{domxref("Cache")}}.

### Параметры

- request {{optional_inline}}
  - : {{domxref("Request")}} который будет возвращён, если найден указанный ключ.
- options {{optional_inline}}

  - : Объект, чьи свойства контролируют то, как выполняется сопоставление ключей для операции `keys`. Допустимые параметры:

    - `ignoreSearch`: Булево значение {{domxref("Boolean")}}, которое определяет должен ли процесс сопоставления игнорировать строку запроса в url. Если установлено в `true`, часть `?value=bar` запроса `http://foo.com/?value=bar` будет проигнорирована при сопоставлении. По умолчанию установлено в `false`.
    - `ignoreMethod`: Булево значение {{domxref("Boolean")}}, которое, когда равно `true`, предотвращает проверку {{domxref("Request")}}, при сопоставлении ключей, на `HTTP` метод (обычно допускаются только `GET` и `HEAD`). По умолчанию установлено в `false`.
    - `ignoreVary`: Булево значение {{domxref("Boolean")}}, которое, когда равно `true,` указывает операции сопоставления ключей не проводить проверку заголовка `VARY`. Другими словами, если URL совпадает, вы получите соответствие, независимо от того, есть ли заголовок `VARY` на объекте запроса {{domxref("Response")}}. По умолчанию установлено в `false`.
    - `cacheName`: Строка {{domxref("DOMString")}}, которая представляет собой определённый кеш, в котором нужно вести поиск. Заметьте, что этот параметр игнорируется методом `Cache.keys()`.

## Примеры

```js
caches.open("v1").then(function (cache) {
  cache.keys().then(function (keys) {
    keys.forEach(function (request, index, array) {
      cache.delete(request);
    });
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
