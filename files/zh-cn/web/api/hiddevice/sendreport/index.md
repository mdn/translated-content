---
title: HIDDevice：sendReport() 方法
slug: Web/API/HIDDevice/sendReport
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

{{domxref("HIDDevice")}} 接口的 **`sendReport()`** 方法发送 HID 设备的输出报告。

可以从 {{domxref("HIDDevice.collections")}} 中检索此设备支持的每种报告格式的 `reportId`。

## 语法

```js-nolint
sendReport(reportId, data)
```

### 参数

- `reportId`
  - : 一个 8 位的报告 ID。如果设备没有报告 ID，则返回 `0`。
- `data`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 形式的字节序列。

### 返回值

一个 {{jsxref("Promise")}}，会在报告发送时兑现为 `undefined`。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果因任何原因尝试发送报告失败，则抛出异常。

## 示例

以下示例演示如何使 Joy-Con 设备振动。你可以在文章[连接到不常见的 HID 设备](https://developer.chrome.google.cn/docs/capabilities/hid)中看到更多示例和实时演示。

```js
// 首先，发送一条命令以启用振动。
// 魔数序列来自 https://github.com/mzyy94/joycon-toolweb
const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
await device.sendReport(0x01, new Uint8Array(enableVibrationData));

// 然后，发送一条命令以使 Joy-Con 设备震动。
// 实际的字节序列在示例中提供。
const rumbleData = [
  /* … */
];
await device.sendReport(0x10, new Uint8Array(rumbleData));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
