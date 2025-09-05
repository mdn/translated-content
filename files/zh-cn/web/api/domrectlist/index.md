---
title: DOMRectList
slug: Web/API/DOMRectList
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{APIRef("Geometry Interfaces")}}

**`DOMRectList`** 接口表示一组 {{domxref("DOMRect")}} 对象。这类对象通常用于保存与特定元素相关联的矩形（例如由 {{domxref("Element.getClientRects", "getClientRects()")}} 等方法返回的边界框）。它通过索引访问列表中的每个矩形，并提供一个 `length` 属性，用于指示列表中矩形的总数。

> [!NOTE]
> `DOMRectList` 存在是为了兼容旧版 Web 内容，不建议在创建新 API 时使用。

## 实例属性

- {{domxref("DOMRectList.length")}} {{ReadOnlyInline}}
  - : 返回只读属性，表示 `DOMRectList` 中 {{domxref("DOMRect")}} 对象的总数。

## 实例方法

- {{domxref("DOMRectList.item")}}
  - : 返回指定索引处的 {{domxref("DOMRect")}} 对象。如果 `index` 超出范围，则返回 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
