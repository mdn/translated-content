---
title: CSSPropertyRule：initialValue 属性
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSS Properties and Values API")}}

{{domxref("CSSPropertyRule")}} 接口的只读可空属性 **`initialValue`** 返回由 {{cssxref("@property")}} 规则表示的自定义属性注册的初始值，用于控制该属性的初始值。

## 值

[`<declaration-value>`](https://drafts.csswg.org/css-syntax/#typedef-declaration-value) 字符串。

## 示例

下面的样式表包含一个 {{cssxref("@property")}} 规则。返回的第一个 {{domxref("CSSRule")}} 将是一个代表此规则的 `CSSPropertyRule`。`initialValue` 属性返回 CSS 中 `initial-value` 属性值的字符串 `"#c0ffee"`。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); // “#c0ffee”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
