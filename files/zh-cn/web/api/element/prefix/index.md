---
title: Element.prefix
slug: Web/API/Element/prefix
---

{{APIRef("DOM")}}

**`Element.prefix`** 只读属性返回指定元素的命名空间前缀，如果未指定前缀，则返回 null。

> **备注：** 在 DOM4 之前，该 API 是在 {{domxref("Node")}} interface 中定义的。

## Syntax

```
string = element.prefix
```

## Examples

The following logs "x" to the console.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notes

This will only work when a namespace-aware parser is used, i.e. when a document is served with an XML MIME type. This will not work for HTML documents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Node.prefix")}}
