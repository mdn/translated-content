---
title: CSSValueList
slug: Web/API/CSSValueList
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

The **`CSSValueList`** 接口继承自 {{domxref("CSSValue")}} 接口，提供一个经过排序的 CSS 值的抽象集合。

一些属性允许在它们的语法中使用空的列表。这时，these properties take the `none` identifier. So, an empty list means that the property has the value `none`.

The items in the `CSSValueList` are accessible via an integral index, starting from 0.

{{InheritanceDiagram}}

## 属性

_从它的父接口 {{domxref("CSSValue")}} 继承属性。_

- {{domxref("CSSValueList.length")}} {{readonlyInline}}
  - : 一个 `unsigned long` 数值，表示此列表中 `CSSValues` 的个数。

## 方法

- {{domxref("CSSValueList.item()")}}
  - : This method is used to retrieve a {{domxref("CSSValue")}} by ordinal index. The order in this collection represents the order of the values in the CSS style property. If index is greater than or equal to the number of values in the list, this returns `null`.

## 规范

该特性最初在 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 中定义，但从那时起已从标准化工作中移除。

它已被现代、不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 取代，该 API 已被标准化。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CSSPrimitiveValue")}}
- {{domxref("CSSValue")}}
