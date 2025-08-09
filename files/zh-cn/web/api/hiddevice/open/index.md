---
title: HIDDevice：open() 方法
slug: Web/API/HIDDevice/open
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`open()`** 方法请求操作系统打开 HID 设备。

> [!NOTE]
> HID 设备不会自动打开。因此，在 {{domxref("HID.requestDevice()")}} 返回的 {{domxref("HIDDevice")}} 可用于传输数据之前，必须使用此方法将其打开。

## 语法

```js-nolint
open()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，会在连接打开时兑现为 `undefined`。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果连接已经打开，则抛出异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果因任何原因尝试打开连接失败，则抛出异常。

## 示例

在以下示例中，我们在尝试发送或接收数据之前等待 HID 连接打开。

```js
await device.open();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
