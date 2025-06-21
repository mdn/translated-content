---
title: 其他宏
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

与[常用的宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)中列出的宏相比，本文中记录的宏很少使用或仅在特定上下文中使用，或者已弃用。

## 特定上下文

下面的宏仅用于特定的上下文，例如特定的 API 参考。

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) 仅需给定编号即可创建指向指定 RFC 的链接。语法为：`\{{RFC(number)}}`。例如，`\{{RFC(2616)}}` 显示为 {{ RFC(2616) }}。

### 着陆页组件

我们有各种各样的宏，可用于自动生成着陆页面的内容。请参考：

#### 子页面列表

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) 生成指向当前页面所有直接子级的无序列表；用于自动生成文档集的目录。
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) 组织当前页面所有直接子页面的定义列表，其标题为 {{HTMLElement("dt")}}，其 SEO 摘要为 {{HTMLElement("dd")}}。这使得自动生成相当有吸引力的着陆页变得容易。
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) 构建当前页面的子页面列表，格式为 API 术语列表，按首字母划分。有三个参数。对于第一个参数，如果要包含所有顶级子页面则将其设为 0，如果要包含带有“.”的子页面则将其设为 1。以他们的名字。第二个和第三个让你添加文本以在每个链接中显示为名称的一部分。这可用于为元素链接添加“<”和“>”，或在方法名称列表的末尾添加“()”。

### 链接列表

我们有一个宏，专门用于在内容中创建[链接列表](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Sidebars)：

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) 创建一组由属于当前页面（或指定页面，如果给定的话）的子页面组成的链接列表。生成最多两个深度级别的链接。
