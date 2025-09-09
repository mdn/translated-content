---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSS Typed Object Model API")}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model#css_类型对象模型) 的 **`CSSStyleValue`** 接口是通过类型对象模型 API 访问的所有 CSS 值的基类。该类的实例可在任何需要字符串的地方使用。

## 基于 CSSStyleValue 的接口

以下是基于 `CSSStyleValue` 接口的接口列表。

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}

## 静态方法

- [`CSSStyleValue.parse()`](/zh-CN/docs/Web/API/CSSStyleValue/parse_static)
  - : 将特定 CSS 属性设置为指定值，并将第一个值以 `CSSStyleValue` 对象返回。
- [`CSSStyleValue.parseAll()`](/zh-CN/docs/Web/API/CSSStyleValue/parseAll_static)
  - : 将特定 CSS 属性的所有值设置为指定值，并返回一个 `CSSStyleValue` 对象数组，每个对象包含一个提供的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
