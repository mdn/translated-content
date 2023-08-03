---
title: CSS.supports()
slug: Web/API/CSS/supports_static
---

{{APIRef("CSSOM")}}

**`CSS.supports()`** 静态方法返回一个{{domxref("Boolean")}}值，用来校验浏览器是否支持一个给定的 CSS 特性。

## 语法

```plain
boolValue = CSS.supports(propertyName, value);
boolValue = CSS.supports(supportCondition);
```

### 参数

有两种不同的传值形式。第一种用来检验浏览器对于一对“属性 - 属性值”的支持：

- _propertyName_
  - : 一个包含要检查的 CSS 属性名称的{{domxref("DOMString")}}。
- _value_
  - : 一个包含要检查的 CSS 属性值的{{domxref("DOMString")}}。

第二种语法需要一个匹配{{cssxref("@supports")}}条件的参数：

- _supportCondition_
  - : 一个包含了检查条件的{{domxref("DOMString")}}。

## 实例

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display", "flex");
result = CSS.supports("--foo", "red");
result = CSS.supports("(--foo: red)");
result = CSS.supports("( transform-origin: 5% 5% )");
result = CSS.supports(
  "( transform-style: preserve ) or ( -moz-transform-style: preserve ) or " +
    "( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve )",
);
//result is true or false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@supports")}} at-rule 允许以声明的方式，使用相同的功能。
- {{domxref("CSSSupportsRule")}} CSSOM 类允许在规则中操作{{cssxref("@supports")}}。
