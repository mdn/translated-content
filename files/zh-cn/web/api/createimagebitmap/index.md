---
title: self.createImageBitmap()
slug: Web/API/createImageBitmap
---

{{APIRef("Canvas API")}}

**`createImageBitmap`** 方法存在 windows 和 workers 中。它接受各种不同的图像来源，并返回一个{{domxref("Promise")}}, resolve 为{{domxref("ImageBitmap")}}. 可选地参数，图像被剪裁成自（sx，sy）且宽度为 sw，高度为 sh 的像素的矩形。

## Syntax

```
createImageBitmap(image[, options]).then(function(response) { ... });
createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });
```

### Parameters

- `image`
  - : 一个图像源，可以是一个 {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, {{HTMLElement("video")}}, {{HTMLElement("canvas")}}, {{domxref("HTMLImageElement")}}, {{domxref("SVGImageElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("HTMLCanvasElement")}}, {{domxref("Blob")}}, {{domxref("ImageData")}}, {{domxref("ImageBitmap")}}, 或 {{domxref("OffscreenCanvas")}} 对象。
- `sx`
  - : 裁剪点 x 坐标。
- `sy`
  - : 裁剪点 y 坐标。
- `sw`
  - : 裁剪宽度，值可为负数。
- `sh`
  - : 裁剪高度，值可为负数。
- options {{optional_inline}}

  - : 为其设置选项的对象。可用的选项是：

    - `imageOrientation`: 指示图像是按原样呈现还是垂直翻转。`none` (默认不翻转) 或 `flipY`.
    - `premultiplyAlpha`: 指示位图颜色通道由 alpha 通道预乘。选择其一：`none`, `premultiply`, 或 `default` (默认).
    - `colorSpaceConversion`: 指示图像是否使用色彩空间转换进行解码。`none` 或 `default` (默认). The value `default` indicates that implementation-specific behavior is used.
    - `resizeWidth`: 指示新宽度的长整数。
    - `resizeHeight`: 指示新高度的长整数。
    - `resizeQuality`: 指定图像缩放算法。选择其一`pixelated`, `low` (默认), `medium`, 或 `high`.

### Return value

返回一个解决 ImageBitmap 的{{domxref("Promise")}} ，当 Promise 成功时 resolves 接收一个包含所得到的矩形的位图数据{{domxref("ImageBitmap")}}。

## Example

```js
var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  image = new Image();

image.onload = function () {
  Promise.all([
    createImageBitmap(this, 0, 0, 32, 32),
    createImageBitmap(this, 32, 0, 32, 32),
  ]).then(function (sprites) {
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
};

image.src = "sprites.png";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
