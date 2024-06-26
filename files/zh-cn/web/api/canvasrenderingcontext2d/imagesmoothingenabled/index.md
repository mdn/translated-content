---
title: CanvasRenderingContext2D.imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`imageSmoothingEnabled`** 属性用于设置图片是否进行平滑处理，`true` 表示图片平滑（默认值），`false` 表示图片不平滑。当我们获取 `imageSmoothingEnabled` 属性值时，它会返回最新设置的值。

以缩放画布为例，这个属性对像素为主的游戏很有用。默认的改变大小的算法会造成图片模糊并且破坏图片原有的像素。可以设置其属性值为 `false` 来保证像素的锐度。

> **备注：** 你可以使用 {{domxref("CanvasRenderingContext2D.imageSmoothingQuality", "imageSmoothingQuality")}} 属性来调整平滑质量。

## 值

一个布尔值，指示是否对缩放的图像进行平滑处理。默认值是 `true`。

## 示例

### 禁用图像平滑

本示例比较了三个图像。第一个图像以其自然大小绘制，第二个图像缩放为 3 倍并启用了图像平滑，而第三个图像缩放为 3 倍但禁用了图像平滑。

#### HTML

```html
<canvas id="canvas" width="460" height="210"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
ctx.font = "16px sans-serif";
ctx.textAlign = "center";

const img = new Image();
img.src =
  "https://interactive-examples.mdn.mozilla.net/media/examples/star.png";
img.onload = () => {
  const w = img.width,
    h = img.height;

  ctx.fillText("源文件", w * 0.5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText("Smoothing = TRUE", w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText("Smoothing = FALSE", w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};
```

#### 结果

{{ EmbedLiveSample('禁用图像平滑', 700, 240) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
- {{cssxref("image-rendering")}}
