---
title: BackgroundFetchRecord.request
slug: Web/API/BackgroundFetchRecord/request
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`request`** интерфейса {{domxref("BackgroundFetchRecord")}} возвращает информацию о запрашиваемом ресурсе.

## Значение

{{domxref("Request")}}.

## Примеры

В этом примере отдельный `BackgroundFetchRecord`, возвращается с помощью {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. Значение `request` выводится в консоль.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("Запись не найдена");
    return;
  }

  console.log(`Запрос`, record.request);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
