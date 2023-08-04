---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
---

{{APIRef("Service Workers API")}}

Метод **`openWindow()`** интерфейса {{domxref("Clients")}} создаёт новый контекст просмотра верхнего уровня и загружает заданный URL. Если вызывающий скрипт не имеет разрешения на отображение всплывающих окон, `openWindow()` выдаст `InvalidAccessError`.

В Firefox этому методу разрешено отображать всплывающие окна только при вызове события клике по уведомлению.

В Chrome для Android этот метод может открыть URL-адрес в существующем контексте просмотра, предоставляемым автономным веб-приложением ([standalone web app](/ru/docs/Web/Progressive_web_apps)), ранее добавленным на главный экран пользователя. С недавнего времени это также работает в Chrome для Windows.

## Синтаксис

```
self.clients.openWindow(url).then(function(windowClient) {
  // Do something with your WindowClient
});
```

### Параметры

- `url`
  - : {{domxref("USVString")}} - URL-адрес клиента, который вы хотите открыть. Обычно это значение должно быть URL из того же источника, что и вызывающий скрипт.

### Возвращаемое значение

{{jsxref("Promise")}}, который преобразуется в объект {{domxref("WindowClient")}}, если URL-адрес исходит из того же источника, что и сервис-воркер, иначе {{Glossary("null", "null value")}} .

## Примеры

```js
// Отправить уведомление в OS, если возможно
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Click here to view your messages.",
    data: { url: self.location.origin + "/some/path" },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "You've got messages!",
    notificationObject,
  );
}

// Обработчик события клика по уведомлению
self.addEventListener("notificationclick", (e) => {
  // Закрываем всплывающее окно с уведомлением
  e.notification.close();
  // Получите все клиенты Windows
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      // Если вкладка, соответствующая целевому URL-адресу, уже существует, сфокусируйтесь на ней;
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // В противном случае откройте новую вкладку для соответствующего URL-адреса и сфокусируйте её.
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    }),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}
