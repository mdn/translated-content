---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
---

{{ APIRef("CSSOM") }}

任何实现了 `CSSGroupingRule` 接口的对象表示任何可以包含或嵌套其他规则的 CSS @ 规则。

从其派生的对象：

- {{domxref("CSSConditionRule")}} 及其派生的对象：{{domxref("CSSMediaRule")}}、{{domxref("CSSSupportsRule")}}，和 {{domxref("CSSDocumentRule")}}。
- {{domxref("CSSPageRule")}}

## 语法

The syntax is described using the [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) format.

```plain
interface CSSGroupingRule : CSSRule {
    readonly attribute CSSRuleList cssRules;
    unsigned long insertRule (DOMString rule, unsigned long index);
    void deleteRule (unsigned long index);
}
```

## 所有 CSSGroupingRule 实例共有的属性

The `CSSGroupingRule` derives from {{domxref("CSSRule")}} and inherits all properties of this class. It has one specific property:

- {{domxref("CSSGroupingRule.cssRules")}} {{readonlyinline}}
  - : Returns a {{domxref("CSSRuleList")}} of the CSS rules in the media rule.

## 所有 CSSGroupingRule 实例共有的方法

The `CSSGroupingRule` derives from {{domxref("CSSRule")}} and inherits all methods of this class. It has two specific methods:

- {{domxref("CSSGroupingRule.deleteRule")}}
  - : Deletes a rule from the style sheet.
- {{domxref("CSSGroupingRule.insertRule")}}
  - : Inserts a new style rule into the current style sheet.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using dynamic styling information](/zh-CN/docs/DOM/Using_dynamic_styling_information)
