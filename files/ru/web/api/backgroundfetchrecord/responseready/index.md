---
title: BackgroundFetchRecord.responseReady
slug: Web/API/BackgroundFetchRecord/responseReady
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`responseReady`** интерфейса {{domxref("BackgroundFetchRecord")}} возвращает {{jsxref("Promise")}}, результатом обработки которого будет {{domxref("Response")}}.

## Значение

{{jsxref("Promise")}}, результатом обработки которого будет {{domxref("Response")}}.

## Примеры

В этом примере отдельный `BackgroundFetchRecord`, возвращается с помощью {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. Значение `responseReady` выводится в консоль.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("Запись не найдена");
    return;
  }

  const response = await record.responseReady;
  console.log(`Ответ`, response);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
