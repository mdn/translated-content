---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
---

{{ APIRef("CSSOM") }}

An object implementing the **`CSSConditionRule`** interface represents a single condition CSS at-rule, which consists of a condition and a statement block. It is a child of {{domxref("CSSGroupingRule")}}.

Two objects derive from it : {{domxref("CSSMediaRule")}} and {{domxref("CSSSupportsRule")}}.

## Syntax

The syntax is described using the [WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) format.

```
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

- [Using dynamic styling information](/en/DOM/Using_dynamic_styling_information)
