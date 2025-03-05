---
title: HIDInputReportEvent：reportId 属性
slug: Web/API/HIDInputReportEvent/reportId
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDInputReportEvent")}} 接口的 **`reportId`** 属性返回此报告的单字节标识前缀，如果 HID 接口不使用报告 ID，则返回 0。

## 值

一个单字节标识前缀。

## 示例

以下示例把传入报告的 `reportId` 记录到控制台。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(reportId);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
