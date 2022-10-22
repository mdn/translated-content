---
title: border
slug: Web/CSS/border
---

{{CSSRef("CSS Borders")}}

**`border`** [shorthand](/zh-TW/docs/Web/CSS/Shorthand_properties) [CSS](/zh-TW/docs/CSS) 屬性可用來設定元素的邊框。它可以設定以下的值 {{Cssxref("border-width")}}、{{Cssxref("border-style")}} 以及 {{Cssxref("border-color")}}。

{{EmbedInteractiveExample("pages/css/border.html")}}

As with all shorthand properties, any omitted sub-values will be set to their [initial value](/zh-TW/docs/Web/CSS/initial_value). Importantly, `border` cannot be used to specify a custom value for {{cssxref("border-image")}}, but instead sets it to its initial value, i.e., `none`.

The `border` shorthand is especially useful when you want all four borders to be the same. To make them different from each other, however, you can use the longhand {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, and {{Cssxref("border-color")}} properties, which accept different values for each side. Alternatively, you can target one border at a time with the physical (e.g., {{Cssxref("border-top")}} ) and logical (e.g., {{Cssxref("border-block-start")}}) border properties.

### Borders vs. outlines

Borders and [outlines](/zh-TW/docs/Web/CSS/outline) are very similar. However, outlines differ from borders in the following ways:

- Outlines never take up space, as they are drawn outside of an element's content.
- According to the spec, outlines don't have to be rectangular, although they usually are.

## Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: unset;
```

The `border` property may be specified using one, two, or three of the values listed below. The order of the values does not matter.

> **備註：** The border will be invisible if its style is not defined. This is because the style defaults to `none`.

### Values

- `<line-width>`
  - : Sets the thickness of the border. Defaults to `medium` if absent. See {{Cssxref("border-width")}}.
- `<line-style>`
  - : Sets the style of the border. Defaults to `none` if absent. See {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Sets the color of the border. Defaults to `currentcolor` if absent. See {{Cssxref("border-color")}}.

### Formal syntax

```plain
{{csssyntax}}
```

## Example

### HTML

```html
<div>I have a border, an outline, AND a box shadow! Amazing, isn't it?</div>
```

### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}
