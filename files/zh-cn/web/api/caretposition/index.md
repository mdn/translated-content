---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{ APIRef("CSSOM view API") }}

`CaretPosition` 接口表示光标位置，即文本插入点的指示器。你可以使用 {{domxref("Document.caretPositionFromPoint()")}} 方法获取 `CaretPosition`。

## 实例属性

_该接口不继承任何属性。_

- {{domxref("CaretPosition.offsetNode")}} {{ReadOnlyInline}}
  - : 返回一个包含光标位置节点的 {{domxref("Node")}}。
- {{domxref("CaretPosition.offset")}} {{ReadOnlyInline}}
  - : 返回一个 `long`，表示光标位置在节点中的字符偏移量。这将是文本节点中的字符偏移量，或元素节点中选定子节点的索引。

## 实例方法

- {{domxref("CaretPosition.getClientRect")}} {{Experimental_Inline}}
  - : 返回光标范围的客户端矩形。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Range")}}
- {{domxref("Node")}}
