---
title: Navigator：mimeTypes 属性
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }}{{deprecated_header}}

返回一个 {{domxref("MimeTypeArray")}} 对象，该对象包含一个 {{domxref("MimeType")}} 对象列表，表示浏览器识别和支持的 MIME 类型。可以通过查询该数组来获取有关用于处理指定类型文件的启用插件的信息。返回对象的具名属性不可枚举（仅在非常老的浏览器版本中除外）。

最新版本的规范对返回的 MIME 类型集合进行了硬编码。如果支持 PDF 文件内联查看，则会列出 `application/pdf` 和 `text/pdf`。否则返回空列表。

> [!NOTE]
> 使用 {{domxref("Navigator.pdfViewerEnabled")}} 来判断是否支持 PDF 内联查看。请不要根据此属性推断。

旧版浏览器不会硬编码此属性返回的列表，并可能返回其他 MIME 类型。

## 值

`MimeTypeArray` 对象包含 `length` 属性以及 `item(index)` 和 `namedItem(name)` 方法。

如果支持 PDF 内联查看，则此数组包含 `application/pdf` 和 `text/pdf` MIME 类型。否则，返回空 `MimeTypeArray` 数组。受启用插件支持的文件描述和扩展名硬编码为 `'pdf'` 和 `'Portable Document Format'`。

## 示例

以下代码测试 PDF 文件是否可以内联查看，然后打印插件说明和它支持的文件后缀。

```js
if ("application/pdf" in navigator.mimeTypes) {
  // 浏览器支持内联查看 PDF 文件。

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`描述：${description}，后缀：${suffixes}`);
  // 预期输出：描述：Portable Document Format，后缀：pdf
}
```

请注意，虽然上述代码测试了 `application/pdf`，但你也可以同样检查 `text/pdf`。（这两种 MIME 类型要么都为真，要么都为假。）此外，在当前浏览器上，你实际上不需要获取插件描述和后缀，因为这些信息也已硬编码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
