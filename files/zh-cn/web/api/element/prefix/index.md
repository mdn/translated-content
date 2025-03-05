---
title: Element：prefix 属性
slug: Web/API/Element/prefix
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.prefix`** 只读属性返回指定元素的命名空间前缀，如果未指定前缀，则返回 `null`。

## 值

字符串。

## 示例

以下代码在控制台中打印“x”。

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## 备注

仅当使用可感知命名空间的解析器时（即，当文档以 XML MIME 类型提供时），此属性才有效。对于 HTML 文档，此属性无效。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
