---
title: Document：xmlVersion 属性
short-title: xmlVersion
slug: Web/API/Document/xmlVersion
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{deprecated_header}}

返回 XML 声明中指定的版本号（例如 `<?xml version="1.0"?>`），如果声明不存在，则返回“1.0”。

此属性从未真正有用过，因为它总是返回 1.0，并且已在 DOM 第 4 版中被移除。因此，Firefox 10 不再实现这一属性。过去，它的主要用途是检测文档是否以 XML 而不是 HTML 渲染。若要实现这一检测，你可以创建一个名称为小写的元素，然后检查它是否被转换为全部大写（在这种情况下，文档处于非 XML 的 HTML 模式）：

```js
if (document.createElement("foo").tagName === "FOO") {
  /* 文档不是 XML */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
