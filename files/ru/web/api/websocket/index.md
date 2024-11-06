---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("Web Sockets API")}}

Объект `WebSocket` предоставляет API для создания и управления [WebSocket](/ru/docs/Web/API/WebSockets_API)-соединением с сервером, а также для отправки и получения данных через это соединение.

Для создания `WebSocket` используйте конструктор [`WebSocket()`](/ru/docs/Web/API/WebSocket/WebSocket).

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Конструктор

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : Возвращает созданный объект `WebSocket`.

## Свойства экземпляра

- {{domxref("WebSocket.binaryType")}}
  - : Тип используемых в соединении бинарных данных.
- {{domxref("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : Количество байтов данных в очереди.
- {{domxref("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : Расширения, выбранные сервером.
- {{domxref("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : Подпротокол, выбранный сервером.
- {{domxref("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : Текущее состояние соединения.
- {{domxref("WebSocket.url")}} {{ReadOnlyInline}}
  - : Абсолютный URL-адрес WebSocket.

## Методы экземпляра

- {{domxref("WebSocket.close()")}}
  - : Закрывает соединение.
- {{domxref("WebSocket.send()")}}
  - : Добавляет в очередь данные для отправки.

## События

Подписывайтесь на события с помощью `addEventListener()` или присвоением обработчика события свойству `oneventname` этого интерфейса.

- {{domxref("WebSocket/close_event", "close")}}
  - : Возникает, когда соединение с `WebSocket` закрыто.
    Также доступно через свойство `onclose`
- {{domxref("WebSocket/error_event", "error")}}
  - : Возникает, когда соединение с `WebSocket` было закрыто из-за ошибки, например, когда не удалось отправить какие-то данные.
    Также доступно через свойство `onerror`.
- {{domxref("WebSocket/message_event", "message")}}
  - : Возникает, когда через `WebSocket` получены данные.
    Также доступно через свойство `onmessage`.
- {{domxref("WebSocket/open_event", "open")}}
  - : Возникает, когда соединение с `WebSocket` открыто.
    Также доступно через свойство `onopen`.

## Примеры

```js
// Создание WebSocket-соединения.
const socket = new WebSocket("ws://localhost:8080");

// Соединение открыто
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Получение сообщений
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Написание клиентских приложений с помощью веб-сокетов](/ru/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
