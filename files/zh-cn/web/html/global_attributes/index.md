---
title: 全局属性
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**全局属性**是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

我们可以在所有的 HTML 元素上指定全局属性，甚至是在标准里没有指定的元素。这意味着任何非标准元素仍必须能够应用这些属性，即使使用这些元素意味着文档不再是 html5 兼容的。例如，虽然`<foo>`不是一个有效的 HTML 元素，但是 html5 兼容的浏览器隐藏了标记为`<foo hidden>...<foo>`的内容。

除了基本的 HTML 全局属性之外，还存在以下全局属性：

- {{htmlattrdef("xml:lang")}} 和 {{htmlattrdef("xml:base")}} ——两者都是从 XHTML 规范继承，但为了兼容性而被保留的。
- 多重[`aria-*`](/zh-CN/docs/Web/Accessibility/ARIA) 属性，用于改善无障碍。
- [事件处理程序](/zh-CN/docs/Web/Guide/Events/Event_handlers) 属性：**`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## 全局属性列表

- [{{htmlattrdef("accesskey")}}](/zh-CN/docs/Web/HTML/Global_attributes/accesskey)
  - : 提供了为当前元素生成键盘快捷键的提示。这个属性由空格分隔的字符列表组成。浏览器应该使用在计算机键盘布局上存在的第一个。
- [{{htmlattrdef("autocapitalize")}}](/zh-CN/docs/Web/HTML/Global_attributes/autocapitalize)
  - : 控制用户的文本输入是否和如何自动大写，它可以有以下的值：

    - `off` or `none`，没有应用自动大写（所有字母都默认为小写字母）。
    - `on` or `sentences`，每个句子的第一个字母默认为大写字母;所有其他字母都默认为小写字母。
    - `words`，每个单词的第一个字母默认为大写字母;所有其他字母都默认为小写字母。
    - `characters`，所有的字母都应该默认为大写。
- [{{htmlattrdef("class")}}](/zh-CN/docs/Web/HTML/Global_attributes/class)
  - : 一个以空格分隔的元素的类名（classes）列表，它允许 CSS 和 Javascript 通过类选择器 ([class selectors](/zh-CN/docs/Web/CSS/Class_selectors)) 或 DOM 方法 ( [`document.getElementsByClassName`](/zh-CN/docs/Web/API/Document/getElementsByClassName)) 来选择和访问特定的元素。
- [{{htmlattrdef("contenteditable")}}](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)
  - : 一个枚举属性（enumerated attribute），表示元素是否可被用户编辑。如果可以，浏览器会调整元素的部件（widget）以允许编辑。

    - `true` 或者空字符串，表明元素是可被编辑的；
    - `false`，表明元素不能被编辑。
- [{{htmlattrdef("contextmenu")}}](/zh-CN/docs/Web/HTML/Global_attributes/contextmenu)
  - : {{HTMLElement("menu")}} 的 `id`，作为该元素的上下文菜单（已经不被支持，将从所有浏览器中删除）。
- [{{htmlattrdef("data-*")}}](/zh-CN/docs/Web/HTML/Global_attributes/data-*)
  - : 一类自定义数据属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本 (一般指 JavaScript) 与 [HTML](/zh-CN/docs/Web/HTML) 之间进行专有数据的交换。所有这些自定义数据属性都可以通过所属元素的 [`HTMLElement`](/zh-CN/docs/Web/API/HTMLElement) 接口来访问。 [`HTMLElement.dataset`](/zh-CN/docs/Web/API/HTMLElement/dataset) 属性可以访问它们。
- [{{htmlattrdef("dir")}}](/zh-CN/docs/Web/HTML/Global_attributes/dir)
  - : 一个指示元素中文本方向的枚举属性。它的取值如下：

    - ltr，指从*左*到*右*，用于那种从左向右书写的语言（比如英语）；
    - rtl，指从*右*到*左*，用于那种从右向左书写的语言（比如阿拉伯语）；
    - auto，指由用户代理决定方向。它在解析元素中字符时会运用一个基本算法，直到发现一个具有强方向性的字符，然后将这一方向应用于整个元素。
- [{{htmlattrdef("draggable")}}](/zh-CN/docs/Web/HTML/Global_attributes/draggable)
  - : 一种枚举属性，指示是否可以 使用 [Drag and Drop API](/zh-CN/docs/DragDrop/Drag_and_Drop) 拖动元素。它可以有以下的值：

    - `true`, 这表明元素可能被拖动
    - `false`, 这表明元素可能不会被拖动
- [{{htmlattrdef("dropzone")}}](/zh-CN/docs/Web/HTML/Global_attributes/dropzone) {{experimental_inline}}
  - : 枚举属性，指示可以使用 [Drag and Drop API](/zh-CN/docs/DragDrop/Drag_and_Drop) 在元素上删除哪些类型的内容。它可以具有以下值：

    - copy，表示 drop 将创建被拖动元素的副本
    - move，表示拖动的元素将移动到此新位置。
    - `link`，将创建一个指向拖动数据的链接。
- [{{HTMLAttrDef("exportparts")}}](/zh-CN/docs/Web/HTML/Global_attributes/exportparts) {{Experimental_Inline}}
  - : Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
- [{{htmlattrdef("hidden")}}](/zh-CN/docs/Web/HTML/Global_attributes/hidden)
  - : 布尔属性表示该元素尚未或不再*相关*。例如，它可用于隐藏在登录过程完成之前无法使用的页面元素。浏览器不会呈现此类元素。不得使用此属性隐藏可合法显示的内容
- [{{htmlattrdef("id")}}](/zh-CN/docs/Web/HTML/Global_attributes/id)
  - : 定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 CSS）时标识元素。
- [{{HTMLAttrDef("inputmode")}}](/zh-CN/docs/Web/HTML/Global_attributes/inputmode)
  - : 向浏览器提供有关在编辑此元素或其内容时要使用的虚拟键盘配置类型的提示。主要用于 {{HTMLElement("input")}}元素，但在{{HTMLAttrxRef("contenteditable")}}模式下可用于任何元素。
- [{{htmlattrdef("is")}}](/zh-CN/docs/Web/HTML/Global_attributes/is)
  - : 允许您指定标准 HTML 元素应该像已注册的自定义内置元素一样（有关更多详细信息，请参阅使用自定义元素）。

    > **备注：** item 属性是 [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata)的一部分。

- [{{htmlattrdef("itemid")}}](/zh-CN/docs/Web/HTML/Global_attributes/itemid)
  - : 项的唯一全局标识符。
- [{{htmlattrdef("itemprop")}}](/zh-CN/docs/Web/HTML/Global_attributes/itemprop)
  - : 用于向项添加属性。每个 HTML 元素都可以指定一个 itemprop 属性，其中一个 itemprop 由一个名称和值对组成。
- [{{htmlattrdef("itemref")}}](/zh-CN/docs/Web/HTML/Global_attributes/itemref)
  - : 只有不是具有`itemscope`属性的元素的后代，它的属性才可以与使用`itemref`项目相关联。它提供了元素 ID 列表（而不是`itemids`）以及文档中其他位置的其他属性。
- [{{htmlattrdef("itemscope")}}](/zh-CN/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope`（通常）与{{htmlattrxref("itemtype")}}一起使用，以指定包含在关于特定项目代码块中的 HTML。 `itemscope`创建 Item 并定义与之关联的`itemtype`的范围。 `itemtype`是描述项及其属性上下文的词汇表（例如[schema.org](https://schema.org/)）的有效 URL。
- [{{htmlattrdef("itemtype")}}](/zh-CN/docs/Web/HTML/Global_attributes/itemtype)
  - : 指定将用于在数据结构中定义`itemprops`（项属性）的词汇表的 URL。 [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes/itemscope)用于设置数据结构中按`itemtype`设置的词汇表的生效范围。
- [{{htmlattrdef("lang")}}](/zh-CN/docs/Web/HTML/Global_attributes/lang)
  - : 帮助定义元素的语言：不可编辑元素所在的语言，或者应该由用户编写的可编辑元素的语言。该属性包含一个“语言标记”(由用连字符分隔的“语言子标记”组成)，格式在 [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt) 中定义。**[xml:lang](/zh-CN/docs/Web/HTML/Global_attributes#attr-xml:lang) **优先于它。
- [{{HTMLAttrDef("part")}}](/zh-CN/docs/Web/HTML/Global_attributes/part) {{Experimental_Inline}}
  - : 元素的部件名称的空格分隔列表。Part 名称允许 CSS 通过{{CSSxRef("::part()")}} 伪元素选择和设置阴影关联树中的特定元素。
- [{{htmlattrdef("slot")}}](/zh-CN/docs/Web/HTML/Global_attributes/slot)
  - : 将[shadow DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM)阴影关联树中的一个沟槽分配给一个元素：具有`slot`属性的元素被分配给由{{HTMLElement("slot")}}元素创建的沟槽，其{{htmlattrxref("name", "slot")}}属性的值与`slot`属性的值匹配。
- [{{htmlattrdef("spellcheck")}}](/zh-CN/docs/Web/HTML/Global_attributes/spellcheck) {{experimental_inline}}
  - : 枚举属性定义是否可以检查元素是否存在拼写错误。它可能具有以下值：

    - `true`，表示如果可能，应检查元素是否存在拼写错误;
    - `false`, 表示不应检查元素的拼写错误。
- [{{htmlattrdef("style")}}](/zh-CN/docs/Web/HTML/Global_attributes/style)
  - : 含要应用于元素的[CSS](/zh-CN/docs/Web/CSS)样式声明。请注意，建议在单独的文件中定义样式。该属性和{{HTMLElement("style")}}元素主要用于快速样式化，例如用于测试目的。
- [{{htmlattrdef("tabindex")}}](/zh-CN/docs/Web/HTML/Global_attributes/tabindex)
  - : 整数属性，指示元素是否可以获取输入焦点（可聚焦），是否应该参与顺序键盘导航，如果是，则表示哪个位置。它可能需要几个值：

    - 负值表示该元素应该是可聚焦的，但不应通过顺序键盘导航到达;
    - `0` 表示元素应通过顺序键盘导航可聚焦和可到达，但其相对顺序由平台约定定义;
    - 正值意味着元素应该可以通过顺序键盘导航进行聚焦和访问;元素聚焦的顺序是[**tabindex**](#attr-tabindex)的增加值。如果多个元素共享相同的`tabindex`，则它们的相对顺序遵循它们在文档中的相对位置。
- [{{htmlattrdef("title")}}](/zh-CN/docs/Web/HTML/Global_attributes/title)
  - : 包含表示与其所属元素相关信息的文本。这些信息通常可以作为提示呈现给用户，但不是必须的。
- [{{htmlattrdef("translate")}}](/zh-CN/docs/Web/HTML/Global_attributes/translate) {{experimental_inline}}
  - : 枚举属性，用于指定在页面本地化时是否转换元素的属性值及其{{domxref("Text")}} 节点子节点的值，或者是否保持它们不变。它可以具有以下值：

    - 空字符串和`"yes"`，表示元素将被翻译。
    - `"no"`, 表示该元素不会被翻译。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element")}} 和 {{domxref("GlobalEventHandlers")}} 接口允许查询大多数全局属性。
