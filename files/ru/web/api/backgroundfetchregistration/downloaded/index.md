---
title: BackgroundFetchRegistration.downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - downloaded
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.downloaded
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`downloaded`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает количество скачанных байт, изначально `0`.

Когда значение свойства меняется, то у связанного объекта {{domxref("BackgroundFetchRegistration")}} срабатывает событие [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event).

## Значение

{{jsxref("number")}}.

## Примеры

Логирование этого свойства в консоль вернёт количество скачанных байт.

```js
console.log(bgFetch.downloaded);
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}
