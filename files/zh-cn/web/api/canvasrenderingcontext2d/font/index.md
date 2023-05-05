---
title: CanvasRenderingContext2D.font
slug: Web/API/CanvasRenderingContext2D/font
---

{{APIRef}}

**`CanvasRenderingContext2D.font`** 是 Canvas 2D API 描述绘制文字时，当前字体样式的属性。使用和 [CSS font](/zh-CN/docs/Web/CSS/font) 规范相同的字符串值。

## 语法

```
ctx.font = value;
```

### 选项

- `value`
  - : 符合 CSS {{cssxref("font")}} 语法的{{domxref("DOMString")}} 字符串。默认字体是 10px sans-serif。

## 示例

### 使用自定义字体

这个例子使用 `font` 属性设置了不同的字体大小和字体种类。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### 结果

{{ EmbedLiveSample('使用自定义字体', 700, 180) }}

### 使用 CSS 字体加载 API 加载字体

借助{{domxref("FontFace")}} API 的帮助，您可以在画布中使用字体之前显式加载字体。

```
let f = new FontFace('test', 'url(x)');

f.load().then(function() {
  // Ready to use the font in a canvas context
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko-specific 注解

- 基于 Gecko 的浏览器，例如 Firefox，实现了一个非标准的并且不赞成使用的属性 `ctx.mozTextStyle` 。不要使用此属性。
- 在 Gecko 中，当将系统字体设置为 canvas 2D 上下文的{{domxref("CanvasRenderingContext2D.font", "font")}}（例如菜单）的值时，获取用于无法返回期望字体的字体值（不返回任何内容）。这已在 Firefox 57（[Firefox bug 1374885](https://bugzil.la/1374885)）中发布的 Firefox 的[Quantum/Stylo](https://wiki.mozilla.org/Quantum/Stylo)并行 CSS 引擎中修复。

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
