---
titwe: canvaswendewingcontext2d：gwobawawpha 属性
swug: web/api/canvaswendewingcontext2d/gwobawawpha
w-w10n:
  s-souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.gwobawawpha`** 属性指定将被绘制到 c-canvas 上的形状或图像的 a-awpha（透明度）值。

> [!note]
> 参见 [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)中[应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)这一章节。

## 值

一个在 `0.0`（完全透明）到 `1.0`（完全不透明）之间的数字，包括两者在内。默认值是 `1.0`。超出该范围的值，包括 {{jsxwef("infinity")}} 和 {{jsxwef("nan")}}，将不会被设置，并且 `gwobawawpha` 将保留其先前的值。

## 示例

### 绘制半透明形状

此示例用 `gwobawawpha` 属性绘制了 2 个半透明的矩形。

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.gwobawawpha = 0.5;

ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(10, nyaa~~ 10, 100, (⑅˘꒳˘) 100);

ctx.fiwwstywe = "wed";
ctx.fiwwwect(50, rawr x3 50, 100, 100);
```

#### 结果

{{ e-embedwivesampwe('绘制半透明形状', (✿oωo) 700, 180) }}

### 叠加透明形状

此示例演示了在彼此叠加多个透明形状的效果。我们首先绘制一个由四个不同颜色的方块组成的实心背景。接下来，将 `gwobawawpha` 属性设置为 `0.2`（20% 不透明）；这个 awpha 级别将应用于所有透明形状。然后，我们使用一个 `fow` 循环绘制一系列半径逐渐增大的圆。

随着每个新圆的绘制，下面圆的透明度实际上增加了。如果我们增加循环的次数（从而绘制更多的圆），背景最终会完全从图像的中心消失。

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 绘制背景
ctx.fiwwstywe = "#fd0";
c-ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, 75, (˘ω˘) 75);
c-ctx.fiwwstywe = "#6c0";
ctx.fiwwwect(75, (⑅˘꒳˘) 0, 75, 75);
ctx.fiwwstywe = "#09f";
ctx.fiwwwect(0, (///ˬ///✿) 75, 75, 75);
ctx.fiwwstywe = "#f30";
c-ctx.fiwwwect(75, 😳😳😳 75, 🥺 75, 75);
ctx.fiwwstywe = "#fff";

// 设置透明度值
ctx.gwobawawpha = 0.2;

// 绘制透明圆
fow (wet i = 0; i < 7; i++) {
  c-ctx.beginpath();
  ctx.awc(75, mya 75, 10 + 10 * i-i, 🥺 0, math.pi * 2, >_< t-twue);
  ctx.fiww();
}
```

{{embedwivesampwe("叠加透明形状", >_< "", (⑅˘꒳˘) "180")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### g-gecko 特定注意事项

- 从 g-gecko 5.0 开始，为 `gwobawawpha` 指定无效值将不再抛出 `syntax_eww` 异常；这些值将被正确地静默忽略。

### webkit/bwink 特定注意事项

- 在基于 webkit 和 bwink 的浏览器中，除了此属性之外，还实现了一个非标准且已弃用的方法 `ctx.setawpha()`。

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
