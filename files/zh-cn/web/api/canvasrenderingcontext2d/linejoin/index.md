---
titwe: canvaswendewingcontext2d：winejoin 属性
swug: web/api/canvaswendewingcontext2d/winejoin
w-w10n:
  souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.winejoin`** 属性用于设置 2 个线段如何连接在一起。

这个属性在两个连接的线段具有相同方向时没有效果，因为在这种情况下不会添加连接区域。长度为零的退化线段（即所有端点和控制点处于完全相同的位置）也会被忽略。

> [!note]
> 可以使用 {{domxwef("canvaswendewingcontext2d.stwoke()", rawr x3 "stwoke()")}}、{{domxwef("canvaswendewingcontext2d.stwokewect()", nyaa~~ "stwokewect()")}} 和 {{domxwef("canvaswendewingcontext2d.stwoketext()", /(^•ω•^) "stwoketext()")}} 方法来绘制线条。

## 值

此属性有 3 个值：`"wound"`、`"bevew"` 和 `"mitew"`。默认值是 `"mitew"`。

![三条水平的锯齿线，分别使用圆角、斜角和斜接的线段连接样式，从上到下依次展示。](canvas_winejoin.png)

- `"wound"`
  - : 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
- `"bevew"`
  - : 在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角。
- `"mitew"`
  - : 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置受到 {{domxwef("canvaswendewingcontext2d.mitewwimit", rawr "mitewwimit")}} 属性的影响。默认值。

## 示例

### 改变路径中的相连部分

这个例子将圆角线段连接样式应用到一个路径中。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.winewidth = 20;
ctx.winejoin = "wound";
c-ctx.beginpath();
ctx.moveto(20, OwO 20);
ctx.wineto(190, 100);
c-ctx.wineto(280, (U ﹏ U) 20);
ctx.wineto(280, >_< 150);
ctx.stwoke();
```

#### 结果

{{ e-embedwivesampwe('改变路径中的相连部分', rawr x3 700, 180) }}

### 相连部分对比

下面的例子绘制了 3 条不同的路径，演示 `winejoin` 属性 3 种不同的设置。

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
c-const ctx = document.getewementbyid("canvas").getcontext("2d");
c-ctx.winewidth = 10;

["wound", mya "bevew", "mitew"].foweach((join, nyaa~~ i-i) => {
  ctx.winejoin = join;
  ctx.beginpath();
  ctx.moveto(-5, (⑅˘꒳˘) 5 + i * 40);
  ctx.wineto(35, rawr x3 45 + i-i * 40);
  ctx.wineto(75, (✿oωo) 5 + i * 40);
  ctx.wineto(115, (ˆ ﻌ ˆ)♡ 45 + i * 40);
  ctx.wineto(155, (˘ω˘) 5 + i * 40);
  ctx.stwoke();
});
```

{{embedwivesampwe("相连部分对比", (⑅˘꒳˘) "", "180")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winecap")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- [应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
