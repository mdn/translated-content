---
title: 内容分类
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: 3593033ad04260f717f220d25f7d379e427cf82b
---

大多数 [HTML](/zh-CN/docs/Web/HTML) 元素都属于一个或多个**内容类别**——这些类别对具有共同特征的元素进行分组。这是一个松散的分组（它实际上并没有在这些类别的元素之间建立关系），但它们有助于定义和描述这些类别的共同行为及其相关规则，特别是在你遇到它们的复杂细节时。元素也有可能不属于其中的*任何*类别。

以下是三种类型的内容分类：

- 主内容类，描述了很多元素共享的规则；
- 表单相关的内容类，描述了表单相关元素共有的规则；
- 特殊内容类，描述了仅仅在少数元素（有时仅在特定的上下文中）共享的规则。

> [!NOTE]
> 对这些内容类别及其功能的更详细的讨论超出了本文的范围；如果你想了解这些内容，请阅读 [HTML 规范的相关部分](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content)。

![显示各种内容类别相互之间是如何关联的维恩图。后面的部分以文本形式解释这些关系。](content_categories_venn.png)

## 主内容分类

### 元数据内容

属于*元数据内容*（Metadata content）的元素可以修改文档其余部分的呈现或行为、建立与其他文档的链接，或者传达其他*带外*信息。

属于这一类的元素有：{{HTMLElement("base")}}、{{HTMLElement("link")}}、{{HTMLElement("meta")}}、{{HTMLElement("noscript")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}} 和 {{HTMLElement("title")}}。

### 流式内容

流式内容（Flow content）是一个广泛的类别，包括大多数可以包含在 {{HTMLElement("body")}} 元素之内的元素，包括标题元素、分段元素、短语元素、嵌入元素、交互元素和表单相关元素。它还包括文本节点（但不包括那些只由空白字符组成的节点）。

流式元素有：

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("search")}}
- {{HTMLElement("script")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- 纯文本

属于此类的少数其他元素，但仅限于以下特殊情况：

- {{HTMLElement("area")}}，当它为 {{HTMLElement("map")}} 元素的子元素时
- {{HTMLElement("link")}}，若存在 [itemprop](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性
- {{HTMLElement("meta")}}，若存在 [itemprop](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性
- {{HTMLElement("style")}}，若存在 `scoped` {{deprecated_inline}} 属性

### 分段内容

分段内容（Sectioning content）是流式内容的一个子集，可以在[当前大纲中创建一个分段](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)，它定义了 {{HTMLElement("header")}} 元素、{{HTMLElement("footer")}} 元素和[标题内容](#标题内容)的范围。

属于此类的元素有：{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}} 和 {{HTMLElement("section")}}。

### 标题内容

标题内容（Heading content）是流式内容的一个子集，定义了分段的标题，而这个分段可能由一个明确的[分段内容](#分段内容)元素直接标记，也可能由标题本身隐式地定义。

属于此分类的元素有：{{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}} 和 {{HTMLElement("hgroup")}}。

> [!NOTE]
> 尽管 {{HTMLElement("header")}} 可能包含一些标题内容，但其并不是标题内容本身。

> [!NOTE]
> 已不再推荐使用 {{HTMLElement("hgroup")}} 元素，因为它不能与辅助技术一起正常工作。在 HTML 5 最终定稿之前，它已从 W3C 的 HTML 规范中删除，但其仍属于 WHATWG 规范，并且仍被大多数浏览器部分支持。

### 短语内容

短语内容（Phrasing content）是流式内容的一个子集，定义了文档中的文本和标记。短语内容的序列构成段落。

属于此类的元素有：

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- 纯文本（仅当所包含的内容不完全为空白字符）

一些其他的元素也属于这个分类，但仅限于以下特殊情况：

- {{HTMLElement("a")}}，当它仅包含短语内容时
- {{HTMLElement("area")}}，当它为 {{HTMLElement("map")}} 元素的子元素时
- {{HTMLElement("del")}}，当它仅包含短语内容时
- {{HTMLElement("ins")}}，当它仅包含短语内容时
- {{HTMLElement("link")}}，若存在 [itemprop](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性
- {{HTMLElement("map")}}，当它仅包含短语内容时
- {{HTMLElement("meta")}}，若存在 [itemprop](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemprop) 属性

### 嵌入内容

嵌入内容（Embedded content）是流式内容的一个子集，它导入另一种资源，或者将来自另一种标记语言或命名空间的内容插入到文档中。属于此类的元素有：

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

### 交互内容

交互内容（Interactive content）是流式内容的一个子集，包含为用户交互而特别设计的元素。属于此类的元素有：

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

一些其他的元素也属于这个分类，但仅限于以下特殊情况：

- {{HTMLElement("a")}}，若存在 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/a#href) 属性
- {{HTMLElement("audio")}}，若存在 [`controls`](/zh-CN/docs/Web/HTML/Reference/Elements/audio#controls) 属性
- {{HTMLElement("img")}}，若存在 [`usemap`](/zh-CN/docs/Web/HTML/Reference/Elements/img#usemap) 属性
- {{HTMLElement("input")}}，若 [type](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 属性不处于隐藏（hidden）状态
- {{HTMLElement("object")}}，若存在 [`usemap`](/zh-CN/docs/Web/HTML/Reference/Elements/object#usemap) 属性
- {{HTMLElement("video")}}，若存在 [`controls`](/zh-CN/docs/Web/HTML/Reference/Elements/video#controls) 属性

### 可感知内容

当内容既不是空的也不是隐藏的时候，它就是可感知（palpable）的；它是被渲染的内容，是实质性的。以流式内容为模型的元素应该至少有一个节点是可感知的。

### 表单相关内容

表单相关内容（Form-associated content）是流式内容的一个子集，包括有表单所有者（通过 **form** 属性暴露）的元素，可以在预期有流式内容的地方使用。表单所有者要么是容纳这些元素的 {{HTMLElement("form")}} 元素，要么是在 **form** 属性中指定其 id 的元素。

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
  - : 在 {{domxref("HTMLFormElement.elements", "form.elements")}} 和 `fieldset.elements` 集合中列举出的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可标记的元素（labelable）
  - : 可以与 {{HTMLElement("label")}} 相关联的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("meter")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可提交的元素（submittable）
  - : 包括当表单提交时可以用来组成表单数据的元素。包括 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。
- 可重置的元素（resettable）
  - : 当表单重置时会被重置的元素。包括 {{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}} 和 {{HTMLElement("textarea")}}。

## 二级分类

这里还有一些你需要注意的二级分类元素。

### 支持脚本元素

**支持脚本元素**（Script-supporting element）是不直接影响文档渲染输出的元素。相反，它们的作用是支持脚本，或者直接包含或指定脚本代码，或者指定将被脚本使用的数据。

支持脚本元素有：

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## 透明内容模型

如果一个元素拥有透明内容（Transparent content）模型，即使将透明内容移除并使用子元素取代，其内容也必须构成有效的 HTML5。

例如，{{HTMLElement("del")}} 和 {{HTMLELement("ins")}} 是透明的：

```html
<p>
  我们认为以下真理是<del><em>神圣而不可否认</em></del
  ><ins>不言而喻</ins>的。
</p>
```

即使这两个元素被移除，这个代码段依然是有效的（至少从代码语法上）。

```html
<p>我们认为以下真理是<em>神圣而不可否认</em>不言而喻的。</p>
```
