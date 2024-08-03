---
title: DocumentType
slug: Web/API/DocumentType
---

{{APIRef("DOM")}}

**`DocumentType`** 接口表示了一个包含文档类型的节点 {{domxref("Node")}} .

{{InheritanceDiagram}}

## 属性

_继承自父节点 {{domxref("Node")}}, 并实现了 {{domxref("ChildNode")}} 接口。_

- {{domxref("DocumentType.entities")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : 一个在文档类型定义 (DTD) 中声明的实体{{domxref("NamedNodeMap")}}，在这个映射（map）中的每个节点实现了{{domxref("Entity")}}接口
- {{domxref("DocumentType.internalSubset")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : 一个表示内部子集的{{domxref("DOMString")}}，如果没有的话则为`null` ，例：`"<!ELEMENT foo (bar)>"`
- {{domxref("DocumentType.name")}} {{readonlyInline}}
  - : {{domxref("DOMString")}}，文档类型的名称，例：`<!DOCTYPE HTML>`中的“`html`”
- {{domxref("DocumentType.notations")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : 在文档类型定义（DTD）中声明符号的{{domxref("NamedNodeMap")}}，在这个映射（map）中的所有节点实现了{{domxref("Notation")}}接口
- {{domxref("DocumentType.publicId")}} {{readonlyInline}}
  - : 一个{{domxref("DOMString")}}，例：HTML5 中的空字符串——`"-//W3C//DTD HTML 4.01//EN"`。
- {{domxref("DocumentType.systemId")}} {{readonlyInline}}
  - : 一个{{domxref("DOMString")}}，例：HTML5 中的空字符串——`"http://www.w3.org/TR/html4/strict.dtd"`。

## 方法

_继承方法自父节点，{{domxref("Node")}}, 并实现了 {{domxref("ChildNode")}} 接口。_

- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : 从父节点的子节点的列表中移除这个对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model#dom_接口)
- {{domxref("Entity")}}
- {{domxref("Notation")}}
