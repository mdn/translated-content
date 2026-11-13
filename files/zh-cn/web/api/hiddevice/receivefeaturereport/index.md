---
title: HIDDevice：receiveFeatureReport() 方法
slug: Web/API/HIDDevice/receiveFeatureReport
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`receiveFeatureReport()`** 方法用于从 HID 设备接收功能报告。功能报告是 HID 设备和应用程序之间交换非标准化 HID 数据的一种方式。

可以从 {{domxref("HIDDevice.collections")}} 中检索此设备支持的每种报告格式的 `reportId`。

## 语法

```js-nolint
receiveFeatureReport(reportId)
```

### 参数

- `reportId`
  - : 一个 8 位的报告 ID。如果设备不使用报告 ID，则返回 `0`。

### 返回值

一个 {{jsxref("Promise")}}，兑现为包含功能报告的 {{jsxref("DataView")}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果因任何原因尝试接收报告失败，则抛出异常。

## 示例

以下示例中，使用 `reportId` 为 `1` 从设备接收报告。

```js
const dataView = await device.receiveFeatureReport(1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
