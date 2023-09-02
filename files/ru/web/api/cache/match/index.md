---
title: Cache.match()
slug: Web/API/Cache/match
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Метод **`match()`** интерфейса {{domxref("Cache")}} возвращает {{jsxref("Promise")}}, который разрешается в {{domxref("Response")}}, ассоциированный с первым совпадающим запросом в объекте {{domxref("Cache")}}. Если совпадений не найдено, {{jsxref("Promise")}} разрешается в {{jsxref("undefined")}}.

## Синтаксис

```js
cache.match(request, { options }).then(function (response) {
  //сделать что-нибудь с ответом
});
```

### Возвращаемое значение

{{jsxref("Promise")}}, который разрешается в первый {{domxref("Response")}}, который совпадает с запросом или в {{jsxref("undefined")}}, если совпадений не найдено.

> **Примечание:** `Cache.match()` в основном идентичен {{domxref("Cache.matchAll()")}}, за исключением того, что `Cache.match()` разрешается в `response[0]` (первый совпадающий ответ) вместо `response[]` (массив со всеми совпадающими ответами).

### Параметры

- request
  - : Запрос {{domxref("Request")}}, который вы пытаетесь найти в {{domxref("Cache")}}.
- options {{optional_inline}}

  - : Объект, который задаёт параметры для операции `match`. Допустимые значения:

    - `ignoreSearch`: Булево значение {{domxref("Boolean")}}, которое указывает следует ли игнорировать строку запроса в url. Например, если оно установлено в `true, часть` `?value=bar` запроса `http://foo.com/?value=bar` будет проигнорирована при поиске соответствий ключа. По умолчанию равно `false`.
    - `ignoreMethod`: Булево значение {{domxref("Boolean")}}, которое, когда равно `true`, предотвращает проверку `http` метода для запроса {{domxref("Request")}} при выполнении сопоставлений ключа (обычно разрешены лишь `GET` и `HEAD`). По умолчанию равно `false`.
    - `ignoreVary`: Булево значение {{domxref("Boolean")}}, которое, когда установлено в `true,` указывает операции сопоставления ключа не проводить проверку соответствия заголовка `VARY` — т.е., если URL совпадает, вы получите соответствие независимо от того, установлен ли на объекте {{domxref("Response")}} заголовок `VARY`. По умолчанию равно `false`.
    - `cacheName`: Строка {{domxref("DOMString")}}, задающая определённый кеш для поиска. Заметьте, что этот параметр игнорируется методом `Cache.match()`.

    В Chrome поддерживается лишь `cacheName`.

## Примеры

Код взят примера из примера [пользовательская офлайн-страница](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) ([живой пример](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)).

Следующий пример использует кеш для предоставления данных, когда запрос не удался. Выражение `catch()` выполняется когда вызов `fetch()` возбуждает исключение. Внутри выражения `catch()`, `match()` используется для возврата корректного ответа.

В этом примере, мы решили что кешироваться будут лишь HTML-документы полученные с помощью GET-запроса. Если условие `if()` равно false, то обработчик не будет вмешиваться в ответ. Если зарегистрированы другие обработчики получения данных, то у них будет шанс вызвать `event.respondWith()`. Если ни один из обработчиков не вызовет `event.respondWith()`, запрос будет обработан браузером, как это было бы сделано без участия сервис воркера. Если `fetch()` возвращает валидный HTTP ответ к кодом из диапазона 4xx или 5xx, то метод `catch()` не будет вызван.

```js
self.addEventListener("fetch", function (event) {
  // Мы хотим выполнить лишь event.respondWith() если это GET-запрос HTML-документа.
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").indexOf("text/html") !== -1
  ) {
    console.log("Handling fetch event for", event.request.url);
    event.respondWith(
      fetch(event.request).catch(function (e) {
        console.error("Fetch failed; returning offline page instead.", e);
        return caches.open(OFFLINE_CACHE).then(function (cache) {
          return cache.match(OFFLINE_URL);
        });
      }),
    );
  }
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
