---
title: border-right-color
slug: Web/CSS/border-right-color
---

{{CSSRef}}

**`border-right-color`** CSS 属性用来设置元素右边的 {{cssxref("border")}}. 这个属性的值也可以通过简写的 CSS 属性 {{cssxref("border-color")}} 或{{cssxref("border-right")}}来设置。

{{EmbedInteractiveExample("pages/css/border-right-color.html")}}

## Syntax

```css
/* <color> values */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255, 0, 0);
border-right-color: hsla(100%, 50%, 25%, 0.75);
border-right-color: currentColor;
border-right-color: transparent;

/* Global values */
border-right-color: inherit;
border-right-color: initial;
border-right-color: unset;
```

The `border-right-color` property is specified as a single value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the right border.

### Formal syntax

{{csssyntax}}

## Examples

### A simple div with a border

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-right-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- The border-related CSS shorthand properties: {{cssxref("border")}}, {{cssxref("border-right")}}, and {{cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{cssxref("border-left-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-top-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-right-style")}} and {{cssxref("border-right-width")}}.
