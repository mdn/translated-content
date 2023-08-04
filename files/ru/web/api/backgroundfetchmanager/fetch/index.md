---
title: BackgroundFetchManager.fetch()
slug: Web/API/BackgroundFetchManager/fetch
---

{{DefaultAPISidebar("Background Fetch API")}}

Метод **`fetch()`** интерфейса {{domxref("BackgroundFetchManager")}} возвращает {{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}} для переданного массива URL-адресов или объектов {{domxref("Request")}}.

## Синтаксис

```js
fetch(id, requests);
fetch(id, requests, options);
```

### Параметры

- `id`
  - : Определяемый разработчиком идентификатор, который может быть передан другим методам для получения {{domxref("backgroundFetchRegistration")}}.
- `requests`
  - : Объект {{domxref("RequestInfo")}} или массив таких объектов.
- `options` {{optional_inline}}
  - : Объект {{domxref("BackgroundFetchOptions")}}.

### Возвращаемое значение

{{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}}.

### Исключения

- {{jsxref("TypeError")}}
  - : Возникает, если запрос не передан, либо если режим запроса 'no-cors', либо если нет сервис-воркера, либо если уже существует запрос с таким идентификатором, либо запрос завершился с ошибкой.
- `AbortError` {{domxref("DOMException")}}
  - : Указывает на то, что запрос был прерван.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Указывает на то, что пользователю не было предоставлено разрешение на фоновые запросы.

## Примеры

Следующие примеры показывают, как использовать `fetch()`, чтобы создать {{domxref("BackgroundFetchRegistration")}}. При активном {{domxref('ServiceWorker', 'сервис-воркере')}}, используйте свойство {{domxref('ServiceWorkerRegistration.backgroundFetch')}} для доступа к объекту `BackgroundFetchManager` и вызовите его метод `fetch()`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
