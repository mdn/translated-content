---
title: HTML 元素参考
slug: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

此页面列出了所有使用{{Glossary("Tag","标签")}}创建的 {{Glossary("HTML")}} {{Glossary("Element","元素")}}。

它们已被按照功能进行分组，以便更轻松地找到你想要的内容。同时，侧边栏中也按照字母排序列出了所有元素。

> **备注：** 若想获知更多关于 HTML 元素、属性的基本信息，请查阅 [HTML 介绍](/zh-CN/docs/learn/HTML/Introduction_to_HTML)中的相关内容。

## 主根元素

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("html")}} | **HTML `<html>` 元素** 表示一个 HTML 文档的根（顶级元素），所以它也被称为*根元素*。所有其他元素必须是此元素的后代。 |

## 文档元数据

元数据（Metadata）含有页面的相关信息，包括样式、脚本及数据，能帮助一些软件（例如{{Glossary("search engine", "搜索引擎")}}、{{Glossary("Browser","浏览器")}} 等等）更好地运用和渲染页面。对于样式和脚本的元数据，可以直接在网页里定义，也可以链接到包含相关信息的外部文件。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("base")}}  | **HTML \<base> 元素** 指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 \<base> 元素。 |
| {{HTMLElement("head")}}  | **HTML head 元素** 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。 |
| {{HTMLElement("link")}}  | **HTML 外部资源链接元素** (**`<link>`**) 规定了当前文档与外部资源的关系。该元素最常用于链接[样式表](/zh-CN/docs/Glossary/CSS)，此外也可以被用来创建站点图标 (比如 PC 端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。 |
| {{HTMLElement("meta")}}  | **[HTML](/zh-CN/docs/Web/HTML) `<meta>` 元素**表示那些不能由其它 HTML 元相关（meta-related）元素表示的{{Glossary("Metadata","元数据")}}信息。如：{{HTMLElement("base")}}、{{HTMLElement("link")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}} 或 {{HTMLElement("title")}}。 |
| {{HTMLElement("style")}} | **HTML** 的 `<style>` 元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是[CSS](/zh-CN/docs/Web/CSS)的格式。 |
| {{HTMLElement("title")}} | **HTML `<title>` 元素** 定义文档的标题，显示在{{glossary("Browser", "浏览器")}}的标题栏或标签页上。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。 |

## 分区根元素

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("body")}} | **HTML `body` 元素**表示文档的内容。{{domxref("document.body")}} 属性提供了可以轻松访问文档的 body 元素的脚本。 |

## 内容分区

内容分区元素允许你将文档内容从逻辑上进行组织划分。使用包括页眉（header）、页脚（footer）、导航（nav）和标题（h1~h6）等分区元素，来为页面内容创建明确的大纲，以便区分各个章节的内容。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("address")}}                                                                                                                                                                                                                                                                                                                           | **HTML `<address>` 元素** 表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息。 |
| {{HTMLElement("article")}}                                                                                                                                                                                                                                                                                                                           | **HTML `<article>`** 元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。 |
| {{HTMLElement("aside")}}                                                                                                                                                                                                                                                                                                                             | **HTML `<aside>` 元素**表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。 |
| {{HTMLElement("footer")}}                                                                                                                                                                                                                                                                                                                            | **HTML \<footer> 元素**表示最近一个[章节内容](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Sections_in_HTML5)或者[根节点](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root)（sectioning root）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。 |
| {{HTMLElement("header")}}                                                                                                                                                                                                                                                                                                                            | **HTML `<header>` 元素**用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。 |
| [`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) | **HTML `<h1>`–`<h6>` 标题 (Heading) 元素**呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低。 |
| {{HTMLElement("main")}}                                                                                                                                                                                                                                                                                                                              | HTML **`<main>` 元素**呈现了文档的 {{HTMLElement("body")}} 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。 |
| {{HTMLElement("nav")}}                                                                                                                                                                                                                                                                                                                               | **HTML `<nav>`元素**表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。 |
| {{HTMLElement("section")}}                                                                                                                                                                                                                                                                                                                           | **HTML \<section\> 元素**表示 HTML 文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。 |

## 文本内容

使用 HTML 文本内容元素来组织在开标签 {{HTMLElement("body")}} 和闭标签 `</body>` 里的块或章节的内容。这些元素能标识内容的宗旨或结构，而这对于{{Glossary("accessibility","无障碍")}}和{{Glossary("SEO","搜索引擎优化")}}很重要。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("blockquote")}} | **HTML `<blockquote>` 元素**（或者 HTML 块级引用元素），代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（[注](/zh-CN/docs/Web/HTML/Element/blockquote#Notes) 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 {{HTMLElement("cite")}} 元素。 |
| {{HTMLElement("dd")}}         | **HTML `<dd>` 元素**（_HTML 描述元素_）用来指明一个描述列表 ({{HTMLElement("dl")}}) 元素中一个术语的描述。这个元素只能作为描述列表元素的子元素出现，并且必须跟着一个 {{HTMLElement("dt")}} 元素。 |
| {{HTMLElement("div")}}        | **[HTML](/zh-CN/docs/Web/HTML) `<div>` 元素** (或 _HTML 文档分区元素_) 是一个通用型的流内容容器，在不使用{{glossary("CSS")}}的情况下，其对内容或布局没有任何影响。 |
| {{HTMLElement("dl")}}         | **HTML `<dl>` 元素** （或 _HTML_ _描述列表元素_）是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)。 |
| {{HTMLElement("dt")}}         | **HTML `<dt>` 元素** （或 _HTML 术语定义元素_）用于在一个定义列表中声明一个术语。该元素仅能作为 {{HTMLElement("dl")}} 的子元素出现。通常在该元素后面会跟着 {{HTMLElement("dd")}} 元素，然而，多个连续出现的 `<dt>` 元素都将由出现在它们后面的第一个 {{HTMLElement("dd")}} 元素定义。 |
| {{HTMLElement("figcaption")}} | **HTML `<figcaption>` 元素** 是与其相关联的图片的说明/标题，用？于描述其父节点 {{HTMLElement("figure")}} 元素里的其他数据。这意味着 `<figcaption>` 在{{HTMLElement("figure")}} 块里是第一个或最后一个。同时 HTML Figcaption 元素是可选的；如果没有该元素，这个父节点的图片只是会没有说明/标题。 |
| {{HTMLElement("figure")}}     | [HTML](/zh-CN/docs/Web/HTML) **`<figure>`** 元素代表一段独立的内容，可能包含 {{HTMLElement("figcaption")}} 元素定义的说明元素。该插图、标题和其中的内容通常作为一个独立的引用单元。 |
| {{HTMLElement("hr")}}         | **HTML `<hr>`  元素**表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。 |
| {{HTMLElement("li")}}         | **HTML `<li>` 元素** （或称 _HTML 列表条目元素）_ 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表 ({{HTMLElement("ol")}})，一个无序列表 ({{HTMLElement("ul")}})，或者一个菜单 ({{HTMLElement("menu")}})。在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。 |
| {{HTMLElement("menu")}}       | **HTML `<menu>` 元素**呈现了一组用户可执行或激活的命令。这既包含了可能出现在屏幕顶端的列表菜单，也包含了那些隐藏在按钮之下、当点击按钮后显示出来的文本菜单。 |
| {{HTMLElement("ol")}}         | **HTML `<ol>` 元素**表示有序列表，通常渲染为一个带编号的列表。 |
| {{HTMLElement("p")}}          | **HTML \<p>**元素（或者说 HTML 段落元素）表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。另外，\<p> 是[块级元素](/zh-CN/docs/HTML/Block-level_elements)。 |
| {{HTMLElement("pre")}}        | **HTML \<pre>** 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 \<pre> 开始标签后的换行符也会被省略) |
| {{HTMLElement("ul")}}         | [HTML](/zh-CN/docs/Web/HTML) **`<ul>`** 元素表示一系列无序的列表项目，通常渲染为项目符号列表。 |

## 内联文本语义

使用 HTML 内联文本语义定义单词、内容、或任意文字的语义、结构或样式。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("a")}}      | **HTML `<a>` 元素**（或称锚元素）可以通过[它的 `href` 属性](#href)创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。`<a>` 中的内容**应该**应该指明链接的意图。如果存在 [`href` 属性](#href)，当 `<a>` 元素聚焦时按下回车键就会激活它。 |
| {{HTMLElement("abbr")}}   | **HTML 缩写元素**（**`<abbr>`**）用于代表缩写，并且可以通过可选的 {{htmlattrxref("title")}} 属性提供完整的描述。若使用 `title` 属性，则它必须且仅可包含完整的描述内容。 |
| {{HTMLElement("b")}}      | **HTML 提醒注意（Bring Attention To）元素（`<b>`）**用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是**粗体（Boldface）元素**，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 `<b>` 元素用于显示粗体文字；替代方案是使用 CSS {{cssxref("font-weight")}} 属性来创建粗体文字。 |
| {{HTMLElement("bdi")}}    | **HTML** 双向隔离元素（**`<bdi>`**）告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时，此功能特别有用。 |
| {{HTMLElement("bdo")}}    | HTML 双向文本替代元素 (**`<bdo>`**) 改写了文本的方向性，使文本以不同的方向渲染呈现出来 (override 可以翻译很多意思，编程语言中多用覆盖，重载；这里采用了 Google 的整体翻译，取替代替换改写之意) |
| {{HTMLElement("br")}}     | **HTML \<br> 元素**在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。 |
| {{HTMLElement("cite")}}   | _HTML 引用（Citation）标签_ (**\<cite>**) 表示一个作品的引用，且必须包含作品的标题。这个引用可能是一个根据适当的上下文约定关联引用的元数据的缩写。 |
| {{HTMLElement("code")}}   | **HTML `<code>` 元素**呈现一段计算机代码。默认情况下，它以浏览器的默认等宽字体显示。 |
| {{HTMLElement("data")}}   | **HTML `<data>` 元素**将一个指定内容和机器可读的翻译联系在一起。但是，如果内容是与时间或者日期相关的，则一定要使用 {{HTMLElement("time")}}。 |
| {{HTMLElement("dfn")}}    | _HTML 定义元素_ (**\<dfn>**) 表示术语的一个定义。 |
| {{HTMLElement("em")}}     | **HTML 着重元素** (**`<em>`**) 标记出需要用户着重阅读的内容， `<em>` 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。 |
| {{HTMLElement("i")}}      | **HTML 元素 `<i>`** 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。 |
| {{HTMLElement("kbd")}}    | HTML 键盘输入元素 (**\<kbd>**) 用于表示用户输入，它将产生一个行内元素，以浏览器的默认 monospace 字体显示。 |
| {{HTMLElement("mark")}}   | HTML 标记文本元素 (< Mark >) 表示为引用或符号目的而标记或突出显示的文本，这是由于标记的段落在封闭上下文中的相关性或重要性造成的。 |
| {{HTMLElement("q")}}      | _HTML 引用标签_ (**\<q>**) 表示一个封闭的并且是短的行内引用的文本。这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 {{HTMLElement("blockquote")}} 替代。 |
| {{HTMLElement("rp")}}     | **HTML `<rp>` 元素**用于为那些不能使用 {{HTMLElement("ruby") }} 元素展示 ruby 注解的浏览器，提供随后的圆括号。 |
| {{HTMLElement("rt")}}     | **HTML Ruby 文本 (`<rt>`) 元素**包含字符的发音，字符在 ruby 注解中出现，它用于描述东亚字符的发音。这个元素始终在 {{ HTMLElement("ruby") }} 元素中使用。 |
| {{HTMLElement("ruby")}}   | **HTML `<ruby>` 元素** 被用来展示东亚文字注音或字符注释。 |
| {{HTMLElement("s")}}      | **HTML `<s>` 元素** 使用删除线来渲染文本。使用 `<s>` 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 `<s>` ；为此，提倡使用 {{ HTMLElement("del") }} 和 {{ HTMLElement("ins") }} 元素。 |
| {{HTMLElement("samp")}}   | \<samp> 元素用于标识计算机程序输出，通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。 |
| {{HTMLElement("small")}}  | HTML 中的\<small>元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在 HTML5 中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。 |
| {{HTMLElement("span")}}   | **HTML `<span>`** 元素是短语内容的通用行内容器，并没有任何特殊语义。可以使用它来编组元素以达到某种样式意图（通过使用类或者 Id 属性），或者这些元素有着共同的属性，比如**lang**。应该在没有其他合适的语义元素时才使用它。`<span>` 与 {{HTMLElement("div")}} 元素很相似，但 {{HTMLElement("div")}} 是一个 [块元素](/zh-CN/docs/HTML/Block-level_elements) 而 `<span>` 则是 [行内元素](/zh-CN/docs/HTML/Inline_elements). |
| {{HTMLElement("strong")}} | Strong 元素 (`<strong>`) 表示文本十分重要，一般用粗体显示。 |
| {{HTMLElement("sub")}}    | **HTML `<sub>` 元素**定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更低并且更小。 |
| {{HTMLElement("sup")}}    | **HTML `<sup>` 元素**定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更高并且更小。 |
| {{HTMLElement("time")}}   | HTML _time_ 标签 (`<time>`) 用来表示 24 小时制时间或者[公历日期](http://en.wikipedia.org/wiki/Gregorian_calendar)，若表示日期则也可包含时间和时区。 |
| {{HTMLElement("u")}}      | **HTML `<u>` 元素（表意不清标注元素）**表示一个需要标注为非文本化（non-textual）的内联文本域。默认情况下渲染为一个实线下划线，可以用 CSS 替换。 |
| {{HTMLElement("var")}}    | [HTML](/zh-CN/docs/Web/HTML) **`<var>`** 元素表示数学表达式或编程上下文中的变量名称。尽管该行为取决于浏览器，但通常使用当前字体的斜体形式显示。 |
| {{HTMLElement("wbr")}}    | **HTML `<wbr>` 元素** — 一个文本中的位置，其中浏览器可以选择来换行，虽然它的换行规则可能不会在这里换行。 |

## 图片和多媒体

HTML 支持各种多媒体资源，例如图像、音频和视频。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("area")}}  | _HTML `<area>` 元素 在图片上定义一个热点区域，可以关联一个超链接。\<area>元素仅在\<map>元素内部使用。_ |
| {{HTMLElement("audio")}} | **HTML `<audio>` **元素用于在文档中嵌入音频内容。 `<audio>` 元素可以包含一个或多个音频资源，这些音频资源可以使用 `src` 属性或者{{HTMLElement("source")}} 元素来进行描述：浏览器将会选择最合适的一个来使用。也可以使用 {{domxref("MediaStream")}} 将这个元素用于流式媒体。 |
| {{HTMLElement("img")}}   | **`<img>`** [HTML](/zh-CN/docs/Web/HTML) 元素将一张图像嵌入文档。 |
| {{HTMLElement("map")}}   | > **备注：** 这篇文章翻译不完整 |
| {{HTMLElement("track")}} | **HTML `<track>` 元素** 被当作媒体元素—{{HTMLElement("audio")}} 和 {{HTMLElement("video")}}的子元素来使用。它允许指定时序文本字幕（或者基于时间的数据），例如自动处理字幕。字幕格式有 [WebVTT 格式](/zh-CN/docs/Web/API/Web_Video_Text_Tracks_Format)（`.vtt`格式文件）— Web 视频文本字幕格式，以及指[时序文本标记语言（TTML）](https://w3c.github.io/ttml2/index.html)格式。 |
| {{HTMLElement("video")}} | **HTML `<video>` 元素** 用于在 HTML 或者 XHTML 文档中嵌入媒体播放器，用于支持文档内的视频播放。你也可以将 `<video>` 标签用于音频内容，但是 {{HTMLElement("audio")}} 元素可能在用户体验上更合适。 |

## 内嵌内容

除了常规的多媒体内容，HTML 可以包括各种其他的内容，即使它并不容易交互。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("embed")}}   | **HTML `<embed>` 元素**将外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。 |
| {{HTMLElement("iframe")}}  | **HTML 内联框架元素 (`<iframe>`)** 表示嵌套的{{Glossary("browsing context")}}。它能够将另一个 HTML 页面嵌入到当前页面中。 |
| {{HTMLElement("object")}}  | **HTML `<object>` 元素**（或者称作 _HTML 嵌入对象元素_）表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源。 |
| {{HTMLElement("picture")}} | **HTML `<picture>` 元素**通过包含零或多个 {{HTMLElement("source")}} 元素和一个 {{HTMLElement("img")}} 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 `<source>` 元素，如果没有匹配的，就选择 `<img>` 元素的 {{htmlattrxref("src", "img")}} 属性中的 URL。然后，所选图像呈现在\<img>元素占据的空间中。 |
| {{HTMLElement("portal")}}  | Enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages. |
| {{HTMLElement("source")}}  | **HTML `<source>` **元素为 {{HTMLElement("picture")}}, {{HTMLElement("audio")}} 或者 {{HTMLElement("video")}} 元素指定多个媒体资源。这是一个空元素。它通常用于以[不同浏览器支持的多种格式](/zh-CN/docs/Web/HTML/Supported_media_formats)提供相同的媒体内容。 |

## SVG 和 MathML

你可以使用 {{SVGElement("svg")}} 或 {{MathMLElement("math")}} 将 [SVG](/zh-CN/docs/Web/SVG) 或 [MathML](/zh-CN/docs/Web/MathML) 内容直接嵌入 HTML 文档。

| 元素 | 描述 |
| ---- | ---- |
| {{SVGElement("svg")}}     | 思考下下面的 svg 图片（代表意大利国旗）： |
| {{MathMLElement("math")}} | **`<math>`** [MathML](/zh-CN/docs/Web/MathML) 元素是顶级的 MathML 元素，用于编写单个数学公式。可以将其放在允许[流式内容](/zh-CN/docs/Web/HTML/Content_categories#流式内容)的 HTML 内容中。 |

## 脚本

为了创建动态内容和 Web 应用程序，HTML 支持使用脚本语言，最突出的就是 JavaScript。有一些特定的元素用于支持此功能。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("canvas")}}   | `<canvas>` 元素可被用来通过 JavaScript（[Canvas](/zh-CN/docs/Web/API/Canvas_API) API 或 [WebGL](/zh-CN/docs/Web/API/WebGL_API) API）绘制图形及图形动画。 |
| {{HTMLElement("noscript")}} | 如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 **HTML \<noscript> 元素**中定义脚本未被执行时的替代内容。 |
| {{HTMLElement("script")}}   | HTML `<script>` 元素用于嵌入或引用可执行脚本。这通常用作嵌入或者指向 JavaScript 代码。`<script>` 元素也能在其他语言中使用，比如 WebGL 的 GLSL 着色器语言。 |

## 编辑标识

这些元素能标示出某个文本被更改过的部分。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("del")}} | HTML 的 **`<del>`** 标签表示一些被从文档中删除的文字内容。比如可以在需要显示修改记录或者源代码差异的情况使用这个标签。{{HTMLElement("ins")}}标签的作用恰恰于此相反：表示文档中添加的内容。 |
| {{HTMLElement("ins")}} | **HTML `<ins>` 元素**定义已经被插入文档中的文本。 |

## 表格内容

这里的元素用于创建和处理表格数据。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("caption")}}  | **HTML `<caption>` 元素** (or _HTML 表格标题元素_) 展示一个表格的标题，它常常作为 {{HTMLElement("table")}} 的第一个子元素出现，同时显示在表格内容的最前面，但是，它同样可以被 CSS 样式化，所以，它同样可以出现在任何一个一个相对于表格的做任意位置。 |
| {{HTMLElement("col")}}      | **HTML `<col>` 元素** 定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于{{HTMLElement("colgroup")}}元素内。 |
| {{HTMLElement("colgroup")}} | HTML 中的 表格列组（_Column Group_ **\<colgroup>**）标签用来定义表中的一组列表。 |
| {{HTMLElement("table")}}    | [HTML](/zh-CN/docs/Web/HTML) **`table`** 元素表示表格数据——即通过二维数据表表示的信息。 |
| {{HTMLElement("tbody")}}    | **`<tbody>`** [HTML](/zh-CN/docs/Web/HTML) 元素封装了一系列表格的行（{{HTMLElement("tr")}} 元素），代表了它们是表格（{{HTMLElement("table")}}）主要内容的组成部分。 |
| {{HTMLElement("td")}}       | **HTML `<td>` 元素** 定义了一个包含数据的表格单元格。It participates in the _table model_. |
| {{HTMLElement("tfoot")}}    | HTML 元素 **`<tfoot>`** 定义了一组表格中各列的汇总行。 |
| {{HTMLElement("th")}}       | **HTML `<th>` 元素**定义表格内的表头单元格。这部分特征是由 {{htmlattrxref("scope", "th")}} and {{htmlattrxref("headers", "th")}} 属性准确定义的。 |
| {{HTMLElement("thead")}}    | [HTML](/zh-CN/docs/Web/HTML) 的 **`<thead>`** 元素定义了一组定义表格的列头的行。 |
| {{HTMLElement("tr")}}       | **HTML `<tr>` 元素**定义表格中的行。同一行可同时出现{{HTMLElement("td")}} 和{{HTMLElement("th")}} 元素。 |

## 表单

HTML 提供了许多可一起使用的元素，这些元素能用来创建一个用户可以填写并提交到网站或应用程序的表单。详情请参阅 [HTML 表单指南](/zh-CN/docs/Learn/Forms)。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("button")}}   | **HTML `<button>` 元素**表示一个可点击的按钮，可以用在[表单](/zh-CN/docs/Learn/HTML/Forms)或文档其它需要使用简单标准按钮的地方。默认情况下，HTML 按钮的显示样式接近于 {{Glossary("user agent")}} 所在的宿主系统平台（用户操作系统）的按钮，但你可以使用 [CSS](/zh-CN/docs/Web/CSS) 来改变按钮的样貌。 |
| {{HTMLElement("datalist")}} | [HTML](/zh-CN/docs/Web/HTML) **`<datalist>`** 元素包含了一组 {{HTMLElement("option")}} 元素，这些元素表示其它表单控件可选值。 |
| {{HTMLElement("fieldset")}} | {{HTMLSidebar}}**HTML `<fieldset>` **元素用于对表单中的控制元素进行分组（也包括 label 元素）。{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}如上述例子所示，`<fieldset>` 元素将一个 HTML 表单的一部分组成一组，内置了一个 {{htmlelement("legend")}} 元素作为 `fieldset` 的标题。这个元素有几个属性，最值得注意的是 `form`，其可以包含同一页面的 {{htmlelement("form")}} 元素的 `id`，以使 `<fieldset>` 成为这个 `<form>` 的一部分，即使 `<fieldset>` 不在其内。还有 `disabled` 属性，可将 `<fieldset>` 及其所有内容设置为不可用。 |
| {{HTMLElement("form")}}     | **HTML `<form>` 元素**表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。 |
| {{HTMLElement("input")}}    | [HTML](/zh-CN/docs/Web/HTML) **`<input>`** 元素用于为基于 Web 的表单创建交互式控件，以便接受来自用户的数据。取决于设备和{{Glossary("user agent", "用户代理")}}不同，表单可以使用各种类型的输入数据和控件。`<input>` 元素是目前是 HTML 中最强大、最复杂的元素之一，因为它有大量的输入类型和属性组合。 |
| {{HTMLElement("label")}}    | **HTML `<label>` 元素**（标签）表示用户界面中某个元素的说明。 |
| {{HTMLElement("legend")}}   | **HTML \<legend>** 元素用于表示其父元素 {{HTMLElement("fieldset")}} 的内容标题。 |
| {{HTMLElement("meter")}}    | HTML **`<meter>`** 元素用来显示已知范围的标量值或者分数值。 |
| {{HTMLElement("optgroup")}} | **HTML 元素 `<optgroup>` **为{{HTMLElement("select")}} 元素中的选项创建分组。 |
| {{HTMLElement("option")}}   | **HTML 元素 _`<option>`_** 用于定义在 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} 或 {{HTMLElement("datalist")}} 元素中包含的项。`<option>` 可以在弹出窗口和 HTML 文档中的其他项目列表中表示菜单项。 |
| {{HTMLElement("output")}}   | **HTML `<output>` 标签**表示计算或用户操作的结果。 |
| {{HTMLElement("progress")}} | **HTML**中的 **`<progress>`** 元素用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定，但通常情况下，该元素都显示为一个进度条形式。 |
| {{HTMLElement("select")}}   | **HTML `<select>` 元素**表示一个提供选项菜单的控件： |
| {{HTMLElement("textarea")}} | **HTML `<textarea>` 元素**表示一个多行纯文本编辑控件，当你希望用户输入一段相当长的、不限格式的文本，例如评论或反馈表单中的一段意见时，这很有用。 |

## 交互元素

HTML 提供了一系列有助于创建交互式用户界面对象的元素。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("details")}} | **HTML `<details>`元素**可创建一个挂件，仅在被切换成展开状态时，它才会显示内含的信息。{{HTMLElement("summary")}} 元素可为该部件提供概要或者标签。 |
| {{HTMLElement("dialog")}}  | [HTML](/zh-CN/docs/Web/HTML) **`<dialog>`** 元素表示一个对话框或其他交互式组件，例如一个可关闭警告、检查器或者窗口。 |
| {{HTMLElement("summary")}} | **HTML `<summary>` 元素** 用作 一个{{HTMLElement("details")}}元素的一个内容的摘要，标题或图例。 |

## Web 组件

Web 组件是一种与 HTML 相关联的技术，简单来说，它允许开发者创建自定义元素，并如同普通的 HTML 一样使用它们。另外，也可以创建经过自定义的标准 HTML 元素。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("slot")}}     | > **备注：** 本翻译的一些术语参考了[Vuejs-中文](https://cn.vuejs.org/v2/guide/components-slots.html)页面。 |
| {{HTMLElement("template")}} | [HTML](/zh-CN/docs/Web/HTML) **内容模板**（`<template>`）元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以 (原文为 may be) 在运行时使用 JavaScript 实例化。 |

## 过时的和弃用的元素

> **警告：** 下面这些旧的 HTML 元素已被弃用，且不应再被使用。 **千万不要在新的项目中使用它们，并且要尽快替换旧项目中的残余。** 在此列出，仅供参考。

| 元素 | 描述 |
| ---- | ---- |
| {{HTMLElement("acronym")}}   | HTML Acronym 元素 (`<acronym>)` 允许作者明确地声明一个字符序列，，它们构成一个单词的首字母缩写或简略语。 |
| {{HTMLElement("applet")}}    | HTML 中的 Applet 元素 (`<applet>`) 标志着包含了 Java 的 applet。 |
| {{HTMLElement("bgsound")}}   | \<bgsound>是 IE 浏览器中设置网页背景音乐的元素。 |
| {{HTMLElement("big")}}       | The HTML Big Element (`<big>`) 会使字体加大一号（例如从小号 (small) 到中号 (medium)，从大号 (large) 到加大 (x-large)），最大不超过浏览器的最大字体。 |
| {{HTMLElement("blink")}}     | HTML Blink Element (`<blink>`) 不是标准元素，它会使包含其中的文本闪烁。 |
| {{HTMLElement("center")}}    | HTML Center 元素（`<center>`）是个[块级元素](/zh-CN/docs/HTML/Block-level_elements)，可以包含段落，以及其它块级和内联元素。这个元素的整个内容在它的上级元素中水平居中（通常是 {{HTMLElement("body")}}）。 |
| {{HTMLElement("content")}}   | **HTML `<content>` 元素**——[Web 组件](/zh-CN/docs/Web/Web_Components) 的技术套件的废弃部分 — 用于 [Shadow DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM) 内部作为 {{glossary("insertion point")}}，并且不可用于任何正常的 HTML，现在已被 {{HTMLElement("slot")}} 元素代替，它在 DOM 中创建一个位置，Shadow DOM 会插入这里。 |
| {{HTMLElement("dir")}}       | 已废弃的 **HTML 目录元素**（**`<dir>`**）被作为一个文件和/或文件夹的目录的容器，可能还有 {{Glossary("user agent", "用户代理")}} 应用的样式与图标。Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files. |
| {{HTMLElement("font")}}      | _HTML Font 元素_（`<font>`）定义了该内容的字体大小、顏色与表现。 |
| {{HTMLElement("frame")}}     | `<frame>` 是 HTML 元素，它定义了一个特定区域，另一个 HTML 文档可以在里面展示。帧应该在 {{HTMLElement("frameset")}} 中使用。 |
| {{HTMLElement("frameset")}}  | `<frameset>` 是一个用于包含 {{HTMLElement("frame")}} 的 HTML 元素。 |
| {{HTMLElement("image")}}     | **`<hgroup>`** [HTML](/zh-CN/docs/Web/HTML) 元素代表文档标题和与标题相关联的内容，它将一个 [`<h1>–<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 元素与一个或多个 [`<p>`](/zh-CN/docs/Web/HTML/Element/p) 元素组合在一起。 |
| {{HTMLElement("keygen")}}    | [HTML](/zh-CN/docs/Web/HTML) `<image>` 元素是 {{HTMLElement("img")}} 元素的一个古老且支持不足的前身。**不应该使用它**。 |
| {{HTMLElement("marquee")}}   | HTML `<keygen>` 元素是为了方便生成密钥材料和提交作为 [HTML form](/zh-CN/docs/Web/Guide/HTML/Forms) 的一部分的公钥。这种机制被用于设计基于 Web 的证书管理系统。按照预想，`<keygen>` 元素将用于 HTML 表单与其他的所需信息一起构造一个证书请求，该处理的结果将是一个带有签名的证书。 |
| {{HTMLElement("menuitem")}}  | HTML marquee 元素（`<marquee>`） 用来插入一段滚动的文字。你可以使用它的属性控制当文本到达容器边缘发生的事情。 |
| {{HTMLElement("nobr")}}      | 用户可以通过**HTML `<menuitem>` 元素**生成一个弹出式菜单。这包括上下文菜单，以及按钮可能附带的菜单。 |
| {{HTMLElement("noembed")}}   | HTML `<nobr>` 元素阻止文本自动拆分成新行，所以它展示为长的一行，可能还需要滚动。这个标签不是标准的 HTML，并且不应该使用。反之应该使用 CSS 属性 {{Cssxref("white-space")}}，像这样： |
| {{HTMLElement("noframes")}}  | **`<noembed>`** 元素是个废除的和不标准的方式，用于向不支持 {{HTMLElement("embed")}} ，或者不支持作者希望的 [嵌入式内容](/zh-CN/docs/Web/Guide/HTML/Content_categories#Embedded_content) 的浏览器提供替代（或者“后备”）内容。这个元素在 HTML 4.01 起废除，以支持 {{HTMLElement("object")}}。后备内容应该插在 {{HTMLElement("object")}} 的开始和结束标签之间。 |
| {{HTMLElement("param")}}     | `<noframes>` 是个 HTML 元素，用于支持不支持 {{HTMLElement("frame")}} 元素的浏览器，或者这样配置的浏览器。 |
| {{HTMLElement("plaintext")}} | **HTML `<param>元素`**为{{ HTMLElement("object") }}元素定义参数 |
| {{HTMLElement("rb")}}        | _HTML 纯文本元素_ (`<plaintext>`) 将起始标签后面的任何东西渲染为纯文本，不会解释为 HTML。它没有闭合标签，因为任何后面的东西都会看做纯文本。 |
| {{HTMLElement("rtc")}}       | **HTML Ruby Base**（`<rb>`）元素用于分隔{{HTMLElement("ruby")}}注释的基本文本组件（即正在注释的文本）。一个`<rb>`元素应该包装基本文本的每个单独的原子段。 |
| {{HTMLElement("shadow")}}    | **HTML `<rtc>` 元素**包含文字的语义注解，它们在 {{HTMLElement("rb")}} 元素中展示。{{HTMLElement("rb")}} 元素可以拥有发音 ({{HTMLElement("rt")}}) 和语义 ({{HTMLElement("rtc")}}) 注解。 |
| {{HTMLElement("spacer")}}    | **HTML `<shadow>` 元素** — [Web 组件](/zh-CN/docs/Web/Web_Components)技术套件的废弃部分 — 目的是用作 Shadow DOM {{glossary("insertion point")}}。如果你在 shadow host 下面创建了多个 shadow root，你就可能已经使用了它。在正常的 HTML 没有任何用处。 |
| {{HTMLElement("strike")}}    | **`<spacer>`** 是过时的 HTML 元素，它可以向页面插入间隔。它由 Netscape 设计，用于实现单像素布局图像的相同效果，Web 设计师用它来向页面添加空白，而不需要实际使用图片。但是，`<spacer>` 不再受任何主流浏览器支持，并且相同效果可以简单由 CSS 实现。 |
| {{HTMLElement("tt")}}        | [HTML](/zh-CN/docs/Web/HTML) **`<strike>`** 元素在文本上放置水平的删除线。 |
| {{HTMLElement("xmp")}}       | HTML 电报文本元素 (`<tt>`) 产生一个内联元素，使用浏览器内置的 monotype 字体展示。这个元素用于给文本排版，使其等宽展示，就像电报那样。使用 {{ HTMLElement("code") }} 元素来展示等宽文本可能更加普遍。 |
