---
title: Attr.namespaceURI
slug: Web/API/Attr/namespaceURI
---

{{APIRef("DOM")}}

**`Attr.namespaceURI`** 只读属性返回属性的命名空间 URI，如果该元素不在命名空间中，则返回 null。

> **备注：** 在 DOM4 之前，该 API 是在 {{domxref("Node")}} 中定义的。

## 语法

```
namespace = attribute.namespaceURI
```

## 例子

在这个片段中，正在检查一个属性的 {{domxref("localName")}} 和 `namespaceURI`。如果 `namespaceURI` 返回 XUL 命名空间，并且 localName 返回 "browser"，则该节点被理解为 XUL `<browser/>`。

```js
if (
  attribute.localName == "value" &&
  attribute.namespaceURI ==
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // this is a XUL value
}
```

## 笔记

这不是基于对范围中的命名空间声明的检查的命名空间查找的结果的计算值。
属性的命名空间 URI 在属性创建时被冻结。

在 Firefox 3.5 及更早版本中，HTML 文档中 HTML 属性的命名空间 URI 为 null。
在后来的版本中，遵照 HTML5，就像在 XHTML 中一样是[`https://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml)

您可以使用 DOM Level 2 方法 {{domxref("Element.setAttributeNS")}}创建具有指定 namespaceURI 的属性。

根据 [Namespaces in XML](https://www.w3.org/TR/xml-names11/) 规范，属性不会从其附加的元素继承其命名空间。
如果一个属性没有明确地给出一个命名空间，它没有命名空间。

DOM 本身不处理或强制命名空间验证。DOM 应用程序需要做任何必要的验证。
还要注意，一旦与特定节点相关联，命名空间前缀将无法更改。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他文章

- {{domxref("Attr.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Node.namespaceURI")}}
