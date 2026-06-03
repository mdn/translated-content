---
title: CanvasRenderingContext2D：clip() 方法
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: 882679ef575f519ddb80095398a1235415ac01f1
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.clip()`** 方法用于将当前或给定路径转换为当前裁剪区域。前面的裁剪区域（如果有的话）将与当前路径或给定路径相交，从而创建新的裁剪区域。

在下面的图像中，红色轮廓表示一个星形的裁剪区域。只有在裁剪区域内的棋盘格模式的部分才会被绘制出来。

![星形裁剪区域](canvas_clipping_path.png)

> [!NOTE]
> 请注意，裁剪区域仅由添加到路径中的形状构成。它不适用于直接绘制到画布上的形状基元，比如 {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}。相反，在调用 `clip()` 前，你需要使用 {{domxref("CanvasRenderingContext2D.rect()","rect()")}} 将一个矩形形状添加到路径中。

> [!NOTE]
> 裁剪路径不能直接撤销。在调用 `clip()` 前，你必须使用 {{domxref("CanvasRenderingContext2D/save", "save()")}} 保存画布状态，并在裁剪区域完成绘制后使用 {{domxref("CanvasRenderingContext2D/restore", "restore()")}} 还原。

## 语法

```js-nolint
clip()
clip(path)
clip(fillRule)
clip(path, fillRule)
```

### 参数

- `fillRule`
  - : 这个算法判断一个点是在裁剪区域内还是在此之外。
    允许的值：
    - `nonzero`
      - : [非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule)，默认的规则。
    - `evenodd`
      - : [非零环绕规则](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 需要用作裁剪区域的 {{domxref("Path2D")}} 路径。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 一个简单的裁剪区域

此示例使用 `clip()` 方法根据圆弧的形状创建一个裁剪区域。然后绘制了两个矩形；只有在裁剪区域内的部分才会被渲染。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

裁剪区域是一个以 (100, 75) 为中心点、以 50 为半径的完整圆。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建圆形裁剪区域
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI * 2);
ctx.clip();

// 绘制被裁剪的内容
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
```

#### 结果

{{ EmbedLiveSample('一个简单的裁剪区域', 700, 180) }}

### 指定路径和填充规则

此示例将两个矩形保存到一个 Path2D 对象中，然后使用 `clip()` 方法将其作为当前的裁剪区域。使用 `"evenodd"` 规则在裁剪矩形交集处创建一个孔洞；默认情况下（使用 `"nonzero"` 规则），不会有孔洞。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建裁剪路径
let region = new Path2D();
region.rect(80, 10, 20, 130);
region.rect(40, 50, 100, 50);
ctx.clip(region, "evenodd");

// 绘制被裁剪的内容
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### 结果

{{ EmbedLiveSample('指定路径和填充规则', 700, 180) }}

### 创建复杂的裁剪区域

此示例使用了两个路径，一个矩形和一个正方形，来创建一个复杂的裁剪区域。`clip()` 方法被调用两次，第一次使用 `Path2D` 对象将当前裁剪区域设置为圆形，然后再次调用以将圆形裁剪区域与一个正方形相交。最终的裁剪区域是圆形和正方形的交集形状。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建两个裁剪路径
let circlePath = new Path2D();
circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
let squarePath = new Path2D();
squarePath.rect(85, 10, 130, 130);

// 将裁剪区域设置为圆形
ctx.clip(circlePath);
// 将裁剪区域设置为圆形和正方形的交集
ctx.clip(squarePath);

// 绘制被裁剪的内容
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### 结果

{{ EmbedLiveSample('创建复杂的裁剪区域', 300, 150) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
