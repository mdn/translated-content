---
title: BackgroundFetchRegistration.matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Метод **`matchAll()`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает массив всех совпавших объектов {{domxref("BackgroundFetchRecord")}}.

## Синтаксис

```js
matchAll(request);
matchAll(request, options);
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

{{jsxref("Promise")}} результатом обработки которого будет массив всех совпавших объектов {{domxref("BackgroundFetchRecord")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Возвращается, если флаг {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}} установлен как `false`, указывает на то, что запрос не выполняется.

## Примеры

Используйте `matchAll()` без параметров, чтобы вернуть все записи в фоновом запросе.

```js
const records = await bgFetch.matchAll();
console.log(records); // массив объектов BackgroundFetchRecord
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
