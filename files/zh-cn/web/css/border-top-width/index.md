---
title: border-top-width
slug: Web/CSS/border-top-width
---

{{CSSRef}}

css 属性 **`border-top-width`** 是用于设置盒模型的上边框的宽度

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## Syntax

```css
/* Keyword values */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> values */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Global keywords */
border-top-width: inherit;
border-top-width: initial;
border-top-width: unset;
```

### Values

- `<br-width>`

  - : 上边框的宽度属性的有效值要么是一个具体的非负数，要么是一个关键字。如果是关键字，必须是一下几种：

    | `thin`   |     | A thin border   |
    | -------- | --- | --------------- |
    | `medium` |     | A medium border |
    | `thick`  |     | A thick border  |

    > [!NOTE]
    > Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern `thin ≤ medium ≤ thick`, and the values are constant within a single document.

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
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### Result

{{EmbedLiveSample('Example', '100%')}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- The other border-width-related CSS properties: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, and {{Cssxref("border-width")}}.
- The other border-top-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-top-color")}}.
