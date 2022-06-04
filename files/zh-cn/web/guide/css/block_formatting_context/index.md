---
title: 块格式化上下文
slug: Web/Guide/CSS/Block_formatting_context
tags:
  - BFC
  - Block Formatting Context
  - CSS
  - 块格式化上下文
translation_of: Web/Guide/CSS/Block_formatting_context
---
{{ CSSRef }}

**块格式化上下文（Block Formatting Context，BFC）** 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

- 根元素（`<html>`）
- 浮动元素（{{ cssxref("float") }} 值不为 `none`）
- 绝对定位元素（{{ cssxref("position") }} 值为 `absolute` 或 `fixed`）
- 行内块元素（{{ cssxref("display") }} 值为 `inline-block`）
- 表格单元格（{{ cssxref("display") }} 值为 `table-cell`，HTML 表格单元格默认值）
- 表格标题（{{ cssxref("display") }} 值为 `table-caption`，HTML 表格标题默认值）
- 匿名表格单元格元素（{{ cssxref("display") }} 值为 `table`、`table-row`、 `table-row-group`、`table-header-group`、`table-footer-group`（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 `inline-table`）
- {{ cssxref("overflow") }} 值不为 `visible`、`clip` 的块元素
- {{ cssxref("display") }} 值为 `flow-root` 的元素
- {{ cssxref("contain") }} 值为 `layout`、`content` 或 `paint` 的元素
- 弹性元素（{{ cssxref("display") }} 值为 `flex` 或 `inline-flex` 元素的直接子元素），如果它们本身既不是 [flex](/zh-CN/docs/Glossary/Flex_Container)、[grid](/zh-CN/docs/Glossary/Grid_Container) 也不是 [table](/zh-CN/docs/Web/CSS/CSS_Table) 容器
- 网格元素（{{ cssxref("display") }} 值为 `grid` 或 `inline-grid` 元素的直接子元素），如果它们本身既不是 [flex](/zh-CN/docs/Glossary/Flex_Container)、[grid](/zh-CN/docs/Glossary/Grid_Container) 也不是 [table](/zh-CN/docs/Web/CSS/CSS_Table) 容器
- 多列容器（{{ cssxref("column-count") }} 或 {{ cssxref("column-width") }} 值不为 `auto`，包括`column-count` 为 `1`）
- `column-span` 值为 `all` 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 ([规范变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362))

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：

- 包含内部浮动
- 排除外部浮动
- 阻止 [外边距重叠](/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

> **备注：** flex/grid 容器（{{ cssxref("display") }}：flex/grid/inline-flex/inline-grid）建立新的 flex/grid 格式上下文，除布局之外，它与块格式上下文类似。flex/grid 容器中没有可用的浮动子级，但排除外部浮动和阻止外边距重叠仍然有效。

## 示例

### 包含内部浮动

让浮动内容和周围的内容等高。

为了更好的理解 BFC，我们先看看下面这些内容。

在下面的例子中，我们让 `<div>` 元素浮动，并给它一个 `border` 效果。`<div>` 里的内容现在已经在浮动元素周围浮动起来了。由于浮动的元素比它旁边的元素高，所以 `<div>` 的边框穿出了浮动。正如我们在 [In Flow and Out of Flow](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow) 中解释的，浮动脱离了文档流，所以 `<div>` 的 `background` 和 `border` 仅仅包含了内容，不包含浮动。

**使用 `overflow: auto`**

在创建包含浮动元素的 BFC 时，通常的做法是设置父元素 `overflow: auto` 或者其它除默认的 `overflow: visible` 以外的值。`<div>` 元素变成布局中的迷你布局，任何子元素都会被包含进去。

使用 `overflow` 创建新的 BFC，是因为 `overflow` 属性会告诉浏览器应该怎样处理溢出的内容。如果使用它仅仅为了创建 BFC，你可能会遇到不希望出现的滚动条或阴影，需要注意。另外，对于后续的开发者，可能不清楚当时为什么使用 `overflow`，所以最好添加一些注释来解释为什么这样做。

**使用 `display: flow-root`**

一个新的 `display` 属性的值，它可以创建无副作用的 BFC。在父级块中使用 `display: flow-root` 可以创建新的 BFC。

给 `<div>` 元素设置 `display: flow-root` 属性后，`<div>` 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。

你可以从 `flow-root` 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，类似于浏览器的根（`html`）元素。

#### HTML

```html
<section>
  <div class="box">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the container.</p>
  </div>
</section>
<section>
  <div class="box" style="overflow:auto">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>overflow:auto</code> container.</p>
  </div>
</section>
<section>
  <div class="box" style="display:flow-root">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>display:flow-root</code> container.</p>
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
  background-color: rgba(255, 255, 255, .5);
  border:1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("包含内部浮动", 200, 480)}}

### 排除外部浮动

下面的例子中，我们使用 `display: flow-root` 和浮动实现双列布局，因为正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。

#### HTML

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box"><p>Normal</p></div>
</section>
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box" style="display:flow-root"><p><code>display:flow-root</code><p></div>
</section>
```

#### CSS

```css
section {
  height:150px;
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
  overflow: hidden; /* required by resize:both */
  resize: both;
  margin-right:25px;
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, .75);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("排除外部浮动", 200, 330)}}

在示例中，我们不需要设置右侧 `div` 元素的宽度（为 `inline-block` 设置 `width: <percentage>`）。

请注意，flexbox 是在现代 CSS 中实现多列布局的更有效的方法。

### 外边距重叠

创建新的 BFC 避免两个相邻的 div 之间 [外边距重叠](/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) 。

#### HTML

```html
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```

#### CSS

```css
.blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
```

{{EmbedLiveSample("外边距重叠", 120, 170)}}

## 规范

| Specification                                                                                                    | Status                           | Comment               |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------- |
| {{SpecName('CSS3 Display', '#block-formatting-context', 'Block Formatting Context')}} | {{Spec2('CSS3 Display')}} | define BFC(abbr) etc. |
| {{SpecName('CSS2.1', 'visuren.html#block-formatting', 'Block Formatting Context')}} | {{Spec2('CSS2.1')}}         | Initial definition.   |

## 另见

- {{ cssxref("float") }}, {{ cssxref("clear") }}
- {{ css_key_concepts }}
