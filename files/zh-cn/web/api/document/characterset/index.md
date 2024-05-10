---
title: Document：characterSet 属性
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** 只读属性返回当前渲染文档[字符编码](/zh-CN/docs/Glossary/Character_encoding)。

> **备注：** “字符集”和“字符编码”是相关的，但又有所不同。尽管这个属性的名称如此，但它返回的是*编码*。

用户可以在 [Content-Type](/zh-CN/docs/Web/HTTP/Headers/Content-Type) 标头内覆盖开发人员指定编码，也可以像 `<meta charset="utf-8">` 一样在行内覆盖指定编码。例如使用 Firefox 的 <kbd>查看 → 修复文字编码</kbd> 菜单。此覆盖是为了修复开发者指定编码不正确，导致[乱码](https://zh.wikipedia.org/wiki/亂碼)。

> **备注：** `document.charset` 和 `document.inputEncoding` 这两个属性是 `document.characterSet` 的遗留别名。请不要再使用它们。

## 值

一个字符串。

## 示例

```html
<button onclick="console.log(document.characterSet);">输出字符编码</button>
<!-- 在开发控制台中显示文档字符编码，例如“ISO-8859-1”或“UTF-8” -->
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
