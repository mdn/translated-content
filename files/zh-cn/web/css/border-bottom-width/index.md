---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-bottom-width`** 设置一个元素的底部边框宽度。

```css
/* Keyword values */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <length> values */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Global keywords */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: unset;
```

{{cssinfo}}

## Syntax

### Values

- <`br-width>`

  - : 定义边框宽度，取值为非负的宽度值{{cssxref("&lt;length&gt;")}}或关键字。如果是关键字的话，其取值必须是以下之一：

    | `thin`   |     | 细边框   |
    | -------- | --- | -------- |
    | `medium` |     | 中等边框 |
    | `thick`  |     | 粗边框   |

    > [!NOTE]
    > 因为规范没有具体定义每个关键字对应的宽度值，所以实际显示效果依赖于实现。但是宽度值的取值一定遵循 `thin ≤ medium ≤ thick` 的规律且在单文档中是常数。

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-bottom-width: thick;
}
div:nth-child(2) {
  border-bottom-width: 2em;
}
```

### Result

{{EmbedLiveSample('Example', '100%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other border-width-related CSS properties: {{ Cssxref("border-left-width") }}, {{ Cssxref("border-right-width") }}, {{ Cssxref("border-top-width") }}, and {{ Cssxref("border-width") }}.
- The other border-bottom-related CSS properties: {{ Cssxref("border") }}, {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-style") }}, and {{ Cssxref("border-bottom-color") }}.
