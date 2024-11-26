---
title: Attr.prefix
slug: Web/API/Attr/prefix
---

{{APIRef("DOM")}}

**`Attr.prefix`** 为只读属性，返回指定标签属性的名字空间前缀，如果没有前缀则返回 `null`。

> [!NOTE]
> 在 DOM4 之前此 API 被定义在 {{domxref("Node")}} 接口中。

## 示例

下例在控制台中输出“x”。

```xml
<div x:id="example" onclick="console.log(this.attributes[0].prefix)"/>
```

## 注意

该属性仅在使用有名字空间解析功能的解析器时有效，例如一个 MIME 类型为 XML 的文档。在 HTML 文档中无效。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Node.prefix")}}
