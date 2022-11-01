---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - recordsAvailable
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.recordsAvailable
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`recordsAvailable`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает `true` если есть запросы и ответы, к которым необходимо получить доступ. Если же возвращает `false`, то {{domxref("BackgroundFetchRegistration.match()","match()")}} и {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} не могут быть использованы.

## Значение

{{jsxref("boolean")}}.

## Примеры

Вывод этого свойства в консоль возвращает `true` или `false` чтобы указать, есть ли записи.

```js
console.log(bgFetch.recordsAvailable);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
