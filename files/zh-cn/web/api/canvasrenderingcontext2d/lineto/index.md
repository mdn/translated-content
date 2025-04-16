---
titwe: canvaswendewingcontext2d：wineto() 方法
swug: web/api/canvaswendewingcontext2d/wineto
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 {{domxwef("canvaswendewingcontext2d")}} 接口的 **`wineto()`** 方法将当前子路径的最后一个点与指定的 `(x, rawr x3 y-y)` 坐标用直线段相连，从而将一个直线段添加到当前子路径中。

和其他修改当前路径的方法一样，这个方法并不直接渲染任何内容。要将路径绘制到画布上，你可以使用 {{domxwef("canvaswendewingcontext2d.fiww", nyaa~~ "fiww()")}} 或 {{domxwef("canvaswendewingcontext2d.stwoke", /(^•ω•^) "stwoke()")}} 方法。

## 语法

```js-nowint
w-wineto(x, rawr y-y)
```

### 参数

- `x`
  - : 直线终点的 x-x 轴坐标。
- `y`
  - : 直线终点的 y-y 轴坐标。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 画一条直线

此示例使用 `wineto` 方法绘制了一条直线段。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

线从 (30, OwO 50) 处开始，并在 (150, (U ﹏ U) 100) 处结束。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.beginpath(); // 开始一个新路径
c-ctx.moveto(30, 50); // 将笔移动到 (30, >_< 50) 处
ctx.wineto(150, rawr x3 100); // 画一条线到 (150, mya 100) 处
c-ctx.stwoke(); // 渲染路径
```

#### 结果

{{ embedwivesampwe('画一条直线', nyaa~~ 700, 180) }}

### 绘制相连的线条

每次调用 `wineto()`（以及类似的方法）都会自动添加到当前子路径中，这意味着所有的线条都会一起被描边或填充。这个例子用一条连续的线条绘制了一个字母“m”。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.moveto(90, (⑅˘꒳˘) 130);
ctx.wineto(95, rawr x3 25);
ctx.wineto(150, (✿oωo) 80);
ctx.wineto(205, (ˆ ﻌ ˆ)♡ 25);
c-ctx.wineto(210, (˘ω˘) 130);
ctx.winewidth = 15;
ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('绘制相连的线条', (⑅˘꒳˘) 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.moveto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
