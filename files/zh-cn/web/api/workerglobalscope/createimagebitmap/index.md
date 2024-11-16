---
title: WorkerGlobalScope：createImageBitmap() 方法
slug: Web/API/WorkerGlobalScope/createImageBitmap
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("Canvas API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`createImageBitmap`** 从给定的来源创建位图，也可以进行裁剪以包含源图像的一部分。它接受各种不同的图像来源，并返回一个会兑现 {{domxref("ImageBitmap")}} 的 {{domxref("Promise")}}。

## 语法

```js-nolint
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### 参数

- `image`
  - : 图像源，可以是以下值之一：
    - {{domxref("HTMLImageElement")}}
    - {{domxref("SVGImageElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("Blob")}}
    - {{domxref("ImageData")}}
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}
- `sx`
  - : 将从中提取 `ImageBitmap` 的矩形的参考点的 x 坐标。
- `sy`
  - : 将从中提取 `ImageBitmap` 的矩形的参考点的 y 坐标。
- `sw`
  - : 将从中提取 `ImageBitmap` 的矩形的宽度。此值可以为负数。
- `sh`
  - : 将从中提取 `ImageBitmap` 的矩形的高度。此值可以为负数。
- `options` {{optional_inline}}

  - : 设置图像提取选项的对象。可用的选项包括：

    - `imageOrientation`

      - : 指定位图图像的方向。

        - `from-image`
          - : 如果存在 EXIF 方向元数据，则根据其来指定图像方向（默认）。
        - `flipY`
          - : 如果存在 EXIF 方向元数据，则根据其来指定图像方向，然后垂直翻转。
        - `none`
          - : 根据图像的编码来指定图像方向，忽略有关方向的任何元数据（例如，可能添加到图像中的 EXIF 元数据，以指示相机被转向以在人像模式下捕获图像）。

    - `premultiplyAlpha`
      - : 指定位图的颜色通道是否应与 alpha 通道预乘。以下值之一：`none`、`premultiply` 或 `default`（默认）。
    - `colorSpaceConversion`
      - : 指定图像是否应使用色彩空间转换进行解码。`none` 或 `default`（默认）。`default` 值表示使用特定于实现的行为。
    - `resizeWidth`
      - : 指定输出宽度的长整数。
    - `resizeHeight`
      - : 指定输出高度的长整数。
    - `resizeQuality`
      - : 指定用于调整输入大小以匹配输出尺寸的算法。以下值之一：`pixelated`、`low`（默认）、`medium` 或 `high`。

### 返回值

一个 {{jsxref("Promise")}}，会兑现为一个包含给定矩形的位图数据的 {{domxref("ImageBitmap")}} 对象。

## 示例

参见 {{domxref("Window.createImageBitmap()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
