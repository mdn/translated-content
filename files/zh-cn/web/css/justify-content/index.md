---
title: justify-content
slug: Web/CSS/justify-content
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) **`justify-content`** 属性定义了浏览器之间，如何分配顺着弹性容器主轴 (或者网格行轴) 的元素之间及其周围的空间。

```css
/* Positional alignment */
justify-content: center;     /* 居中排列 */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* 从行首起始位置开始排列 */
justify-content: flex-end;   /* 从行尾位置开始排列 */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */

/* Baseline alignment */
justify-content: baseline;
justify-content: first baseline;
justify-content: last baseline;

/* Distributed alignment */
justify-content: space-between;  /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
justify-content: space-around;  /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
justify-content: space-evenly;  /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */
justify-content: stretch;       /* 均匀排列每个元素
                                   'auto'-sized 的元素会被拉伸以适应容器的大小 */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

当 length 属性和自动外边距属性（margin: auto）生效之后，对齐已经完成了。也就是说，如果存在至少一个弹性元素，而且这个元素的 {{cssxref("flex-grow")}} 属性不等于 0，那么对齐方式不会生效，就像没有多余空间的情况。

{{cssinfo}}

可以参考 [使用 CSS 弹性框](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)获取更多信息。

## 语法

### 值

- `start`
  - : 从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。
- `flex-start`
  - : 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
- `flex-end`
  - : 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
- `center`
  - : 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- `left`
  - : 伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则`left`的行为类似于`start`。
- `right`
  - : 元素以容器右边缘为基准，一个挨着一个对齐，如果属性轴与内联轴不平行，则`right`的行为类似于`end`。
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `space-between`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
- `space-around`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
- `space-evenly`
  - : flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间的间距，主轴起始位置到第一个 flex 项的间距，主轴结束位置到最后一个 flex 项的间距，都完全一样。
- `stretch`
  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.
- `safe`
  - : 与对齐关键字一起使用，如果选定的关键字会导致元素溢出容器造成数据丢失，那么将会使用 `start` 代替它。
- `unsafe`
  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.

### 语法格式

{{csssyntax}}

## 示例

### CSS content

```css
#container {
  display: flex;
  justify-content: space-between; /* Can be changed in the live sample */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="baseline">baseline</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
var justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", function (evt) {
  document.getElementById("container").style.justifyContent =
      evt.target.value;
});
```

### Result

{{EmbedLiveSample("Example", "100%", 140)}}

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## 参考

- [使用 CSS 弹性元素](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
