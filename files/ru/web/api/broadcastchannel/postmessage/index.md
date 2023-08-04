---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.postMessage()`** отправляет сообщение, которое может быть любым {{jsxref("Object", "объектом")}}, каждому обработчику в {{glossary("browsing context", "контексте браузера")}} с тем же {{glossary("origin")}}. Сообщение передаётся в виде события {{event("message")}} к каждому `BroadcastChannel`, привязанному к данному каналу.

{{AvailableInWorkers}}

## Синтаксис

```
var str = channel.postMessage(object);
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- {{domxref("BroadcastChannel")}}, интерфейс, к которому относится **`postMessage`**.
