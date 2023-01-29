---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.binaryType
---

{{APIRef("Web Sockets API")}}

Свойство **`WebSocket.binaryType`** указывает на тип двоичных данных, которые будут переданы по соединению WebSocket.

## Параметры

`строка`:

- `"blob"`
  - : Используйте {{domxref("Blob")}} объекты для бинарных данных. Это значение по умолчанию.
- `"arraybuffer"`
  - : Используйте {{jsxref("ArrayBuffer")}} объекты для бинарных данных, если требуется доступ к отдельным байтам.

## Примеры

```js
// Создание WebSocket соединения.
const socket = new WebSocket("ws://localhost:8080");

// Изменение бинарного типа с "blob" на "arraybuffer"
socket.binaryType = "arraybuffer";

// Прослушка сообщения
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // бинарный фрейм
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // текстовый фрейм
    console.log(event.data);
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
