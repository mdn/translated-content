---
title: "BackgroundFetchRegistration: progress event"
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Событие **`progress`** интерфейса {{domxref("BackgroundFetchRegistration")}} происходит когда выполняется связанные фоновый запрос.

Практически это событие происходит, когда любое из следующих свойств возвращает новое значение:

- {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
- {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
- {{domxref("BackgroundFetchRegistration.result", "result")}}, или
- {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Синтаксис

Используйте имя события в таких методах как {{domxref("EventTarget.addEventListener", "addEventListener()")}}, или установите свойство события `onprogress` в соответствующем объекте {{domxref("BackgroundFetchRegistration")}}.

```js
addEventListener("progress", (event) => {});
onprogress = (event) => {};
```

## Тип события

Общий {{domxref("Event")}} без дополнительных параметров.

## Пример

Следующий пример демонстрирует как вывести ход загрузки в консоль. Сначала код проверяет был ли предоставлен `downloadTotal`, когда фоновый запрос был зарегистрирован. The code first checks that a `downloadTotal` was provided when the background fetch was registered. Затем это значение используется для расчета процента на основе свойства `downloaded`.

```js
bgFetch.addEventListener("progress", () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(
    (bgFetch.downloaded / bgFetch.downloadTotal) * 100,
  );
  console.log(`Download progress: ${percent}%`);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
