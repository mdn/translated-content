---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
l10n:
  sourceCommit: 6bfd45572529a34b4e3a059dcdd37ca6def2e0cd
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref('Barcode Detection API', '', '', 'nocode')}} 的 **`BarcodeDetector`** 接口允许检测图像中的条形码和二维码。

## 构造方法

- {{domxref('BarcodeDetector.BarcodeDetector', 'BarcodeDetector.BarcodeDetector()')}} {{Experimental_Inline}}
  - : 使用可选的 `BarcodeDetectorOptions` 参数创建并返回一个 `BarcodeDetector` 对象。

## 静态方法

- {{domxref('BarcodeDetector/getSupportedFormats_static', 'getSupportedFormats()')}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref('Promise')}}，它兑现一个 {{jsxref('Array')}}，包含受支持的[条形码格式类型](/zh-CN/docs/Web/API/Barcode_Detection_API#支持的条形码格式)。

## 实例方法

- {{domxref('BarcodeDetector.detect', 'detect()')}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref('Promise')}}，它兑现一个具有以下属性的 `DetectedBarcode` 对象数组：
    - `boundingBox`: 一个 {{domxref('DOMRectReadOnly')}}，返回表示检测到的条形码范围的矩形尺寸，与图像对齐。
    - `cornerPoints`：检测到的条形码的四个角点相对于图像的 x 和 y 坐标，从左上角开始顺时针旋转。由于图像内的透视变形，这可能不是方形的。
    - `format`：检测到的条形码格式。（有关格式的完整列表，请参阅[受支持的条形码格式类型](/zh-CN/docs/Web/API/Barcode_Detection_API#支持的条形码格式)）
    - `rawValue`：一个从条形码数据解码的字符串。

## 示例

### 创建检测器

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

### 获取支持的格式

以下示例调用 `getSupportedFormats()` 方法并将结果在控制台打印。

```js
// 检查支持的类型
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### 检测条形码

此示例使用 `detect()` 方法来检测给定图像中的条形码。识别结果被迭代并且条形码数据在控制台打印。

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.log(err);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [barcodefaq.com：包含有关不同条形码和不同类型示例的信息的网站。](https://www.barcodefaq.com/)
- [图像中的加速形状检测](https://developer.chrome.google.cn/docs/capabilities/shape-detection#barcodedetector)
