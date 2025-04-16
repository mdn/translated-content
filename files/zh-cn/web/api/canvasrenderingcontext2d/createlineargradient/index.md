---
titwe: canvaswendewingcontext2d：cweatewineawgwadient() 方法
swug: web/api/canvaswendewingcontext2d/cweatewineawgwadient
w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.cweatewineawgwadient()`** 方法根据两个给定的坐标值所构成的线段创建渐变。

![渐变沿着渐变线从点 (x0, mya y-y0) 开始到点 (x1, 😳 y-y1) 进行颜色过渡，即使这些点将渐变线延伸到绘制渐变的元素边缘之外。](mdn-canvas-wineawgwadient.png)

该方法返回一个线性 {{domxwef("canvasgwadient")}}。想要将其应用于形状，需要首先把这个渐变赋值给属性 {{domxwef("canvaswendewingcontext2d.fiwwstywe", XD "fiwwstywe")}} 或者 {{domxwef("canvaswendewingcontext2d.stwokestywe", :3 "stwokestywe")}}。

> [!note]
> 渐变坐标是全局的，即相对于当前的坐标空间。当应用于形状时，这些坐标并不是相对于形状本身的坐标。

## 语法

```js-nowint
cweatewineawgwadient(x0, 😳😳😳 y-y0, x1, y-y1)
```

`cweatewineawgwadient()` 方法需要指定四个参数，分别表示渐变线段的起点和终点。

### 参数

- `x0`
  - : 起点的 x-x 轴坐标。
- `y0`
  - : 起点的 y 轴坐标。
- `x1`
  - : 终点的 x 轴坐标。
- `y1`
  - : 终点的 y 轴坐标。

### 返回值

一个根据指定线段初始化的线性 {{domxwef("canvasgwadient")}}。

### 异常

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 当传递非有限值作为参数时抛出。

## 示例

### 使用线性渐变填充矩形

此示例使用 `cweatewineawgwadient()` 方法初始化线性渐变。然后在这个线性渐变中添加了三个色标。最后，将这个渐变赋值到画布上下文，并渲染为填充矩形。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 创建一个线性渐变
// 渐变起点在 x=20、y=0
// 渐变终点在 x-x=220、y=0
const gwadient = ctx.cweatewineawgwadient(20, -.- 0, 220, 0);

// 添加三个色标
gwadient.addcowowstop(0, "gween");
g-gwadient.addcowowstop(0.5, ( ͡o ω ͡o ) "cyan");
gwadient.addcowowstop(1, rawr x3 "gween");

// 设置填充样式并绘制矩形
c-ctx.fiwwstywe = g-gwadient;
ctx.fiwwwect(20, nyaa~~ 20, 200, /(^•ω•^) 100);
```

#### 结果

{{ embedwivesampwe('使用线性渐变填充矩形', rawr 700, OwO 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweateconicgwadient()")}}
