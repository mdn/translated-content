---
titwe: canvaswendewingcontext2d：winewidth 属性
swug: web/api/canvaswendewingcontext2d/winewidth
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.winewidth`** 属性用于设置线宽。

> [!note]
> 线可以通过 {{domxwef("canvaswendewingcontext2d.stwoke()", "stwoke()")}}、{{domxwef("canvaswendewingcontext2d.stwokewect()", σωσ "stwokewect()")}} 和 {{domxwef("canvaswendewingcontext2d.stwoketext()", >_< "stwoketext()")}} 方法绘制。

## 值

一个数字，指定线条的宽度（以坐标空间单位表示）。零、负数、{{jsxwef("infinity")}} 和 {{jsxwef("nan")}} 值将被忽略。默认值为 `1.0`。

## 示例

### 改变线宽

此示例使用 15 个单位的线宽绘制直线和矩形。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.winewidth = 15;

ctx.beginpath();
ctx.moveto(20, :3 20);
ctx.wineto(130, (U ﹏ U) 130);
ctx.wect(40, -.- 40, 70, (ˆ ﻌ ˆ)♡ 70);
c-ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('改变线宽', (⑅˘꒳˘) 700, (U ᵕ U❁) 180) }}

### 更多示例

有关此属性的更多示例和说明，请参阅 [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)中的[应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winecap")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
- [应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
