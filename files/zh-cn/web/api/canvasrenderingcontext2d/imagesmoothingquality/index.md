---
title: CanvasRenderingContext2D：imageSmoothingQuality 属性
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
l10n:
  sourceCommit: d0d8f446ab0e7330a741fd8cbf1ecb8a2077d3f0
---

{{APIRef}}

Canvas 2D API 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`imageSmoothingQuality`** 属性，用于设置图像平滑度。

> [!NOTE]
> 要使此属性生效，{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} 属性必须为 `true`。

## 值

以下之一：

- `"low"`
  - : 低质量。
- `"medium"`
  - : 中等质量。
- `"high"`
  - : 高质量。

默认值为 `"low"`。

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

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
- {{cssxref("image-rendering")}}
