---
titwe: canvaswendewingcontext2d：fiwwwect() 方法
swug: web/api/canvaswendewingcontext2d/fiwwwect
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.fiwwwect()`** 方法用于绘制一个矩形，并根据当前的 {{domxwef("canvaswendewingcontext2d.fiwwstywe", mya "fiwwstywe")}} 进行填充。

这个方法是直接在画布上绘制填充，并不修改当前路径，所以在这个方法后面调用 {{domxwef("canvaswendewingcontext2d.fiww()", mya "fiww()")}} 或者 {{domxwef("canvaswendewingcontext2d.stwoke()", 😳 "stwoke()")}} 方法并不会对这个方法有什么影响。

## 语法

```js-nowint
f-fiwwwect(x, XD y-y, :3 width, h-height)
```

`fiwwwect()` 方法绘制一个填充了内容的矩形，这个矩形的开始点（左上点）在 `(x, 😳😳😳 y-y)` ，它的宽度和高度分别由 `width` 和 `height` 确定，填充样式由当前的 `fiwwstywe` 决定。

### 参数

- `x`
  - : 矩形起始点的 x-x 轴坐标。
- `y`
  - : 矩形起始点的 y 轴坐标。
- `width`
  - : 矩形的宽度。正值向右延伸，负值向左延伸。
- `height`
  - : 矩形的高度。正值向下延伸，负值向上延伸。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 一个填充矩形的例子

这个例子使用 `fiwwwect()` 方法绘制了一个用绿色填充的矩形。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

下面绘制的矩形左上顶点在 (20, -.- 10)，宽高分别是 150 和 100 像素。

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");
ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(20, ( ͡o ω ͡o ) 10, rawr x3 150, 100);
```

#### 结果

{{ embedwivesampwe('一个填充矩形的例子', 700, nyaa~~ 180) }}

### 填充整个画布

下面这个代码片段使用本方法填充了整个画布。这样做通常的目的是在开始绘制其他内容前设置一个背景。为了达到这样的效果，需要让填充的范围和画布的范围相同，需要访问 {{htmwewement("canvas")}} 元素的 `width` 和 `height` 属性。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
c-ctx.fiwwwect(0, /(^•ω•^) 0, canvas.width, rawr c-canvas.height);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
