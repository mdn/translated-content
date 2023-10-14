---
title: BackgroundFetchRegistration.uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`uploaded`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает количество успешно переданных байт, изначально `0`.

Если значение этого свойства изменилось, то в связанном объекте {{domxref("BackgroundFetchRegistration")}} происходит событие [progress](/ru/docs/Web/API/BackgroundFetchRegistration/progress_event).

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
