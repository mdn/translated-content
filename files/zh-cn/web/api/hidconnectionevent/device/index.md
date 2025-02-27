---
title: HIDConnectionEvent：device 属性
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDConnectionEvent")}} 接口的 **`device`** 只读属性返回与此连接事件有关联的 {{domxref("HIDDevice")}}。

## 值

一个 {{domxref("HIDDevice")}}。

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
