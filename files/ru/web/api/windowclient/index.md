---
title: WindowClient
slug: Web/API/WindowClient
---

{{APIRef("Service Workers API")}}

Интерфейс `WindowClient` [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API) представляет область действия клиента сервис-воркера, который представляет собой документ в контексте просмотра, управляемый активным исполнителем. Клиент сервис-воркера самостоятельно выбирает и использует сервис-воркера для собственной загрузки и загрузки подресурсов.

## Методы

_`WindowClient` наследует методы от своего родительского интерфейса {{domxref("Client")}}._

- {{domxref("WindowClient.focus()")}}
  - : Фокусирует пользователя на текущем окне.
- {{domxref("WindowClient.navigate()")}}
  - : Загружает указанный URL-адрес на управляемую клиентскую страницу.

## Свойства

_`WindowClient` наследует методы от своего родительского интерфейса {{domxref("Client")}}._

- {{domxref("WindowClient.focused")}} {{readonlyInline}}
  - : Логическое значение, указывающее, находится ли текущая страница в фокусе.
- {{domxref("WindowClient.visibilityState")}} {{readonlyInline}}
  - : Указывает, отображается ли текущая страница. Это значение может быть одним из `"hidden" (скрыта)`, `"visible" (отображена)` или `"prerender" (предварительно отрисована)`.

## Пример

```js
self.addEventListener("notificationclick", function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // Проверяем, открыто ли окно и
  // сфокусированы ли на нем
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == "/" && "focus" in client) {
            client.focus();
            break;
          }
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [Использование сервис-воркеров](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Пример базового кода сервис-воркеров](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Использование веб-воркеров](/ru/docs/Web/Guide/Performance/Using_web_workers)
- [Channel Messaging API](/ru/docs/Web/API/Channel_Messaging_API)
