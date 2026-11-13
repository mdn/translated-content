---
title: CanvasRenderingContext2D：imageSmoothingEnabled 属性
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`imageSmoothingEnabled`** 属性用于设置是否对缩放后的图片进行平滑处理，`true` 表示进行平滑处理（默认值），`false` 表示不进行。当我们获取 `imageSmoothingEnabled` 属性值时，它会返回最新设置的值。

这个属性对像素为主的游戏或其他应用很有用。放大图像时，默认的调整大小的算法会使得像素变模糊。可以将此属性设为 `false` 来保证像素的清晰度。

> [!NOTE]
> 你可以使用 {{domxref("CanvasRenderingContext2D.imageSmoothingQuality", "imageSmoothingQuality")}} 属性来调整平滑质量。

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
img.src = "/shared-assets/images/examples/big-star.png";
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
