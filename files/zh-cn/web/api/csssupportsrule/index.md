---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
---

{{APIRef("CSSOM")}}

该 **`CSSSupportsRule`** 接口描述了代表一个 CSS 对象{{cssxref("@supports")}} [at-rule](/zh-CN/docs/Web/CSS/At-rule). 它实现了 {{domxref("CSSConditionRule")}} 接口，因此 {{domxref("CSSRule 指定规则")}} 和{{domxref("CSSGroupingRule")}} 用一个类型值接口 `12` (`CSSRule.SUPPORTS_RULE`).

## 句法

该语法使用所描述的[WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) 格式。

```plain
接口 CSSSupportsRule : CSSConditionRule {
}
```

## 性能

作为{{domxref("CSSConditionRule")}} 因此一个 {{domxref("CSSRule 指定规则")}} and 和一{{domxref("CSSGroupingRule")}}, `CSSSupportsRule` 还实现了，这些接口的属性。它没有特定的属性

## 方法

作为{{domxref("CSSConditionRule")}} 因此一个 {{domxref("CSSRule 指定规则")}}和{{domxref("CSSGroupingRule")}}, `CSSSupportsRule` 也实现了这个接口的方法。他没有具体属性的方法

## 规范

{{Specifications}}

## 游览器兼容性

{{Compat}}

## See also

- {{cssxref("@supports")}}
