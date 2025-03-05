---
title: BarcodeDetector：getSupportedFormats() 静态方法
slug: Web/API/BarcodeDetector/getSupportedFormats_static
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("BarcodeDetector")}} 接口的 **`getSupportedFormats()`** 静态方法返回一个 {{jsxref('Promise')}}，它兑现一个包含受支持的条形码格式类型的{{jsxref('Array', "数组", "", 1)}}。

## 语法

```js-nolint
BarcodeDetector.getSupportedFormats()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}}，它兑现一个包含受支持的[条形码格式类型](/zh-CN/docs/Web/API/Barcode_Detection_API#支持的条形码格式)的{{jsxref('Array', "数组", "", 1)}}。

### 异常

不会抛出任何异常。

## 示例

以下示例调用 `getSupportedFormats()` 方法并将结果记录到控制台。

```js
// 检查支持的类型
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
