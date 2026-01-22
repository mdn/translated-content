---
title: CSS 选择器
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

**CSS 选择器**是 CSS 规则的一部分，用于匹配文档中的元素。匹配的元素将会应用规则指定的样式。

## 示例

考虑如下 CSS：

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font:
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

选择器例如：`"p"`（文档中的 {{HTMLElement("p")}} 元素都会应用绿色字体的样式）、`"div.warning"`（文档中所有 [class](/zh-CN/docs/Web/HTML/Reference/Global_attributes/class) 包含 `"warning"` 的 {{HTMLElement("div")}} 元素都会有一个看起来像警告框的样式）和 `"#customized"`（id 为 `"customized"` 的元素中的文本为 16px 高，字体是 Lucida Grande 和一些用作回落的字体）。

我们可以把上面的 CSS 应用到 HTML 中，如下：

```html
<p>这是个开心的文本</p>

<div class="warning">小心，有巫师！他们很容易被激怒！</div>

<div id="customized">
  <p>这是个开心的文本</p>

  <div class="warning">小心，有巫师！他们很容易被激怒！</div>
</div>
```

页面的内容将会呈现如下样式：

{{EmbedLiveSample("示例", 640, 240)}}

## 参见

- 在 CSS 介绍中[学习更多 CSS 选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- 基础选择器
  - [标签选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
  - [类选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
  - [ID 选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
  - [通配选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Universal_selectors) `* ns|* *|*`
  - [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`
  - [状态选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `a:active, a:visited`

- 分组选择器
  - [选择器列表](/zh-CN/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`

- 关系选择器
  - [接续兄弟选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - [后续兄弟选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - [直接子元素选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - [后代元素选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`

- 伪选择器（Pseudo）
  - [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
