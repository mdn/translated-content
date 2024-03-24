---
title: BackgroundFetchRegistration.downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`downloaded`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает количество скачанных байт, изначально `0`.

Когда значение свойства меняется, то у связанного объекта {{domxref("BackgroundFetchRegistration")}} срабатывает событие [progress](/ru/docs/Web/API/BackgroundFetchRegistration/progress_event).

## Значение

{{jsxref("number")}}.

## Примеры

Логирование этого свойства в консоль вернёт количество скачанных байт.

```js
console.log(bgFetch.downloaded);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
