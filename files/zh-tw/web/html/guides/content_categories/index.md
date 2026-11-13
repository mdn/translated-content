---
title: 內容類型
slug: Web/HTML/Guides/Content_categories
---

每個 HTML 元素都要遵從該元素可擁有何種內容規則，這些規則被歸為幾種常用的內容模型（content model）。每個 HTML 元素都屬於零個、一個、或數個內容的模型，所有元素內容的設置規則都要遵從 HTML 一致性文件。

內容類型有三種類型：

- 主要內容類型（Main content category）描述了許多元素共享的常見內容規則（content rule）。
- 表單相關內容類型（Form-related content category）描述了表單相關元素的內容規則。
- 特別內容類型（Specific content category）描述了只有少數元素共享的內容規則，有時甚至只有特定上下文。

![Content_categories_venn.png](content_categories_venn.png)

## 主要內容類型

### 元資訊內容

屬於*元資訊內容*（Metadata content）類型的元素修飾該文件其餘部分的陳述或行為、與其他文件建立連結、或是傳達其他*外來*（out of band）訊息。

屬於這個類型的元素有 {{HTMLElement("base")}}、{{HTMLElement("link")}}、{{HTMLElement("meta")}}、{{HTMLElement("noscript")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}} 與 {{HTMLElement("title")}}。

### 流內容

屬於流內容（Flow content）的元素通常含有文字或嵌入內容。它們是：

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
- 純文本

在滿足特定條件下，某些元素也屬這個類型：

- {{HTMLElement("area")}}，如果它是 {{HTMLElement("map")}} 元素的後代。
- {{HTMLElement("link")}}，如果 [itemprop](/zh-TW/docs/Web/HTML/Reference/Global_attributes/itemprop) 屬性存在。
- {{HTMLElement("meta")}}，如果 [itemprop](/zh-TW/docs/Web/HTML/Reference/Global_attributes/itemprop) 屬性存在。
- {{HTMLElement("style")}}，如果 `scoped` {{deprecated_inline}} 屬性存在。

### 章節型內容

屬於章節型內容（Sectioning content）模型的元素會[在該大綱裡面創立章節](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements)，這個章節會定義 {{HTMLElement("header")}}、{{HTMLElement("footer")}}，還有[標題型內容](#標題型內容)的範圍。

屬於這個類型的元素有{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}} 還有 {{HTMLElement("section")}}。

### 標題型內容

標題型內容（Heading content）定義了章節的標題，不論該章節由明確的[章節型內容](#章節型內容)元素標記、抑或由標題本身隱式定義。

屬於這個類型的元素有 {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}} 和 {{HTMLElement("hgroup")}}。

> [!NOTE]
> 儘管 {{HTMLElement("header")}} 可能含有某些標題型內容，但它本身並不是。

### 段落型內容

段落型內容（Phrasing content）定義了文字、還有它包含的標記。段落型內容構成段落。

屬於這個類型的元素有：

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
- 包含空白字符在內的純文本

在滿足特定條件下，某些元素也屬這個類型：

- {{HTMLElement("a")}}，如果它只包含段落型內容。
- {{HTMLElement("area")}}，如果它是 {{HTMLElement("map")}} 元素的後代。
- {{HTMLElement("del")}}，如果它只包含段落型內容。
- {{HTMLElement("ins")}}，如果它只包含段落型內容。
- {{HTMLElement("link")}}，如果 [itemprop](/zh-TW/docs/Web/HTML/Reference/Global_attributes/itemprop) 屬性存在。
- {{HTMLElement("map")}}，如果它只包含段落型內容。
- {{HTMLElement("meta")}}，如果 [itemprop](/zh-TW/docs/Web/HTML/Reference/Global_attributes/itemprop) 屬性存在。

### 嵌入型內容

嵌入型內容（Embedded content）從其他標記語言或文件命名空間，導入資源或插入內容。屬於這個類型的元素有：

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

### 互動型內容

互動型內容（Interactive content）包含專為用戶互動設計的元素。屬於這個類型的元素有：

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

在滿足特定條件下，某些元素也屬這個類型：

- {{HTMLElement("a")}}，如果 [`href`](/zh-TW/docs/Web/HTML/Reference/Elements/a#href) 屬性存在。
- {{HTMLElement("audio")}}，如果 [`controls`](/zh-TW/docs/Web/HTML/Reference/Elements/audio#controls) 屬性存在。
- {{HTMLElement("img")}}，如果 [`usemap`](/zh-TW/docs/Web/HTML/Reference/Elements/img#usemap) 屬性存在。
- {{HTMLElement("input")}}，如果 [`type`](/zh-TW/docs/Web/HTML/Reference/Elements/input#type) 屬性不是隱藏狀態。
- {{HTMLElement("object")}}，如果 [`usemap`](/zh-TW/docs/Web/HTML/Reference/Elements/object#usemap) 屬性存在。
- {{HTMLElement("video")}}，如果 [`controls`](/zh-TW/docs/Web/HTML/Reference/Elements/video#controls) 屬性存在。

### 捫及內容

不是空白或隱藏的內容稱為捫及內容（Palpable content）。屬於流內容或是段落型內容模型的元素最少要有一個捫及的節點。

### 表單相關內容

表單相關內容（Form-associated content）包含了由 **form** 屬性顯露的 form owner 元素。form owner 是本身包含於 {{HTMLElement("form")}} 或 id 由 **form** 屬性指定的元素。

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

本類型包含某些子類別:

- listed
  - : {{domxref("HTMLFormElement.elements", "form.elements")}} 和 `fieldset.elements` 集合中列出的元素。包含 {{HTMLElement("button")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}。
- labelable
  - : 與元素 {{HTMLElement("label")}} 相關的元素。包含 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("meter")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}。
- submittable
  - : 用在建構送出時，資料就設定好的表單元素。包含 {{HTMLElement("button")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}。
- resettable
  - : 當表單重設時會受影響的元素。包含 {{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}。

## 透明內容模型

如果一個元素是透明內容模型（Transparent content model），則其內容的結構必須使其為有效的 HTML 5，就算該透明元素被移除並由子元素取代也是如此。

例如，{{HTMLElement("del")}} 與 {{HTMLELement("ins")}} 元素都是透明的：

```html
<p>
  我們認為下面這些真理是<del><em>神聖不可否認</em></del
  ><ins>不言而喻的。</ins>
</p>
```

如果這些元素被刪掉的話，這個分段依然在 HTML 有效（如果不修正語法）。

```html
<p>我們認為下面這些真理是<em>神聖不可否認</em>不言而喻的。</p>
```
