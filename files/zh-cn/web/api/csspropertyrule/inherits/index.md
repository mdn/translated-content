---
title: CSSPropertyRule：inherits 属性
short-title: inherits
slug: Web/API/CSSPropertyRule/inherits
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

{{domxref("CSSPropertyRule")}} 接口的只读属性 **`inherits`** 返回由 {{cssxref("@property")}} 规则表示的自定义属性注册的继承标志，即用于描述该属性是否默认继承的布尔值。

## 值

布尔值。

## 示例

下面的样式表包含一个 {{cssxref("@property")}} 规则。返回的第一个 {{domxref("CSSRule")}} 将是一个代表此规则的 `CSSPropertyRule`。`inherits` 属性返回等于 CSS 中 `inherits` 属性的布尔值 `false`。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
