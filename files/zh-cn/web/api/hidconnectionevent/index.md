---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

[WebHID API](/zh-CN/docs/Web/API/WebHID_API) 的 **`HIDConnectionEvent`** 接口表示 HID 连接事件，且当设备连接状态发生变化时，事件类型会传递给 {{domxref("HID/connect_event", "connect")}} 和 {{domxref("HID/disconnect_event", "disconnect")}} 事件处理器。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("HIDConnectionEvent.HIDConnectionEvent", "HIDConnectionEvent()")}} {{Experimental_Inline}}
  - : 返回一个新的 `HIDConnectionEvent` 对象。通常不会使用这个构造函数，因为当设备连接状态发生变化时，就会创建事件。

## 实例属性

_此接口也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("HIDConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回表示与此连接事件有关联的 {{domxref("HIDDevice")}} 实例。

## 示例

以下示例为 `connect` 和 `disconnect` 事件注册监听器，然后把 {{domxref("HIDDevice.productName")}} 打印到控制台。

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID 已连接：${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID 断开连接：${device.productName}`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
