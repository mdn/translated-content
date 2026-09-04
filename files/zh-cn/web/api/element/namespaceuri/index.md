---
title: Element：namespaceURI 属性
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.namespaceURI`** 只读属性返回元素的命名空间 URI；如果该元素不在命名空间中，则返回 `null`。

## 值

字符串，或 `null`。

## 示例

在此代码片段中，正在检查元素的 {{domxref("Element.localName", "localName")}} 和 `namespaceURI`。如果 `namespaceURI` 返回 XUL 命名空间，且 `localName` 返回 `"browser"`，则该节点可理解为 XUL `<browser/>`。

```js
if (
  element.localName === "browser" &&
  element.namespaceURI ===
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // 这是一个 XUL 浏览器
}
```

## 备注

这不是通过对作用域内命名空间声明进行检查而得到的命名空间查找计算结果。节点的命名空间 URI 在节点创建时被冻结。

HTML 文档中 HTML 元素的命名空间 URI 为 [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/)，与 XHTML 中相同。

你可以使用 [`document.createElementNS()`](/zh-CN/docs/Web/API/Document/createElementNS) 方法创建具有指定 `namespaceURI` 的元素。

DOM 本身并不处理或强制执行命名空间验证。任何必要的验证由 DOM 应用程序自行完成。另请注意，命名空间前缀一旦与特定元素关联，就无法更改。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
