---
title: onmessage
slug: Web/API/Window/message_event
---

{{APIRef("HTML DOM")}}{{ SeeCompatTable() }}

**`message`** 事件是在窗口接受到消息（例如，从另一个浏览器上下文中调用 [`Window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage)）时，在 {{domxref('Window')}} 对象上触发的事件。

## 语法

```plain
window.addEventListener('message', function(event) { ... })
window.onmessage = function(event) { ... }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
