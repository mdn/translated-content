---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.WebSocket
---

{{APIRef("Web Sockets API")}}

Конструктор **`WebSocket()`** создает новый объект {{domxref("WebSocket")}}.

## Синтаксис

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Параметры

- `url`
  - : URL-адрес к которому подключаться; сервер по этому адресу должен ответить на websocket-запрос.

- `protocols` {{optional_inline}}

  - : Протокол в виде строки или массив строк протоколов. Эти строки используются для определения
    подпротоколов клиента, т.к. один сервер может поддерживать несколько WebSocket-подпротоколов
    (например, вы можете захотеть, чтобы один сервер мог обрабатывать разные типы взаимодействия
    в зависимости от указанного протокола).

    Если вы не укажете значение протокола, по умолчанию будет использоваться пустой массив, т.е. `[]`.

### Возможные исключения

- `SyntaxError` {{domxref("DOMException")}}
  - : Выбрасывается когда:
    - неудачный парсинг [`url`](#url)
    - схема [`url`](#url) отличная от `ws` или `wss`
    - [`url`](#url) включает [фрагмент](/ru/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#фрагмент)
    - любое значние в [`protocols`](#protocols) встречается больше одного раза или не соотвествует требованиям к элеменам, которые
      содержат значаения полей [`Sec-WebSocket-Protocol`](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol), определенных в спецификации протокола WebSocket

## Спецификации

{{Спецификация}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
