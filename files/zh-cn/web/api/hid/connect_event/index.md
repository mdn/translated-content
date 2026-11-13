---
title: HID：connect 事件
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HID")}} 接口的 **`connect`** 事件在用户代理连接到 HID 设备时触发。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置一个事件处理器属性。

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## 事件类型

一个 {{domxref("HIDConnectionEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("HIDConnectionEvent")}}

## 事件属性

_除下面列出的属性外，还可以使用来自于父接口 {{domxref("Event")}} 的属性。_

- {{domxref("HIDConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : 触发此事件的 {{domxref("HIDDevice")}}。

## 示例

在以下示例中，注册了一个事件监听器来监听设备的连接。然后使用 {{domxref("HIDDevice.productName")}} 将设备的名称打印到控制台。

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID 已连接：${device.productName}`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
