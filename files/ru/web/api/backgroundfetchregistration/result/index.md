---
title: BackgroundFetchRegistration.result
slug: Web/API/BackgroundFetchRegistration/result
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`result`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает строку, которая указывает на то, был фоновый запрос успешным ли неудачным.

Если значение этого свойства поменялось, то в связанном объекте {{domxref("BackgroundFetchRegistration")}} наступает событие [progress](/ru/docs/Web/API/BackgroundFetchRegistration/progress_event).

## Значение

Одна из следующих строк:

- `""`
  - : Запрос активен, так что пока нет результата.
- `"success"`
  - : Запрос был успешен.
- `"failure"`
  - : Фоновый запрос завешился неудачей. Это происходит только тогда, когда браузер не может повторить попытку.

## Примеры

Вывод этого свойства в консоль возвращает строку, указывающую на статус, либо пустую строку, если запрос всё ещё активен.

```js
console.log(bgFetch.result);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
