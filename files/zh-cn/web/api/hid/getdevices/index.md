---
title: HID：getDevices() 方法
slug: Web/API/HID/getDevices
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HID")}} 接口的 **`getDevices()`** 方法获取一个包含用户之前已通过 {{domxref("HID.requestDevice","requestDevice()")}} 调用授予访问权限的已连接 HID 设备列表。

## 语法

```js-nolint
getDevices()
```

### 参数

无。

### 返回值

一个兑现一组 {{domxref("HIDDevice")}} 对象的 {{jsxref("Promise")}}。

## 示例

以下示例获取设备列表并将设备名称记录到控制台。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID：${device.productName}`);
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
