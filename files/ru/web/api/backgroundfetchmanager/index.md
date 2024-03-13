---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
---

{{DefaultAPISidebar("Background Fetch API")}}

**`BackgroundFetchManager`** является интерфейсом {{domxref('Background Fetch API','','',' ')}}, который представляет собой коллекцию ключ-значение, где ключами являются идентификаторы фоновых запросов, а значениями - объекты {{domxref("BackgroundFetchRegistration")}}.

## Свойства

Отсутствуют.

## Методы

- {{domxref('BackgroundFetchManager.fetch','fetch()' )}}
  - : Возвращает {{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}} для переданного массива URL-адресов или объектов {{domxref("Request")}}.
- {{domxref('BackgroundFetchManager.get','get()')}}
  - : Возвращает {{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}}, связанный с переданным `id`, или {{jsxref("undefined")}}, если идентификатор не найден.
- {{domxref('BackgroundFetchManager.getIDs','getIDs()')}}
  - : Возвращает идентификаторы всех зарегистрированных фоновых запросов.

## Примеры

Пример ниже показывает, как можно получить экземпляр объекта {{domxref("BackgroundFetchManager")}} из объекта {{domxref("ServiceWorkerRegistration")}}, а затем вызвать метод `fetch()`, чтобы загрузить видео в фоне.

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
