---
title: max-height
slug: Web/CSS/max-height
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS)属性 **`max-height`** 设置元素的最大高度。它防止{{cssxref("height")}}属性的使用值（[used value](/zh-CN/docs/Web/CSS/used_value)）大于 `max-height` 的指定值。

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` 会覆盖{{cssxref("height")}}, 而{{cssxref("min-height")}} 会覆盖 `max-height`.

## Syntax

```css
/* <length> value */
max-height: 3.5em;

/* <percentage> value */
max-height: 75%;

/* Keyword values */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content(20em);

/* Global values */
max-height: inherit;
max-height: initial;
max-height: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the `max-height` as an absolute value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the `max-height` as a percentage of the containing block's height.
- `auto`
  - : The browser will calculate and select a `max-height` for the specified element.
- `none`
  - : No limit on the size of the box.
- `max-content`
  - : The intrinsic preferred `max-height`.
- `min-content`
  - : The intrinsic minimum `max-height`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.

### Formal syntax

{{csssyntax}}

## Examples

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## Accessibility concerns

Ensure that elements set with a `max-height` are not truncated and/or do not obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- [The box model](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{Cssxref("height")}}, {{Cssxref("min-height")}}
