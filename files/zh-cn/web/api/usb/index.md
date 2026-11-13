---
title: USB
slug: Web/API/USB
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`USB`** 接口属于 [WebUSB API](/zh-CN/docs/Web/API/WebUSB_API)，提供从网页查找并连接 USB 设备的属性和方法。

通过 {{domxref("navigator.usb")}} 获取 `USB` 对象。

`USB` 接口继承自 {{domxref("EventTarget")}}。

{{InheritanceDiagram}}

## 实例属性

无。

## 实例方法

- {{domxref("USB.getDevices()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，兑现为已配对且已连接设备的 {{domxref("USBDevice")}} 对象数组。
- {{domxref("USB.requestDevice()")}} {{Experimental_Inline}}
  - : 若找到指定设备，返回一个兑现为 {{domxref("USBDevice")}} 实例的 {{jsxref("Promise")}}。调用此函数会触发用户代理的配对流程。

## 事件

- {{domxref("USB.connect_event", "connect")}} {{Experimental_Inline}}
  - : 每当先前已配对的设备连接时触发。
- {{domxref("USB.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : 每当已配对的设备断开连接时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
