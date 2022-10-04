---
title: Notification.onerror
slug: Web/API/Notification/error_event
---

{{APIRef("Web Notifications")}}

## Summary

{{domxref("Notification")}} 接口的 onerror 属性指定一个事件侦听器来接收 {{event("error")}} 事件。

当一个 {{domxref("Notification")}} 发生错误时，会发生这些事件（在许多情况下，一个错误阻止显示通知）。

## Syntax

```plain
Notification.onerror = EventListener;
```

### Value

A {{jsxref("function")}} which serves as the event handler for the {{event("error")}} event. When an error occurs, the specified function will be called. If `null`, no error handler is in effect.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
