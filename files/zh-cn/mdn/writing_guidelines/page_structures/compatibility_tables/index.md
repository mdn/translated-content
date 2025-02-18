---
title: 兼容性表格和浏览器兼容性数据仓库（BCD）
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
---

MDN 为我们的开放 web 文档提供了兼容性表格的标准格式；它是对比所有浏览器之间，包含 DOM、HTML、CSS、JavaScript、SVG 等技术的文档。为使这些数据可以编程的方式在在多个项目中可用，我们从 [`browser-compat-data` 仓库](https://github.com/mdn/browser-compat-data)构建了一个 Node.js 包，并将其发布到了 npm。

要修改这些表格中的数据，以及获取最新的用于表示数据的流程和 JSON 格式的更改，请参考数据仓库的 [contributor guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) 和 [data guidelines guide](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md)。如果你有疑问或是发现了问题，欢迎[与我们联系](/zh-CN/docs/MDN/Community/Communication_channels)。

## 在 MDN 页面中使用浏览器兼容性数据

一旦你创建的兼容性数据被包含在 [`browser-compat-data`](https://github.com/mdn/browser-compat-data) 仓库中，你就可以开始根据 MDN 页面上的数据动态生成浏览器兼容性表格和规范表格。

首先，你需要确定你希望包含的相关兼容性数据的查询字符串。可以通过检查其源文件来确定。例如：

- {{domxref("AbortController")}} 的兼容性数据在 [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) 中定义，可以使用 `api.AbortController` 来引用它。
- {{HTTPHeader("Content-Type")}} HTTP 标头的兼容性数据在 [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) 中定义，可以使用 `http.headers.Content-Type` 来引用它。
- {{domxref("VRDisplay.capabilities")}} 属性的兼容性数据在 [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) 中定义，可以使用 `api.VRDisplay.capabilities` 来引用它。

兼容性数据的查询字符串应在页面的元数据（front-matter）中使用 `browser-compat` 这个键来指定。例如，对于 {{domxref("AbortController")}}，应该这样添加：

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

然后源码中的 `\{{Compat}}` 和 `\{{Specifications}}` 宏将会被自动渲染为与元数据对应的兼容性表格和规范表格。

如果需要在同一页面中插入多个兼容性表格，可以将 `browser-compat` 元数据指定为一个数组。例如，对于 [Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API)，应该这样添加：

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

宏的调用会生成以下的表格（以及对应的备注）：

#### 兼容性表格示例

{{Compat}}

#### 规范表格示例

{{Specifications}}
