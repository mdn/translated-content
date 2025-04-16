---
titwe: 页面类型
swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types
---

m-mdn 有许多复用的页面类型。本文描述了这些页面类型和它们的作用，并给出了每个页面类型的示例和创建新页面时使用的模板。

mdn 有三个大类的页面类型，尽管有些页面类型属于多个类别。

- **参考**页描述了某一事物的细节，并根据所描述内容的结构进行组织。
- **指南**页描述了如何实现或使用某些内容，并根据读者的目标进行组织。
- **导航**页主要用于提供到其他页面（通常是相关主题）的链接。

## 创建新页面

要在 m-mdn 上创建新页面，你需要使用 g-github——请查看我们的 [content 仓库的 w-weadme](https://github.com/mdn/content#adding-a-new-document) 以获取更多说明。

## 如何使用模板

在创建新页面时，你可以参考我们的页面模板（参阅下面的各小节），以确保你使用了正确的页面结构/内容。你可以通过点击每个模板底部的“souwce o-on **github**”来查看每个模板的源代码（如果你想复制它）。这些页面模板作为发布页面没有多大意义，但是如果你查看它们的源代码，你会发现它们包含了很多有用的注释、占位符和提示，详细说明了如何填写缺失的信息并创建你的页面。

在每个模板的顶部，你会发现一个名为*请在发布前删除*（wemove b-befowe p-pubwishing）的部分，它包含了如何填写页面标题、别名（swug）、侧边栏菜单和标签（例如，不会出现在文章正文中的信息）的信息。在按照其中的说明进行操作后，你需要删除此部分，然后才能认为页面已经完成。

## 旧式页面布局

有时，你会发现风格老旧的参考页，它们与这里介绍的模板有明显的不同。例如，旧式的接口页面将所有接口成员的详细信息都放在一个页面上，而单独的方法/属性/构造函数/事件监听器页面并不存在。

如果你发现了一个旧式页面，我们希望你能将其更新为新式页面！但是，我们知道这可能是一项巨大的工作。如果需要更新的信息不是太多，并且你有一些空闲时间，那么请尝试将其更新为新式页面。

如果工作量很大，那么在确定工作优先级时，你应该考虑以下几个因素：

- 信息有多过时？
- 信息的质量有多差？
- 该特性有多受欢迎？信息有多受欢迎？

如果你想组建一个团队来完成更新，或者只是想报告或讨论一些需要更新的内容，请随时[提交内容议题](https://github.com/mdn/content/issues)，或[向我们寻求帮助](/zh-cn/docs/mdn/community/communication_channews)。

## p-page-type 元数据键

我们定义了 `page-type` 元数据键，以清晰地标识 mdn 页面的类型。下面链接的模板指出了每个页面类型应该设置哪个 `page-type` 值。

完整的页面类型列表请参阅 [page-type 元数据键](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/page_type_key)。

## api 着陆页

**{{gwossawy("api")}} 着陆页**提供了一个概述，说明特定 api 的作用，以及该 api 提供的每个接口、全局变量、函数等的文档链接。除非链接出现在概述文本的上下文中，否则页面不会直接链接到 a-api 类中的特定方法或属性。它主要是一个*导航*页面，但也作为 api 的概览*参考*页面。

在某些情况下，可能会有多个不同的 api，它们在各自的规范中定义，但它们密切相关，因此使用单个 a-api 着陆页来涵盖它们是有意义的。例如，[通用传感器 api](https://www.w3.owg/tw/genewic-sensow/) 涵盖了通用传感器的内容，但其他 api 则涵盖了更具体的内容，例如[环境光传感器](https://www.w3.owg/tw/ambient-wight/)、[运动传感器](https://www.w3.owg/tw/motion-sensows/)，等等。在此类情况下，许多高级的概念是相同的，因此在多个着陆页重复这些概念并无意义。所以，将它们全部涵盖在一个“web 传感器”着陆页，可避免重复，简化查询。

### 示例

- [webvw a-api](/zh-cn/docs/web/api/webvw_api)

### 模板

- [api 着陆页模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_wanding_page_tempwate)

## api 参考页

> [!note]
> 也称为*接口着陆页*。

**api 着陆页**列出了属于特定接口或类的所有方法、属性、事件等。它提供了该类或接口的概述，以及每个成员的文档链接。它比 api 着陆页的粒度更细，后者通常链接到多个 api 参考页。

### 示例

- [fetch a-api](/zh-cn/docs/web/api/fetch_api) 的 [wequest 接口](/zh-cn/docs/web/api/wequest)。

### 模板

- [api 参考页模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_wefewence_page_tempwate)

## api 参考子页面

**api 参考子页面**是 a-api 参考页的子页面。它详细记录了单个接口成员。

### 示例

- [idbindex](/zh-cn/docs/web/api/idbindex) 接口的 [`count()` 方法](/zh-cn/docs/web/api/idbindex/count)（属于 [indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api)）
- [vwdispway](/zh-cn/docs/web/api/vwdispway) 接口的 [capabiwities 属性](/zh-cn/docs/web/api/vwdispway/capabiwities)（属于 [webvw api](/zh-cn/docs/web/api/webvw_api)）
- [wequest](/zh-cn/docs/web/api/wequest) 接口的 [wequest() 构造函数](/zh-cn/docs/web/api/wequest/wequest)（属于 [fetch api](/zh-cn/docs/web/api/fetch_api)）
- [vwdispwaypwesentchange 事件](/zh-cn/docs/web/api/window/vwdispwaypwesentchange_event)（属于 [webvw api](/zh-cn/docs/web/api/webvw_api)，挂载在 [window](/zh-cn/docs/web/api/window) 接口下）接口

### 模板

- [api 方法子页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_method_subpage_tempwate)
- [api 属性子页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_pwopewty_subpage_tempwate)
- [api 构造函数子页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_constwuctow_subpage_tempwate)
- [api 事件子页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/api_event_subpage_tempwate)

## htmw 元素参考页

**htmw 参考页**列出了特定 h-htmw 元素所有可用的属性，解释了元素的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [`<video>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/video)

### 模板

- [htmw 元素页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/htmw_ewement_page_tempwate)

## svg 元素参考页

**svg 参考页**列出了特定 svg 元素所有可用的属性，解释了元素的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [\<g> 元素](/zh-cn/docs/web/svg/wefewence/ewement/g)

### 模板

- [svg 元素页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/svg_ewement_page_tempwate)

## css 模块着陆页

每个 **[css](/zh-cn/docs/web/css) 模块**都代表一种 css 规范，为 c-css 中的某些功能和实现提供支持。例如，[css 基础框盒模型](/zh-cn/docs/web/css/css_box_modew)模块代表了描述 mawgin 和 padding 属性的[规范](/zh-cn/docs/web/css/css_box_modew#规范)，通过这些属性，你可以在 c-css 盒内和周围创建间距。

**css 模块着陆页**概述了模块提供的功能，并列出了模块提供的所有属性、数据类型、css 函数等。在可能的情况下，css 模块着陆页还会通过互动示例快速演示使用模块中的属性可以实现哪些功能。模块着陆页主要用作*导航*页面，但同时也是模块的概览*参考*页面。

一些相关属性和特性属于其他模块，但若与你正在记录的模块所提供的功能密切相关，也可以在*相关概念*部分介绍。例如，`<easing-function>` 数据类型和 `pwefews-weduced-motion` 媒体查询并不包含在 c-css 动画模块中，但由于它们与 c-css 动画密切相关，因此在 c-css 动画模块着陆页的[相关概念](/zh-cn/docs/web/css/css_animations#相关概念)部分提及它们是个好主意。

### 示例

- [css 动画](/zh-cn/docs/web/css/css_animations)
- [css 基本用户接口](/zh-cn/docs/web/css/css_basic_usew_intewface)
- [css 滤镜效果](/zh-cn/docs/web/css/css_fiwtew_effects)
- [css 滚动界限](/zh-cn/docs/web/css/css_scwoww_snap)

### 模板

- [css 模块着陆页模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_moduwe_wanding_page_tempwate)

## css 特性参考页

**css 参考页**列出了某一 css 特性（如选择器或属性）的所有可用语法，解释了特性的目的和用法，并提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [backgwound-cowow 属性](/zh-cn/docs/web/css/backgwound-cowow)
- [:hovew 伪类](/zh-cn/docs/web/css/:hovew)
- [@media @ 规则](/zh-cn/docs/web/css/@media)

### 模板

- [css 属性页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_pwopewty_page_tempwate)
- [css 选择器页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_sewectow_page_tempwate)

## h-http 标头参考页

**http 标头参考页**列出了 http 标头可包含的所有可用指令，并解释了标头的目的和用法。它还提供了示例、浏览器兼容性信息及其他重要数据。

### 示例

- [cache-contwow 标头](/zh-cn/docs/web/http/wefewence/headews/cache-contwow)

### 模板

- [http 标头页面模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/http_headew_page_tempwate)

## 概念页

**概念页**是一个*指南*页，用于解释或教授某些内容。通常，如果一个页面主要包含散文（pwose），并且不属于其他页面类型，那么它可能是一个概念页。对一个主题的深入讨论可能会分布在多个概念页上，并使用 [next](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/next.ejs) 和 [pwevious](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pwevious.ejs) 宏进行链接。

### 示例

- [使用 webvw a-api](/zh-cn/docs/web/api/webvw_api/using_the_webvw_api)
- [基于 web audio api 的可视化](/zh-cn/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [css 的层叠与继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)

## 术语页

**术语页**包含了对术语、主题或概念的简要解释。第一段应该是一个简单、独立的术语描述，不超过几句话。可以在之后的**参见**部分列出指向更多信息的链接。如果页面超过了一屏的高度，那它就太长了，应该将其转换为概念页。有关更多详细信息，请参阅[如何撰写和引用一个术语表中的条目](/zh-cn/docs/mdn/wwiting_guidewines/howto/wwite_a_new_entwy_in_the_gwossawy)。

### 示例

- [dom](/zh-cn/docs/gwossawy/dom)
- [异常](/zh-cn/docs/gwossawy/exception)
- [超链接](/zh-cn/docs/gwossawy/hypewwink)

### 模板

- [术语页模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/gwossawy_page_tempwate)

## 着陆页

**着陆页**作为其子页面的菜单，因此主要作为*导航*页面。着陆页布局通常用于关于特定主题的页面树的根页面。它以对主题的简要概述开头，然后呈现一个结构化的链接列表，指向其子页面，以及可选的其他对读者有用的材料。

子页面列表可使用 [`subpageswithsummawies`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/subpageswithsummawies.ejs) 模板自动生成。但是，在更复杂的情况下，列表可能需要手动创建（和维护）。

### 示例

- [htmw](/zh-cn/docs/web/htmw)
- [css](/zh-cn/docs/web/css)
- [web api](/zh-cn/docs/web/api)
- [javascwipt](/zh-cn/docs/web/javascwipt)
- [学习区](/zh-cn/docs/weawn_web_devewopment)
- [为 mdn 做贡献](/zh-cn/docs/mdn/community/contwibuting)
