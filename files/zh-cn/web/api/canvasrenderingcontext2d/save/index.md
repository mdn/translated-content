---
title: CanvasRenderingContext2D：save() 方法
slug: Web/API/CanvasRenderingContext2D/save
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.save()`** 方法用于通过将当前状态放入栈中，以保存 canvas 的完整状态。

## 绘制状态

保存到栈中的绘制状态有下面部分组成：

- 当前的变换矩阵。
- 当前的剪切区域。
- 当前的虚线列表。
- 以下属性当前的值：{{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}、{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}、{{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}、{{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}、{{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}、{{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}、{{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}、{{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}、{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}、{{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction", "direction")}}、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}。

## 语法

```js-nolint
save()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 保存绘图状态

这个示例使用 `save()` 方法保存当前状态，并在稍后使用 `restore()` 方法恢复它，这样你就能够使用当前状态绘制矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 保存当前状态
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// 恢复到最近一次调用 save() 时保存的状态
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### 结果

{{ EmbedLiveSample('保存绘图状态', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
