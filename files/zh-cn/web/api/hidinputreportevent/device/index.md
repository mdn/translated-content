---
title: HIDInputReportEvent：device 属性
slug: Web/API/HIDInputReportEvent/device
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDInputReportEvent")}} 接口的 **`device`** 属性返回表示发送输入报告的 HID 接口的 {{domxref("HIDDevice")}} 实例。

## 值

一个 {{domxref("HIDDevice")}}。

## 示例

以下示例中 `device` 是一个 {{domxref("HIDDevice")}} 实例，表示发送报告的设备。此设备的 `productName` 会被记录到控制台。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(device.productName);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
