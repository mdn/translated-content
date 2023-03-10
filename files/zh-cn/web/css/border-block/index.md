---
title: border-block
slug: Web/CSS/border-block
---

{{CSSRef}}

该[CSS](/zh-CN/docs/Web/CSS)属性是一个[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)在样式表一个单一的地方设置单独的逻辑块边界属性值。**`border-block`**

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;
```

`border-block` can be used to set the values for one or more of {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}}, and {{cssxref("border-block-color")}} setting both the start and end in the block dimension at once. The physical borders to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}} and {{cssxref("border-bottom")}} or {{cssxref("border-right")}}, and {{cssxref("border-left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

The borders in the other dimension can be set with {{cssxref("border-inline")}}, which sets {{cssxref("border-inline-start")}}, and {{cssxref("border-inline-end")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-block-color`](/zh-CN/docs/Web/CSS/border-block-color)
- [`border-block-style`](/zh-CN/docs/Web/CSS/border-block-style)
- [`border-block-width`](/zh-CN/docs/Web/CSS/border-block-width)

## Syntax

### Values

The `border-block` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - : The width of the border. See {{cssxref("border-width")}}.
- `<'border-style'>`
  - : The line style of the border. See {{cssxref("border-style")}}.
- `<'color'>`
  - : The color of the border. See {{cssxref("color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border with vertical text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
}
```

#### Results

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 也可以看看

- 此属性映射到以下物理边界属性之一：{{cssxref("border-top")}}，{{cssxref("border-right")}}，{{cssxref("border-bottom")}}，或{{cssxref("border-left")}}。
- {{cssxref("writing-mode")}}，{{cssxref("direction")}}，{{cssxref("text-orientation")}}}
