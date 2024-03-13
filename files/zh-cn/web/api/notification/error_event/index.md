---
title: Notification：error 事件
slug: Web/API/Notification/error_event
l10n:
  sourceCommit: 10b9d1a207b2bf467150b0ec72e2e5f09429d2d9
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

{{domxref("Notification")}} 接口的 **`error`** 事件在{{domxref("Notification", "通知", "", "nocode")}}调用出错时候触发（在许多情况下，错误会阻止通知的显示）。

{{AvailableInWorkers}}

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
