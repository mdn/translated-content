---
title: 块级元素
slug: Web/HTML/Block-level_elements
---

HTML（超文本标记语言）中元素大多数都是“块级”元素或[行内元素](/zh-CN/docs/Web/HTML/Inline_elements)。块级元素占据其父元素（容器）的整个水平空间，垂直空间等于其内容高度，因此创建了一个“块”。这篇文章帮助解释这个概念。

通常浏览器会在块级元素前后另起一个新行。下面的例子表明了块级元素的作用：

## 块级元素示例

### HTML

```html
<p>This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>
```

### CSS

```css
p { background-color: #8ABB55; }
```

{{ EmbedLiveSample('Block-level_Example') }}

## 用法

- 块级元素只能出现在 {{ HTMLElement("body") }} 元素内。

## 块级元素与行内元素

块级元素与行内元素有几个关键区别：

- 格式
  - : 默认情况下，块级元素会新起一行。
- 内容模型
  - : 一般块级元素可以包含行内元素和其他块级元素。这种结构上的包含继承区别可以使块级元素创建比行内元素更”大型“的结构。

HTML 标准中块级元素和行内元素的区别至高出现在 4.01 标准中。在 HTML5，这种区别被一个更复杂的[内容类别](/zh-CN/docs/HTML/Content_categories)代替。”块级“类别大致相当于 HTML5 中的[流内容](/zh-CN/docs/HTML/Content_categories#Flow_content)类别，而”行内“类别相当于 HTML5 中的[措辞内容](/zh-CN/docs/HTML/Content_categories#Phrasing_content)类别，不过除了这两个还有其他类别。

## 元素列表

以下是 HTML 中所有的块级元素列表（虽然”块级“在新的 HTML5 元素中没有明确定义）

- {{ HTMLElement("address") }}
  - : 联系方式信息。
- {{ HTMLElement("article") }}
  - : 文章内容。
- {{ HTMLElement("aside") }}
  - : 伴随内容。
- {{ HTMLElement("blockquote") }}
  - : 块引用。
- {{ HTMLElement("dd") }}
  - : 定义列表中定义条目描述。
- {{ HTMLElement("div") }}
  - : 文档分区。
- {{ HTMLElement("dl") }}
  - : 定义列表。
- {{ HTMLElement("fieldset") }}
  - : 表单元素分组。
- {{ HTMLElement("figcaption") }}
  - : 图文信息组标题
- {{ HTMLElement("figure") }}
  - : 图文信息组 (参照 {{ HTMLElement("figcaption") }})。
- {{ HTMLElement("footer") }}
  - : 区段尾或页尾。
- {{ HTMLElement("form") }}
  - : 表单。
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : 标题级别 1-6.
- {{ HTMLElement("header") }}
  - : 区段头或页头。
- {{ HTMLElement("hgroup") }}
  - : 标题组。
- {{ HTMLElement("hr") }}
  - : 水平分割线。
- {{ HTMLElement("ol") }}
  - : 有序列表。
- {{ HTMLElement("p") }}
  - : 行。
- {{ HTMLElement("pre") }}
  - : 预格式化文本。
- {{ HTMLElement("section") }}
  - : 一个页面区段。
- {{ HTMLElement("table") }}
  - : 表格。
- {{ HTMLElement("ul") }}
  - : 无序列表。

### 另请参阅

- [行内元素](/zh-CN/docs/Web/HTML/Inline_elements)
