---
title: <p>
slug: Web/HTML/Element/p
---

{{HTMLSidebar}}

**HTML \<p>**元素（或者说 HTML 段落元素）表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。另外，\<p> 是[块级元素](/zh-CN/docs/HTML/Block-level_elements)。

- _[内容分类](/zh-CN/docs/Web/HTML/Content_categories)_ [Flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content), palpable content.
- _允许的内容_ [Phrasing content](/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content).
- *标签省略*起始标签是必需的，结束标签在以下情形中可以省略。\<p>元素后紧跟{{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hr")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}}, {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("section")}}, {{HTMLElement("table")}}, {{HTMLElement("ul")}}或另一个{{HTMLElement("p")}}元素；或者父元素中没有其他内容了，而且父元素不是{{HTMLElement("a")}}元素
- *允许的父元素*任何接受[flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content)的元素
- _DOM 接口_ {{domxref("HTMLParagraphElement")}}

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

\<p> 元素的 **align** 属性已被弃用，请不要使用。

## 示例

```html
<p>这是第一个段落。这是第一个段落。这是第一个段落。这是第一个段落。</p>
<p>这是第二个段落。这是第二个段落。这是第二个段落。这是第二个段落。</p>
```

输出如下：

{{ EmbedLiveSample('示例') }}

## 注意

使用[CSS](/zh-CN/docs/Web/CSS) {{cssxref("margin")}}属性去改变段落之间的间隙，**不要**在段落之间插入空的段落元素或者{{HTMLElement("br")}}元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
