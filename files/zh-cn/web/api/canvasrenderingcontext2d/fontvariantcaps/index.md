---
title: CanvasRenderingContext2D：fontVariantCaps 属性
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

Canvas API 的 `CanvasRenderingContext2D.fontVariantCaps` 属性用于指定文本的替代大写形式。

该属性对应于 CSS 中的 [`font-variant-caps`](/zh-CN/docs/Web/CSS/font-variant-caps) 属性。

## 值

字体的替代大写形式值，可以是以下之一：

- `normal`（默认）
  - : 取消使用替代字形。
- `small-caps`
  - : 启用小型大写字母的显示（OpenType 功能：`smcp`）。小型大写字母通常使用大写字母的形式，但大小与小写字母相同。
- `all-small-caps`
  - : 同时为大写和小写字母启用小型大写字母的显示（OpenType 功能：`c2sc`、`smcp`）。
- `petite-caps`
  - : 启用小型大写字母的显示（OpenType 功能：`pcap`）。
- `all-petite-caps`
  - : 同时为大写和小写字母启用小型大写字母的显示（OpenType 功能：`c2pc`、`pcap`）。
- `unicase`
  - : 启用大写字母为小型大写字母与正常小写字母的混合显示（OpenType 功能：`unic`）。
- `titling-caps`
  - : 启用标题大写字母的显示（OpenType 功能：`titl`）。大写字母字形通常设计用于与小写字母配合使用。在所有大写标题序列中使用时，它们可能显得过于强烈。标题大写字母专为这种情况设计。

该属性可以用于获取或设置文本的大写形式。

请注意，某些值可能会引起辅助功能方面的关注，具体内容请参阅相应的 [`font-variant-caps`](/zh-CN/docs/Web/CSS/font-variant-caps#accessibility_concerns) 主题。

## 示例

以下示例演示了如何使用 `fontVariantCaps` 属性在 Canvas 中显示文本“Hello World”，并展示了每种支持的 `fontVariantCaps` 值的效果。每种情况下，都会显示相应的大写形式值。

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// 默认值（normal）
ctx.fillText(`Hello world (默认：${ctx.fontVariantCaps})`, 5, 20);

// 大写形式：small-caps
ctx.fontVariantCaps = "small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 50);

// 大写形式：all-small-caps
ctx.fontVariantCaps = "all-small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 80);

// 大写形式：petite-caps
ctx.fontVariantCaps = "petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 110);

// 大写形式：all-petite-caps
ctx.fontVariantCaps = "all-petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 140);

// 大写形式：unicase
ctx.fontVariantCaps = "unicase";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 170);

// 大写形式：titling-caps
ctx.fontVariantCaps = "titling-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 200);
```

### 结果

{{ EmbedLiveSample('示例', 700, 230) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
