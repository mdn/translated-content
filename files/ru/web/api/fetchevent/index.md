---
title: FetchEvent
slug: Web/API/FetchEvent
---

{{APIRef("Service Workers API")}}

Это тип событий `fetch`, обрабатываемых в {{domxref("ServiceWorkerGlobalScope", "глобальном контексте service worker", "", 1)}}. Данное событие содержит данные о запросе, включая его цель. Оно предоставляет метод {{domxref("FetchEvent.respondWith", "event.respondWith()")}}, с помощью которого service worker может ответить на запрос.

## Конструктор

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : Создаёт новый объект `FetchEvent`. Как правило, данный конструктор не используется. Браузер самостоятельно создаёт данные объекты и передаёт их в обработчик событий `fetch`.

## Свойства

_Данный класс наследует все свойства класса {{domxref("Event")}}_.

- {{domxref("fetchEvent.clientId")}} {{readonlyInline}}
  - : {{domxref("Client.id", "Идентификатор")}} {{domxref("Client", "клиента")}} того же источника, отправившего запрос.
- {{domxref("fetchEvent.preloadResponse")}} {{readonlyinline}}
  - : {{jsxref("Promise", "Промис")}} для {{domxref("Response", "запроса")}}, или же пустой промис, если не произошла навигация или {{domxref("NavigationPreloadManager", "предзагрузка навигации", "", 1)}} отключена.
- {{domxref("fetchEvent.request")}} {{readonlyInline}}
  - : Запрос ({{domxref("Request")}}) от браузера.
- {{domxref("fetchEvent.replacesClientId")}} {{readonlyInline}}
  - : {{domxref("Client.id", "Идентификатор")}} {{domxref("Client", "клиента")}}, заменяемого при навигации.
- {{domxref("fetchEvent.resultingClientId")}} {{readonlyInline}}
  - : {{domxref("Client.id", "Идентификатор")}} {{domxref("Client", "клиента")}}, заменившего прошлый клиент при навигации.

## Методы

_Данный класс наследует методы класса_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("fetchEvent.respondWith()")}}
  - : Перехватывает запрос и отправляет промис с ответом.
- {{domxref("extendableEvent.waitUntil()")}}
  - : Продлевает выполнение обработчика события до завершения переданного промиса. Используется чтобы уведомить браузер о событии, продолжающемся после отправки ответа, таком как обновление кеша или потоковая передача.

## Примеры

В данном примере все не-GET запросы будут обрабатываться стандартными средствами браузера. В случае GET запросов, service worker попробует найти ответ в кеше, а в случае его отсутствия получит данные с сервера. Также, он асинхронно обновит данные в кеше.

```js
self.addEventListener("fetch", (event) => {
  // В случае не-GET запроса браузер должен сам обрабатывать его
  if (event.request.method != "GET") return;

  // Обрабатываем запрос с помощью логики service worker
  event.respondWith(
    (async function () {
      // Пытаемся получить ответ из кеша.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // Если кеш был найден, возвращаем данные из него
        // и запускаем фоновое обновление данных в кеше.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // В случае, если данные не были найдены в кеше, получаем их с сервера.
      return fetch(event.request);
    })(),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- [Fetch API](/ru/docs/Web/API/Fetch_API)
