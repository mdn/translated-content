---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
page-type: web-api-overview
tags:
  - API
  - Overview
  - Reference
  - Background Fetch API
  - Experimental
browser-compat: api.BackgroundFetchManager
---

{{DefaultAPISidebar("Background Fetch API")}} {{SeeCompatTable}}

**Background Fetch API** предоставляет метод управления загрузками, которые могут занимать продолжительное время, например фильмы, аудиофайлы и программное обеспечение.

## Понятие и ипользование

Довольно часто, когда веб-приложение требует от пользователя скачивания больших файлов, это создает проблему, поскольку пользователю необходимо оставаться подключенным к странице до завершения скачивания. Если же соединение пропадает, например пользователь закрыват вкладку или уходит со страницы, то скачивание останавливается.

{{domxref("Background Synchronization API")}} предоставляет сервис-воркерам отложить обработку до тех пор, пока пользователь не подключится; однако такой подход не может быть использован для длительных задач, таких как скачивание больших файлов. Background Sync требует чтобы сервис-воркер оставался активным до завершения запроса, но для экономии заряда батареии и предотвращения возникновения нежелательных задач, выполняемых в фоновом режиме, браузер в какой-то момент завершит задачу.

Background Fetch API решает это проблему. Он позволяет веб-разработчику сообщать браузеру, что некоторые запросы нужно выполнять в фоновом режиме, например, когда пользователь нажимает на кнопку "скачать видеофайл". Затем браузер выполняет запрос "видимым" для пользователя способом, отображая прогресс и предоставляя способ отменить скачивание. После завершения загрузки браузер открывает сервис-воркер, и ваше приложение может, по необходимости, сделать что-то с ответом.

Background Fetch API позволит выполнить запрос, если пользователь начал процесс в автономном режиме. Как только соединение будет установлено, Background Fetch API начнёт выполнение. Если пользователь переходит в автономный режим, процесс приостанавливается до тех пор, пока пользователь не подключится снова.

## Интерфейсы

- {{domxref("BackgroundFetchManager")}}
  - : Коллекция пар ключ/значение, где ключи это идентификаторы фоновых запросов, а значения - объекты {{domxref("BackgroundFetchRegistration")}}.
- {{domxref("BackgroundFetchRegistration")}}
  - : Представляет фоновый запрос.
- {{domxref("BackgroundFetchRecord")}}
  - : Представляет отдельный запрос и ответ.
- {{domxref("BackgroundFetchEvent")}}
  - : Тип события, который передаётся в `onbackgroundfetchabort` и `onbackgroundfetchclick`.
- {{domxref("BackgroundFetchUpdateUIEvent")}}
  - : Тип события, который передаётся в `onbackgroundfetchsuccess` и `onbackgroundfetchfail`.

## Примеры

Перед использованием Background Fetch проверьте браузерную совместимость.

```css
if (!('BackgroundFetchManager' in self)) {
  // Обеспечьте резервный способ загрузки
}
```

Using Background Fetch requires a registered service worker. Then call `backgroundFetch.fetch()` to perform a fetch. This
returns a promise that resolves with a {{domxref("BackgroundFetchRegistration")}}.

A background fetch may fetch a number of files. In our example the fetch requests an MP3 and a JPEG. This enables a package of files that the user sees as one item (for example a podcast and artwork) to be downloaded at once.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    'my-fetch',
    ['/ep-5.mp3', 'ep-5-artwork.jpg'],
    {
      title: 'Episode 5: Interesting things.',
      icons: [
        {
          sizes: '300x300',
          src: '/ep-5-icon.png',
          type: 'image/png',
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    }
  );
});
```

You can find a demo application which implements Background Fetch [here](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
