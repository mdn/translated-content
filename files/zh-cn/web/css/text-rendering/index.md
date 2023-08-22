---
title: 文本渲染
slug: Web/CSS/text-rendering
---

{{CSSRef}}

## 概述

`text-rendering` CSS 属性定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度之间进行权衡。

> **备注：** 该属性是 SVG 的属性而不是标准的 CSS 属性。但是 Gecko（Firefox）和 Webkit（Chrome、Safari）内核的浏览器允许该属性在 Windows、Mac OS 和 Linux 操作系统中应用于 HTML 和 XML 内容。

一个视觉上很明显的效果是，`optimizeLegibility` 属性值会在某些字体（比如，微软的 _Calibri_、_Candara_、_Constantia_ 和 _Corbel_，或者 _DejaVu_ 系列字体）小于 20px 时把某些相邻字符连接起来（比如 ff、fi、fl 等）。

{{cssinfo}}

## 语法

```css
/* Keyword values */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Global values */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### 值

- `auto`
  - : 浏览器依照某些根据去推测在绘制文本时，何时该优化速度，易读性或者几何精度。对于该值在不同浏览器中解释的差异，请看兼容性表。
- `optimizeSpeed`
  - : 浏览器在绘制文本时将着重考虑渲染速度，而不是易读性和几何精度。它会使字间距和连字无效。
- `optimizeLegibility`
  - : 浏览器在绘制文本时将着重考虑易读性，而不是渲染速度和几何精度。它会使字间距和连字有效。**该属性值在移动设备上会造成比较明显的性能问题**，详细查看 [text-rendering](https://css-tricks.com/almanac/properties/t/text-rendering/)。
- `geometricPrecision`

  - : 浏览器在绘制文本时将着重考虑几何精度，而不是渲染速度和易读性。字体的某些方面—比如字间距—不再线性缩放，所以该值可以使使用某些字体的文本看起来不错。

    对于 SVG，当文本缩放时，浏览器会计算文本最终大小（取决于特定的字体大小和相应的缩放比例）并且从操作平台的字体系统中请求一个符合该计算值的字体大小。但如果你请求一个字体大小，比如 9 并且 140% 的缩放，这个最终的字体大小为 12.6，字体系统中明显不存在，所以浏览器会向下取整到 12。这导致文本缩放是阶梯式的。

    但这个 geometricPrecision 特性——当被渲染引擎完全支持时——会使文本缩放是流畅的。对于大比例的缩放，你可能看到并不太漂亮的文本渲染，但这个字体大小是你期望的，而不是被 Windows 或 Linux 系统四舍五入或向下取整的字体大小。

    **提示**: WebKit 准确地的实现了这个值，但是 Gecko 把这个值按照 `optimizeLegibility` 处理。

## 示例

```css
/* make sure all fonts in the HTML document display in all its glory,
   but avoid inadequate ligatures in class foo elements */

body {
  text-rendering: optimizeLegibility;
}
.foo {
  text-rendering: optimizeSpeed;
}
```

#### Live Example

> **备注：** 没有在 Chrome 中看出例子中的区别来，可以移步看看这篇文章 [text-rendering](https://css-tricks.com/almanac/properties/t/text-rendering/)。

| CSS code                                                                 | Kerning | Ligatures    |
| ------------------------------------------------------------------------ | ------- | ------------ |
| font: 19.9px 'DejaVu Serif',Constantia;                                  | LYoWAT  | ff fi fl ffl |
| font: 20px 'DejaVu Serif',Constantia;                                    | LYoWAT  | ff fi fl ffl |
| font: 3em 'DejaVu Serif',Constantia; text-rendering: optimizeSpeed;      | LYoWAT  | ff fi fl ffl |
| font: 3em 'Dejavu Serif',Constantia; text-rendering: optimizeLegibility; | LYoWAT  | ff fi fl ffl |

### Gecko 注释

auto 选项的 20px 字体大小的阈值可以被 `browser.display.auto_quality_min_font_size` 值改变。

`optimizeSpeed` 选项在 Gecko 2.0 上已经没有效果了，因为标准的文字渲染代码已经非常快，而且目前还没有更快的渲染方法。详见 [Firefox bug 595688](https://bugzil.la/595688)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
