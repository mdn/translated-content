---
title: BackgroundFetchEvent.registration
slug: Web/API/BackgroundFetchEvent/registration
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Доступное только для чтения свойство **`registration`** интерфейса {{domxref("BackgroundFetchEvent")}} возвращает объект {{domxref("BackgroundFetchRegistration")}}.

## Значение

{{domxref("BackgroundFetchRegistration")}}.

## Примеры

В этом примере, если пользователь кликнет по элементу, отображающем ход загрузки, то это действие вызовет событие `onbackgroundfetchclick`. Текущий {{domxref("BackgroundFetchRegistration")}} возвращается вызовом `event.registration`.

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
