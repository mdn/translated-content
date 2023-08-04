---
title: CanvasRenderingContext2D.imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
---

{{APIRef}}

**`CanvasRenderingContext2D.imageSmoothingEnabled`** 是 Canvas 2D API 用来设置图片是否平滑的属性，true 表示图片平滑（默认值），false 表示图片不平滑。当我们获取 `imageSmoothingEnabled` 属性值时，它会返回最新设置的值。

以缩放画布为例，这个属性对像素为主的游戏很有用。默认的改变大小的算法会造成图片模糊并且破坏图片原有的像素。如果那样的话，设置属性值为 false。参见 CSS {{cssxref("image-rendering")}} 属性。

> **备注：** 您可以使用{{domxref("CanvasRenderingContext2D.imageSmoothingQuality", "imageSmoothingQuality")}}属性来调整平滑质量。

## 语法

```
ctx.imageSmoothingEnabled = value;
```

### 选项

- `value`
  - : 一个{{jsxref("Boolean")}} 类型的值，表示图片是否平滑。

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

  ctx.fillText("Source", w * 0.5, 20);
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

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{cssxref("image-rendering")}}
