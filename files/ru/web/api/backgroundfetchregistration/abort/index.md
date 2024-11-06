---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Метод **`abort()`** интерфейса {{domxref("BackgroundFetchRegistration")}} прерывает активный фоновый запрос.

## Синтаксис

```js
abort();
```

### Параметры

Нет.

### Возвращаемое значение

{{jsxref("Promise")}}, результатом обработки которого будет `true`, если запрос успешно прерван.

## Примеры

Используйте `abort()`, чтобы прервать фоновый запрос в процессе работы.

```js
bgFetch.abort();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
