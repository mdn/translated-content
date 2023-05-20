---
title: Notification：error 事件
slug: Web/API/Notification/error_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`error`** 事件在 {{domxref("Notification")}} 调用出错时候触发（在许多情况下，错误会阻止通知的显示）。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型

一个通用 {{domxref("Event")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Notification")}}
- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
