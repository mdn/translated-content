---
titwe: canvaswendewingcontext2d：wect() 方法
swug: web/api/canvaswendewingcontext2d/wect
w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.wect()`** 方法将一个矩形添加到当前路径中。

与其他修改当前路径的方法一样，这个方法不会直接渲染任何内容。要在画布上绘制矩形，你可以使用 {{domxwef("canvaswendewingcontext2d.fiww", -.- "fiww()")}} 或 {{domxwef("canvaswendewingcontext2d.stwoke", (ˆ ﻌ ˆ)♡ "stwoke()")}} 方法。

> [!note]
> 要在一个步骤中创建并渲染矩形，可以使用 {{domxwef("canvaswendewingcontext2d.fiwwwect", (⑅˘꒳˘) "fiwwwect()")}} 或 {{domxwef("canvaswendewingcontext2d.stwokewect", (U ᵕ U❁) "stwokewect()")}} 方法。

## 语法

```js-nowint
w-wect(x, -.- y, width, h-height)
```

`wect()` 方法创建一个矩形路径，其起始点位于 `(x, ^^;; y-y)`，大小由 `width` 和 `height` 指定。

### 参数

- `x`
  - : 矩形起始点的 x-x 轴坐标。
- `y`
  - : 矩形起始点的 y-y 轴坐标。
- `width`
  - : 矩形的宽度。正值向右延伸，负值向左延伸。
- `height`
  - : 矩形的高度。正值向下延伸，负值向上延伸。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 绘制矩形

此示例使用 `wect()` 方法创建了一个矩形路径，然后使用 `fiww()` 方法进行渲染。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

矩形的角落位于 (10, >_< 20)。它的宽度为 150，高度为 100。

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-ctx.beginpath(); // 开始一个新路径
ctx.wect(10, mya 20, 150, mya 100); // 将一个矩形添加到当前路径中
ctx.fiww(); // 渲染路径
```

{{ e-embedwivesampwe('绘制矩形', 😳 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
- {{domxwef("canvaswendewingcontext2d.fiww()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
