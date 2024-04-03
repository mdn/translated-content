---
title: BarcodeDetector：BarcodeDetector() 构造方法
slug: Web/API/BarcodeDetector/BarcodeDetector
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`BarcodeDetector()`** 构造函数创建一个新的用于检测图像中条形码和二维码的 {{domxref("BarcodeDetector")}} 对象。

## 语法

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### 参数

- `options` {{optional_inline}}

  - : 包含一系列 `BarcodeFormats` 的选项对象，用于在后续调用 {{domxref('BarcodeDetector.detect()','detect()')}} 中搜索。选项有：

    - `formats` {{optional_inline}}
      - : 一个表示条形码格式的字符串 {{jsxref('Array')}}。如果未提供，调用 `detect()` 方法时将搜索所有支持的格式。因此，出于性能原因，建议限制为具体的格式。要查看支持格式的完整列表，请参阅[受支持的条形码格式类型](/zh-CN/docs/Web/API/Barcode_Detection_API#支持的条形码格式)。

### 异常

- {{jsxref("TypeError")}}
  - : 如果指定了 `formats` 参数并且该参数为空数组或包含 `unknown`，则抛出此异常。

## 示例

此示例测试浏览器兼容性并使用指定的支持格式创建新的条形码检测器对象。

```js
// 检查兼容性
if (!("BarcodeDetector" in globalThis)) {
  console.log("此浏览器不支持条形码检测器。");
} else {
  console.log("条形码检测器是支持的！");

  // 创建新检测器
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
