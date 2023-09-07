---
title: Notification：close 事件
slug: Web/API/Notification/close_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口上的 **`close`** 事件在一个 {{domxref("Notification")}} 被关闭时触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## 事件类型

一个通用 {{domxref("Event")}}。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Notification")}}
- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
