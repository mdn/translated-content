---
title: HIDConnectionEvent：HIDConnectionEvent() 构造函数
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

**`HIDConnectionEvent()`** 构造函数创建一个新的 {{domxref("HIDConnectionEvent")}} 对象。通常不会使用这个构造函数，因为当设备连接状态发生变化时，就会创建事件。

## 语法

```js-nolint
new HIDConnectionEvent(type, options)
```

### 参数

- `type`
  - : 一个字符串，表示事件的名称。它是区分大小写的，浏览器会将其设置为 `connect` 或 `disconnect`。
- `options`
  - : 一个对象，_除了 {{domxref("Event/Event", "Event()")}} 中定义的属性外_，还可以包含以下属性：
    - `device`
      - : {{domxref("HIDDevice")}} 实例表示正在连接或断开的设备。

### 返回值

一个新的 {{domxref("HIDConnectionEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
