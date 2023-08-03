---
title: BackgroundFetchRecord
slug: Web/API/BackgroundFetchRecord
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Интерфейс **`BackgroundFetchRecord`** {{domxref('Background Fetch API','','',' ')}} представляет отдельный запрос и ответ.

`BackgroundFetchRecord` создаётся методом {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}, поэтому для этого интерфейса нет конструктора.

Существует только один `BackgroundFetchRecord` для каждого ресурса, запрошенного функцией `fetch()`.

## Свойства

- {{domxref("BackgroundFetchRecord.request","request")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Возвращает {{domxref("Request")}}.
- {{domxref("BackgroundFetchRecord.responseReady","responseReady")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Возвращает промис, результатом обработки которого будет {{domxref("Response")}}.

## Примеры

В этом примере отдельный `BackgroundFetchRecord` возвращается с использованием {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. {{domxref("BackgroundFetchRecord.request")}} и {{domxref("BackgroundFetchRecord.responseReady")}} выводятся в консоль.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Запрос`, record.request);
  const response = await record.responseReady;
  console.log(`Ответ`, response);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
