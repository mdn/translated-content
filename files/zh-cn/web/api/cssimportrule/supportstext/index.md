---
title: CSSImportRule：supportsText 属性
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

{{domxref("CSSImportRule")}} 接口的只读属性 **`supportsText`** 返回由 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)指定的支持条件。

## 值

一个字符串，或 `null`。

## 示例

文档的单个样式表包含三个 {{cssxref("@import")}} 规则。第一个声明在支持 `display: flex` 时导入样式表。第二个声明在支持 `:has` 选择器时导入样式表。第三个声明在没有支持条件的情况下导入样式表。

`supportsText` 属性返回与 at 规则关联的导入条件。

```css
@import url("style1.css") supports(display: flex);
@import url("style2.css") supports(selector(p:has(a)));
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].supportsText); // 返回 `"display: flex"`
console.log(myRules[1].supportsText); // 返回 `"selector(p:has(a))"`
console.log(myRules[2].supportsText); // 返回 `null`
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用特性查询](/zh-CN/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} 和 {{cssxref("@supports")}}
