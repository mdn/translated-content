---
title: BackgroundFetchRegistration.uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - uploaded
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.uploaded
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`uploaded`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает количество успешно переданных байт, изначально `0`.

Если значение этого свойства изменилось, то в связанном объекте {{domxref("BackgroundFetchRegistration")}} происходит событие [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event).

## Значение

{{jsxref("number")}}.

## Примеры

Вывод этого свойства в консоль возвращает число загруженных байт.

```js
console.log(bgFetch.uploaded);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
