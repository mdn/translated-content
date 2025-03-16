---
title: CSSStyleValue：parseAll() 静态方法
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

{{domxref("CSSStyleValue")}} 接口的 **`parseAll()`** 静态方法将特定 CSS 属性的所有出现设置为指定值，并返回一个 {{domxref('CSSStyleValue')}} 对象数组，其中每个对象都包含一个提供的值。

## 语法

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### 参数

- `property`
  - : 要设置的 CSS 属性。
- `value`
  - : 以逗号分隔的字符串，包含一个或多个要应用于所提供属性的值。

### 返回值

`CSSStyleValue` 对象数组，每个对象包含一个提供的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`CSSStyleValue.parse()`](/zh-CN/docs/Web/API/CSSStyleValue/parse_static)
- [使用 CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
