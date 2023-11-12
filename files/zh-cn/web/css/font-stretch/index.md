---
title: font-stretch
slug: Web/CSS/font-stretch
---

{{CSSRef}}

**`font-stretch`** 属性为字体定义一个正常或经过伸缩变形的字体外观，这个属性并不会通过伸展/缩小而改变字体的几何外形，如{{cssxref("font-feature-settings")}}和{{cssxref("font-variant")}}属性，它仅仅意味着当有多种字体可供选择时，会为字体选择最适合的大小。

![The two 'e' belong to the same fonts. One is condensed, the other normal and can be selected by 'font-stretch'.](/files/4321/Character_in_same_font_but_one_condensed.png)

{{cssinfo}}

## Syntax

```css
/* Keyword values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: unset;
```

### Values

- `normal`
  - : 指定默认字体
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 小于默认字体，其中 ultra-condensed 是缩的最小的字体
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 大于默认字体的值

### Interpolation

Font stretch values are interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers; the result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value, that is the most expanded one.

### Formal syntax

{{csssyntax}}

## 示例

### HTML

```html
<div class="ultra stretch">This is text with the font extremely expanded</div>
<div class="stretch">This is text with the font stretched</div>
<div class="normal">This is text without font stretching</div>
<div class="condensed">This is text with the font condensed</div>
<div class="ultra condensed">
  This is text with the font extremely condensed
</div>
```

### CSS

```css
.ultra.stretch {
  font-stretch: ultra-expanded;
}
.stretch {
  font-stretch: expanded;
}
.normal {
  font-stretch: normal;
}
.condensed {
  font-stretch: condensed;
}
.ultra.condensed {
  font-stretch: ultra-condensed;
}
```

### Result

{{ EmbedLiveSample('示例', '500') }}

## Specifications

{{Specifications}}

The CSS property `font-stretch` was initially defined in CSS 2, but dropped in CSS 2.1 due to lack of implementation experience. It has been newly defined in CSS 3.

## Browser compatibility

{{Compat}}
