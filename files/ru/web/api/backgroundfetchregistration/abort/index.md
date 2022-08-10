---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - abort
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.abort
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
