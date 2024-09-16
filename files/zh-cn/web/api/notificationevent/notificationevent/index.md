---
title: NotificationEvent：NotificationEvent() 构造函数
slug: Web/API/NotificationEvent/NotificationEvent
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

**`NotificationEvent()`** 构造函数创建一个新的 {{domxref("NotificationEvent")}} 对象。

## 语法

```js-nolint
new NotificationEvent(type, options)
```

### 参数

- `type`
  - : 一个表示事件名称的字符串。它区分大小写，浏览器使用时将其设置为 `notificationclick` 或 `notificationclose`。
- `options`
  - : 一个对象，_除了 {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_ 中定义的属性外，还具有以下属性：
    - `notification`
      - : 一个 {{domxref("Notification")}} 对象，用作触发事件的通知。
    - `action` {{optional_inline}}
      - : 一个与通知关联的操作。默认为 `""`。

### 返回值

一个新的 {{domxref("NotificationEvent()")}} 对象。

## 示例

```js
const n = new Notification("Hello");
const myNotificationEvent = new NotificationEvent(type, { notification: n });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
