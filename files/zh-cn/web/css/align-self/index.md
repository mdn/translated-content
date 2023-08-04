---
title: align-self
slug: Web/CSS/align-self
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`align-self`** 会对齐当前 grid 或 flex 行中的元素，并覆盖已有的 [`align-items`](/zh-CN/docs/Web/CSS/align-items) 的值。In Grid, it aligns the item inside the [grid area](/zh-CN/docs/Glossary/Grid_Areas). 在 Flexbox 中，会按照 [cross axis](/zh-CN/docs/Glossary/Cross_Axis)（当前 flex 元素排列方向的垂直方向）进行排列。

{{EmbedInteractiveExample("pages/css/align-self.html")}}

align-self 属性不适用于块类型的盒模型和表格单元。如果任何 flexbox 元素的侧轴方向 margin 值设置为 auto，则会忽略 `align-self`。

## 语法

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

### 值

- `auto`
  - : 设置为父元素的 {{cssxref("align-items") }} 值。
- `normal`

  - : 效果取决于当前的布局模式：

    - 绝对定位布局中，normal 在绝对定位的替代元素上表现为`start`，在*所有其他*绝对定位元素上表现为`stretch`。
    - 在绝对定位的静态元素上表现为`stretch`。
    - flex 布局中表现为 stretch。
    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.
    - 在块级和表格单元中无效。

- `self-start`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.
- `self-end`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.
- `flex-start`
  - : flex 元素会对齐到 cross-axis 的首端。
- `flex-end`
  - : flex 元素会对齐到 cross-axis 的尾端。
- `center`
  - : flex 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 尺寸大于 flex 容器，将在两个方向均等溢出。
- `baseline`、`first baseline`、`last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
    flex 元素将会基于容器的宽和高，按照自身 margin box 的 cross-size 拉伸。If the combined size of the items along the cross axis is less than the size of the alignment container and the item is `auto`-sized, its size is increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size of all `auto`-sized items exactly fills the alignment container along the cross axis.
- `safe`
  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.

### 形式化语法

{{csssyntax}}

## 示例

### HTML

```html
<section>
  <div>Item #1</div>
  <div>Item #2</div>
  <div>Item #3</div>
</section>
```

### CSS

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- CSS Flexbox 指南：_[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox 指南：_[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Grid 指南：_[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/zh-CN/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}} 属性
