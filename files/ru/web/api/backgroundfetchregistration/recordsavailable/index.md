---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
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
