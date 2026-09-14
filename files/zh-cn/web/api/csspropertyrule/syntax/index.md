---
title: CSSPropertyRule：syntax 属性
short-title: syntax
slug: Web/API/CSSPropertyRule/syntax
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

{{domxref("CSSPropertyRule")}} 接口的只读属性 **`syntax`** 返回由 {{cssxref("@property")}} 规则表示的自定义属性注册的字面语法，用于控制该属性值在计算值时如何被解析。

## 值

字符串。

## 示例

下面的样式表包含一个 {{cssxref("@property")}} 规则。返回的第一个 {{domxref("CSSRule")}} 将是一个代表此规则的 `CSSPropertyRule`。`syntax` 属性返回字符串字面量 `"<color>"`。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].syntax); // “<color>”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
