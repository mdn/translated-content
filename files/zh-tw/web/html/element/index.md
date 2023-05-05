---
title: HTML 元素
slug: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

本頁列出了所有 {{Glossary("HTML")}} 元素（{{Glossary("Element")}}），他們可以透過標籤（{{Glossary("Tags", "tags")}}）建立。這些元素會以功能來分組，讓你更容易尋找。在本頁及每一個元素的頁面的側邊欄都提供了以英文字母排序的所有元素清單。

> **備註：** 更多關於基本 HTML 元素及屬性（attribute）可參考[HTML 介紹一文中的元素小節](/zh-TW/docs/Web/Guide/HTML/Introduction#Elements_—_the_basic_building_blocks)。

## 主要根元素

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("html")}} | Represents the root (top-level element) of an HTML document, so it is also referred to as the _root element_. All other elements must be descendants of this element. |

## 文件詮釋資料（metadata）

Metadata 是一些外部資料，不會被使用者看到。Metadata 記錄了頁面的訊息給其他軟體利用，像是瀏覽器會讀取 metadata 去決定這個頁面應該要使用哪種編碼顯示以避免亂碼。另外，有時候一個網頁的原始碼會被分散的檔案中，所以一個網頁的 Metameta 可以被定義在別份檔案中。

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("base")}}  | Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document. |
| {{HTMLElement("head")}}  | Contains machine-readable information (metadata) about the document, like its [title](/zh-TW/docs/Web/HTML/Element/title), [scripts](/zh-TW/docs/Web/HTML/Element/script), and [style sheets](/zh-TW/docs/Web/HTML/Element/style). |
| {{HTMLElement("link")}}  | Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things. |
| {{HTMLElement("meta")}}  | Represents {{Glossary("Metadata","metadata")}} that cannot be represented by other HTML meta-related elements, like {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} and {{HTMLElement("title")}}. |
| {{HTMLElement("style")}} | Contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing this element. |
| {{HTMLElement("title")}} | Defines the document's title that is shown in a {{glossary("Browser", "browser")}}'s title bar or a page's tab. It only contains text; tags within the element are ignored. |

## Sectioning root

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("body")}} | represents the content of an HTML document. There can be only one such element in a document. |

## Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("address")}}                                                                                                                                                                                                                                                                                                                           | Indicates that the enclosed HTML provides contact information for a person or people, or for an organization. |
| {{HTMLElement("article")}}                                                                                                                                                                                                                                                                                                                           | Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. |
| {{HTMLElement("aside")}}                                                                                                                                                                                                                                                                                                                             | Represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes. |
| {{HTMLElement("footer")}}                                                                                                                                                                                                                                                                                                                            | Represents a footer for its nearest ancestor [sectioning content](/zh-TW/docs/Web/HTML/Content_categories#sectioning_content) or [sectioning root](/zh-TW/docs/Web/HTML/Element/Heading_Elements) element. A `<footer>` typically contains information about the author of the section, copyright data or links to related documents. |
| {{HTMLElement("header")}}                                                                                                                                                                                                                                                                                                                            | Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. |
| [`<h1>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) | Represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest. |
| {{HTMLElement("main")}}                                                                                                                                                                                                                                                                                                                              | Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. |
| {{HTMLElement("nav")}}                                                                                                                                                                                                                                                                                                                               | 代表一個網頁中提供導航欄連結的區域，不管是當前網頁或者其他網頁，還是這個連結最終抵達的只是當前網頁的某個區塊，或者會抵達其他網頁，常見的導航欄範例有菜單、內容的表單，以及頁面本身。 |
| {{HTMLElement("section")}}                                                                                                                                                                                                                                                                                                                           | Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions. |

## 文字內容

使用 HTML 文字內容元素，來組織放在 {{HTMLElement("body")}} 與 `</body>` 之間的區塊或章節內容。這對 {{Glossary("Accessibility")}} 與 {{Glossary("SEO")}} 至關重要。這些元素確立了內容的目的或結構。

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("blockquote")}} | 定義一段文字屬於引用。通常，這元素會透過縮排來呈現（要知道如何改變，請參考[備註](#Notes)）。引言的 URL 來源可透過 **cite** 屬性賦予，而來源的文本形式可以使用 {{HTMLElement("cite")}} 元素。 |
| {{HTMLElement("dd")}}         | Provides the description, definition, or value for the preceding term ({{HTMLElement("dt")}}) in a description list ({{HTMLElement("dl")}}). |
| {{HTMLElement("div")}}        | 本質上不特別代表任何東西的通用内容流容器。它可以成為樣式化用途（使用 **class** 或 **id** 屬性）、或是共享如 **lang** 同一個屬性的元素集合。它應該在沒有其他適合的語義元素（例如{{HTMLElement("article")}} 或 {{HTMLElement("nav")}} ）可用時才用。 |
| {{HTMLElement("dl")}}         | Represents a description list. The element encloses a list of groups of terms (specified using the {{HTMLElement("dt")}} element) and descriptions (provided by {{HTMLElement("dd")}} elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs). |
| {{HTMLElement("dt")}}         | Specifies a term in a description or definition list, and as such must be used inside a {{HTMLElement("dl")}} element. It is usually followed by a {{HTMLElement("dd")}} element; however, multiple `<dt>` elements in a row indicate several terms that are all defined by the immediate next {{HTMLElement("dd")}} element. |
| {{HTMLElement("figcaption")}} | Represents a caption or legend describing the rest of the contents of its parent {{HTMLElement("figure")}} element. |
| {{HTMLElement("figure")}}     | Represents self-contained content, potentially with an optional caption, which is specified using the {{HTMLElement("figcaption")}} element. The figure, its caption, and its contents are referenced as a single unit. |
| {{HTMLElement("hr")}}         | 代表在段落層級的焦點轉換（如故事中的場景轉換或某個小節裡的主題移轉）。在之前的 HTML 版本，它代表著一條水平標線。在視覺瀏覽器裡，它現在可能還是以水平標線的型式呈現；但它已經被重新定義為一個語義上的用詞，而不是呈現上的。 |
| {{HTMLElement("li")}}         | Represents an item in a list. It must be contained in a parent element: an ordered list ({{HTMLElement("ol")}}), an unordered list ({{HTMLElement("ul")}}), or a menu ({{HTMLElement("menu")}}). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. |
| {{HTMLElement("menu")}}       | A semantic alternative to ({{HTMLElement("ul")}}, but treated by browsers (and exposed through the accessibility tree) as no different than ({{HTMLElement("ul")}}. It represents an unordered list of items (which are represented by ({{HTMLElement("li")}} elements). |
| {{HTMLElement("ol")}}         | Represents an ordered list of items — typically rendered as a numbered list. |
| {{HTMLElement("p")}}          | Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields. |
| {{HTMLElement("pre")}}        | Represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or [monospaced](https://en.wikipedia.org/wiki/Monospaced_font), font. Whitespace inside this element is displayed as written. |
| {{HTMLElement("ul")}}         | Represents an unordered list of items, typically rendered as a bulleted list. |

## 行內文字語義化

Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("a")}}      | 建立通往其他頁面、檔案、Email 地址、或其他 URL 的超連結。 |
| {{HTMLElement("abbr")}}   | Represents an abbreviation or acronym. |
| {{HTMLElement("b")}}      | Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text or granting importance. If you wish to create boldface text, you should use the CSS {{cssxref("font-weight")}} property. If you wish to indicate an element is of special importance, you should use the strong element. |
| {{HTMLElement("bdi")}}    | Tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted. |
| {{HTMLElement("bdo")}}    | Overrides the current directionality of text, so that the text within is rendered in a different direction. |
| {{HTMLElement("br")}}     | 會產生文字的斷行（carriage-return、CR 或是確認鍵）。此元素主要用於斷行有所意義的時候，像是寫詩或寫住址。 |
| {{HTMLElement("cite")}}   | Used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata. |
| {{HTMLElement("code")}}   | 表現出電腦程式碼的片段。通常，它會由瀏覽器預設的 monospace 字體顯示出來。 |
| {{HTMLElement("data")}}   | Links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used. |
| {{HTMLElement("dfn")}}    | Used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor {{HTMLElement("p")}} element, the {{HTMLElement("dt")}}/{{HTMLElement("dd")}} pairing, or the nearest section ancestor of the `<dfn>` element, is considered to be the definition of the term. |
| {{HTMLElement("em")}}     | Marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis. |
| {{HTMLElement("i")}}      | Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `<i>` naming of this element. |
| {{HTMLElement("kbd")}}    | Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `<kbd>` element using its default monospace font, although this is not mandated by the HTML standard. |
| {{HTMLElement("mark")}}   | Represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context. |
| {{HTMLElement("q")}}      | 指示一段元素內的文字，屬於行內引文。這個元素適用於不須換行的短引文，針對長引文，請使用 {{HTMLElement("blockquote")}} 元素。 |
| {{HTMLElement("rp")}}     | Used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the {{HTMLElement("ruby")}} element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the {{HTMLElement("rt")}} element that contains the annotation's text. |
| {{HTMLElement("rt")}}     | Specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a {{HTMLElement("ruby")}} element. |
| {{HTMLElement("ruby")}}   | 旁註標記，用於標示東亞文字的發音。 |
| {{HTMLElement("s")}}      | Renders text with a strikethrough, or a line through it. Use the `<s>` element to represent things that are no longer relevant or no longer accurate. However, `<s>` is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate. |
| {{HTMLElement("samp")}}   | Used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) or Lucida Console). |
| {{HTMLElement("small")}}  | Represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from `small` to `x-small`. |
| {{HTMLElement("span")}}   | A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the `class` or `id` attributes), or because they share attribute values, such as `lang`. It should be used only when no other semantic element is appropriate. `<span>` is very much like a div element, but div is a [block-level element](/zh-TW/docs/Web/HTML/Block-level_elements) whereas a `<span>` is an [inline element](/zh-TW/docs/Web/HTML/Inline_elements). |
| {{HTMLElement("strong")}} | Indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type. |
| {{HTMLElement("sub")}}    | Specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text. |
| {{HTMLElement("sup")}}    | Specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text. |
| {{HTMLElement("time")}}   | 用以表示時間，可以是 24 小時制時間或以[公曆](https://zh.wikipedia.org/zh-tw/公历)紀年的日期（日期可以添加時間和時區的資訊） |
| {{HTMLElement("u")}}      | Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS. |
| {{HTMLElement("var")}}    | Represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent. |
| {{HTMLElement("wbr")}}    | Represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location. |

## 圖片與多媒體

HTML supports various multimedia resources such as images, audio, and video.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("area")}}  | Defines an area inside an image map that has predefined clickable areas. An _image map_ allows geometric areas on an image to be associated with{{Glossary("Hyperlink", "hyperlink")}}. |
| {{HTMLElement("audio")}} | Used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a {{domxref("MediaStream")}}. |
| {{HTMLElement("img")}}   | Embeds an image into the document. |
| {{HTMLElement("map")}}   | Used with {{HTMLElement("area")}} elements to define an image map (a clickable link area). |
| {{HTMLElement("track")}} | Used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in [WebVTT format](/zh-TW/docs/Web/API/WebVTT_API) (`.vtt` files)—Web Video Text Tracks. |
| {{HTMLElement("video")}} | Embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience. |

## 嵌入內容

In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("embed")}}   | Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. |
| {{HTMLElement("iframe")}}  | Represents a nested browsing context, embedding another HTML page into the current one. |
| {{HTMLElement("object")}}  | Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin. |
| {{HTMLElement("picture")}} | 包含了零或零以上個 {{HTMLElement("source")}} 元素以及一個 {{HTMLElement("img")}} 元素，以為不同顯示器/裝置提供同張圖片的不同版本。 |
| {{HTMLElement("portal")}}  | Enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages. |
| {{HTMLElement("source")}}  | Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for [image file formats](/zh-TW/docs/Web/Media/Formats/Image_types) and [media file formats](/zh-TW/docs/Web/Media/Formats). |

## SVG and MathML

You can embed [SVG](/zh-TW/docs/Web/SVG) and [MathML](/zh-TW/docs/Web/MathML) content directly into HTML documents, using the {{SVGElement("svg")}} and {{MathMLElement("math")}} elements.

| Element | Description |
| ------- | ----------- |
| {{SVGElement("svg")}}     | Container defining a new coordinate system and [viewport](/zh-TW/docs/Web/SVG/Attribute/viewBox). It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document. |
| {{MathMLElement("math")}} | The top-level element in MathML. Every valid MathML instance must be wrapped in it. In addition you must not nest a second `<math>` element in another, but you can have an arbitrary number of other child elements in it. |

## 腳本

In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("canvas")}}   | 可以被使用於對腳本程式（JaveScript）繪圖。舉例來說, 它能用來畫圖、組合照片，甚至作動畫。你也許(應該) 在 \<canvas> 區段內提供替代方案的內容 .這內容將能被一些不支援 \<canvas> 以及無法使用 Javescript 功能的瀏覽器所渲染。 |
| {{HTMLElement("noscript")}} | Defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser. |
| {{HTMLElement("script")}}   | 能嵌入或引用要執行的程式碼。最常見的用途是嵌入或引用 JavaScript 程式碼。\<script> 元素也能執行其他語言，例如 [WebGL](/zh-TW/docs/Web/API/WebGL_API) 的 GLSL shader 程式語言。 |

## Demarcating edits

These elements let you provide indications that specific parts of the text have been altered.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("del")}} | Represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The `<ins>` element can be used for the opposite purpose: to indicate text that has been added to the document. |
| {{HTMLElement("ins")}} | Represents a range of text that has been added to a document. You can use the `<del>` element to similarly represent a range of text that has been deleted from the document. |

## 表格

The elements here are used to create and handle tabular data.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("caption")}}  | Specifies the caption (or title) of a table. |
| {{HTMLElement("col")}}      | Defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a {{HTMLElement("colgroup")}} element. |
| {{HTMLElement("colgroup")}} | Defines a group of columns within a table. |
| {{HTMLElement("table")}}    | 代表表格數據——換句話說，就是透過二維資料表來呈現資訊。 |
| {{HTMLElement("tbody")}}    | Encapsulates a set of table rows ({{HTMLElement("tr")}} elements), indicating that they comprise the body of the table ({{HTMLElement("table")}}). |
| {{HTMLElement("td")}}       | Defines a cell of a table that contains data. It participates in the _table model_. |
| {{HTMLElement("tfoot")}}    | Defines a set of rows summarizing the columns of the table. |
| {{HTMLElement("th")}}       | Defines a cell as header of a group of table cells. The exact nature of this group is defined by the `scope` and `headers` attributes. |
| {{HTMLElement("thead")}}    | Defines a set of rows defining the head of the columns of the table. |
| {{HTMLElement("tr")}}       | Defines a row of cells in a table. The row's cells can then be established using a mix of {{HTMLElement("td")}} (data cell) and {{HTMLElement("th")}} (header cell) elements. |

## 表單

HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the [HTML forms guide](/zh-TW/docs/WebLearn/Guide/HTML/Forms).

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("button")}}   | 代表一個可點擊的按鈕。 |
| {{HTMLElement("datalist")}} | Contains a set of {{HTMLElement("option")}} elements that represent the permissible or recommended options available to choose from within other controls. |
| {{HTMLElement("fieldset")}} | Used to group several controls as well as labels ({{HTMLElement("label")}}) within a web form. |
| {{HTMLElement("form")}}     | 表示提交訊息的區塊，此區塊含有許多可互動的控制項。 |
| {{HTMLElement("input")}}    | Used to create interactive controls for web-based forms in order to accept data from the user. |
| {{HTMLElement("label")}}    | Represents a caption for an item in a user interface. |
| {{HTMLElement("legend")}}   | Represents a caption for the content of its parent {{HTMLElement("fieldset")}}. |
| {{HTMLElement("meter")}}    | Represents either a scalar value within a known range or a fractional value. |
| {{HTMLElement("optgroup")}} | In a Web form, the **HTML `<optgroup>` element** creates a grouping of options within a {{HTMLElement("select")}} element. |
| {{HTMLElement("option")}}   | Used to define an item contained in a select, an {{HTMLElement("optgroup")}}, or a {{HTMLElement("datalist")}} element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document. |
| {{HTMLElement("output")}}   | Container element into which a site or app can inject the results of a calculation or the outcome of a user action. |
| {{HTMLElement("progress")}} | Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. |
| {{HTMLElement("select")}}   | Represents a control that provides a menu of options. |
| {{HTMLElement("textarea")}} | Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form. |

## 互動元素

HTML offers a selection of elements which help to create interactive user interface objects.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("details")}} | Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the {{HTMLElement("summary")}} element. |
| {{HTMLElement("dialog")}}  | Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. |
| {{HTMLElement("summary")}} | Used as a summary, caption, or legend for the content of a {{HTMLElement("details")}} element. |

## Web Components

Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("slot")}}     | Part of the [Web Components](/zh-TW/docs/Web/Web_Components) technology suite, this element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. |
| {{HTMLElement("template")}} | 用作保存用戶端內容的機制。該內容在頁面載入時不受渲染，但可以在運行時使用 JavaScript 實例化。 |

## 過時與棄用的元素

> **警告：** These are old HTML elements which are deprecated and should not be used. **You should never use them in new projects, and should replace them in old projects as soon as you can.** They are listed here for informational purposes only.

| Element | Description |
| ------- | ----------- |
| {{HTMLElement("acronym")}}   | Allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word. |
| {{HTMLElement("applet")}}    | Embeds a Java applet into the document; this element has been deprecated in favor of {{HTMLElement("object")}}. |
| {{HTMLElement("bgsound")}}   | Sets up a sound file to play in the background while the page is used; use {{HTMLElement("audio")}} instead. |
| {{HTMLElement("big")}}       | Renders the enclosed text at a font size one level larger than the surrounding text (`medium` becomes `large`, for example). The size is capped at the browser's maximum permitted font size. |
| {{HTMLElement("blink")}}     | 可以讓該元素裡面的文字緩慢閃爍。 |
| {{HTMLElement("center")}}    | Displays its block-level or inline contents centered horizontally within its containing element. |
| {{HTMLElement("content")}}   | An obsolete part of the [Web Components](/zh-TW/docs/Web/Web_Components) suite of technologies—was used inside of [Shadow DOM](/zh-TW/docs/Web/Web_Components/Using_shadow_DOM) as an insertion point, and wasn't meant to be used in ordinary HTML. It has now been replaced by the {{HTMLElement("slot")}} element, which creates a point in the DOM at which a shadow DOM can be inserted. |
| {{HTMLElement("dir")}}       | Container for a directory of files and/or folders, potentially with styles and icons applied by the user agent. Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files. |
| {{HTMLElement("font")}}      | 定義了該內容的字體大小、顏色與表現。 |
| {{HTMLElement("frame")}}     | Defines a particular area in which another HTML document can be displayed. A frame should be used within a {{HTMLElement("frameset")}}. |
| {{HTMLElement("frameset")}}  | 用以包含 {{HTMLElement("frame")}} 元素的元素。 |
| {{HTMLElement("image")}}     | An ancient and poorly supported precursor to the {{HTMLElement("img")}} element. It should not be used. |
| {{HTMLElement("keygen")}}    | Exists to facilitate generation of key material, and submission of the public key as part of an [HTML form](/zh-TW/docs/Learn/Forms). This mechanism is designed for use with Web-based certificate management systems. It is expected that the `<keygen>` element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate. |
| {{HTMLElement("marquee")}}   | Used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes. |
| {{HTMLElement("menuitem")}}  | 用作插入一段文字的捲動區域。你可以透過屬性，控制文字在到達邊緣後的應對動作。 |
| {{HTMLElement("nobr")}}      | Prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text. |
| {{HTMLElement("noembed")}}   | An obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the embed element or do not support the type of [embedded content](/zh-TW/docs/Web/HTML/Content_categories#embedded_content) an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an {{HTMLElement("object")}} element. |
| {{HTMLElement("noframes")}}  | Provides content to be presented in browsers that don't support (or have disabled support for) the {{HTMLElement("frame")}} element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers. |
| {{HTMLElement("param")}}     | Defines parameters for an {{HTMLElement("object")}} element. |
| {{HTMLElement("plaintext")}} | Renders everything following the start tag as raw text, ignoring any following HTML. There is no closing tag, since everything after it is considered raw text. |
| {{HTMLElement("rb")}}        | Used to delimit the base text component of a ruby annotation, i.e. the text that is being annotated. One `<rb>` element should wrap each separate atomic segment of the base text. |
| {{HTMLElement("rtc")}}       | Embraces semantic annotations of characters presented in a ruby of {{HTMLElement("rb")}} elements used inside of {{HTMLElement("ruby")}} element. {{HTMLElement("rb")}} elements can have both pronunciation ({{HTMLElement("rt")}}) and semantic ({{HTMLElement("rtc")}}) annotations. |
| {{HTMLElement("shadow")}}    | An obsolete part of the [Web Components](/zh-TW/docs/Web/Web_Components) technology suite that was intended to be used as a shadow DOM insertion point. You might have used it if you have created multiple shadow roots under a shadow host. |
| {{HTMLElement("spacer")}}    | Allows insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, `<spacer>` is no longer supported by any major browser and the same effects can now be achieved using simple CSS. |
| {{HTMLElement("strike")}}    | Places a strikethrough (horizontal line) over text. |
| {{HTMLElement("tt")}}        | Creates inline text which is presented using the user agent default monospace font face. This element was created for the purpose of rendering text as it would be displayed on a fixed-width display such as a teletype, text-only screen, or line printer. |
| {{HTMLElement("xmp")}}       | Renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line. |
