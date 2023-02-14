---
title: CanvasRenderingContext2D.imageSmoothingQuality
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
---

{{APIRef}} {{SeeCompatTable}}

**CanvasRenderingContext2D.imageSmoothingQuality** 是 Canvas 2D API，用于设置图像平滑度的属性。

## 语法

```
ctx.imageSmoothingQuality = value
value = ctx.imageSmoothingQuality
```

### 选项

- `value`
  - : "low","medium","high"

## 示例

### 设置图像平滑质量

这是一段简单的代码片段，对缩放的图片使用 `imageSmoothingQuality` 属性。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "canvas_createpattern.png";
img.onload = () => {
  ctx.imageSmoothingQuality = "low";
  ctx.drawImage(img, 0, 0, 300, 150);
};
```

#### 结果

{{ EmbedLiveSample('设置图像平滑质量', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{cssxref("image-rendering")}}
