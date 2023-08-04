---
title: justify-self
slug: Web/CSS/justify-self
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`justify-self`** 属性设置单个盒子在其布局容器适当轴中的对其方式。

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

此属性的效果取决于我们所处的布局模式：

- 在块级布局中，它对齐一个项目在其包含块的内联轴上。
- 对于绝对定位的元素，它对齐一个项目在其包含块的内联轴上，同时计算 top，left，bottom 与 right 的值。（原文：it aligns an item inside its containing block on the inline axis, accounting for the offset values of top, left, bottom, and right.）
- 在表格布局中，这个属性被忽略（[更多](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Block_Abspos_Tables) 关于块、绝对定位以及表格布局中的对齐方式）
- 在弹性布局中，这个属性被忽略（[更多](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)关于弹性布局中的对齐方式）
- 在栅格布局中，它对齐一个元素到该元素所在的栅格区域的内联轴上。（[更多](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_Alignment_In_Grid_Layout) 关于栅格布局中的对齐方式）

## 语法

```css
/* 基础关键字 */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* 位置对齐 */
justify-self: center; /* 在中间放置元素 */
justify-self: start; /* 在开始处放置元素 */
justify-self: end; /* 在结束处放置元素 */
justify-self: flex-start; /* 与 'start' 等效。注意 justify-self 在 Flexbox 布局中被忽略。 */
justify-self: flex-end; /* 与 'end' 等效。注意 justify-self 在 Flexbox 布局中被忽略。 */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* 在左侧放置元素 */
justify-self: right; /* 在右侧放置元素 */

/* 基线对齐 */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* 溢出对齐（只对位置对齐有效果）*/
justify-self: safe center;
justify-self: unsafe center;

/* 全局关键字 */
justify-self: inherit;
justify-self: initial;
justify-self: unset;
```

这个属性可以有三种不同的形式：

- 基本关键字： `normal`， `auto`，或者 `stretch`。
- 基线对齐：`baseline` 关键字，加上可选的 `first` 或者 `last`。
- 可定位对齐：

  - `center`， `start`， `end`， `flex-start`， `flex-end`， `self-start`， `self-end`， `left`，或者 `right`。
  - 加上可选的 `safe` 或者`unsafe`。

### 值

- `auto`
  - : 该值使用其父级元素盒子的 `justify-items` 属性的值，除非它没有父级元素，或者是绝对定位的，这些情况下，`auto` 代表了 `normal`。
- `normal`

  - : 这个效果取决于我们所处的布局模式：

    - 在块级布局中，这个关键字是 `start` 的同义词。
    - 在绝对定位的布局中，在可置换绝对定位的盒子中，这个关键字表现的与 `start` 相似，在其他绝对定位的盒子中，其表现得与 `stretch` 相似。
    - 在表格布局中，由于这个属性被忽略所以这个关键字没有作用。
    - 在弹性布局中，由于这个属性被忽略所以这个关键字没有作用。
    - 在栅格布局中，这个关键字会导致类似于 `stretch` 的行为，除了具有高宽比或固有大小的盒子，它的行为类似于 `start` 。

- `start`
  - : 项目被放置到适当的轴上，朝向对齐容器的起始边缘，彼此齐平。
- `end`
  - : 项目被放置到适当的轴上，朝向对齐容器的末端边缘，彼此齐平。
- `flex-start`
  - : 对于非弹性容器子元素的项目，这个值被视为 `start` 。
- `flex-end`
  - : 对于非弹性容器子元素的项目，这个值被视为 `end`.
- `self-start`
  - : The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
- `self-end`
  - : The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
- `center`
  - : 项目被放置在对齐容器的中心向彼此平齐。
- `left`
  - : 项目在对齐容器的左边缘，并彼此对齐。如果属性的轴与内联轴不平行，则此值的行为类似于`start` 。
- `right`
  - : 项目在对齐容器的右边缘，并彼此对齐。如果属性的轴与内联轴不平行，则此值的行为类似于 `start` 。
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

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单演示

In the following example we have a simple 2 x 2 grid layout. Initially the grid container is given a `justify-items` value of `stretch` — the default — which causes the grid items to stretch across the entire width of their cells.

The second, third, and fourth grid items are then given different values of `justify-self`, to show how these override the `justify-items` value. These values cause the grid items to span only as wide as their content width, and align in different positions across their cells.

#### HTML

```html
<article class="container">
  <span>First child</span>
  <span>Second child</span>
  <span>Third child</span>
  <span>Fourth child</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 300px;
  justify-items: stretch;
}

span:nth-child(2) {
  justify-self: start;
}

span:nth-child(3) {
  justify-self: center;
}

span:nth-child(4) {
  justify-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article {
  margin: 20px;
}
```

#### 结果

{{EmbedLiveSample('简单演示', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/zh-CN/docs/Web/CSS/CSS_box_alignment)
- The {{CSSxRef("justify-items")}} property
