---
title: BackgroundFetchRegistration.id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`id`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает копию идентификатора запроса.

## Значение

Строка.

## Примеры

Вывод этого значения в консоль возвращает идентификатор, который был установлен при регистрации фонового запроса. В этом случает это `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
