---
title: HIDDevice：sendFeatureReport() 方法
slug: Web/API/HIDDevice/sendFeatureReport
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`sendFeatureReport()`** 方法用于 HID 设备发送功能报告。功能报告是 HID 设备和应用程序之间交换非标准化 HID 数据的一种方式。

可以从 {{domxref("HIDDevice.collections")}} 中检索此设备支持的每种报告格式的 `reportId`。

## 语法

```js-nolint
sendFeatureReport(reportId, data)
```

### 参数

- `reportId`
  - : 一个 8 位的报告 ID。如果设备不使用报告 ID，则返回 `0`。
- `data`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 形式的字节序列。

### 返回值

一个 {{jsxref("Promise")}}，会在报告发送时兑现为 `undefined`。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果因任何原因尝试发送报告失败，则抛出异常。

## 示例

以下示例演示使用 `sendFeatureReport()` 让设备闪烁。你可以在文章[连接到不常见的 HID 设备](https://developer.chrome.google.cn/docs/capabilities/hid)中看到更多示例和实时演示。

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // 关闭
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // 打开
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
