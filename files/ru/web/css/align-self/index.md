---
title: align-self
slug: Web/CSS/align-self
---

{{CSSRef}}

## Описание

Свойство [CSS](/ru/docs/CSS) **`align-self`** выравнивает flex-элементы по текущей flex-линии, переопределяя значение свойства [`align-items`](/en/CSS/align-items). Если у какого-либо flex-элемента **margin** в поперечной оси выставлен в `auto`, то `align-self` игнорируется.

{{cssinfo}}

Данное свойство не применяется к block-level boxes и к ячейкам таблицы

Подробнее и больше информации читайте в [Using CSS flexible boxes](/en/CSS/Using_CSS_flexible_boxes).

## Синтаксис

```css
/* Keyword values */
align-self: auto;
align-self: normal;

/* Positional alignment */
/* align-self does not take left and right values */
align-self: center; /* Put the item around the center */
align-self: start; /* Put the item at the start */
align-self: end; /* Put the item at the end */
align-self: self-start; /* Align the item flush at the start */
align-self: self-end; /* Align the item flush at the end */
align-self: flex-start; /* Put the flex item at the start */
align-self: flex-end; /* Put the flex item at the end */

/* Baseline alignment */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Stretch 'auto'-sized items to fit the container */

/* Overflow alignment */
align-self: safe center;
align-self: unsafe center;

/* Global values */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### Значения

- `auto`
  - : Computes to the parent's {{cssxref("align-items")}} value.
- `normal`
  - : The effect of this keyword is dependent of the layout mode we are in:
    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.
    - In static position of absolutely-positioned layouts, the keyword behaves as `stretch`.
    - For flex items, the keyword behaves as `stretch`.
    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.
    - The property doesn't apply to block-level boxes, and to table cells.
- `self-start`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.
- `self-end`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.
- `flex-start`
  - : The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.
- `flex-end`
  - : The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.
- `center`
  - : The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `stretch`
  - : If the combined size of the items along the cross axis is less than the size of the alignment container and the item is `auto`-sized, its size is increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size of all `auto`-sized items exactly fills the alignment container along the cross axis.
- `safe`
  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications("css.properties.align-self.grid_context")}}

## Совместимость с браузерами

### Support in Flex layout

{{Compat}}

### Support in Grid layout

{{Compat}}

{{CSSRef}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/ru/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/ru/docs/Web/CSS/CSS_Box_Alignment)
- The {{cssxref("align-items")}} property
