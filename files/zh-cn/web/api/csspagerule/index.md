---
title: CSS 分页规则
slug: Web/API/CSSPageRule
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** 是代表一个 css 接口 {{cssxref("@page")}} 规则。它实现了 {{domxref("CSSRule")}} 类型值为 6 的接口 (`CSSRule.PAGE_RULE`).

## 语法

这个语法是使用 [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) 格式。

```plain
interface CSSPageRule : CSSRule {
  attribute DOMString selectorText;
  readonly attribute CSSStyleDeclaration style;
};
```

## Properties

{{domxref("CSSRule")}}, `CSSPageRule` 也实现了此接口的属性。它具有以下特定属性：

- {{domxref("CSSPageRule.selectorText")}}
  - : 表示与规则关联的页面选择器的文本。
- {{domxref("CSSPageRule.style")}} {{readonlyinline}}
  - : 返回与规则关联的声明块。

## Methods

作为 {{domxref("CSSRule")}}, `CSSPageRule` 的 CSSPageRule 还实现了该接口的方法。它没有具体方法。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
