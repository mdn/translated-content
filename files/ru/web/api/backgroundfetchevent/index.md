---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Интерфейс **`BackgroundFetchEvent`** {{domxref('Background Fetch API','','',' ')}} это тип события для событий фоновых запросов, отправляемых в {{domxref("ServiceWorkerGlobalScope", "глобальный контекст выполнения сервис-воркера")}}.

Это тип события, передаваемый при `onbackgroundfetchabort` и `onbackgroundfetchclick`.

{{InheritanceDiagram}}

## Конструктор

- {{domxref("BackgroundFetchEvent.BackgroundFetchEvent()", "BackgroundFetchEvent()")}} {{Experimental_Inline}}
  - : Создаёт новый объект `BackgroundFetchEvent`. Этот конструктор обычно не используется, так как браузер создаёт такие объекты самостоятельно и, затем, передаёт их для колбэков событий фоновых запросов.

## Свойства

_Наследует свойства от своего предка, {{domxref("Event")}}_.

- {{domxref("BackgroundFetchEvent.registration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Возвращает {{domxref("BackgroundFetchRegistration")}}, для которого было инициализировано событие.

### Обработчики событий

Отсутствуют.

## Методы

Отсутствуют.

## Примеры

В этом примере, если пользователь кликнет по элементу, отображающему ход загрузки, то откроется новое окно. Текущий {{domxref("BackgroundFetchRegistration")}} возвращается вызовом `event.registration`.

```js
addEventListener("backgroundfetchclick", (event) => {
  const bgFetch = event.registration;

  if (bgFetch.result === "success") {
    clients.openWindow("/latest-podcasts");
  } else {
    clients.openWindow("/download-progress");
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
