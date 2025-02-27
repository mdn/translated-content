---
title: HIDDevice：opened 属性
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`opened`** 只读属性在 {{domxref("HIDDevice")}} 的连接已打开且准备传输数据时，返回 `true`。

## 值

一个布尔值，如果连接是打开的，则为 `true`。

## 示例

以下示例使用 {{domxref("HID.getDevices()")}} 获取设备并将 `opened` 的值记录到控制台。

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID：${device.opened}`);
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
