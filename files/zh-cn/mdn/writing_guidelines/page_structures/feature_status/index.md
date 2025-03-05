---
title: 特性状态
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

特性状态为开发者提供了有关特性在各浏览器厂商的实现阶段的信息，有以下几种状态：

- [`experimental`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)
- [`deprecated`](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)

如果上述状态都不适用，则认为该特性是稳定的标准特性。我们不会在内容页面中明确添加此状态。有关这些术语的详细信息，请参见[“实验性、已弃用和过时”](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)页面。

要查看有关如何选择特性状态的详细说明，请参阅 `@mdn/browser-compat-data`（BCD）仓库中的[选择状态属性](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#choosing-status-properties)部分。

## 如何添加或更新特性状态

MDN 上记录的所有特性的特性状态都在其附带的 [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)（BCD）仓库的条目中定义，并且每当发布新的 [BCD 版本](https://github.com/mdn/browser-compat-data/releases)时，都会在 `mdn/content` 仓库中*自动*更新。

> [!WARNING]
> 不要手动更新 `mdn/content` 仓库中的特性状态。要更新特性的状态，你需要在 BCD 仓库中[提交拉取请求](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data)。在 BCD 仓库中的更改被批准且合并后，[自动创建的拉取请求](https://github.com/search?q=repo%3Amdn%2Fcontent+Synchronize+with+BCD&type=pullrequests)会更新 `mdn/content` 仓库中的状态。

自动化流程使用了元数据（front-matter）中的 [`browser-compat`](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#在_mdn_页面中使用浏览器兼容性数据) 键。该键存储了在兼容性数据中定位特性所需的 BCD 查询。如果 `browser-compat` 键有多个值，则自动化流程只使用第一个值来渲染状态宏。

## 如何在内容中指定特性状态？

以下部分记录了在 MDN 文档中呈现特性状态的机制。如前所述，你应该将这些机制视为只读，因为它们会自动包含到内容中。

### 侧边栏中的特性状态图标

使用[元数据](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template#sect1)中的 `status` 属性来显示侧边栏中特性的状态图标：

```yml
---
title: 特性名称
status:
  - experimental
  - non-standard
  - deprecated
browser-compat: api.feature
---
```

在呈现侧边栏时，代码会查找每个页面的元数据中的状态。如前所述，这些状态会自动更新；你不需要手动更改它们。

### 特性状态页面横幅

以下宏用于在页眉呈现状态横幅：

- `\{{SeeCompatTable}}`

  - : 用于 `experimental` 状态。它会生成**实验性状态**横幅：

    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`

  - : 用于 `non-standard` 状态。它会生成**非标准状态**横幅：

    {{Non-standard_Header}}

- `\{{Deprecated_Header}}`

  - : 用于 `deprecated` 状态。它会生成**已弃用状态**横幅：

    {{deprecated_header}}

### 定义列表中的特性状态图标

以下宏用于在定义列表项的旁边呈现行内状态图标：

- [`\{{Experimental_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) 图标：{{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) 图标：{{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) 图标：{{Deprecated_Inline}}

## 参见

- [侧边栏宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [链接宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Links)
- GitHub 上的[宏列表](https://github.com/mdn/yari/tree/main/kumascript/macros)
