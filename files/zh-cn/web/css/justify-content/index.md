---
title: justify-content
slug: Web/CSS/justify-content
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`justify-content`** 属性定义浏览器如何沿着弹性容器的{{Glossary("Main Axis", "主轴")}}和网格容器的行向轴分配内容元素之间和周围的空间。

下面的交互示例演示了使用网格布局的一些值。

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

当 length 属性和自动外边距属性生效之后，对齐已经完成了。也就是说，如果[弹性布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)中存在至少一个弹性元素，而且这个元素的 {{cssxref("flex-grow")}} 属性不等于 `0`，那么对齐方式不会生效，就像没有多余空间的情况。

## 语法

```css
/* Positional alignment */
justify-content: center; /* 居中排列 */
justify-content: start; /* Pack items from the start */
justify-content: end; /* Pack items from the end */
justify-content: flex-start; /* 从行首起始位置开始排列 */
justify-content: flex-end; /* 从行尾位置开始排列 */
justify-content: left; /* Pack items from the left */
justify-content: right; /* Pack items from the right */

/* Baseline alignment */
justify-content: baseline;
justify-content: first baseline;
justify-content: last baseline;

/* Distributed alignment */
justify-content: space-between; /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
justify-content: space-around; /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
justify-content: space-evenly; /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */
justify-content: stretch; /* 均匀排列每个元素
                                   'auto'-sized 的元素会被拉伸以适应容器的大小 */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

### 值

- `start`
  - : 从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。
- `end`
  - : 从行尾开始排列。每行最后一个元素与行尾对齐，同时所有前面的元素与后一个对齐。
- `flex-start`
  - : 元素紧密地排列在弹性容器的主轴起始侧。仅应用于弹性布局的项目。对于不是弹性容器里的元素，此值将被视为 `start`。
- `flex-end`
  - : 元素紧密地排列在弹性容器的主轴结束侧。仅应用于弹性布局的元素。对于不是弹性容器里的元素，此值将被视为 `end`。
- `center`
  - : 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- `left`
  - : 伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则 `left` 的行为类似于 `start`。
- `right`
  - : 元素以容器右边缘为基准，一个挨着一个对齐，如果属性轴与内联轴不平行，则 `right` 的行为类似于 `end`。
- `space-between`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
- `space-around`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
- `space-evenly`
  - : flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间的间距，主轴起始位置到第一个 flex 项的间距，主轴结束位置到最后一个 flex 项的间距，都完全一样。
- `stretch`

  - : 如果元素沿主轴的组合尺寸小于对齐容器的尺寸，任何尺寸设置为 `auto` 的元素都会等比例地增加其尺寸（而不是按比例增加），同时仍然遵守由 {{cssxref("max-height")}}/{{cssxref("max-width")}}（或相应功能）施加的约束，以便沿主轴完全填充对齐容器的组合尺寸。

    > **备注：** 虽然弹性盒子支持 `stretch` 属性，但将其应用于弹性盒子时，由于拉伸是由 {{CSSXref("flex")}} 属性控制的，所以 `stretch` 的行为与 `start` 相同。

- `safe`
  - : 如果元素溢出对齐容器，则元素将按照对齐模式为 `start` 进行对齐。所期望的对齐将不会被实现。
- `unsafe`
  - : 即使元素溢出对齐容器，也会实现所需的对齐方式。与 `safe` 不同，`safe` 会忽略所要求的对齐方式以防止溢出。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

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
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

### 结果

{{EmbedLiveSample("示例", "100%", 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [使用 CSS 弹性元素](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)
