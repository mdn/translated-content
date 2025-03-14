---
title: HIDDevice：close() 方法
slug: Web/API/HIDDevice/close
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`close()`** 方法用于关闭 HID 设备的连接。

## 语法

```js-nolint
close()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，会在连接关闭时兑现为 `undefined`。

## 示例

在以下示例中，一旦所有数据已发送和接收，我们就关闭 HID 设备。

```js
await device.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
