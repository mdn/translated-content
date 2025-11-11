---
title: CSSImportRule：styleSheet 属性
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

{{domxref("CSSImportRule")}} 接口的只读属性 **`styleSheet`** 返回由 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)指定的 CSS 样式表。这将以 {{domxref("CSSStyleSheet")}} 对象的形式呈现。

一个 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)总是有一个关联的样式表。

## 值

一个 {{domxref("CSSStyleSheet")}} 对象。

## 示例

以下样式表包含一个 {{cssxref("@import")}} 规则。因此，CSS 规则列表中的第一个项目将是一个 `CSSImportRule`。`styleSheet` 属性返回导入的样式表。

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); // CSSStyleSheet 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
