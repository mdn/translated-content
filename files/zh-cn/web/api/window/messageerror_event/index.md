---
title: WindowEventHandlers.onmessageerror
slug: Web/API/Window/messageerror_event
---

{{APIRef("HTML DOM")}}

{{domxref("WindowEventHandlers")}}接口的 onmessageerror 事件处理器是一个 {{domxref("EventListener")}}，每当一个类型为 `messageerror` 的 {{domxref("EventListener")}} 事件在一个窗口被触发 --也就是说，当它收到的消息不能是{{glossary("Deserialization", "deserialized")}} 。

{{AvailableInWorkers}}

## 语法

```plain
window.onmessageerror = function() { ... };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
