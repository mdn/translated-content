---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

**`Attr`** 接口将一个元素的属性（attribute）表示为一个对象。在大多数情况下，你可以直接以字符串形式检索属性值（例如 {{domxref("Element.getAttribute()")}}），但某些函数（例如 {{domxref("Element.getAttributeNode()")}}）或迭代方法则返回 `Attr` 实例。

{{InheritanceDiagram}}

`Attr` 对象的核心思想是将*名称*和*值*关联起来。属性也可能属于一个*命名空间*，在这种情况下，它还有一个表示命名空间的 URI，以及一个作为命名空间的缩写的前缀。

当该名称忽略最终的命名空间前缀时，则认为该名称是*本地的*；当该名称包含命名空间的前缀时，则认为该名称是被*限定的*，如果存在前缀，则将其通过冒号（`:`）与本地名分隔。一共有三种情况：属性不在命名空间中、属性在命名空间中但没有定义前缀、属性在命名空间中且定义了前缀：

| 属性     | 命名空间名    | 命名空间前缀 | 属性的本地名 | 属性的限定名  |
| -------- | ------------- | ------------ | ------------ | ------------- |
| `myAttr` | _无_          | _无_         | `myAttr`     | `myAttr`      |
| `myAttr` | `mynamespace` | _无_         | `myAttr`     | `myAttr`      |
| `myAttr` | `mynamespace` | `myns`       | `myAttr`     | `myns:myAttr` |

> [!NOTE]
> 该接口仅表示 {{domxref("Element")}} 树中存在的属性（attribute），无论是 SVG、HTML 还是 MathML 元素。它不表示与此类元素相关的接口的*属性*（property），例如 {{HTMLElement("table")}} 元素的 {{domxref("HTMLTableElement")}}。（有关元素属性（attribute）及其如何*反射*到接口属性（property）的更多信息，请参见{{Glossary("Attribute", "这篇文章")}}。）

## 实例属性

_此接口还从其父接口 {{domxref("Node")}}、{{domxref("EventTarget")}} 基础属性。_

- {{domxref("Attr.localName", "localName")}} {{ReadOnlyInline}}
  - : 一个表示属性限定名的本地部分的字符串。
- {{domxref("Attr.name", "name")}} {{ReadOnlyInline}}
  - : 该属性的*限定名*。如果该属性不在命名空间中，则其与 {{domxref("Attr.localName", "localName")}} 属性相同。
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{ReadOnlyInline}}
  - : 一个表示该属性的命名空间 URI 的字符串，如果没有命名空间，则返回 `null`。
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}
  - : 该属性所附属的{{domxref("Element", "元素", "", 1)}}。
- {{domxref("Attr.prefix", "prefix")}} {{ReadOnlyInline}}
  - : 一个表示该属性的命名空间前缀的字符串，如果命名空间没有前缀或没有指定命名空间则返回 `null`。
- {{domxref("Attr.specified", "specified")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 该属性总是返回 `true`。
- {{domxref("Attr.value", "value")}}
  - : 属性的值，其为一个可以通过接口属性进行设置和获取的字符串。

## 实例方法

_此接口无具体方法，但继承了其父接口 {{domxref("Node")}}、{{domxref("EventTarget")}} 的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他的节点有 {{domxref("CDATASection")}}、{{domxref("CharacterData")}}、{{domxref("Comment")}}、{{domxref("Document")}}、{{domxref("Element")}}、{{domxref("ProcessingInstruction")}} 和 {{domxref("Text")}}。
