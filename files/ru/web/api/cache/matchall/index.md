---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Метод **`matchAll()`** интерфейса {{domxref("Cache")}} возвращает {{jsxref("Promise")}}, который разрешается в массив всех совпадающих запросов в объекте {{domxref("Cache")}}.

## Синтаксис

```js
cache.matchAll(request, { options }).then(function (response) {
  // сделать что-нибудь с массивом ответов
});
```

### Возвращаемое значение

{{jsxref("Promise")}}, который разрешается в массив всех совпадающих запросов в объекте {{domxref("Cache")}}.

> **Примечание:** {{domxref("Cache.match()")}} в основном идентичен `Cache.matchAll()`, за исключением того, что последний разрешается с `response[0]` (т.е., первым совпадающим ответом) вместо `response` (всех совпадающих ответов в массиве).

### Параметры

- request
  - : Запрос {{domxref("Request")}}, который вы пытаетесь найти в {{domxref("Cache")}}.
- options {{optional_inline}}

  - : Объект options, разрешающий вам установить особые команды контроля поиска соответствий ключа, выполняемого операцией `match`. Доступные параметры:

    - `ignoreSearch`: Булево значение {{domxref("Boolean")}}, которое говорит должен ли процесс сопоставления ключей игнорировать строку запроса в url. Если равно `true`, часть `?value=bar` запроса `http://foo.com/?value=bar` будет игнорироваться при поиске соответствий ключа . По умолчанию равно `false`.
    - `ignoreMethod`: Булево значение {{domxref("Boolean")}}, которое, если равно `true`, предотвращает проверку метода `http` для запроса {{domxref("Request")}} (обычно разрешены лишь `GET и` `HEAD`). По умолчанию равно `false`.
    - `ignoreVary`: Булево значение {{domxref("Boolean")}}, которое, когда равно `true,` говорит процессу сопоставления ключей не проверять соответствие заголовка `VARY` — т.е., если URL совпадает, то вы получите соответствие независимо от того, содержит ли объект {{domxref("Response")}} заголовок `VARY, или нет`. По умолчанию равно `false`.
    - `cacheName`: Строка {{domxref("DOMString")}}, которая представляет собой имя кеша для поиска. **Заметьте, что этот параметр игнорируется методом `Cache.matchAll()`.**

## Примеры

```js
caches.open("v1").then(function (cache) {
  cache.matchAll("/images/").then(function (response) {
    response.forEach(function (element, index, array) {
      cache.delete(element);
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
