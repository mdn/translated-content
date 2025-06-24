---
title: BackgroundFetchRegistration.match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
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
  - : {{domxref("Request")}} для которого вы пытаетесь найти записи.
    Может быть объектом {{domxref("Request")}} или URL.
- `options` {{optional_inline}}
  - : Объект, который устанавливает параметры для операции `match`. Доступные параметры:
    - `ignoreSearch`
      - : Булево значение, которое определяет нужно ли игнорировать строку поиска в URL.
        Например, если параметр установлен как `true`, то подстрока `?value=bar`, которая является частью
        `http://foo.com/?value=bar`, будет игнорироваться при выполении сопоставления.
        Значение по умолчанию - `false`.
    - `ignoreMethod`
      - : Булево значение. Если оно установлено как `true`, то
        операциям сопоставления запрещается проверять метод `http` объекта {{domxref("Request")}}.
        Если `false` (значение по умолчанию) только `GET` и `HEAD` разрешены.
    - `ignoreVary`
      - : Булево значение. Когда `true` сигнализирует, что заголовок [`VARY`](/ru/docs/Web/HTTP/Reference/Headers/Vary)
        должен быть проигнорирован.
        Значение по умолчанию - `false`.

### Возвращаемое значение

{{jsxref("Promise")}} результатом обработки которого будет первый {{domxref("BackgroundFetchRecord")}}, который соответствует запросу
или {{jsxref("undefined")}}, если соответствий не найдено.

> **Note:** `BackgroundFetchRegistration.match()` в основном идентичен
> {{domxref("BackgroundFetchRegistration.matchAll()")}}, за исключением того, что вместо возвращения массива
> всех совпадений, он возвращает только первое совпадение.

### Исключения

- `InvalidStateError` {{domxref("DOMException")}}
  - : Возвращается при вызове `match()` в тот момент, когда нет запросов в процессе выполнения. Это состояние будет отражено установкой флага {{domxref("BackgroundFetchRegistration.recordsAvailable")}} как `false`.

## Примеры

В этом примере мы ищем запись с URL "/ep-5.mp3". Если {{domxref("BackgroundFetchRecord")}} найдена, то мы можем вернуть некоторую информацию ней.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("Запись не найдена");
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
