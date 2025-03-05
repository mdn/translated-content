---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

**`CharacterData`** 抽象接口（abstract interface）代表 {{domxref("Node")}} 对象包含的字符。这是一个抽象接口，意味着没有 `CharacterData` 类型的对象。它是在其他接口中被实现的，如 {{domxref("Text")}}、{{domxref("Comment")}} 或 {{domxref("ProcessingInstruction")}} 这些非抽象接口。

## 属性

_从其父级 {{domxref("Node")}} 继承属性，并且实现了 {{domxref("ChildNode")}} 和 {{domxref("NonDocumentTypeChildNode")}} 接口。_

- {{domxref("CharacterData.data")}}
  - : 一个 {{domxref("DOMString")}}，表示该对象中包含的文本数据。
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : 返回一个 `unsigned long` 的表示 `CharacterData.data` 包含的字符串的大小。
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : 返回其父节点所在的子节点列表（children list）中紧跟着的元素节点 {{domxref("Element")}}，或者 `null`。
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : 返回其父节点所在的子节点列表（children list）中前一个元素节点 {{domxref("Element")}}，或者 `null`。

## 方法

_从其父级 {{domxref("Node")}} 继承方法，并且实现了 {{domxref("ChildNode")}} 和_{{domxref("NonDocumentTypeChildNode")}} 接口。

- {{domxref("CharacterData.appendData()")}}
  - : 为 `CharacterData.data` 字符串追加指定的 {{domxref("DOMString")}} ；当方法返回时，`data` 包含的是已合并的 {{domxref("DOMString")}}.
- {{domxref("CharacterData.deleteData()")}}
  - : 在 `CharacterData.data` 字符串中，从指定位置开始，删除指定数量的字符；当方法返回时，`data` 包含的是缩短了的 {{domxref("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : 在 `CharacterData.data` 字符串中，在指定的位置，插入指定的字符；当方法返回时，`data` 包含的是已修改的 {{domxref("DOMString")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : 把对象从其父节点的 children list 中删除。
- {{domxref("CharacterData.replaceData()")}}
  - : 在 `CharacterData.data` 字符串中，从指定位置开始，把指定数量的字符替换为指定的 {{domxref("DOMString")}}; 当方法返回时，`data` 包含的是已修改的 {{domxref("DOMString")}}.
- {{domxref("CharacterData.substringData()")}}
  - : 返回一个包含了从`CharacterData.data` 中的指定位置开始，指定长度的 {{domxref("DOMString")}} 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model).
