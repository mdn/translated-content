---
title: HIDDevice：vendorId 属性
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`vendorId`** 只读属性返回已连接 HID 设备的供应商 ID，用于识别设备的供应商。

## 值

一个整数。如果设备没有供应商 ID，或者无法访问供应商 ID，则返回 `0`。

## 示例

以下示例使用 {{domxref("HID.getDevices()")}} 获取设备并将 `vendorId` 的值记录到控制台。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID：${device.vendorId}`);
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
