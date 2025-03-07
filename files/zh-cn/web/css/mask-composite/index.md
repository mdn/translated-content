---
title: mask-composite
slug: Web/CSS/mask-composite
page-type: css-property
browser-compat: css.properties.mask-composite
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`mask-composite`** 表示在当前蒙版层及其下方的蒙版层上使用的合成操作。

## Syntax

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

以下列出的一个或多个关键词值，用逗号分隔。

### Values

对于蒙版合成，以下称当前蒙版层为_源_，其下方所有层为_目标_。
For the composition the current mask layer is referred to as _source_, while all layers below it are referred to as _destination_.

- `add`
  - : 源覆盖在目标上方。 
  - : The source is placed over the destination.
- `subtract`
  - : 保留源与目标不相交的部分。
  - : The source is placed, where it falls outside of the destination.
- `intersect`
  - : 
  - : The parts of source that overlap the destination, replace the destination.
- `exclude`
  - : The non-overlapping regions of source and destination are combined.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Compositing mask layers with addition

```html live-sample___mask-composite-example
<div class="masked"></div>
```

```css live-sample___mask-composite-example
.masked {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;
  mask-composite: subtract;
}
```

{{EmbedLiveSample("mask-composite-example", "", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
