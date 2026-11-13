---
title: HID
slug: Web/API/HID
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

**`HID`** 接口提供连接到 _HID 设备_、列出已连接的 HID 设备以及为已连接的 HID 设备处理事件的方法。

{{InheritanceDiagram}}

## 实例属性

_此接口也从其父接口 {{domxref("EventTarget")}} 继承属性。_

## 实例方法

_此接口也从其父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("HID.getDevices","getDevices()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其在兑现时提供一个数组，包含用户之前已通过 {{domxref("HID.requestDevice","requestDevice()")}} 调用授予访问权限的已连接 HID 设备。
- {{domxref("HID.requestDevice","requestDevice()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其在兑现时提供一个包含已连接 {{domxref("HIDDevice")}} 对象的数组。调用此函数将触发用户代理的权限流程，以便从返回的设备列表中获得访问一个选定设备的权限。

### 事件

- {{domxref("HID.connect_event", "connect")}} {{Experimental_Inline}}
  - : 当 HID 设备连接时触发。
- {{domxref("HID.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : 当 HID 设备断开连接时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebHID API](/zh-CN/docs/Web/API/WebHID_API)
