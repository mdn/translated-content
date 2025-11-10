---
title: 页面类型
slug: MDN/Writing_guidelines/Page_structures/Page_types
---

MDN 有许多复用的页面类型。本文描述了这些页面类型和它们的作用，并给出了每个页面类型的示例和创建新页面时使用的模板。

MDN 有三个大类的页面类型，尽管有些页面类型属于多个类别。

- **参考**页描述了某一事物的细节，并根据所描述内容的结构进行组织。
- **指南**页描述了如何实现或使用某些内容，并根据读者的目标进行组织。
- **导航**页主要用于提供到其他页面（通常是相关主题）的链接。

## 创建新页面

要在 MDN 上创建新页面，你需要使用 GitHub——请查看我们的 [content 仓库的 README](https://github.com/mdn/content#adding-a-new-document) 以获取更多说明。

## 如何使用模板

在创建新页面时，你可以参考我们的页面模板（参阅下面的各小节），以确保你使用了正确的页面结构/内容。你可以通过点击每个模板底部的“Source on **GitHub**”来查看每个模板的源代码（如果你想复制它）。这些页面模板作为发布页面没有多大意义，但是如果你查看它们的源代码，你会发现它们包含了很多有用的注释、占位符和提示，详细说明了如何填写缺失的信息并创建你的页面。

在每个模板的顶部，你会发现一个名为*请在发布前删除*（Remove before publishing）的部分，它包含了如何填写页面标题、别名（slug）、侧边栏菜单和标签（例如，不会出现在文章正文中的信息）的信息。在按照其中的说明进行操作后，你需要删除此部分，然后才能认为页面已经完成。

## 旧式页面布局

有时，你会发现风格老旧的参考页，它们与这里介绍的模板有明显的不同。例如，旧式的接口页面将所有接口成员的详细信息都放在一个页面上，而单独的方法/属性/构造函数/事件监听器页面并不存在。

如果你发现了一个旧式页面，我们希望你能将其更新为新式页面！但是，我们知道这可能是一项巨大的工作。如果需要更新的信息不是太多，并且你有一些空闲时间，那么请尝试将其更新为新式页面。

如果工作量很大，那么在确定工作优先级时，你应该考虑以下几个因素：

- 信息有多过时？
- 信息的质量有多差？
- 该特性有多受欢迎？信息有多受欢迎？

如果你想组建一个团队来完成更新，或者只是想报告或讨论一些需要更新的内容，请随时[提交内容议题](https://github.com/mdn/content/issues)，或[向我们寻求帮助](/zh-CN/docs/MDN/Community/Communication_channels)。

## page-type 元数据键

我们定义了 `page-type` 元数据键，以清晰地标识 MDN 页面的类型。下面链接的模板指出了每个页面类型应该设置哪个 `page-type` 值。

完整的页面类型列表请参阅 [page-type 元数据键](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key)。

## API 着陆页

**{{Glossary("API")}} 着陆页**提供了一个概述，说明特定 API 的作用，以及该 API 提供的每个接口、全局变量、函数等的文档链接。除非链接出现在概述文本的上下文中，否则页面不会直接链接到 API 类中的特定方法或属性。它主要是一个*导航*页面，但也作为 API 的概览*参考*页面。

在某些情况下，可能会有多个不同的 API，它们在各自的规范中定义，但它们密切相关，因此使用单个 API 着陆页来涵盖它们是有意义的。例如，[通用传感器 API](https://www.w3.org/TR/generic-sensor/) 涵盖了通用传感器的内容，但其他 API 则涵盖了更具体的内容，例如[环境光传感器](https://www.w3.org/TR/ambient-light/)、[运动传感器](https://www.w3.org/TR/motion-sensors/)，等等。在此类情况下，许多高级的概念是相同的，因此在多个着陆页重复这些概念并无意义。所以，将它们全部涵盖在一个“Web 传感器”着陆页，可避免重复，简化查询。

### 示例

- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)

### 模板

- [API 着陆页模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

## API 参考页

> [!NOTE]
> 也称为*接口着陆页*。

**API 着陆页**列出了属于特定接口或类的所有方法、属性、事件等。它提供了该类或接口的概述，以及每个成员的文档链接。它比 API 着陆页的粒度更细，后者通常链接到多个 API 参考页。

### 示例

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的 [Request 接口](/zh-CN/docs/Web/API/Request)。

### 模板

- [API 参考页模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

## API 参考子页面

**API 参考子页面**是 API 参考页的子页面。它详细记录了单个接口成员。

### 示例

- [IDBIndex](/zh-CN/docs/Web/API/IDBIndex) 接口的 [`count()` 方法](/zh-CN/docs/Web/API/IDBIndex/count)（属于 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API)）
- [VRDisplay](/zh-CN/docs/Web/API/VRDisplay) 接口的 [capabilities 属性](/zh-CN/docs/Web/API/VRDisplay/capabilities)（属于 [WebVR API](/zh-CN/docs/Web/API/WebVR_API)）
- [Request](/zh-CN/docs/Web/API/Request) 接口的 [Request() 构造函数](/zh-CN/docs/Web/API/Request/Request)（属于 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)）
- [vrdisplaypresentchange 事件](/zh-CN/docs/Web/API/Window/vrdisplaypresentchange_event)（属于 [WebVR API](/zh-CN/docs/Web/API/WebVR_API)，挂载在 [Window](/zh-CN/docs/Web/API/Window) 接口下）接口

### 模板

- [API 方法子页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API 属性子页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API 构造函数子页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API 事件子页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

## HTML 元素参考页

**HTML 参考页**列出了特定 HTML 元素所有可用的属性，解释了元素的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [`<video>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/video)

### 模板

- [HTML 元素页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

## SVG 元素参考页

**SVG 参考页**列出了特定 SVG 元素所有可用的属性，解释了元素的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [\<g> 元素](/zh-CN/docs/Web/SVG/Reference/Element/g)

### 模板

- [SVG 元素页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

## CSS 模块着陆页

每个 **[CSS](/zh-CN/docs/Web/CSS) 模块**都代表一种 CSS 规范，为 CSS 中的某些功能和实现提供支持。例如，[CSS 基础框盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model)模块代表了描述 margin 和 padding 属性的[规范](/zh-CN/docs/Web/CSS/Guides/Box_model#规范)，通过这些属性，你可以在 CSS 盒内和周围创建间距。

**CSS 模块着陆页**概述了模块提供的功能，并列出了模块提供的所有属性、数据类型、CSS 函数等。在可能的情况下，CSS 模块着陆页还会通过互动示例快速演示使用模块中的属性可以实现哪些功能。模块着陆页主要用作*导航*页面，但同时也是模块的概览*参考*页面。

一些相关属性和特性属于其他模块，但若与你正在记录的模块所提供的功能密切相关，也可以在*相关概念*部分介绍。例如，`<easing-function>` 数据类型和 `prefers-reduced-motion` 媒体查询并不包含在 CSS 动画模块中，但由于它们与 CSS 动画密切相关，因此在 CSS 动画模块着陆页的[相关概念](/zh-CN/docs/Web/CSS/Guides/Animations#相关概念)部分提及它们是个好主意。

### 示例

- [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)
- [CSS 基本用户接口](/zh-CN/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS 滤镜效果](/zh-CN/docs/Web/CSS/Guides/Filter_effects)
- [CSS 滚动界限](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)

### 模板

- [CSS 模块着陆页模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

## CSS 特性参考页

**CSS 参考页**列出了某一 CSS 特性（如选择器或属性）的所有可用语法，解释了特性的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [background-color 属性](/zh-CN/docs/Web/CSS/Reference/Properties/background-color)
- [:hover 伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/:hover)
- [@media @ 规则](/zh-CN/docs/Web/CSS/Reference/At-rules/@media)

### 模板

- [CSS 属性页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS 选择器页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)

## HTTP 标头参考页

**HTTP 标头参考页**列出了 HTTP 标头可包含的所有可用指令，并解释了标头的目的和用法。它还提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [Cache-Control 标头](/zh-CN/docs/Web/HTTP/Reference/Headers/Cache-Control)

### 模板

- [HTTP 标头页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

## 概念页

**概念页**是一个*指南*页，用于解释或教授某些内容。通常，如果一个页面主要包含散文（prose），并且不属于其他页面类型，那么它可能是一个概念页。对一个主题的深入讨论可能会分布在多个概念页上，并使用 [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) 和 [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) 宏进行链接。

### 示例

- [使用 WebVR API](/zh-CN/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [基于 Web Audio API 的可视化](/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [CSS 的层叠与继承](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

## 术语页

**术语页**包含了对术语、主题或概念的简要解释。第一段应该是一个简单、独立的术语描述，不超过几句话。可以在之后的**参见**部分列出指向更多信息的链接。如果页面超过了一屏的高度，那它就太长了，应该将其转换为概念页。有关更多详细信息，请参阅[如何撰写和引用一个术语表中的条目](/zh-CN/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary)。

### 示例

- [DOM](/zh-CN/docs/Glossary/DOM)
- [异常](/zh-CN/docs/Glossary/Exception)
- [超链接](/zh-CN/docs/Glossary/Hyperlink)

### 模板

- [术语页模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

## 着陆页

**着陆页**作为其子页面的菜单，因此主要作为*导航*页面。着陆页布局通常用于关于特定主题的页面树的根页面。它以对主题的简要概述开头，然后呈现一个结构化的链接列表，指向其子页面，以及可选的其他对读者有用的材料。

子页面列表可使用 [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) 模板自动生成。但是，在更复杂的情况下，列表可能需要手动创建（和维护）。

### 示例

- [HTML](/zh-CN/docs/Web/HTML)
- [CSS](/zh-CN/docs/Web/CSS)
- [Web API](/zh-CN/docs/Web/API)
- [JavaScript](/zh-CN/docs/Web/JavaScript)
- [学习区](/zh-CN/docs/Learn_web_development)
- [为 MDN 做贡献](/zh-CN/docs/MDN/Community/Contributing)
