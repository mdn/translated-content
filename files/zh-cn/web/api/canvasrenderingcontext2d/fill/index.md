---
title: CanvasRenderingContext2D：fill() 方法
slug: Web/API/CanvasRenderingContext2D/fill
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.fill()`** 方法用于根据当前的 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}，填充当前或给定的路径。

## 语法

```js-nolint
fill()
fill(path)
fill(fillRule)
fill(path, fillRule)
```

### 参数

- `fillRule`
  - : 一种算法，确定点是在路径内还是在路径外。
    允许的值：
    - `nonzero`
      - : [非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule)，默认的规则。
    - `evenodd`
      - : [奇偶环绕规则](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 需要填充的 {{domxref("Path2D")}} 路径。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 填充矩形

该示例使用 `fill()` 方法填充矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.fill();
```

#### 结果

{{ EmbedLiveSample('填充矩形', 700, 180) }}

### 指定路径和填充规则

该示例将一些相交的线条保存到一个 `Path2D` 对象中。然后使用 `fill()` 方法将对象渲染到画布上。通过使用 `"evenodd"` 规则，在对象中心留下一个未填充的孔；默认情况下（使用 `"nonzero"` 规则），这个孔也会被填充。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建路径
let region = new Path2D();
region.moveTo(30, 90);
region.lineTo(110, 20);
region.lineTo(240, 130);
region.lineTo(60, 130);
region.lineTo(190, 20);
region.lineTo(270, 90);
region.closePath();

// 填充路径
ctx.fillStyle = "green";
ctx.fill(region, "evenodd");
```

#### 结果

{{ EmbedLiveSample('指定路径和填充规则', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
