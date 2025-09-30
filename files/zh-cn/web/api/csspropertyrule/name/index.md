---
title: CSSPropertyRule：name 属性
short-title: name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

{{domxref("CSSPropertyRule")}} 接口的只读属性 **`name`** 返回 CSS 属性的名称，即在 {{cssxref("@property")}} 规则的前部中为自定义属性指定的名称的序列化形式。

## 值

字符串。

## 示例

下面的样式表包含一个 {{cssxref("@property")}} 规则。返回的第一个 {{domxref("CSSRule")}} 将是一个代表该规则的 `CSSPropertyRule`。`name` 属性返回在 CSS 中为自定义属性指定的名称的字符串 `"--property-name"`。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); // “--property-name”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
