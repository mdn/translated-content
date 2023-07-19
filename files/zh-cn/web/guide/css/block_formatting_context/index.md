---
title: 区块格式化上下文
slug: Web/Guide/CSS/Block_formatting_context
---

{{CSSRef}}

**区块格式化上下文**（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

- 文档的根元素（`<html>`）。
- 浮动元素（即 {{ cssxref("float") }} 值不为 `none` 的元素）。
- 绝对定位元素（{{ cssxref("position") }} 值为 `absolute` 或 `fixed` 的元素）。
- 行内块元素（{{ cssxref("display") }} 值为 `inline-block` 的元素）。
- 表格单元格（{{ cssxref("display") }} 值为 `table-cell`，HTML 表格单元格默认值）。
- 表格标题（{{ cssxref("display") }} 值为 `table-caption`，HTML 表格标题默认值）。
- 匿名表格单元格元素（{{ cssxref("display") }} 值为 `table`（HTML 表格默认值）、`table-row`（表格行默认值）、`table-row-group`（表格体默认值）、`table-header-group`（表格头部默认值）、`table-footer-group`（表格尾部默认值）或 `inline-table`）。
- {{ cssxref("overflow") }} 值不为 `visible` 或 `clip` 的块级元素。
- {{ cssxref("display") }} 值为 `flow-root` 的元素。
- {{ cssxref("contain") }} 值为 `layout`、`content` 或 `paint` 的元素。
- 弹性元素（{{ cssxref("display") }} 值为 `flex` 或 `inline-flex` 元素的直接子元素），如果它们本身既不是[弹性](/zh-CN/docs/Glossary/Flex_Container)、[网格](/zh-CN/docs/Glossary/Grid_Container)也不是[表格](/zh-CN/docs/Web/CSS/CSS_table)容器。
- 网格元素（{{ cssxref("display") }} 值为 `grid` 或 `inline-grid` 元素的直接子元素），如果它们本身既不是[弹性](/zh-CN/docs/Glossary/Flex_Container)、[网格](/zh-CN/docs/Glossary/Grid_Container)也不是[表格](/zh-CN/docs/Web/CSS/CSS_table)容器。
- 多列容器（{{ cssxref("column-count") }} 或 {{ cssxref("column-width") }} 值不为 `auto`，且含有 `column-count: 1` 的元素）。
- `column-span` 值为 `all` 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（[规范变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)、[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：

- 包含内部浮动。
- 排除外部浮动。
- 阻止[外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。

> **备注：** 弹性/网格容器（{{ cssxref("display") }}：flex/grid/inline-flex/inline-grid）建立新的弹性/网格格式化上下文，除布局之外，它与区块格式化上下文类似。弹性/网格容器中没有可用的浮动子级，但排除外部浮动和阻止外边距重叠仍然有效。

## 示例

### 包含内部浮动

BFC 使得让浮动内容和周围的内容等高。

为了更好的理解 BFC，我们先看看下面这些内容。

在下面的例子中，我们让 `<div>` 元素浮动，并给它应用 `border` 效果。`<div>` 里的内容现在已经在浮动元素周围浮动起来了。由于浮动的元素比它旁边的元素高，所以 `<div>` 的边框穿出了浮动。正如我们在[流内与流外](/zh-CN/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)指南中解释的，浮动脱离了文档流，所以 `<div>` 的 `background` 和 `border` 仅仅包含了内容，不包含浮动。

**使用 `overflow: auto`**

在创建包含浮动元素的 BFC 时，通常的做法是设置父元素 `overflow: auto` 或者其他除默认的 `overflow: visible` 以外的值。`<div>` 元素变成布局中的小型布局，任何子元素都会被包含进去。

使用 `overflow` 创建新的 BFC，是因为 `overflow` 属性会告诉浏览器应该怎样处理溢出的内容。如果使用它仅仅为了创建 BFC，你可能会遇到不希望出现的滚动条或阴影，需要注意。另外，对于后续的开发者，可能不清楚当时为什么使用 `overflow`，所以最好添加一些注释来解释为什么这样做。

**使用 `display: flow-root`**

一个新的 `display` 属性的值，它可以创建无副作用的 BFC。在父级块中使用 `display: flow-root` 可以创建新的 BFC。

给 `<div>` 元素设置 `display: flow-root` 属性后，`<div>` 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。

你可以从 `flow-root` 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，行为如同 `root`（在浏览器中是 `<html>`）元素。

#### HTML

```html
<section>
  <div class="box">
    <div class="float">我是浮动的盒子！</div>
    <p>我是容器内的内容。</p>
  </div>
</section>
<section>
  <div class="box" style="overflow:auto">
    <div class="float">我是浮动的盒子！</div>
    <p>我是 <code>overflow:auto</code> 容器内部的内容。</p>
  </div>
</section>
<section>
  <div class="box" style="display:flow-root">
    <div class="float">我是浮动的盒子！</div>
    <p>我是 <code>display:flow-root</code> 容器内部的内容。</p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("包含内部浮动", 200, 480)}}

### 排除外部浮动

下面的例子中，我们使用 `display: flow-root` 和浮动实现双列布局，因为正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。

#### HTML

```html
<section>
  <div class="float">试试重新调整这个外部浮动元素的大小</div>
  <div class="box"><p>普通</p></div>
</section>
<section>
  <div class="float">试试重新调整这个外部浮动元素的大小</div>
  <div class="box" style="display:flow-root">
    <p><code>display:flow-root</code></p>
    <p></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  overflow: hidden; /* resize:both 所必需的样式 */
  resize: both;
  margin-right: 25px;
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("排除外部浮动", 200, 330)}}

与 `inline-block` 需要设置 `width: <percentage>` 不同的是，在示例中，我们不需要设置右侧 `div` 元素的宽度。

请注意，弹性盒子是在现代 CSS 中实现多列布局的更有效的方法。

### 防止外边距重叠

你可以创建新的 BFC 避免两个相邻元素之间的[外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。

#### 外边距重叠示例

在这个示例中我们有两个相邻的 {{HTMLElement("div")}} 元素，每个元素在垂直方向上含有 `10px` 的外边距。由于外边距重叠作用，垂直方向上它们之间将具有 10 像素的间距，而不是所期望的 20 像素。

```html
<div class="blue"></div>
<div class="red"></div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
```

{{EmbedLiveSample("外边距重叠示例", 120, 170)}}

#### 防止外边距重叠

在这个示例中，我们将第二个 `<div>` 包裹在另外一个 `<div>` 之中，以创建一个新的 BFC，防止外边距重叠。

```html
<div class="blue"></div>
<div class="outer">
  <div class="red"></div>
</div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.outer {
  overflow: hidden;
  background: transparent;
}
```

{{EmbedLiveSample("防止外边距重叠", 120, 170)}}

## 规范

{{Specifications}}

## 参见

- {{ cssxref("float") }}、{{ cssxref("clear") }}
- CSS 重要概念：
  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值
    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)
  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
