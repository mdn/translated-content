---
title: 行级内容
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

在 CSS 中，参与行内布局的内容被称为**行级内容**（inline-level content）。默认情况下，大多数文本、替换元素以及生成的内容都是行级的。

在行内布局中，通常将文本、{{ glossary("replaced elements", "可替换元素") }}以及其它的行级盒分段为一堆按顺序排列的盒子来进行布局。在每个行盒中，行级盒子相互垂直或者水平对齐，具体取决于书写模式。通常，它们与文本的基线进行对齐。这可以使用 CSS 进行更改。

![行内布局](inline_layout.png)

> [!NOTE]
> HTML（_超文本标记语言_）元素历来被归类为“块级”元素或者“行级”元素。作为一种表现特性，现在由 CSS 来指定。

## 示例

```html
<p>
  这个 span 是一个<span class="highlight">行级元素</span
  >；背景已经被着色以显示元素的开始和结束。输入元素，如
  <input type="radio" /> 和 <input type="checkbox" />，也是行级内容。
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

- 相关术语条目：
  - [块级内容](/zh-CN/docs/Glossary/Block-level_content)
- [行内格式上下文](/zh-CN/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
