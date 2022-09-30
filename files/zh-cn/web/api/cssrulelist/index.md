---
title: CSSRuleList
slug: Web/API/CSSRuleList
---

{{ APIRef("CSSOM") }}

CSS 规则列表 `CSSRuleList` 是一个（只允许间接更改的）类数组对象，包含着一个 [`CSSRule`](/zh-CN/docs/Web/API/CSSRule) 对象的有序集合。

## 描述

CSS 规则列表内的每一条 `CSSRule` 都可以通过 `rules.item(index)`，或者更简单的 `rules[index]` 的形式访问。这里的 `rules` 是一个实现了 `CSSRuleList` 接口的对象（例如 `{{domxref("CSSStylesheet","","",1)}}.cssRules`），而 `index` 是一个从 0 开始的、规则的位置索引，通过它获取规则时，顺序与 CSS 样式表中的顺序是一致的。规则对象的个数是 `rules.length`。

注意，因为只能*间接更改*（[可更改](https://www.w3.org/TR/cssom/#cssstylesheet)，但是其本身[只拥有](https://www.w3.org/TR/cssom/#cssrulelist)读取方法），无法直接往规则列表中添加或移除规则，只能通过它的父样式表进行更改。事实上，{{domxref("CSSStyleSheet.insertRule",".insertRule()")}} 和 {{domxref("CSSStyleSheet.deleteRule",".deleteRule()")}} 甚至都不是 CSSRuleList 的方法，而是 {{domxref("CSSStyleSheet")}} 的。如果，处于一些原因，出现了一个没有父样式表 或者说不属于任何样式表的规则列表（可能是另一个规则列表的*[拷贝](https://www.w3.org/TR/cssom/#cssstylesheet)*），那么，既不能将它分配到某个样式表下（因为[没有适用的属性](https://www.w3.org/TR/cssom/#cssrulelist)），它也不能被分配给任何一个样式表（因为 `stylesheet.cssRules` 是[只读](https://www.w3.org/TR/cssom/#cssstylesheet)属性），就只能通过遍历方法，将它一条规则一条规则地**插入**已有的样式表中。

## 示例

```js
// 得到文档中第一个 CSS 样式表中的第一条规则
var first_rule = document.styleSheets[0].cssRules[0];
```

## 参见

- [`CSSRule`](/zh-CN/docs/Web/API/CSSRule)

### CSSRuleList 的实现

在 CSS 对象模型 CSSOM 中，有多个属性的返回值是一个 `CSSRuleList`。它们分别是：

- {{domxref("CSSStyleSheet")}} 属性 {{domxref("CSSStyleSheet/cssRules", "cssRules")}}
- {{domxref("CSSMediaRule")}} 属性 {{domxref("CSSMediaRule/cssRules", "cssRules")}}
- {{domxref("CSSKeyframesRule")}} 属性 {{domxref("CSSKeyframesRule/cssRules", "cssRules")}}
- {{domxref("CSSMozDocumentRule")}} 属性 {{domxref("CSSMozDocumentRule/cssRules", "cssRules")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
