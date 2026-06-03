---
title: "`min-width` CSS 属性"
short-title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

`min-width` [CSS](/zh-CN/docs/Web/CSS) 属性为给定元素设置最小宽度。它可以阻止 {{cssxref("width")}} 属性的[应用值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#应用值)小于 `min-width` 指定的值。

{{InteractiveExample("CSS 演示：min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    改变最小宽度。
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

当 `min-width` 大于 {{Cssxref("max-width")}} 或 {{Cssxref("width")}} 时，元素的宽度将被设置为 `min-width` 的值。

## 语法

```css
/* <length> 值 */
min-width: 3.5em;

/* <percentage> 值 */
min-width: 10%;

/* 关键字值 */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);

/* 全局值 */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### 值

- `<length>`
  - : 以绝对值定义 `min-width`。
- `<percentage>`
  - : 以包含区块的宽度百分比定义 `min-width`。
- `auto`
  - : 默认值。对于指定元素，自动（auto）值的来源取决于其 display 的值。对于块级盒子、行内盒子、行内块以及所有表格布局盒子，`auto` 会解析为 `0`。

    对于[弹性项目](/zh-CN/docs/Glossary/Flex_Item)和网格项目，最小宽度值会按以下优先级确定：首先取指定的建议尺寸（如 `width` 属性的值），其次取传递尺寸（当元素设置了 `aspect-ratio` 且高度为确定尺寸时，会据此计算），否则使用 `min-content` 尺寸。此外，如果弹性项目或网格项目是{{glossary("scroll container", "滚动容器")}}，或者网格项目跨越了多个弹性列轨道，则自动最小尺寸为 `0`。

- `max-content` {{ experimental_inline() }}
  - : 固有首选 `min-width`。
- `min-content` {{ experimental_inline() }}
  - : 固有最小 `min-width`。
- `fit-content`
  - : 使用可用空间，但不得超过 [max-content](/zh-CN/docs/Web/CSS/Reference/Values/max-content)，即 `min(max-content,max(min-content,stretch))`。
- [`fit-content(<length-percentage>)`](/zh-CN/docs/Web/CSS/Reference/Values/fit-content_function)
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, max(min-content, argument))`。
- `stretch`
  - : 限制元素的[外边距盒子](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model#盒模型的各个部分)的最小宽度，使其等于其[包含区块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block#确定包含块)的宽度。它会尝试使外边距盒子填充包含区块中的可用空间，因此在某种程度上类似于`100%`，但将结果大小应用于外边距盒子，而不是由 [box-sizing](/en-US/docs/Web/CSS/Reference/Properties/box-sizing) 确定的盒子。

    > [!NOTE]
    > 要查看浏览器对 `stretch` 值使用的别名及其实现状态，请参阅[浏览器兼容性](#浏览器兼容性)部分。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置元素最小宽度

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("width") }}、{{ Cssxref("max-width") }}
- {{Cssxref("max-width")}}
- {{Cssxref("width")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [CSS 盒子模型介绍](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)指南
- [CSS 盒子模型](/zh-CN/docs/Web/CSS/Guides/Box_model)模块
