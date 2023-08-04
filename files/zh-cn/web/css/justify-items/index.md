---
title: justify-items
slug: Web/CSS/justify-items
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 的 **`justify-items`** 属性为所有盒中的项目定义了默认的 {{CSSxRef("justify-self")}} ，可以使这些项目以默认方式沿适当轴线对齐到每个盒子。

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

该属性的作用效果取决于我们使用的布局模式：

- 在块级布局中，会将其包含的项目在其行内轴上对齐；
- 绝对定位的元素中，会将其包含的项目在其行内轴上对齐，同时考虑 top、left、bottom、right 的值；
- 表格单元中，该属性被忽略（块级元素、绝对定位元素和表格布局中对齐的[更多信息](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Block_Abspos_Tables)）；
- 弹性盒子布局中，该属性被忽略（弹性盒子中对齐的[更多信息](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)）；
- 栅格布局中，会将其栅格区域内的项目在其行内轴上对齐（栅格布局中对齐的[更多信息](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Grid_Layout)）；

## 语法规则

```css
/* Basic keywords */
justify-items: auto;
justify-items: normal;
justify-items: stretch;

/* Positional alignment */
justify-items: center; /* Pack items around the center */
justify-items: start; /* Pack items from the start */
justify-items: end; /* Pack items from the end */
justify-items: flex-start; /* Pack flex items from the start */
justify-items: flex-end; /* Pack flex items from the end */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Pack items from the left */
justify-items: right; /* Pack items from the right */

/* Baseline alignment */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-items: safe center;
justify-items: unsafe center;

/* Legacy alignment */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Global values */
justify-items: inherit;
justify-items: initial;
justify-items: unset;
```

此属性可以采用四种不同的形式之一：

- 关键词：关键字 `normal`，`auto`，或 `stretch` 任选其一
- 基线对齐：关键词 `baseline` ，可选 `first` 或 `last` 之一为前缀
- 位置对其：关键词 `center`，`start`，`end`，`flex-start`，`flex-end`，`self-start`，`self-end`，`left` 或 `right` 任选其一，可选 `safe` 或 `unsafe` 之一为前缀
- Legacy alignment: the `legacy` keyword, followed by one of `left` or `right`.

### 值

- `auto`
  - : 使用的值是父元素的 justify-items 属性的值，除非该方框没有父元素，或者是绝对定位的，在这些情况下，`auto` 代表 `normal`。
- `normal`

  - : 这个关键字的效果取决于我们所处的布局模式：

    - 在块级布局中，相当于是 `start`。
    - In absolutely-positioned layouts, the keyword behaved like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.
    - In table cell layouts, this keyword has no meaning as this property is _ignored_.
    - In flexbox layouts, this keyword has no meaning as this property is _ignored._
    - In grid layouts, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.

- `start`
  - : The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
- `end`
  - : The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
- `flex-start`
  - : For items that are not children of a flex container, this value is treated like `start`.
- `flex-end`
  - : For items that are not children of a flex container, this value is treated like `end`.
- `self-start`
  - : The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
- `self-end`
  - : The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
- `center`
  - : The items are packed flush to each other toward the center of the of the alignment container.
- `left`
  - : The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `right`
  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `stretch`
  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container.
- `safe`
  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.
- `legacy`
  - : Makes the value inherited by the box descendants. Note that if a descendant has a `justify-self: auto` value, the `legacy` keyword is not considered by the descend, only the `left`, `right`, or `center` value associated to it.

### Formal syntax

{{CSSSyntax}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}

## 另见

- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/zh-CN/docs/Web/CSS/CSS_box_alignment)
- The {{CSSxRef("place-items")}} shorthand property
- The {{CSSxRef("justify-self")}} property
- The {{CSSxRef("align-items")}} property
