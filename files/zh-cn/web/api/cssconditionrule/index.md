---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

**`CSSConditionRule`** 接口表示一条条件 CSS [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)，由一个条件和一个语句块组成。

以下三个对象派生自 `CSSConditionRule`：{{domxref("CSSMediaRule")}}、{{domxref("CSSContainerRule")}} 和 {{domxref("CSSSupportsRule")}}。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSConditionRule.conditionText")}} {{ReadOnlyInline}}
  - : 表示该规则条件部分的文本。

## 实例方法

_继承其祖先 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [关于使用动态样式的信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
