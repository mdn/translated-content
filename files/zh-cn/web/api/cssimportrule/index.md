---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

**`CSSImportRule`** 接口表示一个 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSImportRule.href")}} {{ReadOnlyInline}}
  - : 返回 {{cssxref("@import")}} 规则中指定的 URL。
- {{domxref("CSSImportRule.layerName")}} {{ReadOnlyInline}}
  - : 返回 {{cssxref("@import")}} 规则中声明的[层叠层](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer)的名称；如果层是匿名的，则返回空字符串；如果规则未声明任何层，则返回 `null`。
- {{domxref("CSSImportRule.media")}}
  - : 返回关联样式表的 `media` 属性值。
- {{domxref("CSSImportRule.styleSheet")}} {{ReadOnlyInline}}
  - : 返回关联的样式表。
- {{domxref("CSSImportRule.supportsText")}} {{ReadOnlyInline}}
  - : 返回 {{cssxref("@import")}} 规则中指定的支持条件。

## 实例方法

_继承其祖先 {{domxref("CSSRule")}} 的方法。_

## 示例

文档包含一个样式表，其中包含一个 {{cssxref("@import")}} 规则。因此，CSS 规则列表中的第一个项目将是一个 `CSSImportRule`。

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // 一个 CSSImportRule 实例对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
