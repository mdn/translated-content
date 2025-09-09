---
title: CSSValueList：length 属性
slug: Web/API/CSSValueList/length
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

{{domxref("CSSValueList")}} 接口的 **`length`** 只读属性表示列表中 {{domxref("CSSValue")}} 的数量。索引的有效值范围是 `0` 到 `length-1`（包含）。

> [!NOTE]
> 此属性曾是创建类型化 CSS 对象模型尝试的一部分。该尝试已被放弃，大多数浏览器并未实现它。
>
> 为了实现你的目标，你可以使用：
>
> - 无类型的 [CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)，广泛支持；或
> - 现代化的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API)，支持较少且被视为实验性特性。

## 值

一个 `unsigned long` 类型的值，表示 {{domxref("CSSValue")}} 的数量。

## 规范

此特性最初定义于 [DOM 样式第 2 版](https://www.w3.org/TR/DOM-Level-2-Style/)规范，但自那以后已从任何标准化工作中移除。

它已被现代但不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 所取代，后者现已进入标准轨道。

## 浏览器兼容性

{{Compat}}
