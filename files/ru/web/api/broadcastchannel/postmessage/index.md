---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.postMessage()`** отправляет сообщение, которое может быть любым {{jsxref("Object", "объектом")}}, каждому обработчику в {{glossary("browsing context", "контексте браузера")}} с тем же {{glossary("origin")}}. Сообщение передаётся в виде события [`message`](/ru/docs/Web/API/BroadcastChannel/message_event) к каждому `BroadcastChannel`, привязанному к данному каналу.

{{AvailableInWorkers}}

## Синтаксис

```
var str = channel.postMessage(object);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("BroadcastChannel")}}, интерфейс, к которому относится **`postMessage`**.
