---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 63f170e5fae51f67b7e4759b495aba41f6f5a767
---

[CSS](/zh-CN/docs/Web/CSS) **`display`** 属性设置元素是否被视为[块级或行级盒子](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout)以及用于子元素的布局，例如[流式布局](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout)、[网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)或[弹性布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)。

形式上，**`display`** 属性设置元素的内部和外部的*显示类型*。外部类型设置元素参与[流式布局](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout)；内部类型设置子元素的布局。一些 `display` 值在它们自己的单独规范中完整定义；例如，在 CSS 弹性盒模型的规范中，定义了声明 `display: flex` 时会发生的细节。

{{InteractiveExample("CSS 演示：display")}}

```css interactive-example-choice
display: block;
```

```css interactive-example-choice
display: inline-block;
```

```css interactive-example-choice
display: none;
```

```css interactive-example-choice
display: flex;
```

```css interactive-example-choice
display: grid;
```

```html interactive-example
<p>
  对带有橙色虚线边框的
  <code>div</code>（包含三个子元素）应用不同的 <code>display</code> 值。
</p>
<section class="default-example" id="default-example">
  <div class="example-container">
    一些文本。
    <div id="example-element">
      <div class="child">子元素 1</div>
      <div class="child">子元素 2</div>
      <div class="child">子元素 3</div>
    </div>
    又一些文本
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 100%;
  height: 100%;
}

code {
  background: #88888888;
}

#example-element {
  border: 3px dashed orange;
}

.child {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #ccccff;
  border: 1px solid #ababab;
  color: black;
}
```

## 语法

```css
/* 预组合值 */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* 盒子抑制 */
display: none;
display: contents;

/* 多关键字语法 */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* 其他值 */
display: table;
display: table-row; /* 所有的 table 元素都有等效的 CSS display 值 */
display: list-item;

/* 全局值 */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

CSS `display` 属性使用关键字值指定。

## 分组的值

关键值可以被分组为六个种类。

### 外部表现

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : 这些关键字规定元素的外部显示类型，实际上就是其在流式布局中的角色：
    - `block`
      - : 该元素生成一个块级盒子，在正常的流中，该元素之前和之后产生换行。
    - `inline`
      - : 该元素生成一个或多个行级盒子，它们之前或者之后并不会产生换行。在正常的流中，如果有空间，下一个元素将会在同一行上。

> [!NOTE]
> 在支持多关键字语法的浏览器中，当 `display` 属性仅有一个**外部**值（例如 `display: block` 或 `display: inline`）时，内部值会被设置为 `flow`（例如 `display: block flow` 和 `display: inline flow`）。

> [!NOTE]
> 为了保证布局在旧浏览器生效，你可以使用单值语法，例如，对于 `display: inline flex`，可以设置以下回退
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> 参见 [CSS display 使用多值语法](/zh-CN/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)，以获得更多信息。

### 内部表现

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : 这些关键字规定了元素的内部显示类型，其定义了该内容布局时的格式上下文的类型（假设它是一个非替换元素）。当这些关键字单独用作单个值时，元素的外部显示类型默认为 `block`（但 `ruby`​​ 除外，其默认为 `inline`）。
    - `flow`
      - : 该元素使用流式布局（块向和行向布局）来排布它的内容。

        如果它的外部显示类型是 `inline`，并且它参与区块或者行内格式化上下文，那么它将生成一个行级盒子。否则它将生成一个块级盒子。

        根据其他属性的值（例如 {{CSSxRef("position")}}、{{CSSxRef("float")}} 或 {{CSSxRef("overflow")}}）以及它自身是否参与到区块或者行内格式化上下文，它要么为它的内容建立新的[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)（BFC），要么将其内容集成到其父元素的格式化上下文中。

    - `flow-root`
      - : 该元素生成一个块级元素盒，其会建立一个新的[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)，定义格式化上下文的根元素。
    - `table`
      - : 该元素的行为类似于 HTML 中的 {{HTMLElement("table")}} 元素。它定义了一个块级盒子。
    - `flex`
      - : 该元素的行为类似块级元素并且根据[弹性盒模型](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)布局它的内容。
    - `grid`
      - : 该元素的行为类似块级元素并且根据[网格模型](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)布局它的内容。
    - `ruby`
      - : 该元素的行为类似行级元素并且根据 ruby 格式化模型布局它的内容。它的行为像关联的 HTML 的 {{HTMLElement("ruby")}} 元素。

> [!NOTE]
> 在支持多关键字语法的浏览器中，当 `display` 属性仅有一个**内部**值（例如 `display: flex` 或 `display: grid`）时，外部值会被设置为 `block`（例如 `display: block flex` 和 `display: block grid`）。

### 列表元素

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : 该元素为内容生成一个块级盒子和一个单独的列表元素行级盒子。

`list-item` 的单独值将导致元素的行为类似于一个列表元素。其可以与 {{CSSxRef("list-style-type")}} 和 {{CSSxRef("list-style-position")}} 一起使用。

`list-item` 也可以与任意的 {{CSSxRef("&lt;display-outside&gt;")}} 关键字和 {{CSSxRef("&lt;display-inside&gt;")}} 中的 `flow` 或 `flow-root` 关键字组合。

> [!NOTE]
> 在支持多关键字语法的浏览器中，如果没有指定内部值，其值默认为 `flow`。如果没有指定外部值，主体盒子将具有 `block` 的外部显示类型。

### 内部

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : 一些布局模型，例如 `table` 和 `ruby` 有一个复杂的内置结构，它们的子孙后代可以扮演几个不同的角色。本节定义的这些“内部”display 值，仅在特定的布局模式下有用。
    - `table-row-group`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("tbody")}} 元素。
    - `table-header-group`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("thead")}} 元素。
    - `table-footer-group`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("tfoot")}} 元素。
    - `table-row`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("tr")}} 元素。
    - `table-cell`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("td")}} 元素。
    - `table-column-group`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("colgroup")}} 元素。
    - `table-column`
      - : 该元素的行为类似于 HTML {{HTMLElement("col")}} 元素。
    - `table-caption`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("caption")}} 元素。
    - `ruby-base`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("rb")}} 元素。
    - `ruby-text`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("rt")}} 元素。
    - `ruby-base-container`
      - : 该元素是作为匿名盒子生成的。
    - `ruby-text-container`
      - : 该元素的行为类似于 HTML 的 {{HTMLElement("rtc")}} 元素。

### 盒

- {{CSSxRef("&lt;display-box&gt;")}}
  - : 这些关键词定义一个元素到底是否产生 display 盒。
    - `contents`
      - : 这些元素自身不会产生特定的盒子。它们被伪盒子（pseudo-box）和子盒子取代。请注意，CSS Display 第 3 版规范中定义了 `contents` 值如何影响“异常元素”——这些元素不是纯粹由 CSS 盒模型概念呈现的（例如替换元素）。更多的细节请参见[附录 B：display: contents 对异常元素的影响](https://drafts.csswg.org/css-display/#unbox)。
    - `none`
      - : 使元素不再显示，其对布局不会有影响（文档渲染得好像这个元素并不存在）。所有的后代元素也不会再显示。为了使元素占据一个它通常占据的空间，但实际上没有渲染任何东西，应该使用 {{CSSxRef("visibility")}} 属性。

### 预组合

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 为 `display` 属性使用单关键字的预组合的语法，对相同布局模式的块级和行级变体需要单独的关键字。
    - `inline-block`
      - : 该元素生成块级元素盒，如果它是一个单独的行级盒，它将和周围的内容一起流动（行为类似于替换元素）。

        它等同于 `inline flow-root`。

    - `inline-table`
      - : `inline-table` 值在 HTML 中没有直接的映射。它行为类似于 HTML 的 {{HTMLElement("table")}} 元素，但实际是行级盒子，而不是块级盒子。table 盒内部具有块级上下文。

        它等同于 `inline table`。

    - `inline-flex`
      - : 元素的行为类似于行级元素并且它的内容根据弹性盒模型布局。

        它等同于 `inline flex`。

    - `inline-grid`
      - : 元素的行为类似于行级元素并且它的内容根据网格模型布局。

        它等同于 `inline grid`。

### 你现在应该使用什么语法？

[CSS display 模块](/zh-CN/docs/Web/CSS/Guides/Display)描述了多关键字语法，你可以使用 `display` 属性明确地定义**外部**和**内部** display 值。支持单个关键字值（预组合 `<display-legacy>` 值）以实现向后兼容性。

例如，你可以按以下方式使用两个值指定一个行级的弹性容器：

```css
.container {
  display: inline flex;
}
```

也可以使用传统的单值来指定。

```css
.container {
  display: inline-flex;
}
```

有关规范中的这些更改的更多信息，请参考指南 [CSS display 使用多值语法](/zh-CN/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)。

## 描述

`display` 为不同类型的值设置了单独的页面，其中包含这些值的多个示例——请参阅[语法](#语法)部分。此外，请参阅以下资料，其中深度展示了 display 的各种值。

### 多关键字值

- [CSS display 使用多值语法](/zh-CN/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)。

### CSS 流式布局（display: block、display: inline）

- [常规流中的块向和行向布局](/zh-CN/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [流式布局和溢出](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [流式布局和书写模式](/zh-CN/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [格式化上下文简介](/zh-CN/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [应用或脱离流式布局](/zh-CN/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### display: flex

- [弹性盒布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [对齐弹性容器中的项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [掌握弹性物件的包装](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [弹性元素排序](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [弹性盒子与其他布局方法的联系](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [弹性盒子的典型用例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### display: grid

- [网格布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [网格布局和其他布局方法的联系](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [基于线的定位](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [网格模板区域](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [使用具名网格线布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [网格布局中的自动定位](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [网格布局中的元素对齐](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [网格、逻辑值和书写模式](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [CSS 网格布局和无障碍](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [利用网格布局实现常用布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### display 动画

[支持的浏览器](#浏览器兼容性)使用[离散的动画类型](/zh-CN/docs/Web/CSS/Guides/Animations/Animatable_properties#离散)设置 `display` 动画。这通常意味着，属性的值将在动画播放到 `50%` 时在两个值之间切换。

有一个例外，那就是将 `display: none` 设置为动画的开始或结束。这种情况下，浏览器会在这两个值之间切换，以便于在整个动画持续时间内显示动画内容。例如：

- 当将 `display` 动画设置为从 `none` 到 `block`（或另一个可见的 `display` 值）时，该值将在动画持续时间的 `0%` 处切换到 `block`，从而使其始终可见。
- 当将 `display` 动画设置为从 `block`（或另一个可见的 `display` 值）到 `none`时，该值将在动画持续时间的 `100%` 处切换到 `none`，从而使其始终可见。

此行为对于创建入场/出场动画非常有用，例如，你想要使用 `display: none` 从 DOM 中删除一个容器，但又同时使用 {{cssxref("opacity")}} 将其淡出（而不是立即消失）。

在使用 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)为 `display` 设置动画时，需要在明确的关键帧（例如使用 `0%` 或 `from`）中提供开始的 `display` 值。有关示例，请参见[使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)。

在使用 [CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions)为 `display` 设置动画时，需要两个额外的附加条件：

- {{cssxref("@starting-style")}} 提供了要从第一次显示动画元素时开始过渡的属性的起始值。这是避免意外行为所必需的。默认情况下，CSS 过渡不会在元素的第一次样式更新时触发，也不会在 `display` 类型从 `none` 更改为另一种类型时触发。
- [`transition-behavior: allow-discrete`](/zh-CN/docs/Web/CSS/Reference/Properties/transition-behavior) 需要在 {{cssxref("transition-property")}} 声明上设置，已启用 `display` 过渡。

有关 `display` 属性过渡的更多示例，请参见 [`@starting-style`](/zh-CN/docs/Web/CSS/Reference/At-rules/@starting-style#示例) 和 [`transition-behavior`](/zh-CN/docs/Web/CSS/Reference/Properties/transition-behavior#示例)。

## 无障碍考虑

### display: none

在一个元素中使用值为 `none` 的 `display` 将会从[无障碍树中](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)移除它。这将导致该元素及其所有后代元素不再通过屏幕阅读器技术展示。

如果你想要从视觉上隐藏元素，一个更好的替代方案是使用[属性的组合](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)将其直观地从屏幕删除，但是通过屏幕阅读器等辅助技术依然可以解析。

虽然 `display: none` 会隐藏无障碍树中的内容，但被隐藏的元素如果被可见元素的 `aria-describedby` 或 `aria-labelledby` 属性引用，则仍会被暴露给辅助技术。

### display: contents

当前在大多数浏览器的实现是将任意 `display` 值为 `contents` 的元素从[无障碍树](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)中移除（但是保留后代元素）。这将导致该元素自身不再通过屏幕阅读器技术展示。根据 [CSS 规范](https://drafts.csswg.org/css-display/#valdef-display-contents)，这是错误的行为。

- [更多带有 display: contents 的无障碍标记 | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [display: contents 不是样式重置 | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### 表格

有些浏览器，将 {{HTMLElement("table")}} 元素的 `display` 值改为 `block`、`grid` 或 `flex`，这将改变它在[无障碍树](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)中的表示。这将导致表格不再通过屏幕阅读技术展示。

- [关于 CSS display 属性对表格语义的影响的简短说明——The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [隐藏内容以获得更好的无障碍 | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN 理解 WCAG，指南 1.3 解释](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#指南_1.3：创建可以以不同方式呈现的内容)
- [了解成功标准 1.3.1 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 比较 display 的值

在这个示例中，我们有两个块级的容器元素，每个元素有三个行级子元素。在下面，我们有一个选择菜单，允许你将不同的 `display` 值应用于容器，允许你去比较和对比不同的值如何影响元素及其他们子元素的布局。

我们在容器上以及它们的子元素中使用了 {{cssxref("padding")}} 和 {{cssxref("background-color")}}，以便更容易看到 display 值的影响。

#### HTML

```html
<article class="container">
  <span>一</span>
  <span>二</span>
  <span>三</span>
</article>

<article class="container">
  <span>一</span>
  <span>二</span>
  <span>三</span>
</article>

<div>
  <label for="display">选择一个 display 值：</label
  ><select id="display">
    <option selected>block</option>
    <option>block flow</option>
    <option>inline</option>
    <option>inline flow</option>
    <option>flow</option>
    <option>flow-root</option>
    <option>block flow-root</option>
    <option>table</option>
    <option>block table</option>
    <option>flex</option>
    <option>block flex</option>
    <option>grid</option>
    <option>block grid</option>
    <option>list-item</option>
    <option>block flow list-item</option>
    <option>inline flow list-item</option>
    <option>block flow-root list-item</option>
    <option>inline flow-root list-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>inline-table</option>
    <option>inline table</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>inline-grid</option>
    <option>inline grid</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### 结果

{{EmbedLiveSample('比较 display 的值','100%', 440)}}

请注意，为了便于说明，添加了一些多关键字值，下面这些值是相等的：

- `block` = `block flow`
- `inline` = `inline flow`
- `flow` = `block flow`
- `flow-root` = `block flow-root`
- `table` = `block table`
- `flex` = `block flex`
- `grid` = `block grid`
- `list-item` = `block flow list-item`
- `inline-block` = `inline flow-root`
- `inline-table` = `inline table`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`

你可以在[分组的值](#分组的值)上找到上面链接的每个单独 display 数据类型的更多示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("visibility")}}、{{CSSxRef("float")}}、{{CSSxRef("position")}}
- {{CSSxRef("grid")}}、{{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}} 属性
- [常规流中的块向和行向布局](/zh-CN/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [格式化上下文简介](/zh-CN/docs/Web/CSS/Guides/Display/Formatting_contexts)
