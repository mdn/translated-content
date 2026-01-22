---
title: CSSImportRule：href 属性
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

{{domxref("CSSImportRule")}} 接口的只读属性 **`href`** 返回由 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)指定的 URL。

解析后的 URL 将是关联样式表的 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/link#href) 属性。

## 值

一个字符串。

## 示例

以下样式表包含一个 {{cssxref("@import")}} 规则。因此，CSS 规则列表中的第一个项目将是一个 `CSSImportRule`。`href` 属性返回导入样式表的 URL。

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); // 'style.css'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
