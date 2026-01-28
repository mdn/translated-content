---
title: 区块格式化上下文
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**区块格式化上下文**（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建区块格式化上下文：

- 文档的根元素（`<html>`）。
- 浮动元素（即 {{ cssxref("float") }} 值不为 `none` 的元素）。
- 绝对定位元素（{{ cssxref("position") }} 值为 `absolute` 或 `fixed` 的元素）。
- 行内块元素（具有 {{cssxref("display", "display: inline-block")}} 的元素）。这是 {{htmlelement("button")}} 和按钮 {{htmlelement("input")}} 元素的默认显示类型。
- 表格单元格（具有 {{cssxref("display", "display: table-cell")}}（HTML 表格单元格默认值）的元素）。
- 表格标题（具有 {{cssxref("display", "display: table-caption")}}（HTML 表格标题默认值）的元素）。
- 匿名表格单元格元素，由包括 {{cssxref("display", "display: table")}}（HTML 表格默认值）、`table-row`（表格行默认值）、`table-row-group`（表格体默认值）、`table-header-group`（表格头部默认值）、`table-footer-group`（表格尾部默认值）的元素隐式创建，或 `inline-table`。
- 具有 {{cssxref("display", "display: flow-root")}} 的元素。
- 弹性项（具有 {{cssxref("display", "display: flex")}} 或 `inline-flex` 元素的直接子元素），如果它们本身既不是[弹性](/zh-CN/docs/Glossary/Flex_Container)、[网格](/zh-CN/docs/Glossary/Grid_Container)也不是[表格](/zh-CN/docs/Web/CSS/Guides/Table)容器。
- 网格项（具有 {{cssxref("display", "display: grid")}} 或 `inline-grid` 元素的直接子元素），如果它们本身既不是[弹性](/zh-CN/docs/Glossary/Flex_Container)、[网格](/zh-CN/docs/Glossary/Grid_Container)也不是[表格](/zh-CN/docs/Web/CSS/Guides/Table)容器。
- {{ cssxref("overflow") }} 不为 `visible` 或 `paint` 的区块元素。
- 具有 {{cssxref("contain", "contain: layout")}}、`content` 或 `paint` 的元素。
- 多列容器（{{ cssxref("column-count") }} 或 {{ cssxref("column-width") }} 值不为 `auto`，且含有 `column-count: 1` 的元素）。
- 具有 {{cssxref("column-span", "column-span: all")}} 的元素，即使该元素没有包裹在一个多列容器中。

格式化上下文会影响布局，因为建立新区块格式化上下文的元素将：

- 包含内部浮动。
- 排除外部浮动。
- 阻止[外边距折叠](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)。

弹性/网格容器（通过设置元素的 {{ cssxref("display") }} 为 `flex`、`grid`、`inline-flex` 和 `inline-grid`）建立新的弹性/网格格式化上下文。这些与块格式化上下文类似，但弹性布局或网格容器内部不存在可用的浮动子元素。不过，这些格式化上下文确实会排除外部浮动元素并抑制边距合并。

## 示例

让我们看看其中几个例子，以便了解创建新区块格式化上下文的效果。

### 包含内部浮动

在下面的示例中，我们有一个浮动内容，其高度与相邻内容相同。在应用了边框的 `<div>` 内包含一个浮动元素，而该 `<div>` 的内容则与浮动元素并排浮动。由于浮动内容的高度超过了相邻内容，`<div>`的边框现在穿过了浮动区域。正如我们在[应用或脱离流式布局](/zh-CN/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)指南中解释的，浮动脱离了文档流，所以 `<div>` 的 `background` 和 `border` 仅仅包含了内容，不包含浮动。

**使用 `overflow: auto`**

设置 `overflow: auto` 或除初始值 `overflow: visible` 之外的其他值，会创建一个包含浮动元素的新块级内容区块（BFC）。此时我们的 `<div>` 便成为布局中的微型布局单元，所有子元素都将被包含其中。

使用 `overflow` 创建新 BFC 的问题在于：该属性本意是告知浏览器如何处理溢出内容。当纯粹为创建 BFC 而使用该属性时，有时会出现多余滚动条或阴影截断的情况。此外，此类代码对后续开发者可能难以理解——他们未必能明白为何要用 `overflow` 实现此目的。若使用 `overflow`，建议添加注释说明。

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

### 防止外边距折叠

你可以创建新的 BFC 避免两个相邻元素之间的[外边距折叠](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)。

#### 外边距折叠示例

在这个示例中我们有两个相邻的 {{HTMLElement("div")}} 元素，每个元素在垂直方向上含有 `10px` 的外边距。由于外边距折叠作用，垂直方向上它们之间将具有 `10px` 的间距，而不是所期望的 `20px`。

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

{{EmbedLiveSample("外边距折叠示例", 120, 170)}}

#### 防止外边距折叠

在这个示例中，我们将第二个 `<div>` 包裹在另外一个外部 `<div>` 之中，并在外部 `<div>` 中使用 `overflow: hidden` 创建一个新的 BFC。此新 BFC 可防止嵌套 `<div>` 的边距与外部 `<div>` 的边距发生折叠。

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

{{EmbedLiveSample("防止外边距折叠_2", 120, 170)}}

## 规范

{{Specifications}}

## 参见

- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)
- [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
- [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)
- [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
- [布局模式](/zh-CN/docs/Glossary/Layout_mode)
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [外边距折叠](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)、[计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)、[应用值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#应用值)和[实际值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#实际值)
- [值定义语法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{glossary("Replaced elements", "可替换元素")}}
