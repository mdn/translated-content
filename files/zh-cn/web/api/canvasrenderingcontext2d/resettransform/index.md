---
title: CanvasRenderingContext2D：resetTransform() 方法
slug: Web/API/CanvasRenderingContext2D/resetTransform
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.resetTransform()`** 方法用于使用单位矩阵重新设置当前变换。

## 语法

```js-nolint
resetTransform()
```

## 示例

### 重置矩阵

这个示例在修改了矩阵后绘制了一个旋转的矩形，然后使用 `resetTransform()` 方法重置了矩阵。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

{{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} 方法将变换矩阵顺时针旋转 45°。{{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} 方法根据该矩阵绘制一个填充矩形。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 绘制一个旋转 45 度的矩形
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// 将变换矩阵重置为单位矩阵
ctx.resetTransform();
```

#### 结果

{{ EmbedLiveSample('重置矩阵', 700, 180) }}

### 继续使用常规矩阵

在绘制变换形状后，应在渲染其他内容之前调用 `resetTransform()`。在这个例子中，前两个形状使用了倾斜变换绘制，而后两个形状使用了恒等（常规）变换。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 倾斜的矩形
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = "gray";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// 非倾斜的矩形
ctx.resetTransform();
ctx.fillStyle = "red";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
```

#### 结果

倾斜的矩形为灰色，非倾斜的矩形为红色。

{{ EmbedLiveSample('继续使用常规矩阵', 700, 180) }}

## Polyfill

你也可以使用 {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} 方法将当前变换重置为单位矩阵，方法如下：

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
