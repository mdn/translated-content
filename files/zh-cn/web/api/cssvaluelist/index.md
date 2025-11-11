---
title: CSSValueList
slug: Web/API/CSSValueList
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

**`CSSValueList`** 接口继承自 {{DOMxRef("CSSValue")}} 接口，提供了一种 CSS 值的有序集合的抽象。

> [!NOTE]
> 此接口曾是创建类型化 CSS 对象模型尝试的一部分。该尝试已被放弃，大多数浏览器并未实现它。
>
> 为了实现你的目标，你可以使用：
>
> - 无类型的 [CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)，广泛支持；或
> - 现代化的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API)，支持较少且被视为实验性特性。

某些属性在其语法中允许使用空列表。在这种情况下，这些属性会采用 `none` 标识符。因此，空列表意味着该属性的值为 `none`。

`CSSValueList` 中的项可以通过从 0 开始的整数索引进行访问。

{{InheritanceDiagram}}

## 实例属性

_继承其父接口 {{DOMxRef("CSSValue")}} 的属性_。

- {{DOMxRef("CSSValueList.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 一个 `unsigned long` 类型的值，表示列表中 `CSSValues` 的数量。

## 实例方法

- {{DOMxRef("CSSValueList.item()")}} {{Deprecated_Inline}}
  - : 此方法用于通过序号索引检索 {{DOMxRef("CSSValue")}}。此集合中的顺序表示 CSS 样式属性中值的顺序。如果索引大于等于列表中值的数量，则返回 `null`。

## 规范

此特性最初定义于 [DOM 样式第 2 版](https://www.w3.org/TR/DOM-Level-2-Style/)规范，但自那以后已从任何标准化工作中移除。

它已被现代但不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 所取代，后者现已进入标准轨道。

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValue")}}
