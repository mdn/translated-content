---
title: USB
slug: Web/API/USB
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}

[WebUSB API](/zh-CN/docs/Web/API/WebUSB_API) 接口提供了从网页查找和连接 USB 设备的属性和方法

## 属性

None.

### Event handlers

- {{domxref("USB.onconnect")}}
  - : 每当连接到先前配对的设备时，调用此事件处理器。
- {{domxref("USB.ondisconnect")}}
  - : 每当配对设备断开连接时，调用此事件处理器。

## 方法

- {{domxref("USB.getDevices()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("USBDevice")}} objects for paired attached devices.
- {{domxref("USB.requestDevice()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("USBDevice")}} if the specified device is found. Calling this function triggers the user agent's pairing flow.

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
