---
title: 内容分类
slug: Web/HTML/Content_categories
---

{{HTMLSidebar}}

每一个 [HTML](/zh-CN/docs/Web/HTML) 元素都必须遵循定义了它可以包含哪一类内容的规则。这些规则被归类为几个常见的元素**内容模型**（content model）。这是一个松散的分组（它实际上并没有在这些类别的元素之间建立关系），但它们有助于定义和描述这些类别的共同行为及其相关规则，特别是当你遇到它们的复杂细节时。元素也有可能不是这些类别的*任何*成员。

以下是三种类型的内容分类：

- 主内容类，描述了很多元素共享的内容规范；
- 表单相关的内容类，描述了表单相关元素共有的内容规范；
- 特殊内容类，描述了仅仅在某些特殊元素上才需要遵守的内容规范，通常这些元素都有特殊的上下文关系。

[![A Venn diagram showing how the various content categories interrelate. The following sections explain these relationships in text.](content_categories_venn.png)](/zh-CN/docs/Web/Guide/HTML/Content_categories/content_categories_venn.png)

## 主内容分类

### 元数据内容

属于*元数据内容*（Metadata content）的元素可以修改文档其余部分的呈现或行为，建立与其他文档的链接，或者传达其他*外带*信息。

属于这一类的元素有：{{HTMLElement("base")}}、{{HTMLElement("command")}} {{Deprecated_Inline}}、{{HTMLElement("link")}}、{{HTMLElement("meta")}}、{{HTMLElement("noscript")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}} 和 {{HTMLElement("title")}}。

### 流式内容

流式内容（Flow content）是一个广泛的类别，包括大多数可以包含在 {{HTMLElement("body")}} 元素之内的元素，包括标题元素、分段元素、措辞元素、嵌入元素、互动元素和表单相关元素。它还包括文本节点（但不包括那些只由空白字符组成的节点）。

流式元素有：{{HTMLElement("a")}}、{{HTMLElement("abbr")}}、{{HTMLElement("address")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("audio")}}、{{HTMLElement("b")}}、{{HTMLElement("bdo")}}、{{HTMLElement("bdi")}}、{{HTMLElement("blockquote")}}、{{HTMLElement("br")}}、{{HTMLElement("button")}}、{{HTMLElement("canvas")}}、{{HTMLElement("cite")}}、{{HTMLElement("code")}}、{{HTMLElement("command")}} {{deprecated_inline}}、{{HTMLElement("data")}}、{{HTMLElement("datalist")}}、{{HTMLElement("del")}}、{{HTMLElement("details")}}、{{HTMLElement("dfn")}}、{{HTMLElement("div")}}、{{HTMLElement("dl")}}、{{HTMLElement("em")}}、{{HTMLElement("embed")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("figure")}}、{{HTMLElement("footer")}}、{{HTMLElement("form")}}、{{HTMLElement("h1")}}、{{HTMLElement("h2")}}、{{HTMLElement("h3")}}、{{HTMLElement("h4")}}、{{HTMLElement("h5")}}、{{HTMLElement("h6")}}、{{HTMLElement("header")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("hr")}}、{{HTMLElement("i")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{HTMLElement("input")}}、{{HTMLElement("ins")}}、{{HTMLElement("kbd")}}、{{HTMLElement("label")}}、{{HTMLElement("main")}}、{{HTMLElement("map")}}、{{HTMLElement("mark")}}、{{MathMLElement("math")}}、{{HTMLElement("menu")}}、{{HTMLElement("meter")}}、{{HTMLElement("nav")}}、{{HTMLElement("noscript")}}、{{HTMLElement("object")}}、{{HTMLElement("ol")}}、{{HTMLElement("output")}}、{{HTMLElement("p")}}、{{HTMLElement("picture")}}、{{HTMLElement("pre")}}、{{HTMLElement("progress")}}、{{HTMLElement("q")}}、{{HTMLElement("ruby")}}、{{HTMLElement("s")}}、{{HTMLElement("samp")}}、{{HTMLElement("script")}}、{{HTMLElement("section")}}、{{HTMLElement("select")}}、{{HTMLElement("small")}}、{{HTMLElement("span")}}、{{HTMLElement("strong")}}、{{HTMLElement("sub")}}、{{HTMLElement("sup")}}、{{SVGElement("svg")}}、{{HTMLElement("table")}}、{{HTMLElement("template")}}、{{HTMLElement("textarea")}}、{{HTMLElement("time")}}、{{HTMLElement("u")}}、{{HTMLElement("ul")}}、{{HTMLElement("var")}}、{{HTMLElement("video")}}、和 {{HTMLElement("wbr")}}。

属于此类的少数其他元素（仅限于某种特殊情形，这些元素才会属于此类）：

- {{HTMLElement("area")}}，仅限于它作为 {{HTMLElement("map")}} 的子节点的情形
- {{HTMLElement("link")}}，仅限于 [itemprop](/zh-CN/docs/Web/HTML/Global_attributes/itemprop) 属性存在的情形
- {{HTMLElement("meta")}}，仅限于 [itemprop](/zh-CN/docs/Web/HTML/Global_attributes/itemprop) 属性存在的情形
- {{HTMLElement("style")}}，仅限于 `scoped` {{deprecated_inline}} 属性存在的情形

### 分段内容

分段内容（Sectioning content）是流式内容的一个子集，可以在任何可以使用流式内容的地方出现。属于分段内容模型的元素创建了一个[当前大纲中的分段](/zh-CN/docs/Web/HTML/Element/Heading_Elements)，它定义了 {{HTMLElement("header")}} 元素、{{HTMLElement("footer")}} 元素和[标题内容](#标题内容)的范围。

属于此类的元素有：{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}} 和 {{HTMLElement("section")}}。

### 标题内容

标题内容（Heading content）是流式内容的一个子集，定义了分段的标题，而这个分段可能由一个明确的[分段内容](#分段内容)元素直接标记，也可能由标题本身隐式地定义。标题内容可以在任何可以使用流式内容的地方出现。

属于此分类的元素有：{{HTMLElement("h1")}}、{{HTMLElement("h2")}}、{{HTMLElement("h3")}}、{{HTMLElement("h4")}}、{{HTMLElement("h5")}}、{{HTMLElement("h6")}} 和 {{HTMLElement("hgroup")}}。

> **备注：** 尽管 {{HTMLElement("header")}} 可能包含一些标题内容，但其并不是标题内容本身。

> **备注：** {{HTMLElement("hgroup")}} 元素已不再推荐使用，因为它不能与辅助性技术正常配合工作。在 HTML 5 定稿之前，它已从 W3C 的 HTML 规范中删除，但仍是 WHATWG 规范的一部分，并且至少被大多数浏览器部分支持。

### 短语内容

短语内容（Phrasing content）是流式内容的一个子集，定义了文本和它包含的标记，且可以在任何可以使用流式内容的地方出现。一些短语内容就构成了段落。

属于此类的元素有：{{HTMLElement("abbr")}}、{{HTMLElement("audio")}}、{{HTMLElement("b")}}、{{HTMLElement("bdo")}}、{{HTMLElement("br")}}、{{HTMLElement("button")}}、{{HTMLElement("canvas")}}、{{HTMLElement("cite")}}、{{HTMLElement("code")}}、{{HTMLElement("command")}} {{Deprecated_Inline}}、{{HTMLElement("datalist")}}、{{HTMLElement("dfn")}}、{{HTMLElement("em")}}、{{HTMLElement("embed")}}、{{HTMLElement("i")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{HTMLElement("input")}}、{{HTMLElement("kbd")}}、{{HTMLElement("label")}}、{{HTMLElement("mark")}}、{{MathMLElement("math")}}、{{HTMLElement("meter")}}、{{HTMLElement("noscript")}}、{{HTMLElement("object")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("q")}}、{{HTMLElement("ruby")}}、{{HTMLElement("samp")}}、{{HTMLElement("script")}}、{{HTMLElement("select")}}、{{HTMLElement("small")}}、{{HTMLElement("span")}}、{{HTMLElement("strong")}}、{{HTMLElement("sub")}}、{{HTMLElement("sup")}}、{{SVGElement("svg")}}、{{HTMLElement("textarea")}}、{{HTMLElement("time")}}、{{HTMLElement("var")}}、{{HTMLElement("video")}}、{{HTMLElement("wbr")}} 和纯文本（仅当所包含的内容不完全为空字符）。

一些其他的元素也属于这个分类，但是只有当如下特殊情况时才会实现：

- {{HTMLElement("a")}}，当它仅包含短语内容时
- {{HTMLElement("area")}}，当它为 {{HTMLElement("map")}} 元素的子元素时
- {{HTMLElement("del")}}，当它仅包含短语内容时
- {{HTMLElement("ins")}}，当它仅包含短语内容时
- {{HTMLElement("link")}}，仅限于 [itemprop](/zh-CN/docs/Web/HTML/Global_attributes/itemprop) 属性存在的情形
- {{HTMLElement("map")}}，当它仅包含短语内容时
- {{HTMLElement("meta")}}，仅限于 [itemprop](/zh-CN/docs/Web/HTML/Global_attributes/itemprop) 属性存在的情形

### 嵌入内容

嵌入内容（Embedded content）是流式内容的一个子集，它将来自另一种标记语言或命名空间的内容插入到文档中，且可以在任何可以使用流式内容的地方出现。属于此类的元素有：{{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{MathMLElement("math")}}、{{HTMLElement("object")}}、{{HTMLElement("picture")}}、{{SVGElement("svg")}} 和 {{HTMLElement("video")}}。

### 交互内容

交互式内容（Interactive content）是流式内容的一个子集，包含为用户交互而特别设计的元素，且可以在任何可以使用流式内容的地方出现。属于此类的元素有：{{HTMLElement("a")}}、{{HTMLElement("button")}}、{{HTMLElement("details")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}}、{{HTMLElement("label")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。

仅在特殊情形下才会属于此类的元素有：

- {{HTMLElement("audio")}}，若 [`controls`](/zh-CN/docs/Web/HTML/Element/audio#controls) 属性存在
- {{HTMLElement("img")}}，若 [`usemap`](/zh-CN/docs/Web/HTML/Element/img#usemap) 属性存在
- {{HTMLElement("input")}}，若 [type](/zh-CN/docs/Web/HTML/Element/input#type) 属性不处于隐藏（hidden）状态
- {{HTMLElement("object")}}，若 [`usemap`](/zh-CN/docs/Web/HTML/Element/object#usemap) 属性存在
- {{HTMLElement("video")}}，若 [`controls`](/zh-CN/docs/Web/HTML/Element/video#controls) 属性存在

### 可感知内容

当内容既不是空的也不是隐藏的时候，它就是可感知（palpable）的；它是被渲染的内容，是实质性的。模型为流动内容的元素应该至少有一个节点是可感知的。

### 表单相关内容

与表单相关的内容（Form-associated content）是流程内容的一个子集，包括有表单所有者的元素，通过 **form** 属性暴露出来，可以在预期有流式内容的地方使用。表单所有者要么是包含 {{HTMLElement("form")}} 的元素，要么是在 **form** 属性中指定其 id 的元素。

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

此类包含了几个子类：

- 可列举的元素（listed）
  - : 在 {{domxref("HTMLFormElement.elements", "form.elements")}} 和 fieldset.elements IDL collection 中列举出的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可标记的元素（labelable）
  - : 和 {{HTMLElement("label")}} 相关联的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("meter")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可提交的元素（submittable）
  - : 包括当表单提交时可以用来组成表单数据的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可重置的元素（resettable）
  - : 当表单重置时会被重置的元素。包括 {{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。

## 二级分类

这里还有一些你需要注意的二级分类元素。

### 支持脚本元素

**支持脚本的元素**（Script-supporting elements）不会直接渲染输出在页面文档中。相反，它们的作用是支持脚本，或者直接包含或指定脚本代码，或者指定将被脚本使用的数据。

这些支持脚本的元素有：

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## 透明内容模型

如果一个元素拥有透明内容模型（Transparent content model），即使将透明内容移除并使用子元素取代，其内容也必须由合法的 HTML5 元素组成。

例如，{{HTMLElement("del")}} 和 {{HTMLELement("ins")}} 是透明的：

```html
<p>
  We hold these truths to be <del><em>sacred &amp; undeniable</em></del>
  <ins>self-evident</ins>.
</p>
```

即使这两个元素被移除，这个代码段依然是合法的（至少从代码语法上）。

```html
<p>We hold these truths to be <em>sacred &amp; undeniable</em> self-evident.</p>
```
