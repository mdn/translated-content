---
title: BackgroundFetchRegistration.downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
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
