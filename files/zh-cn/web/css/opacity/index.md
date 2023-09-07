---
title: opacity
slug: Web/CSS/opacity
---

{{CSSRef}}

## 概述

opacity 属性指定了一个元素的**不透明度**。换言之，opacity 属性指定了一个元素后面的背景的被覆盖程度。

当 opacity 属性的值应用于某个元素上时，是把这个元素（包括它的内容）当成一个整体看待，即使这个值没有被子元素继承。因此，一个元素和它包含的子元素都会具有和元素背景相同的透明度，哪怕这个元素和它的子元素有不同的 opacity 属性值。

使用 opacity 属性，当属性值不为 1 时，会把元素放置在一个新的[层叠上下文](/zh-CN/docs/Web/Guide/CSS/Understanding_z-index/Stacking_context)中。

{{cssinfo}}

## 语法

```css
/* 完全不透明 */
opacity: 1;
opacity: 1;

/* 半透明 */
opacity: 0.6;

/* 完全透明 */
opacity: 0;
opacity: 0;

opacity: inherit;
```

### 属性值

- `<number>`

  - : {{cssxref("&lt;number&gt;")}} 是一个 0.0 到 1.0 范围内的数字值，这个数值既包含也代表通道的透明度，也就是 alpha 通道的值。任何一个溢出这个取值区间的值，尽管有效，但会被解析为在取值范围内最靠近它的值。

    | 值                                                        | 释义                                     |
    | --------------------------------------------------------- | ---------------------------------------- |
    | `0`                                                       | 元素完全透明 (即元素不可见).             |
    | 任何一个位于 0.0-1.0 之间的 {{cssxref("&lt;number&gt;")}} | 元素半透明 (即元素后面的背景可见).       |
    | `1`                                                       | 元素完全不透明 (即元素后面的背景不可见). |

### 形式语法

{{csssyntax("opacity")}}

## 示例

### 基本示例

```css
div {
  background-color: yellow;
}
.light {
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

{{EmbedLiveSample('基本示例', '640', '64')}}

### :hover 时 opacity 的不同

```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 and lower */
  zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

```html
<img
  src="//developer.mozilla.org/media/img/mdn-logo.png"
  alt="MDN logo"
  width="128"
  height="146"
  class="opacity" />
```

{{EmbedLiveSample(':hover 时 opacity 的不同', '150', '175')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [MSDN Microsoft's filter:alpha(opacity=xx)](http://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
