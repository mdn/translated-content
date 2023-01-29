---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.bufferedAmount
---

{{APIRef("Web Sockets API")}}

Свойство **`WebSocket.bufferedAmount`**, возвращает количество байтов данных, которые были поставлены в очередь (буфферезированны),используя вызовы  [`send()`](/en-US/docs/Web/API/WebSocket/send), но ещё не переданные в сеть. Это значение сбрасывается в ноль после того, как данные из очереди были отправлены. Это значение не сбрасывается в ноль, при закрытии соединения; если продолжить вызывать [`send()`](/en-US/docs/Web/API/WebSocket/send), значение будет расти. **Только для чтения.**

## Параметры

`unsigned long` (длинное целое число без знака).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
