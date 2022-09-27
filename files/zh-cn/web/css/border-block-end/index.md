---
title: border-block-end
slug: Web/CSS/border-block-end
---

{{CSSRef}}{{SeeCompatTable}}

**`border-block-end`** 属性是一个简写属性，用于在样式表中的单个位置设置各个逻辑块结尾边界属性值。

{{EmbedInteractiveExample("pages/css/border-block-end.html")}}

## Syntax

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;
```

`border-block-end` can be used to set the values for one or more of {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, and {{cssxref("border-block-end-color")}}. The physical border to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

Related properties are {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}}, and {{cssxref("border-inline-end")}}, which define the other borders of the element.

{{cssinfo}}

### Values

The `border-block-end` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - : The width of the border. See {{cssxref("border-width")}}.
- `<'border-style'>`
  - : The line style of the border. See {{cssxref("border-style")}}.
- `<'color'>`
  - : The color of the border. See {{cssxref("color")}}.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS Content

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-block-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
