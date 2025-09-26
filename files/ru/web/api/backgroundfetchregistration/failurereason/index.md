---
title: BackgroundFetchRegistration.failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`failureReason`** интерфейса {{domxref("BackgroundFetchRegistration")}} возвращает строку, значение которой указывает на причину неудачного выполнения фонового запроса.

Когда значение свойства меняется, то у связанного объекта {{domxref("BackgroundFetchRegistration")}} срабатывает событие [progress](/ru/docs/Web/API/BackgroundFetchRegistration/progress_event).

## Значение

Может принимать одну из следующих строк:

- `""`
  - : Фоновый запрос не завершён, либо завершён успешно.
- `"aborted"`
  - : Операция была прервана пользователем, либо был вызван {{domxref("BackgroundFetchRegistration.abort()","abort()")}}.
- `"bad-status"`
  - : Статус ответа не-ok (статус находится за пределами диапазона 200-299).
- `"fetch-error"`
  - : Запрос провалился по другим причинам, например CORS, или ошибки сети.
- `"quota-exceeded"`
  - : Во время операции была достигнута квота хранения.
- `"download-total-exceeded"`
  - : Было превышено указанное значение `downloadTotal`. Это значение было установлено при регистрациии фонового запроса.

## Примеры

Логирование этого свойства в консоль печатает причину завершения запроса с ошибкой, или пустую строку, если запрос был завершён успешно, либо ещё не завершён.

```js
console.log(bgFetch.failureReason);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
