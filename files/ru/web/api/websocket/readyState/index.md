---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.readyState
---

{{APIRef("Web Sockets API")}}

Свойство **`WebSocket.readyState`**, возращает текущее состояние {{domxref("WebSocket")}} подключения. **Только для чтения.**

## Параметры

Одно из следующих значений состояния соединения:

| Значение | Состояние   | Описание                                      |
| ---------| ------------| ----------------------------------------------|
| `0`      | `CONNECTING`| Socket был создан. Соединение ещё не открыто. |
| `1`      | `OPEN`      | Соединение открыто и готово к обмену данными. |
| `2`      | `CLOSING`   | Соединение в процессе закрытия.               |
| `3`      | `CLOSED`    | Соединение закрыто или не может открыться.    |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
