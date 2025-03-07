---
title: 如何使用结构化数据
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
---

MDN 尽可能以明确定义的结构存储数据。这些信息将被集中存储和更新，以便同时在多个地方使用。

这样的文件有好几个，本文档描述了它们的用途、结构和维护过程。

## GroupData：API 的逻辑分组

`GroupData` 是一个收集有关 Web API 的信息的 JSON 文件。API 的分组有点模糊：任何接口、方法或属性可以同时属于多个 API 分组。以某个名称分组的 API 集合是（在没有任何技术强制的情况下）用于表示某个特性的约定。

然而，MDN 需要这些信息来创建具有适当参考页面、指南和概述文章的连贯的 Web API 侧边栏（如 `\{{APIRef}}` 宏）。

GroupData 正是这样做的：对于每个 API，它列出了接口、属性、方法、指南和概述页面。在过去，它还列出了字典和回调。但是这种用法虽然仍受支持，但已被弃用，并将在未来被删除。

### GroupData 的结构

> [!WARNING]
> 本文件中列出的页面若在 en-US 中不存在，则相应的页面将被忽略。

`GroupData.json` 中的条目具有以下结构：

```json
"Name_of_the_API": {
  "overview": ["name_of_the_overview_page"],
  "guides": [
    "name_of_guide_1",
    (…)
  ],
  "interfaces": [
    "name_of_interface_1",
    (…)
  ],
  "methods": [
    "name_of_additional_method_1",
    (…)
  ],
  "properties": [
    "name_of_additional_property_1",
    (…)
  ],
  "events": [
    "name_of_additional_property_1",
    (…)
  ]
}
```

其中：

- `"Name_of_the_API"`
  - : 该键即是侧边栏宏（如 `\{{APIRef("Name_of_the_API")}}`）使用的 ID，也是侧边栏本身显示的名称。请谨慎选择。
    > [!WARNING]
    > 如果要更改侧边栏中显示的名称，则必须编辑显示该侧边栏的所有页面。
- `"overview"`
  - : 这是包含一个页面——概述页面——的列表，用作 `"Name_of_the_API"` 文本的链接。其值是页面的*标题*，页面必须位于 `web/api/` 目录中。
- `"guides"`
  - : 这是侧边栏中显示的指南列表，按给定顺序排列。其值是页面的*路径*，以 `/docs/` 开头。
- `"interfaces"`
  - : 列出了属于 API 的接口。
- `"methods"`
  - : 列出了属于 API 的方法。
    > **备注：** `"interfaces"` 中列出的接口的方法**不得**列在此处。如果页面的 `page-type` 键为 `web-api-static-method` 或 `web-api-instance-method`，则它们会被自动添加到侧边栏中。
- `"properties"`
  - : 列出了属于 API 的其他接口上的方法，例如 `navigator.xr`（WebXR API 添加到 `navigator` 对象的属性）
    > **备注：** `"interfaces"` 中列出的接口的属性**不得**列在此处。如果页面的 `page-type` 键为 `web-api-static-property` 或 `web-api-instance-property`，则它们会被自动添加到侧边栏中。
- `"events"`
  - : 列出了属于 API 的其他接口的事件。其值是页面的*标题*（页面必须位于 `Web/Events` 下）。
    > **备注：** `"interfaces"` 中列出的接口的事件**不得**列在此处。如果页面的 `page-type` 键为 `web-api-event`，则它们会被自动添加到侧边栏中。

还有另外两个键：`"dictionaries"` 和 `"callbacks"`，它们的工作原理相同。由于我们不再为它们的实体记录自己的页面，因此它们的使用已被弃用，不应再向其中添加新条目（我们会逐渐删除它们）。

> [!NOTE]
> 此外，没有一个键是必须的；最好的做法（我们将强制执行此操作）是为每一个未弃用的键添加一个空列表，而不是省略它们。这也表明了没有值是刻意为之的。

### GroupData 的更新流程

应在影响侧边栏的更改的同一 PR 中更新此文件。这样，侧边栏始终是最新的。审查员不应合并不采用这种做法的 PR。

要测试你的更改，请检查 PR 中的文件的侧边栏是否正确显示所有条目。

`GroupData.json` 文件位于 GitHub 上的[这里](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)。

## InterfaceData：记录接口继承关系

> [!NOTE]
> 我们希望将来能够根据 w3c/webref 提供的数据自动生成该文件。

`InterfaceData` 描述了接口的层次结构。它列出了继承关系。在过去，它还列出了每个接口实现的混入（mixin）。但是这种用法已被弃用，并且我们在更新 MDN 相关内容的同时从该文件中删除混入。

该继承数据用于构建 API 侧边栏和接口页面中的 `\{{InheritanceDiagram}}`。

### InterfaceData 的结构

`InterfaceData.json` 中的条目具有以下结构：

```json
"Name_of_the_interface": {
  "inh": "Name_of_the_parent_interface",
  "impl": []
}
```

> [!NOTE]
> 混入已被弃用，因此对于新增接口，`"impl"` 必须是空列表。

`"Name_of_the_parent_interface"` 的值不是列表，而必须是单个条目；不得列出任何不继承自其他接口的接口。

### InterfaceData 的更新流程

添加继承自其他接口的新接口的 PR 必须更新此文件。审查员不应合并不采用这种做法的 PR。

要测试你的更改，请检查 PR 中编辑的每个接口的侧边栏是否正确显示继承关系。

`InterfaceData.json` 文件位于 GitHub 上的[这里](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json)。

## SpecData：规范信息

> **警告：** `SpecData.json` 文件已不再维护。规范信息存储在 w3c/browser-spec 和 mdn/browser-compat-data 中列出的特性的 `spec_url` 键中。

`\{{SpecName}}` 和 `\{{Spec2}}` 宏使用 `SpecData.json` 文件。我们不再接受对 `SpecData.json` 文件的任何进一步的贡献；相反，要么尝试使用 `\{{Specifications}}` 宏插入一个规范表格，要么尝试硬编码直接指向规范的链接。请注意，大多数情况下，在*规范*部分之外提及或链接到规范表明 MDN 上未适当记录某些内容。

`SpecData.json` 文件位于 GitHub 上的[这里](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json)。
