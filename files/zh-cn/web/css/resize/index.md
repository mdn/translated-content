---
title: resize
slug: Web/CSS/resize
---

{{CSSRef}}

## 概述

**`resize`** CSS 属性允许你控制一个元素的可调整大小性。

{{cssinfo}}

## 语法

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Global values */
resize: inherit;
resize: initial;
resize: unset;
```

### 取值

- `none`
  - : 元素不能被用户缩放。
- `both`
  - : 允许用户在水平和垂直方向上调整元素的大小。
- `horizontal`
  - : 允许用户在水平方向上调整元素的大小。
- `vertical`
  - : 允许用户在垂直方向上调整元素的大小。
- `block` {{experimental_inline}}
  - : Depending on the {{cssxref("writing-mode")}} and {{cssxref("direction")}} value, the element displays a mechanism for allowing the user to resize the element either horizontally or vertically in block direction.
- `inline` {{experimental_inline}}
  - : Depending on the {{cssxref("writing-mode")}} and {{cssxref("direction")}} value, the element displays a mechanism for allowing the user to resize the element either horizontally or vertically in inline direction.

> **备注：** 如果一个 block 元素的 {{cssxref("overflow")}} 属性被设置成了`visible`，那么`resize`属性对该元素无效。

### 标准语法

{{csssyntax}}

## 例子

### Disabling resizability of textareas

#### CSS

{{HTMLElement("textarea")}} 元素在 Gecko 2.0（Firefox 4）中默认是可以进行缩放的。你可以通过下面的 CSS 代码来重写这种行为：

```css
textarea.example {
  resize: none; /* disables resizability */
}
```

#### HTML

```html
<textarea class="example">Type some text here.</textarea>
```

#### Result

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

### Using resize with arbitrary elements

You can use the resize property to make any element resizable. In the example below, a resizable {{HTMLElement("div")}} box contains a resizable paragraph ({{HTMLElement("p")}} element):

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable, because the CSS resize property is set to 'both' on this
    element.
  </p>
</div>
```

#### Result

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
