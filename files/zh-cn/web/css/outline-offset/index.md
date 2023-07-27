---
title: outline-offset
slug: Web/CSS/outline-offset
---

{{CSSRef}}

## 概要

**`outline-offset`** CSS 属性用于设置 {{ cssxref("outline") }} 与一个元素边缘或边框之间的间隙。

outline 是元素的轮廓，悬浮在元素边框之上。元素和其轮廓之间是透明的。也就是说，它们之间的颜色会继承父元素的背景色。

{{cssinfo}}

The space will be transparent (the parent will determine the background).

## Syntax

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
```

### Values

- `<length>`
  - : 元素和轮廓间的宽度。详见 {{cssxref("&lt;length&gt;")}} . 负值将轮廓绘制在元素之内。

### Formal syntax

{{csssyntax}}

## Examples

```css
p {
  outline: dashed thin;
  /* Move the outline 10px away from the border */
  outline-offset: 10px;
  border: 1px solid black;
}
```

Html

```html
<p>outline: offset 10px. Border is solid and outline is dashed</p>
```

上面的代码将产生以下效果：

{{ EmbedLiveSample('Examples', '', '', '') }}

另一个例子：

outline: multiple offsets;

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
