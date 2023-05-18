---
title: 行级内容
slug: Glossary/Inline-level_content
---

在 CSS 中，参与行内布局的内容被称为**行级内容**（inline-level content）。默认情况下，大多数文本、替换元素以及生成的内容都是行级的。

在行内布局中，通常将文本、[替换元素](/zh-CN/docs/Web/CSS/Replaced_element)以及其它的行级盒分段为一堆按顺序排列的盒子来进行布局。在每个行盒中，行级盒子相互垂直或者水平对齐，具体取决于书写模式。通常，它们与文本的基线进行对齐。这可以使用 CSS 进行更改。

![行内布局](inline_layout.png)

> **备注：** HTML（_超文本标记语言_）元素历来被归类为“块级”元素或者“行级”元素。作为一种呈现的特性，现在这将由 CSS 来提供。

## 示例

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

在该示例中，{{HTMLElement("p")}} 元素包含一些文本。在该文本中有一个 {{HTMLElement("span")}} 元素和两个 {{HTMLElement("input")}} 元素，它们都是行级元素。如果，`<span>` 分布在不同的行上，则会生成两个行盒。因为这些元素是行内的，该段落只会渲染为不间断文本流的单个段落：

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

{{EmbedLiveSample("示例")}}

## 参见

- [块级内容](/zh-CN/docs/Glossary/Block-level_content)
- [行内格式上下文](/zh-CN/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
