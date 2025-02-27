---
title: Navigator：pdfViewerEnabled 属性
slug: Web/API/Navigator/pdfViewerEnabled
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} 接口的 **`pdfViewerEnabled`** 只读属性用于指示浏览器是否支持在导航到 PDF 文件时以内联方式显示它们。

如果浏览器不支持内联显示，则 PDF 文件将被下载，并可能由外部应用程序处理。

> [!NOTE]
> 此方法取代了多种传统的判断浏览器是否支持内联显示 PDF 文件的方法。

## 值

如果浏览器在导航到 PDF 文件时可以使用内置查看器（或 PDF 查看器扩展程序），则该属性值为 `true`；否则为 `false`。

## 示例

检查对 PDF 内联查看的支持：

```js
if (!navigator.pdfViewerEnabled) {
  // 浏览器不支持内联查看 PDF 文件。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
