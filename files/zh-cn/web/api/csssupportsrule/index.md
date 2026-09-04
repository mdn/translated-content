---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

**`CSSSupportsRule`** 接口代表了一个单独的 CSS {{cssxref("@supports")}} [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的属性。_

## 实例方法

_继承其祖先 {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的方法。_

## 示例

CSS 中包含了一个使用 {{cssxref("@supports")}} [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)的 CSS 特性查询，其中含有一条样式规则。这将会是 `document.styleSheets[0].cssRules` 返回的第一个 CSSRule。因此，`myRules[0]` 返回的是一个 {{domxref("CSSSupportsRule")}} 对象。

```css
@supports (display: grid) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // 一个表示特性查询的 CSSSupportsRule 对象。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@supports")}}
