---
title: page-break-after
slug: Web/CSS/page-break-after
---

{{CSSRef}}

**`page-break-after`** CSS 属性调整当前元素之后的分页符。

此属性适用于生成一个盒子的块元素。它不适用于不会生成一个盒子的空 [`<div>`](/zh-CN/docs/Web/HTML/Element/div)。

```plain
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;
```

> **备注：** 这个属性正在被更通用的 {{ cssxref("break-after")}} 取代。这个新的属性也处理列和区域中断，并在语法上兼容 `page-break-after`。
>
> 在使用 `page-break-after` 之前，请检查是否可以使用 `break-after` 代替。在将来， `page-break-after` 将只是它的一些值的别名。

## 语法

```css
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;
```

### Values

- `auto`
  - : 初始值。自动分页符（既不强制也不禁止）。
- `always`
  - : 始终在元素后强制分页。
- `avoid`
  - : 避免在元素后出现分页符。
- `left`
  - : 在元素之后足够的分页符，一直到一张空白的左页为止。
- `right`
  - : 在元素之后足够的分页符，一直到一张空白的右页为止。
- `recto` {{experimental_inline}}
  - : If pages progress left-to-right, then this acts like `right`. If pages progress right-to-left, then this acts like `left`.
- `verso` {{experimental_inline}}
  - : If pages progress left-to-right, then this acts like `left`. If pages progress right-to-left, then this acts like `right`.

### Formal syntax

{{csssyntax}}

## Examples

```css
/* move to a new page after footnotes */
div.footnotes {
  page-break-after: always;
}
```

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`page-break-before`](/zh-CN/CSS/page-break-before), [`page-break-inside`](/zh-CN/CSS/page-break-inside)
- [`orphans`](/zh-CN/CSS/orphans), [`widows`](/zh-CN/CSS/widows)
