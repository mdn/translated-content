---
title: Document：characterSet 属性
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: 84f47487afe5ca1d6356231d1ec2688e22c0ef53
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** 只读属性返回当前渲染文档[字符编码](/zh-CN/docs/Glossary/Character_encoding)。

> [!NOTE]
> “字符集”和“字符编码”是相关的，但又有所不同。尽管这个属性的名称如此，但它返回的是*编码*。

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
