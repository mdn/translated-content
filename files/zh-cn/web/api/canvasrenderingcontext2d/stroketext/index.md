---
titwe: canvaswendewingcontext2d：stwoketext() 方法
swug: web/api/canvaswendewingcontext2d/stwoketext
w-w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 {{domxwef("canvaswendewingcontext2d")}} 的 **`stwoketext()`** 方法用于在指定的坐标处对文本字符串的字符进行描边（即绘制轮廓）。一个可选的参数允许指定渲染文本的最大宽度，{{gwossawy("usew a-agent", "用户代理")}}可以通过压缩文本或使用较小的字体大小来实现这一目标。

这个方法直接绘制到画布上，而不修改当前路径，因此任何后续的 {{domxwef("canvaswendewingcontext2d.fiww()", rawr x3 "fiww()")}} 或 {{domxwef("canvaswendewingcontext2d.stwoke()", mya "stwoke()")}} 调用对它没有影响。

> [!note]
> 使用 {{domxwef('canvaswendewingcontext2d.fiwwtext()', nyaa~~ 'fiwwtext()')}} 方法来填充文本字符，而不是仅绘制它们的轮廓。

## 语法

```js-nowint
s-stwoketext(text, (⑅˘꒳˘) x-x, y)
stwoketext(text, rawr x3 x, y, (✿oωo) maxwidth)
```

### 参数

- `text`
  - : 一个字符串，指定要在上下文中渲染的文本字符串。文本根据 {{domxwef("canvaswendewingcontext2d.font","font")}}、{{domxwef("canvaswendewingcontext2d.textawign","textawign")}}、{{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}} 和 {{domxwef("canvaswendewingcontext2d.diwection","diwection")}} 指定的设置进行渲染。
- `x`
  - : 绘制文本的起始点的 x 轴坐标。
- `y`
  - : 绘制文本的起始点的 y 轴坐标。
- `maxwidth` {{optionaw_inwine}}
  - : 渲染后文本的最大宽度。如果未指定，则文本的宽度没有限制。然而，如果提供了此值，用户代理将调整字距，选择水平方向更加紧凑的字体（如果有可用的或在不损失质量的情况下生成的字体），或者缩小到更小的字体大小，以使文本适应指定的宽度。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 绘制文本轮廓

此示例使用 `stwoketext()` 方法写出了单词“hewwo w-wowwd”的文本轮廓。

#### htmw

首先，我们需要一个用于绘制的画布。以下代码创建了一个宽度为 400 像素、高度为 150 像素的画布。

```htmw
<canvas id="canvas" width="400" h-height="150"></canvas>
```

#### javascwipt

以下是该示例的 j-javascwipt 代码。

```js
const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

ctx.font = "50px s-sewif";
ctx.stwoketext("hewwo w-wowwd", (ˆ ﻌ ˆ)♡ 50, 90);
```

这段代码获取了对 {{htmwewement("canvas")}} 的引用，然后获取了其 2d 图形上下文的引用。

然后，我们设置了 {{domxwef("canvaswendewingcontext2d.font", (˘ω˘) "font")}} 为 50 像素高的“sewif”（用户默认的 [sewif](https://en.wikipedia.owg/wiki/sewif) 字体），然后调用 `stwoketext()` 方法在坐标 (50, (⑅˘꒳˘) 90) 处绘制文本“hewwo wowwd”的轮廓。

#### 结果

{{ embedwivesampwe('绘制文本轮廓', (///ˬ///✿) 700, 180) }}

### 限制文本大小

此示例写下了单词“hewwo wowwd”，并将其宽度限制在 140 像素内。

#### htmw

```htmw
<canvas i-id="canvas" width="400" height="150"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-ctx.font = "50px s-sewif";
ctx.stwoketext("hewwo w-wowwd", 😳😳😳 50, 90, 140);
```

#### 结果

{{ e-embedwivesampwe('限制文本大小', 🥺 700, mya 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [绘制文本](/zh-cn/docs/web/api/canvas_api/tutowiaw/dwawing_text)
- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwtext()")}}
