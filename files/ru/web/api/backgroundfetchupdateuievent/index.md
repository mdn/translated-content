---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Интерфейс **`BackgroundFetchUpdateUIEvent`**, из набора {{domxref('Background Fetch API','','',' ')}} это тип события для событий {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} и {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}}, который предосталвяет метод для обновления заголовка и иконки приложения, для информирования юзера об успехе или провале фонового запроса.

{{InheritanceDiagram}}

## Конструктор

- {{domxref("BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent()", "BackgroundFetchUpdateUIEvent()")}} {{Experimental_Inline}}
  - : Создаёт новый объект `BackgroundFetchUIEvent`. Этот конструктор обычно не используется, так как браузер сам создаёт эти объекты для событий {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} и {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}}.

## Свойства экземпляра

_Этот интерфейс не реализует каких-либо особенных свойств, но наследует свойства {{domxref("Event")}}, и {{domxref("BackgroundFetchEvent")}}._

## Методы экземпляра

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}} {{Experimental_Inline}}
  - : Обновляет заголовок и иконку в пользовательском интерфейсе, чтобы показать статус фонового запроса. Результатом работы является {{jsxref("Promise")}}.

## Примеры

В этом примере слушается событие `backgroundfetchsuccess`, для того чтобы показать, что фоновый запрос успешно завершился. Затем вызывается метод {{domxref("BackgroundFetchUpdateUIEvent.updateUI()", "updateUI()")}}, дающий пользователю знать, что загруженный им эпизод готов.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const bgFetch = event.registration;

  event.waitUntil(
    (async () => {
      // Создать/открыть кэш.
      const cache = await caches.open("downloads");
      // Получить все записи.
      const records = await bgFetch.matchAll();
      // Копировать каждый запрос/ответ.
      const promises = records.map(async (record) => {
        const response = await record.responseReady;
        await cache.put(record.request, response);
      });

      // Ждать пока копирование завершиться
      await Promise.all(promises);

      // Обновить уведомление о прогрессе
      event.updateUI({ title: "Эпизод 5 готов к прослушиванию!" });
    })(),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
