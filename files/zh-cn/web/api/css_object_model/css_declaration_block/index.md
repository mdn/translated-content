---
title: CSS 声明块
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 声明块**是 CSS 属性和值的有序集合。在 DOM 中，它表示为 {{domxref("CSSStyleDeclaration")}}。

每个属性和值的配对称为 [CSS 声明](/zh-CN/docs/Web/API/CSS_Object_Model/CSS_Declaration)。CSS 声明块具有以下相关属性：

- 计算标志
  - : 如果 {{domxref("CSSStyleDeclaration")}} 对象是计算样式而不是指定样式，则设置此标志。默认情况下未设置。
- 声明
  - : 与此对象关联的 [CSS 声明](/zh-CN/docs/Web/API/CSS_Object_Model/CSS_Declaration)。
- 父 CSS 规则
  - : 与 CSS 声明块关联的 {{domxref("CSSRule")}}，否则为 null。
- 所属节点
  - : 与 CSS 声明块关联的 {{domxref("element")}}，否则为 null。
- 更新标志
  - : 当 CSS 声明块正在更新所属节点的 [`style`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/style) 属性时设置此标志。

当 [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)接口返回 {{domxref("CSSStyleDeclaration")}} 时，这些属性会根据规范设置为适当的值。

## 基本示例

以下示例展示了一个针对 {{htmlelement("Heading_Elements","h1")}} 元素的 CSS 规则及其声明块。CSS 声明块是大括号之间的内容。

```css
h1 {
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  color: rebeccapurple;
}
```

我们可以使用 {{domxref("CSSStyleRule.style")}} 返回表示此 CSS 声明块的 {{domxref("CSSStyleDeclaration")}}。

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // CSSStyleRule
console.log(rule.style); // CSSStyleDeclaration 对象
```

## 规范

{{Specifications}}
