---
title: border-left-color
slug: Web/CSS/border-left-color
---

{{CSSRef}}

The **`border-left-color`** CSS property sets the color of an element's left [border](/pt-BR/docs/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-left")}}.

{{EmbedInteractiveExample("pages/css/border-left-color.html")}}

## Syntax

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255, 0, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: currentcolor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: unset;
```

The `border-left-color` property is specified as a single value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the left border.

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
  border-left-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Specifications

| Specification                                                                       | Status                        | Comment                                                                                                                                                    |
| ----------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#propdef-border-left-color', 'border-left-color')}} | {{Spec2('CSS3 Backgrounds')}} | No significant changes, though the `transparent` keyword, now included in {{cssxref("&lt;color&gt;")}} which has been extended, has been formally removed. |
| {{SpecName('CSS2.1', 'box.html#propdef-border-left-color', 'border-left-color')}}   | {{Spec2('CSS2.1')}}           | Initial definition                                                                                                                                         |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.border-left-color")}}

## See also

- The border-related CSS shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, and {{Cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, and {{Cssxref("border-top-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-left-style")}} and {{cssxref("border-left-width")}}.
