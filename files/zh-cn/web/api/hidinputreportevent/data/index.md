---
title: HIDInputReportEvent：data 属性
slug: Web/API/HIDInputReportEvent/data
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDInputReportEvent")}} 接口的 **`data`** 属性返回包含来自于输入报告数据的 {{jsxref("DataView")}}，如果 HID 接口使用报告 ID，则不包含 `reportId`。

## 值

一个 {{jsxref("DataView")}}。

## 示例

以下示例把返回的 `data` 记录到控制台。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
