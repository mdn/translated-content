---
title: 卡片
slug: Web/CSS/Layout_cookbook/Card
original_slug: Web/CSS/Layout_cookbook/卡片
---

{{CSSRef}}

这个模式是带有页脚选项的卡片组件列表。

![Three card components in a row](cards.png)

## 要求

卡片组件可以包含各种内容，包括一个头部 (heading)，图片，内容和一个页脚 (footer)

每个卡片组件应有相同的高度，并且页脚应该在卡片组件的底部

当添加到卡片组中时，卡片上下应对齐。

## 使用指南

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> **备注：** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/card--download.html)

## 所选方案

卡片布局使用 [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)([CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)) despite being a single dimensional layout, as it enables the use of content sizing for the grid tracks. When setting up the single column grid I use the following:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

The heading track is set to {{cssxref("max-content")}}, which prevents it from stretching. I have decided that I want my image to live within a track that is 200 pixels tall. I then set the next track — which is where the content lives — to `1fr`. This means it will take up any additional space.

If the track does have a footer it will be auto-sized, as rows created in the implicit grid are auto-sized by default. Therefore this will fit the content added to it.

> **备注：** The various elements in separate cards do not align with each other, as each card is an independent grid. The proposed subgrid feature of Grid Level 2 would give a solution to this issue.

## Useful fallbacks or alternative methods

[Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout) could be used to lay out the card, in which case you should make the content area grow, and other items not grow. This would be a reasonable way to lay out the card, although I have a slight preference for being able to control the tracks from the container rather than needing to add rules to the items.

For the overall layout you could use flexbox, however this will result in cards stretching over the final flex row where there are fewer than can fit in the rows above. Alternatively you could use [CSS multi-col](/zh-CN/docs/Web/CSS/CSS_Columns) — this would cause the cards to lay out down the columns, which may or may not be a problem.

See the [columns recipe](/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts) for demonstrations of each of these layout methods.

## Accessibility concerns

Depending on the content of your card there may be things you could, or should do to enhance accessibility. See [Inclusive Components: Card](https://inclusive-components.design/cards/) by Heydon Pickering, for a very detailed explanation of these issues.

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("grid-template-columns")}}, {{Cssxref("grid-template-rows")}}, {{Cssxref("grid-gap")}}
- [Inclusive Components: Card](https://inclusive-components.design/cards/)
