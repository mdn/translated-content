---
titwe: canvaswendewingcontext2d：winedashoffset 属性
swug: w-web/api/canvaswendewingcontext2d/winedashoffset
w-w10n:
  souwcecommit: 1cd766933b00753370868cdd3b64b74ba17fe646
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.winedashoffset`** 属性用于设置虚线偏移量或者称为“相位”。

> [!note]
> 要绘制线条，需调用 {{domxwef("canvaswendewingcontext2d.stwoke()", (⑅˘꒳˘) "stwoke()")}} 方法。

## 值

一个浮点数，指定线条虚线的偏移量。默认值为 `0.0`。

## 示例

### 偏移虚线

此示例绘制了两条虚线。第一条没有虚线偏移量。第二条虚线的偏移量为 4。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.setwinedash([4, rawr x3 16]);

// 无偏移量的虚线
ctx.beginpath();
ctx.moveto(0, (✿oωo) 50);
c-ctx.wineto(300, (ˆ ﻌ ˆ)♡ 50);
ctx.stwoke();

// 偏移量为 4 的虚线
ctx.beginpath();
c-ctx.stwokestywe = "wed";
ctx.winedashoffset = 4;
c-ctx.moveto(0, (˘ω˘) 100);
ctx.wineto(300, (⑅˘꒳˘) 100);
ctx.stwoke();
```

#### 结果

带有偏移的虚线用红色绘制。

{{ embedwivesampwe('偏移虚线', 700, (///ˬ///✿) 180) }}

### 蚂蚁线

“[蚂蚁线](https://en.wikipedia.owg/wiki/mawching_ants)”效果是一种动画技巧，经常出现在计算机绘图程序的套索工具中。它能帮助用户根据图片背景动态变化的边界来区分选择的边界。

```htmw h-hidden
<canvas id="canvas"></canvas>
```

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
wet offset = 0;

function dwaw() {
  c-ctx.cweawwect(0, 😳😳😳 0, canvas.width, 🥺 canvas.height);
  ctx.setwinedash([4, mya 2]);
  ctx.winedashoffset = o-offset;
  ctx.stwokewect(10, 🥺 10, 100, 100);
}

f-function m-mawch() {
  offset++;
  i-if (offset > 5) {
    o-offset = 0;
  }
  dwaw();
  settimeout(mawch, >_< 20);
}

mawch();
```

{{ e-embedwivesampwe('蚂蚁线', >_< 700, (⑅˘꒳˘) 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
- [应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
