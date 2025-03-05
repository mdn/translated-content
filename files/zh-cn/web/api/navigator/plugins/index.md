---
title: Navigator：plugins 属性
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: cb3806d7b20ba6450ca8768120514f95905c77eb
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

返回一个 {{DOMxRef("PluginArray")}} 对象，列出描述应用程序中已安装插件的 {{DOMxRef("Plugin")}} 对象。返回对象的命名属性不可枚举（除非在非常旧的浏览器版本中）。

最新版本的规范对返回的列表进行了硬编码。如果支持内联查看 PDF 文件，则该属性列出五个标准插件。如果不支持内联查看 PDF，则返回空列表。

> [!NOTE]
> 使用 {{domxref("Navigator.pdfViewerEnabled")}} 来确定是否支持内联查看 PDF 文件。不要从该属性中推断。“五个标准插件”是开发人员最常用于特征检测内联 PDF 查看的插件。返回这些插件可确保旧代码更可靠地确定是否支持内联查看。但是，这种方法不建议用于新代码，因为此属性可能最终会被删除。

旧版本的浏览器还列出了 Adobe Flash 和 PDF 查看器扩展的插件。

## 值

`plugins` 是一个 {{DOMxRef("PluginArray")}} 对象，用于通过名称或项列表访问 {{DOMxRef("Plugin")}} 对象。

返回的值不是一个 JavaScript 数组，但其包含 `length` 属性，并支持使用方括号语法（`plugins[2]`）以及 `item(index)` 和 `namedItem("name")` 方法访问单个项。

如果支持内联查看 PDF 文件，则该列表将包含以下插件的条目：

- “PDF Viewer”
- “Chrome PDF Viewer”
- “Chromium PDF Viewer”
- “Microsoft Edge PDF Viewer”
- “WebKit built-in PDF”

如果 PDF 内联查看不受支持，则返回一个空对象。

## 示例

该代码演示了如何检查是否可以内联显示 PDF 文件：

```js
if ("PDF Viewer" in navigator.plugins) {
  // 浏览器支持内联显示 PDF 文件。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
