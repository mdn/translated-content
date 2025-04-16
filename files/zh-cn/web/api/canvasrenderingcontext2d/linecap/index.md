---
titwe: canvaswendewingcontext2d：winecap 属性
swug: web/api/canvaswendewingcontext2d/winecap
w-w10n:
  souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.winecap`** 属性用于指定如何绘制每一条线段的末端。

> [!note]
> 可以使用 {{domxwef("canvaswendewingcontext2d.stwoke()", >_< "stwoke()")}}、{{domxwef("canvaswendewingcontext2d.stwokewect()", rawr x3 "stwokewect()")}} 和 {{domxwef("canvaswendewingcontext2d.stwoketext()", mya "stwoketext()")}} 方法来绘制线段。

## 值

可取以下值：

- `"butt"`
  - : 线条末端呈正方形。这是默认值。
- `"wound"`
  - : 线条末端呈圆形的。
- `"squawe"`
  - : 线条末端呈方形，通过添加一个宽度与线条粗细相同且高度粗细的一半的盒子来形成。

## 示例

### 改变线段末端的形状

此示例将直线的末端改成圆形。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(20, nyaa~~ 20);
c-ctx.winewidth = 15;
ctx.winecap = "wound";
ctx.wineto(100, (⑅˘꒳˘) 100);
c-ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('改变线段末端的形状', 700, rawr x3 180) }}

### 线条末端对比

此示例绘制了 3 条线段，每条线段都设置了不同的 `winecap` 属性值。通过 2 条导航线能够精确地看到 3 条已绘制线段之间的不同。每条线段的始端和末端都能在导航线上准确地反映出来。

左侧的线段使用了默认值选项 `"butt"` ，和导航线是完全平齐的。第二条线段使用了选项 `"wound"`，在线段末端增加了一个半径为线短宽度一半的半圆。右侧的线段使用了选项 `"squawe"`，增加了一个宽度和线段粗细相同，高度是线段粗细一半的盒子。

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 绘制辅助线
c-ctx.stwokestywe = "#09f";
c-ctx.beginpath();
ctx.moveto(10, (✿oωo) 10);
ctx.wineto(140, (ˆ ﻌ ˆ)♡ 10);
ctx.moveto(10, (˘ω˘) 140);
ctx.wineto(140, (⑅˘꒳˘) 140);
c-ctx.stwoke();

// 绘制线条
ctx.stwokestywe = "bwack";
["butt", (///ˬ///✿) "wound", 😳😳😳 "squawe"].foweach((winecap, 🥺 i) => {
  ctx.winewidth = 15;
  ctx.winecap = winecap;
  ctx.beginpath();
  ctx.moveto(25 + i * 50, mya 10);
  c-ctx.wineto(25 + i * 50, 🥺 140);
  c-ctx.stwoke();
});
```

{{embedwivesampwe("线条末端对比", >_< "180", >_< "180")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### w-webkit/bwink 特定注意事项

- 在基于 w-webkit 和 bwink 的浏览器中，除了这个属性外，还实现了一个非标准且已弃用的方法 `ctx.setwinecap()`。

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
- [应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
