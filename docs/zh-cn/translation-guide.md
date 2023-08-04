# 针对 MDN 文档的本地化指南

本文是针对简体中文（zh-CN）文档的翻译指南。如果你所使用的语言尚未有翻译指南，而你又希望新建的话，欢迎你联系[我们负责该语言的翻译团队](https://github.com/mdn/translated-content/blob/main/PEERS_GUIDELINES.md#review-teams)。

同样地，如果你对本文的指南有任何改进的建议，请提出问题（issue）或发起 PR。我们对此表示欢迎。下面进入简体中文翻译指南的正文部分。

> 若你对 MDN 上使用的 Markdown 格式不熟悉，请参阅[如何使用 markdown 来撰写文档][]。

## 元数据

每个文档的开头都会有元数据，大致的结构如下：

```yaml
---
title: Fetch API
slug: Web/API/Fetch_API
page-type: web-api-overview
browser-compat: api.fetch
---
```

其中：

- `title` 为文档的大标题
- `slug` 为与网页 URL 相关的元数据（URL path 部分的规则为：`/<locale>/docs/<slug>`）
- `page-type` 为页面的类型，将被用于站点管理和自动化数据处理
- `browser-compat` 为[**浏览器兼容性表**][]对应的宏所使用的元数据。

在简体中文文档翻译中，请适当翻译 `title` 元数据，以方便他人根据标题检索内容，`slug` 元数据则应与翻译对应的英文文档保持不变。对于 `page-type`、`browser-compat` 以及部分文档中使用的 `spec-urls` 元数据，它们被用于站点管理和自动化数据处理，而 yari 平台会自动将这些元数据由英文文档合并到本地化文档中。若没有特殊的需要，请将这些元数据从简体中文文档中移除。

最终在简体中文文档中呈现的元数据如下所示：

```yaml
title: Fetch API
slug: Web/API/Fetch_API
```

## 翻译标题和 ID

文档中的目录导航、与代码块相关联的运行实例等会使用到 HTML ID。而对于 Markdown 文档，其渲染得到的 HTML 文件的 ID 则与 Markdown 文档中的标题相对应（但这并不意味着两者相等，yari 平台对于半角空格、标点等有特殊处理）。

例如，对于标题：

```md
## Examples
```

在简体中文文档中的翻译应该是：

```md
## 示例
```

## 翻译示例代码块

对于英文的示例代码块，可以选择翻译其中的注释、字符串、输出结果等等，但不建议对变量、函数、方法等名称进行翻译。

一些示例代码块会有与之对应的“实例”（即对示例代码运行效果的实时展示）。这些实例是通过 `{{EmbedLiveSample}}` 等宏来实现的，因为在本地化文档中会翻译英文标题，请**注意一并修改运行实例宏的第一个参数为相对应的中文标题**（参见：[运行实例][]）。

## 站内链接翻译

在翻译文档时，请记得将 MDN 站内网页的链接中的语言替换为 `zh-CN`，以便读者能够访问与之对应的本地化文档。此外，对于站内链接，请只保留 URL 中的路径及其之后的部分（去除协议和域名）。

例如：

```md
If you are new to HTML, CSS, JavaScript, etc., try our [Learn web development](/en-US/docs/Learn) tutorials.
```

在翻译时，应该将 URL 路径开头的 `/en-US` 替换为 `/zh-CN`：

```md
如果你刚刚开始了解 HTML、CSS、JavaScript 等相关知识，你可以试着完成我们的 [Web 开发教程](/zh-CN/docs/Learn)。
```

还需特别注意路径后带有片段标识（fragment）的站内链接，请同步更新片段标识为本地化文档中指定标题的 ID（若不清楚标题和 ID 之间的转换规则，可以在浏览器的开发者工具中查找对应标题的 ID）。

例如，对于以下链接：

```md
Reference to [Live sample macros](/en-US/docs/MDN/Structures/Live_samples#live_sample_macros).
```

请对应中文文档，更新其片段标识：

```md
参考：[运行实例宏](/zh-CN/docs/MDN/Structures/Live_samples#运行实例宏)。
```

> 请注意，无论指向的本地化文档是否存在，都请让链接指向本地化文档。yari 平台可以在指向本地化文档的链接不存在的情况下，自动将其回落到对应英文版本的链接。

## 中文翻译的常见问题

为保证简体中文文档格式的一致性，翻译指南列出了部分规范。

### 标点符号

除了代码中使用的符号以及一些特殊情况外，请将英文（半角）符号替换成中文（大部分为全角）符号。

> 但请注意，请不要使用**全角数字**（特殊情况除外）。

示例如下：

- 正确：`我们可以学习 JavaScript——一种很酷的语言`
- 错误：`我们可以学习 JavaScript--一种很酷的语言`
- 正确：`以下示例是“可交互的”`
- 错误：`以下示例是"可交互的"`

另外，请注意并列的词语间应使用顿号而非逗号：

- 原文：`a, b, and c`
- 宜：`a、b 和 c`
- 不宜：`a，b，和 c`

#### 常见中/英文标点

<!-- markdownlint-disable search-replace -->

| 名称   | 中文 | 英文    |
| ------ | ---- | ------- |
| 括号   | （） | ()      |
| 冒号   | ：   | :       |
| 引号   | “”   | ""      |
| 破折号 | ——   | -- 、 — |

<!-- markdownlint-enable search-replace -->

简体中文标点符号参考资源：

- [教育部《标点符号用法》](https://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf)
- [维基百科：标点符号](https://zh.wikipedia.org/zh-cn/标点符号)

### 中文和拉丁语系文字间加空格

对于简体中文文档，请在中文和拉丁语系文字之间保留**一个空格**，但在拉丁语系文字和中文标点之间，则无需保留空格。

示例如下：

- 正确：`学习 Web 开发`
- 错误：`学习Web开发`
- 正确：`学习 JavaScript、HTML、CSS 等`
- 错误：`学习 JavaScript、 HTML、 CSS 等`
- 正确：`应用程序接口（API）`
- 错误：`应用程序接口（ API ）`

对于链接文字和非链接文字部分，同样适用此规则：

- 正确：`它指向一个[示例](#示例)`
- 错误：`它指向一个 [示例](#示例)`
- 正确：`指向 [MDN 开发者文档](https://developer.mozilla.org/)的链接`
- 错误：`指向[MDN开发者文档](https://developer.mozilla.org/)的链接`

请注意，数字与中文之间也请保留空格：

- 正确：`需 10 个小时完成`
- 错误：`需10个小时完成`

### 排版

英文文档中，对于较长的段落，会通过断行的形式截断，以方便维护文档。但在 Markdown 中，断行会引入空格，在简体中文翻译中，我们有如下约定：

- 在段落不是特别长的情况下（200 个字符以内），请不要断行。
- 若段落过长，也请在中文与拉丁语系文字、数字之间，或是句子末尾断行。

例如：

```md
This is an example.
We usually write a paragraph into multiple lines.
Like this.
```

而在中文文档中，应该使它们在同一行内：

```md
这是一个示例。我们不应该断行写这一段话。就像这样。
```

### 词语翻译

### 代名词

我们无需将“you”翻译为“您”，在文档正文部分的翻译中，请统一使用“你”。

### 复数形式

英文文档中，为了使语句的语法正确，会使用大量的复数形式。在中文翻译中，则无需保留这些复数的形式（未翻译的英文名词也同理）。

- 原文：`Application Programming Interfaces (APIs)`
- 宜：`应用程序接口（API）`
- 不宜：`应用程序接口（APIs）`
- 不宜：`应用程序接口们（APIs）`

### 术语表

我们在仓库中维护了一个[术语表](glossary.md)，旨在统一目前还未有明确中文翻译的术语。在翻译文档时，请尽量使用术语表中的术语，以保证文档的一致性。

> 如果术语表中缺少某些术语，或者你对其中的术语翻译有任何疑问，欢迎提出[议题](https://github.com/mdn/translated-content/issues/new/choose)或发起 PR。

### 常用标题

英文文档中使用了一些常见标题，为了保持简体中文文档的一致性，请在翻译时参考术语表中的[标题和表格的翻译](glossary.md#标题表格)。

[如何使用 markdown 来撰写文档]: https://developer.mozilla.org/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN
[**浏览器兼容性表**]: https://developer.mozilla.org/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables
[运行实例]: https://developer.mozilla.org/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples
