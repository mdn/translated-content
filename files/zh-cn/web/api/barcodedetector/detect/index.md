---
title: BarcodeDetector：detect() 方法
slug: Web/API/BarcodeDetector/detect
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("BarcodeDetector")}} 接口的 **`detect()`** 方法返回一个 {{jsxref('Promise')}}，它兑现一个从图像中检测到的条形码的{{jsxref('Array', "数组", "", 1)}}。

## 语法

```js-nolint
detect(imageBitmapSource)
```

### 参数

- `imageBitmapSource`
  - : 接受一个图像源作为参数；它可以是以下对象之一：{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("ImageBitmap")}}、{{domxref("OffscreenCanvas")}}、{{domxref("VideoFrame")}}、{{domxref('Blob')}} 格式的图像或 {{domxref('ImageData')}}。

### 返回值

返回一个 {{jsxref('Promise')}}，它兑现一个具有以下属性的 `DetectedBarcode` 对象数组：

- `boundingBox`
  - : 一个 {{domxref('DOMRectReadOnly')}}，返回表示检测到的条形码范围的矩形尺寸，与图像对齐。
- `cornerPoints`
  - : 检测到的条形码的四个角点相对于图像的 x 和 y 坐标，从左上角开始顺时针旋转。由于图像内的透视变形，这可能不是方形的。
- `format`
  - : 检测到的条形码格式。（有关格式的完整列表，请参阅[受支持的条形码格式类型](/zh-CN/docs/Web/API/Barcode_Detection_API#支持的条形码格式)）
- `rawValue`
  - : 一个从条形码数据解码的字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 如果未指定参数或 `type` 参数不是一个 `ImageBitmapSource` 类型，抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果 `imageBitmapSource` 有源并且与文档的源不同，或者如果 `imageBitmapSource` 是一个 {{domxref('HTMLCanvasElement')}} 及其 [origin-clean](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-origin-clean) 标志设置为 `false`，抛出此异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 `imageBitmapSource` 是一个 {{domxref('HTMLImageElement')}} 并且未完全解码或解码失败，或者是一个 {{domxref('HTMLVideoElement')}} 并且其 {{domxref('HTMLMediaElement.readyState', 'readyState')}} 属性是 `HAVE_NOTHING` 或 `HAVE_METADATA`，抛出此异常。

## 示例

此示例使用 `detect()` 方法来检测给定图像中的条形码。识别结果被迭代并且条形码数据被记录到控制台。

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.error(err);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
