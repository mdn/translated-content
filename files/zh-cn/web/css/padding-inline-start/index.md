---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
---

{{CSSRef}}{{SeeCompatTable}}

## 概要

The** `padding-inline-start`** [CSS](/zh-CN/docs/Web/CSS) property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, or {{cssxref("padding-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

It relates to {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, and {{cssxref("padding-inline-end")}}, which define the other paddings of the element.

{{cssinfo}}

## 句法

```css
/* <length> values */
padding-inline-start: 10px;   /* An absolute length */
padding-inline-start: 1em;    /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%;     /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: unset;
```

### Values

The `padding-inline-start` property takes the same values as the {{cssxref("padding-left")}} property.

### Formal syntax

{{csssyntax}}

## 范例

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
  writing-mode: vertical-lr;
  padding-inline-start: 20px;
  background-color: #C8C800;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 也可以看看

- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
