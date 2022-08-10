---
title: BackgroundFetchRegistration.downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - downloadTotal
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.downloadTotal
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`downloadTotal`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает общий размер загрузки в байтах. Это значение устанавливается при регистрации запроса, или `0` если не установлено.

## Значение

{{jsxref("number")}}.

## Примеры

Логирование этого свойства в консоль возвращает общий размер загрузки в байтах.

```js
console.log(bgFetch.downloadTotal);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
