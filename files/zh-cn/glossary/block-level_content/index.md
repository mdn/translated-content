---
title: 块级内容
slug: Glossary/Block-level_content
---

在 CSS 中，参与行内布局的内容被称为**块级内容**（block-level content）。

在块级布局中，从包含块的顶部开始，盒子总是一个接着一个地垂直放置。每个盒子的左外边缘触及包含块的左边缘。块级元素总是开始在新的行/列上。在水平书写模式中，像英语或者阿拉伯语，它占据父元素（容器）的整个水平空间和等于其内容高度的垂直空间，从而创建一个“区块”。

> **备注：** 如果包含块的 [`writing-mode`](/zh-CN/docs/Web/CSS/writing-mode) 被设置为[默认值](/zh-CN/docs/Web/CSS/writing-mode#形式定义)之外的值，上述的块布局行为将发生改变。

> **备注：** HTML（_超文本标记语言_）元素历来被归类为“块级”元素或者“行级”元素。作为一种表现特性，现在这将由 CSS 来提供。

## 示例

在这个示例中，两个段落（{{HTMLElement("p")}}）元素被放置在 {{HTMLElement("div")}} 中。

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

段落（{{HTMLElement("p")}}）元素默认是块级的。这是它们显示在块布局中的原因：

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("示例")}}

## 参见

- [行级内容](/zh-CN/docs/Glossary/Inline-level_content)
- [块格式化上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/zh-CN/docs/Web/CSS/writing-mode)
