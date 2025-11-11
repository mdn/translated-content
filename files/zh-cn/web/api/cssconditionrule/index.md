---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
---

{{ APIRef("CSSOM") }}

**CSSConditionRule** 对象表示单个条件 CSS 规则，由条件和语句块组成。继承至 {{domxref("CSSGroupingRule")}}.

从它派生的两个对象 : {{domxref("CSSMediaRule")}} and {{domxref("CSSSupportsRule")}}.

## Syntax

The syntax is described using the [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) format.

```plain
interface CSSConditionRule : CSSGroupingRule {
    attribute DOMString conditionText;
}
```

## Properties

The `CSSConditionRule` derives from {{domxref("CSSRule")}}, {{domxref("CSSGroupingRule")}} and inherits all properties of these classes. It has one specific property:

- {{domxref("CSSConditionRule.conditionText")}}
  - : Represents the text of the condition of the rule.

## Methods

The `CSSConditionRule` derives from {{domxref("CSSRule")}}, {{domxref("CSSGroupingRule")}} and inherits all methods of these classes. It has no specific property of its own.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/zh-CN/docs/DOM/Using_dynamic_styling_information)
