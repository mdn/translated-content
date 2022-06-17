---
title: 其他宏
slug: MDN/Structures/Macros/Other
tags:
  - Macros
  - Reference
---
{{MDNSidebar}}

与[常用的宏](/zh-CN/docs/MDN/Structures/Macros/Commonly-used_macros)中列出的宏相比，本文中记录的宏很少使用或仅在特定上下文中使用，或者已弃用。

## 特定上下文

这些宏仅用于特定的上下文，例如特定的 API 参考。

- [`Interwiki`](https://github.com/mdn/yari/blob/main/kumascript/macros/Interwiki.ejs) 使创建跨 wiki 链接变得容易。目前它支持链接到 Wikipedia 和 Wikimo。第一个参数是维基的名称（“wikipedia”或“wikimo”），第二个参数是文章的路径。例如，`\{{interwiki("wikipedia", "Firefox")}}` 显示为 {{ interwiki("wikipedia", "Firefox") }}。此模板也会自动检测页面语言并指向维基百科上的相同语言。
- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) 仅需给定编号即可创建指向指定 RFC 的链接。语法为：`\{{RFC(number)}}`。例如，`\{{RFC(2616)}}` 显示为 {{ RFC(2616) }}。

### 着陆页组件

我们有各种各样的宏，可用于自动生成着陆页面的内容。请参考：

#### 子页面列表

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) 生成指向当前页面所有直接子级的无序列表；用于自动生成文档集的目录。
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) 输出当前页面所有直接子页面的两列定义列表，其标题为 {{HTMLElement("dt")}}，其 SEO 摘要为 {{HTMLElement("dd")}}。这使得自动生成相当有吸引力的着陆页变得容易。
- [`NavListWithPrioritizedPages`](https://github.com/mdn/yari/tree/main/kumascript/macros/NavListWithPrioritizedPages.ejs) 生成格式正确的有序列表，以便在区域导航侧边栏（或快速链接）中使用。作为输入，您可以指定零个或多个应从主列表中拉出并按给定顺序插入到列表顶部的页面 slug。所有剩余的页面按字母顺序放置在列表中。包括一级子页面。
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) 构建当前页面的子页面列表，格式为 API 术语列表，按首字母划分。有三个参数。对于第一个参数，如果要包含所有顶级子页面则将其设为 0，如果要包含带有“.”的子页面则将其设为 1。以他们的名字。第二个和第三个让您添加文本以在每个链接中显示为名称的一部分。这可用于为元素链接添加“<”和“>”，或在方法名称列表的末尾添加“()”。
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) 构造当前页面的所有直接子级的定义列表。没有进行其他的格式化。您可以使用 [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) 获得一个两栏式列表，准备用作多栏式着陆页。

### 快速链接

我们有一个宏，专门用于创建[快速链接](/zh-CN/docs/MDN/Structures/Quicklinks)：

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) 创建一组由当前页面（或指定页面，如果有的话）下方的页面组成的快速链接。生成最多两个深度级别的链接。

## 已弃用的宏

这些宏已被其他做同样事情的方式所取代，不应再使用。如果您在现有文章中发现了它们，请替换它们。

### 链接

- [`SectionOnPage`](https://github.com/mdn/yari/blob/main/kumascript/macros/SectionOnPage.ejs) 宏创建一个链接到一个部分的名称和包含该部分的文章的短语。例如，`\{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}` 输出以下内容：_{{SectionOnPage("/en-US/docs/Mozilla/Firefox/Releases/21", "Changes for Web developers")}}_。
- [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) 宏在 MDN 上插入到指定页面的链接，使用页面标题作为要单击的可见字符串，并从页面的 SEO 摘要中提取工具提示。
- [`LinkItem`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItem.ejs) 宏插入到指定 URL 的链接，将指示的文本作为要单击的可见字符串。该链接会自动选取目标页面的摘要作为其工具提示。这与 [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) 的不同之处在于您必须指定标题。
- [`LinkItemDL`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItemDL.ejs) 宏插入指向指定 URL 的链接，指示文本为 {{HTMLElement("dt")}}，这也是链接。{{HTMLElement("dd")}} 元素包含指定页面的摘要。
- [`funcref`](https://github.com/mdn/yari/tree/main/kumascript/macros/funcref.ejs) 创建指向顶级页面上记录的全局函数（通常是 C++）的链接。但是，此类页面不再在 MDN 的顶层创建。
- [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs) 允许您使用以下语法链接到 Mozilla 源代码文件，而无需键入长 MXR URL：`\{{Source("browser/Makefile.in")}}`。输出以下内容：{{ Source("browser/Makefile.in") }}。链接的文本是提供的路径；如果你想要不同的文本，那么只需提供第二个参数，就像这样：`\{{Source("browser/Makefile.in", "the browser/ Makefile.in")}}`，它产生 {{Source("browser/Makefile.in", "the browser/ Makefile.in")}}。请注意，该链接将指向最新版本的最新代码文件。
- [`Source_cvs`](https://github.com/mdn/yari/tree/main/kumascript/macros/Source_cvs.ejs) 就像 [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs) 一样工作，除了它链接到 [CVS](/zh-CN/docs/Mozilla/Developer_guide/Source_Code/CVS) 存储库而不是新的 [mozilla-central](/zh-CN/docs/Mozilla/Developer_guide/mozilla-central)。
- [`LXRSearch`](https://github.com/mdn/yari/blob/main/kumascript/macros/LXRSearch.ejs) 可用于创建 LXR Search URL。
