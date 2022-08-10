---
title: BackgroundFetchRegistration.id
slug: Web/API/BackgroundFetchRegistration/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - id
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.id
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`id`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает копию идентификатора запроса.

## Значение

Строка.

## Примеры

Логирование этого значения в консоль возвращает идентификатор, который был установлен при регистрации фонового запроса. В этом случает это `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
