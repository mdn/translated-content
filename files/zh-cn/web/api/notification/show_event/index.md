---
title: Notification：show 事件
slug: Web/API/Notification/show_event
l10n:
  sourceCommit: 10b9d1a207b2bf467150b0ec72e2e5f09429d2d9
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`show`** 事件在一个 {{domxref("Notification")}} 显示时触发。

{{AvailableInWorkers}}

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("show", (event) => {});

onshow = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
