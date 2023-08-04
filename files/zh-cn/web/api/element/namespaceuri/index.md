---
title: Element.namespaceURI
slug: Web/API/Element/namespaceURI
---

{{APIRef("DOM")}}

**`Element.namespaceURI`** 是一个只读属性，它返回元素的命名空间，若该元素不在命名空间中则返回`null` .

> **备注：** 在 DOM4 之前，这个 API 在接口 {{domxref("Node")}} 中定义 .

## 语法

```
namespace = element.namespaceURI
```

## 例子

在这段代码中，我们检查了元素的{{domxref("localName")}}和`namespaceURI`。如果 `namespaceURI` 返回 XUL 命名空间， `localName` 返回"browser"，于是这个节点被理解为是一个 XUL `<browser/>`。

```js
if (
  element.localName == "browser" &&
  element.namespaceURI ==
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // this is a XUL browser
}
```

## 注意

这不是一个计算值，它是基于范围内的名称空间声明检查的名称空间查找的结果。节点命名空间在节点创建时被冻结。

在 Firefox 3.5 以及之前的版本，HTML 文档中的 HTML 元素的名称空间 URI 为 `null`。在更早的版本中，符合 HTML5，它是[`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) 如 XHTML。

您可以使用 DOM Level 2 方法指定的`namespaceURI`创建一个元素 [document.createElementNS](/zh-CN/docs/Web/API/Document/createElementNS)。

DOM 本身不处理或执行名称空间验证。它由 DOM 应用程序完成，以执行任何必要的验证。注意，名称空间前缀一旦与某个特定元素相关联，就不能更改。

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
- {{domxref("Node.namespaceURI")}}
