---
title: 全局属性
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**全局属性**是所有 HTML 元素共有的属性；它们可以用于所有元素，即使属性可能对某些元素不起作用。

我们可以在所有的 [HTML 元素](/zh-CN/docs/Web/HTML/Element)，*甚至是在标准里没有指定的元素*上指定全局属性。这意味着任何非标准元素仍必须能够允许应用这些属性，即使使用这些元素意味着文档不再是 HTML5 兼容的。例如，虽然 `<foo>` 不是一个有效的 HTML 元素，但是 HTML5 兼容的浏览器隐藏了标记为 `<foo hidden>…</foo>` 的内容。

除了基本的 HTML 全局属性之外，还存在以下全局属性：

- `xml:lang` 和 `xml:base`——两者都是从 XHTML 规范继承且被弃用，但为了兼容性而被保留的。
- ARIA [`role`](/zh-CN/docs/Web/Accessibility/ARIA/Roles) 和多重 [`aria-*`](/zh-CN/docs/Web/Accessibility/ARIA) 状态和属性，用于保证无障碍。
- [事件处理器](/zh-CN/docs/Web/HTML/Attributes#事件处理器属性)属性：`onabort`、`onautocomplete`、`onautocompleteerror`、`onblur`、`oncancel`、`oncanplay`、`oncanplaythrough`、`onchange`、`onclick`、`onclose`、`oncontextmenu`、`oncuechange`、`ondblclick`、`ondrag`、`ondragend`、`ondragenter`、`ondragleave`、`ondragover`、`ondragstart`、`ondrop`、`ondurationchange`、`onemptied`、`onended`、`onerror`、`onfocus`、`oninput`、`oninvalid`、`onkeydown`、`onkeypress`、`onkeyup`、`onload`、`onloadeddata`、`onloadedmetadata`、`onloadstart`、`onmousedown`、`onmouseenter`、`onmouseleave`、`onmousemove`、`onmouseout`、`onmouseover`、`onmouseup`、`onmousewheel`、`onpause`、`onplay`、`onplaying`、`onprogress`、`onratechange`、`onreset`、`onresize`、`onscroll`、`onseeked`、`onseeking`、`onselect`、`onshow`、`onsort`、`onstalled`、`onsubmit`、`onsuspend`、`ontimeupdate`、`ontoggle`、`onvolumechange`、`onwaiting`。

## 全局属性列表

- [`accesskey`](/zh-CN/docs/Web/HTML/Global_attributes/accesskey)
  - : 为当前元素提供一个生成键盘快捷键的提示。该属性由一个空格分隔的字符列表组成。浏览器应该使用计算机键盘布局上存在的第一个字符。
- [`autocapitalize`](/zh-CN/docs/Web/HTML/Global_attributes/autocapitalize)

  - : 控制用户的文本输入是否和如何自动大写，它可以有以下的值：

    - `off` 或 `none`，不应用自动大写（所有字母都默认为小写字母）。
    - `on` 或 `sentences`，每个句子的第一个字母默认为大写字母，所有其他字母都默认为小写字母。
    - `words`，每个单词的第一个字母默认为大写字母，所有其他字母都默认为小写字母。
    - `characters`，所有的字母都应该默认为大写。

- [`autofocus`](/zh-CN/docs/Web/HTML/Global_attributes/autofocus)
  - : 表示一个元素将在页面加载时自动聚焦，或者在其所属的 {{HTMLElement("dialog")}} 显示时被聚焦。该属性是一个布尔值，初始化为 false。
- [`class`](/zh-CN/docs/Web/HTML/Global_attributes/class)
  - : 一个以空格分隔的元素的类名列表，它允许 CSS 和 Javascript 通过[类选择器](/zh-CN/docs/Web/CSS/Class_selectors)或 DOM 方法 {{DOMxRef("Document.getElementsByClassName()")}} 来选择和访问特定的元素。
- [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)

  - : 一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，表示元素是否可被用户编辑。如果可以，浏览器会调整元素的部件以允许编辑。该属性必须是下列值之一：

    - `true` 或者*空字符串*，表明元素是可被编辑的；
    - `false`，表明元素不能被编辑。

- [`contextmenu`](/zh-CN/docs/Web/HTML/Global_attributes/contextmenu) {{deprecated_inline}}
  - : {{HTMLElement("menu")}} 的 [**`id`**](#id)，作为该元素的上下文菜单。
- [`data-*`](/zh-CN/docs/Web/HTML/Global_attributes/data-*)
  - : 形成一类属性，称为自定义数据属性，允许在 [HTML](/zh-CN/docs/Web/HTML) 和其 {{glossary("DOM")}} 表示之间交换专有信息，可由脚本使用。所有这些自定义数据属性都可以通过所属元素的 {{DOMxRef("HTMLElement")}} 接口来访问。通过 {{DOMxRef("HTMLElement.dataset")}} 属性可以访问它们。
- [`dir`](/zh-CN/docs/Web/HTML/Global_attributes/dir)

  - : 一个指示元素中文本方向的枚举属性。它的取值如下：

    - `ltr`，指从*左*到*右*，用于那种从左向右书写的语言（比如英语）；
    - `rtl`，指从*右*到*左*，用于那种从右向左书写的语言（比如阿拉伯语）；
    - `auto`，指由用户代理决定方向。它在解析元素中字符时会运用一个基本算法，直到发现一个具有强方向性的字符，然后将这一方向应用于整个元素。

- [`draggable`](/zh-CN/docs/Web/HTML/Global_attributes/draggable)

  - : 一种枚举属性，指示是否可以使用 [Drag and Drop API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 拖动元素。它可以有以下的值：

    - `true`, 这表明元素可被拖动；
    - `false`, 这表明元素不可被拖动。

- [`enterkeyhint`](/zh-CN/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : 提示在虚拟键盘上为回车键呈现什么动作标签（或图标）。
- [`exportparts`](/zh-CN/docs/Web/HTML/Global_attributes/exportparts) {{Experimental_Inline}}
  - : 用于将隐藏部分从一个嵌套的影子树（shadow tree）中过渡性地导出到一个包含该树的常规树（light tree）中。
- [`hidden`](/zh-CN/docs/Web/HTML/Global_attributes/hidden)
  - : 一个枚举的属性，表示该元素还没有，或者不再*相关*。例如，它可以用来隐藏页面中的元素，这些元素在登录过程完成之前不能使用。浏览器不会渲染这样的元素。这个属性不能用来隐藏可以合法显示的内容。
- [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id)
  - : 定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 CSS）时标识元素。
- [`inert`](/zh-CN/docs/Web/HTML/Global_attributes/inert)
  - : 一个布尔值，使浏览器忽略该元素的用户输入事件。在有点击事件的情况下很有用。
- [`inputmode`](/zh-CN/docs/Web/HTML/Global_attributes/inputmode)
  - : 向浏览器提供有关在编辑此元素或其内容时要使用的虚拟键盘配置类型的提示。主要用于 {{HTMLElement("input")}} 元素，但在 [`contenteditable`](#contenteditable) 模式下可用于任何元素。
- [`is`](/zh-CN/docs/Web/HTML/Global_attributes/is)

  - : 允许指定标准 HTML 元素的行为如同已注册的自定义内置元素一样（有关更多详细信息，请参阅[使用自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)）。

    > **备注：** `item*` 属性是 [WHATWG HTML 微数据特性](https://html.spec.whatwg.org/multipage/microdata.html#microdata)的一部分。

- [`itemid`](/zh-CN/docs/Web/HTML/Global_attributes/itemid)
  - : 项的唯一全局标识符。
- [`itemprop`](/zh-CN/docs/Web/HTML/Global_attributes/itemprop)
  - : 用于向项添加属性。每个 HTML 元素都可以指定一个 `itemprop` 属性，其中 `itemprop` 由一个名称和值对组成。
- [`itemref`](/zh-CN/docs/Web/HTML/Global_attributes/itemref)
  - : 只有不是具有 `itemscope` 属性的元素的后代，它的属性才可以与使用 `itemref` 项目相关联。它提供了元素 ID 列表（而不是 `itemid`）以及文档中其他位置的其他属性。
- [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope`（通常）与 [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes/itemtype) 一起使用，以指定包含在关于特定项目代码块中的 HTML。`itemscope` 创建数据项并定义与之关联的 `itemtype` 的范围。`itemtype` 是描述项及其属性上下文的词汇表（例如 [schema.org](https://schema.org/)）的有效 URL。
- [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes/itemtype)
  - : 指定将用于在数据结构中定义 `itemprops`（项属性）的词汇表的 URL。[`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes/itemscope) 用于设置数据结构中按 `itemtype` 设置的词汇表的生效范围。
- [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang)
  - : 帮助定义元素的语言：不可编辑元素所在的语言，或者应该由用户编写的可编辑元素的语言。该属性包含一个“语言标记”（由用连字符分隔的“语言子标记”组成），格式在 {{RFC(5646, "Tags for Identifying Languages（也称为 BCP 47）")}} 中定义。[**xml:lang**](#xml:lang) 优先于它。
- [`nonce`](/zh-CN/docs/Web/HTML/Global_attributes/nonce)
  - : 一个加密的 nonce（“只使用一次的数字”），可以被[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)使用，以确定是否允许进行给定的获取。
- [`part`](/zh-CN/docs/Web/HTML/Global_attributes/part)
  - : 元素的部件名称的空格分隔列表。Part 名称允许 CSS 通过 {{CSSxRef("::part")}} 伪元素选择和设置影子树中的特定元素。
- [`popover`](/zh-CN/docs/Web/HTML/Global_attributes/popover)
  - : 用于将某个元素指定为弹出式元素（详见 {{domxref("Popover API", "Popover API", "", "nocode")}}）。弹出式元素通过 `display: none` 隐藏，直到通过调用/控制元素（即 `<button>` 或 `<input type="button">` 带有 [`popovertarget`](/zh-CN/docs/Web/HTML/Element/button#popovertarget) 属性）或 {{domxref("HTMLElement.showPopover()")}} 调用而打开。
- [`role`](/zh-CN/docs/Web/Accessibility/ARIA/Roles)
  - : Role 定义了内容的语义，允许屏幕阅读器和其他工具以符合用户对该类型对象的期望的方式来展示和支持与该对象的互动。`roles` 以 `role="role_type"` 的形式添加到 HTML 元素中，其中 `role_type` 是 ARIA 规范中的一个角色名称。
- [`slot`](/zh-CN/docs/Web/HTML/Global_attributes/slot)
  - : 将[影子 DOM](/zh-CN/docs/Web/API/Web_components/Shadow_DOM) 影子树中的一个空槽分配给一个元素：具有 `slot` 属性的元素被分配给由 {{HTMLElement("slot")}} 元素创建的空槽，其 [`name`](/zh-CN/docs/Web/HTML/Element/slot#name) 属性的值与 `slot` 属性的值匹配。
- [`spellcheck`](/zh-CN/docs/Web/HTML/Global_attributes/spellcheck)

  - : 枚举属性，定义是否可以检查元素是否存在拼写错误。它可能具有以下值：

    - `true` 或空字符串，表示如果可能，应检查元素是否存在拼写错误；
    - `false`，表示不应检查元素的拼写错误。

- [`style`](/zh-CN/docs/Web/HTML/Global_attributes/style)
  - : 含有要应用于元素的 [CSS](/zh-CN/docs/Web/CSS) 样式声明。请注意，建议在单独的文件中定义样式。该属性和 {{HTMLElement("style")}} 元素主要用于快速添加样式，例如用于测试目的。
- [`tabindex`](/zh-CN/docs/Web/HTML/Global_attributes/tabindex)

  - : 整数属性，指示元素是否可以获取输入焦点（可聚焦），是否应该参与顺序键盘导航，如果是，则表示哪个位置。它可以接受下列值之一：

    - *负值*表示该元素应该是可聚焦的，但不应通过顺序键盘导航到达;
    - `0` 表示元素应通过顺序键盘导航可聚焦和可到达，但其相对顺序由平台约定定义;
    - *正值*意味着元素应该可以通过顺序键盘导航进行聚焦和访问；元素聚焦的顺序是 [**tabindex**](#tabindex) 的增加值。如果多个元素共享相同的 `tabindex`，则它们的相对顺序遵循它们在文档中的相对位置。

- [`title`](/zh-CN/docs/Web/HTML/Global_attributes/title)
  - : 包含表示与其所属元素相关信息的文本。这些信息通常可以作为提示呈现给用户，但不是必须的。
- [`translate`](/zh-CN/docs/Web/HTML/Global_attributes/translate)

  - : 枚举属性，用于指定在页面本地化时是否转换元素的属性值及其 {{domxref("Text")}} 节点子节点的值，或者是否保持它们不变。它可以具有以下值：

    - 空字符串和 `yes`，表示元素将被翻译。
    - `no`，表示该元素不会被翻译。

- [`virtualkeyboardpolicy`](/zh-CN/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)

  - : 一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，用于控制屏幕上的虚拟键盘行为，如平板电脑、手机或其他设备上的硬件键盘可能无法使用的元素，也使用 [`contenteditable`](#contenteditable) 属性。

    - `auto` 或一个*空字符串*，当元素被聚焦或点击时自动显示虚拟键盘。
    - `manual`，它将焦点和元素上的点击与虚拟键盘的状态解耦。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 允许查询大多数全局属性的 {{domxref("Element")}} 接口。
