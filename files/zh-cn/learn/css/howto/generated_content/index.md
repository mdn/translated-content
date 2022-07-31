---
title: 使用 CSS 添加文档内容
slug: Learn/CSS/Howto/Generated_content
tags:
  - Basic
  - Beginner
  - CSS
  - CSS:Getting_Started
  - Graphics
  - Guide
  - NeedsUpdate
  - Web
translation_of: Learn/CSS/Howto/Generated_content
---
{{LearnSidebar}}

本文介绍了一些通过 CSS 改变文档内容的方法。这样，仅修改样式表你就能把文本内容及图片添加到文档。

CSS 的一个重要优势是它可以帮助你将文档内容和其样式分离。但是有时候在样式而非文档中定义一些内容也是很有用的。当内容与文档结构紧密相关的时候，你可以在样式表中定义文本和图片内容。

> **备注：** 样式表中指定的内容不会成为 DOM 的一部分。

在样式表中指定内容会使事情变得复杂：你可能有多个语言版本的文档共享同一个样式表。如果样式表的一部分需要翻译，这就意味着你需要将这部分单独保存在多个样式表中，并在不同语言的文档中引用。

如果你指定的内容由通用符号和图片组成的话，就不存在这个问题。

## 示例

### 文本内容

CSS 可以在元素的前后插入文本：在选择器的后面加上 {{cssxref("::before")}} 或 {{cssxref("::after")}}。在声明中，指定 {{cssxref("content")}} 属性，并设置文本内容。

#### HTML

```html
A text where I need to <span class="ref">something</span>
```

#### CSS

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}
```

#### 结果

{{EmbedLiveSample('文本内容', 600, 30)}}

样式表默认使用 UTF-8 字符集。但也可以通过 link 属性或样式表以及其它方式指定其它字符集。参见 CSS 规范中的 [4.4 CSS style sheet representation](https://www.w3.org/TR/CSS21/syndata.html#q23)。

还可以通过转义机制（通过反斜杠转义）指定单个字符。比如，“\265B”是国际象棋黑皇后的符号 ♛。详细内容请参见 [Referring to characters not represented in a character encoding](https://www.w3.org/TR/CSS21/syndata.html#q24) 和 CSS 规范中的 [Characters and case](https://www.w3.org/TR/CSS21/syndata.html#q6)。

### 图片内容

可以通过将 {{cssxref("content")}} 属性值设置为某个图片的 URL，可以将图片插到元素的前面或后面。

下面这条规则在所有类名包含 `glossary` 的 a 标签后面插入一个空格和一个图标：

#### HTML

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

#### CSS

```css
a.glossary::after {
   content: " " url("glossary-icon.gif");
}
```

#### 结果

{{EmbedLiveSample('图片内容', 600, 40)}}
