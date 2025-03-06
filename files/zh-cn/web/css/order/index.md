---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 4630ec673ad963bfa36a02a2c5d3f1d21c27a5d0
---

{{CSSRef}}

**`order`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置弹性或网格容器中项的布局顺序。容器中的项按 `order` 值升序排列，然后按它们的源代码顺序排列。未明确指定 `order` 值的项会被赋予默认值 `0`。

{{EmbedInteractiveExample("pages/css/order.html")}}

在上面的演示中，请选择左侧的选项来更改粉色盒子的 `order` 属性值。浅蓝色的盒子已被赋予了固定的 `order` 值。

请牢记源代码顺序的影响。例如，当选择 `order: 2;` 时，粉色盒子会被放置在两个 `order: 2;` 的蓝色盒子之前。这是因为在源代码中，粉色盒子出现在蓝色盒子之前。

## 语法

```css
/* <integer> 值 */
order: 5;
order: -5;

/* 全局值 */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

由于 `order` 仅用于影响元素的*视觉顺序*，而不影响其逻辑顺序或 Tab 顺序，因此不应在非视觉媒体（例如 [speech](/zh-CN/docs/Web/CSS/@media#speech)）上使用。

定义于 [CSS 显示](/zh-CN/docs/Web/CSS/CSS_display)模块中的这一属性，仅对网格和弹性项产生影响。当在父元素的 {{cssxref("display")}} 属性未创建弹性容器或网格容器的情况下，对子元素设置 `order` 属性是无效的。

### 值

- {{cssxref("&lt;integer&gt;")}}
  - : 表示该项所使用的顺序组。

## 无障碍

使用 `order` 属性会导致内容的视觉呈现与 DOM 顺序之间产生脱节。这将对借助屏幕阅读器等辅助技术导航的低视力用户造成不利影响。如果视觉顺序与 DOM 顺序不一致，用户访问内容时的体验将因其访问方式的不同而有所差异。

- [弹性盒子与键盘导航的脱节](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)——来自 Tink（2016）
- [源代码顺序至关重要](https://adrianroselli.com/2015/09/source-order-matters.html)——来自 Adrian Roselli（2015）
- [理解 WCAG，指南 1.2 说明](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [了解成功标准 1.3.2 | W3C 对 WCAG 2.0 的理解](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 对弹性容器中的项进行排序

在此示例中，我们创建了一个经典的双侧边栏布局。

#### HTML

我们包含了页眉、页脚和主要内容区域。主要内容区域包含文章区块和两个侧边栏。请注意它们的顺序！我们将使用 CSS 的 `order` 属性来改变它们的视觉顺序。

```html
<header>页眉</header>
<main>
  <article>内容</article>
  <nav>导航栏</nav>
  <aside>侧边栏</aside>
</main>
<footer>页脚</footer>
```

#### CSS

我们使用[弹性盒子布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)模块的特性来设置主区域的样式；通过将 {{cssxref("display")}} 设置为 `flex`，{{htmlelement("main")}} 元素就变成了一个弹性容器。默认情况下，这会创建具有相同垂直高度的弹性项。两个侧边栏都被赋予了一个固定的 {{cssxref("width")}}，而 {{htmlelement("article")}} 将通过 {{cssxref("flex")}} 简写属性设置的 {{cssxref("flex-grow")}} 因子来占据所有[正可用空间](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#正负可用空间)。

然后，我们在弹性容器的三个子元素上分别设置了不同的 `order` 属性值；这意味着 CSS 定义了组件的视觉顺序，而不是按照 HTML 中声明的顺序显示。

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

#### 结果

{{ EmbedLiveSample('对弹性容器中的项进行排序') }}

`<article>` 在源代码顺序中首先出现，但在视觉上渲染在中间。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [弹性布局的基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [弹性项排序](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS 网格布局和无障碍](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS 显示](/zh-CN/docs/Web/CSS/CSS_display)模块
