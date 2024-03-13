---
title: CaretPosition
slug: Web/API/CaretPosition
---

{{SeeCompatTable}} {{ APIRef("CSSOM") }}

`CaretPosition` 接口表示光标位置，即文本插入点的指示器。你可以使用 {{domxref("Document.caretPositionFromPoint()")}} 方法获取 `CaretPosition`。

## 实例属性

_该接口不继承任何属性。_

- {{domxref("CaretPosition.offsetNode")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个包含光标位置节点的 {{domxref("Node")}}。
- {{domxref("CaretPosition.offset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 `long`，表示光标位置在节点中的字符偏移量。

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
