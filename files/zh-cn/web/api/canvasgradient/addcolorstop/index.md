---
title: CanvasGradient：addColorStop() 方法
slug: Web/API/CanvasGradient/addColorStop
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`CanvasGradient.addColorStop()`** 方法为给定的 canvas 渐变添加一个由偏移值（`offset`）和颜色值（`color`）指定的色标。

## 语法

```js-nolint
addColorStop(offset, color)
```

### 参数

- `offset`
  - : 一个在 `0` 到 `1` 之间（包含边界）的数字，表示色标的位置。`0` 表示渐变的起始位置，`1` 表示渐变的结束位置。
- `color`
  - : 一个 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} 值，表示色标的颜色。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `offset` 不在 0 和 1 之间（包括边界），则抛出此异常。
- `SyntaxError` {{domxref("DOMException")}}
  - : 如果 `color` 无法解析为 CSS {{cssxref("&lt;color&gt;")}} 值，则抛出此异常。

## 示例

### 向渐变中添加色标

此示例使用 `addColorStop` 方法向线性 {{domxref("CanvasGradient")}} 对象中添加色标。然后使用该渐变填充矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.7, "white");
gradient.addColorStop(1, "pink");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

#### 结果

{{ EmbedLiveSample('向渐变中添加色标', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义 {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
