---
title: BackgroundFetchRegistration.match()
slug: Web/API/BackgroundFetchRegistration/match
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - match
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.match
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Метод **`match()`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает первое совпадение {{domxref("BackgroundFetchRecord")}}.

## Синтаксис

```js
match(request);
match(request, options);
```

### Параметры

- `request`
  - : The {{domxref("Request")}} for which you are attempting to find records.
    This can be a {{domxref("Request")}} object or a URL.
- `options` {{optional_inline}}

  - : An object that sets options for the `match` operation. The available
    options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether to
        ignore the query string in the URL. For example, if set to
        `true` the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value. When `true`,
        prevents matching operations from validating the {{domxref("Request")}} `http` method.
        If `false` (the default) only `GET` and `HEAD` are allowed.
    - `ignoreVary`
      - : A boolean value. When `true` indicates that the [`VARY`](/en-US/docs/Web/HTTP/Headers/Vary)
        header should be ignored.
        It defaults to `false`.

### Возвращаемое значение

A {{jsxref("Promise")}} that resolves with the first {{domxref("BackgroundFetchRecord")}} that matches
the request or {{jsxref("undefined")}} if no match is found.

> **Note:** `BackgroundFetchRegistration.match()` is basically identical to
> {{domxref("BackgroundFetchRegistration.matchAll()")}}, except that rather than resolving with an array of
> all matching records, it resolves with the first matching record only.

### Исключения

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if you call `match()` when there are no fetches in progress. This state will be reflected by {{domxref("BackgroundFetchRegistration.recordsAvailable")}} being set to `false`.

## Примеры

In this example we look for a record with the URL "/ep-5.mp3". If a {{domxref("BackgroundFetchRecord")}} is found then we can return some information about it.

```js
bgFetch.match('/ep-5.mp3').then(async (record) => {
  if (!record) {
    console.log('No record found');
    return;
  }

  console.log(`Запрос`, record.request);
  const response = await record.responseReady;
  console.log(`Ответ`, response);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
