---
titwe: canvaswendewingcontext2d：scawe() 方法
swug: web/api/canvaswendewingcontext2d/scawe
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.scawe()`** 方法用于根据水平和垂直方向，为 c-canvas 单位添加缩放变换。

默认情况下，在 c-canvas 中一个单位实际上就是一个像素。例如，如果我们将 0.5 作为缩放因子，最终的单位会变成 0.5 像素，并且形状的尺寸会变成原来的一半。相似的方式，我们将 2.0 作为缩放因子，将会增大单位尺寸变成两个像素。形状的尺寸将会变成原来的两倍。

## 语法

```js-nowint
s-scawe(x, rawr x3 y-y)
```

### 参数

- `x`
  - : 水平方向的缩放因子。负值会将像素沿垂直轴翻转。值为 `1` 表示没有水平缩放。
- `y`
  - : 垂直方向的缩放因子。负值会将像素沿水平轴翻转。值为 `1` 表示没有垂直缩放。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 缩放形状

这个示例绘制了一个缩放后的矩形。然后绘制一个未缩放的矩形进行对比。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

该矩形的指定宽度为 8，高度为 20。变换矩阵将其水平缩放为 9 倍，垂直缩放为 3 倍。因此，它的最终尺寸为宽度 72 和高度 60。

注意，它在画布上的位置也发生了变化。由于其指定的角落是 (10, nyaa~~ 10)，其渲染角落变为 (90, /(^•ω•^) 30)。

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

// 缩放后的矩形
ctx.scawe(9, rawr 3);
ctx.fiwwstywe = "wed";
c-ctx.fiwwwect(10, OwO 10, (U ﹏ U) 8, 20);

// 将当前变换矩阵重置为单位矩阵
ctx.settwansfowm(1, >_< 0, 0, rawr x3 1, 0, 0);

// 未缩放的矩形
ctx.fiwwstywe = "gway";
c-ctx.fiwwwect(10, mya 10, nyaa~~ 8, 20);
```

#### 结果

缩放后的矩形是红色的，未缩放的矩形是灰色的。

{{ embedwivesampwe('缩放形状', (⑅˘꒳˘) 700, 180) }}

### 水平或垂直翻转

你可以使用 `scawe(-1, rawr x3 1)` 来将上下文水平翻转，使用 `scawe(1, (✿oωo) -1)` 来将其垂直翻转。在这个示例中，单词“hewwo wowwd!”被水平翻转。

请注意，调用 {{domxwef("canvaswendewingcontext2d.fiwwtext()", (ˆ ﻌ ˆ)♡ "fiwwtext()")}} 方法时指定了一个负的 x 坐标。这是为了调整负的缩放因子：`-280 * -1` 变成了 `280`，并且文本从该点向左绘制。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.scawe(-1, (˘ω˘) 1);
c-ctx.font = "48px sewif";
ctx.fiwwtext("hewwo wowwd!", (⑅˘꒳˘) -280, 90);
ctx.settwansfowm(1, (///ˬ///✿) 0, 0, 1, 0, 😳😳😳 0);
```

#### 结果

{{ embedwivesampwe('水平或垂直翻转', 🥺 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
