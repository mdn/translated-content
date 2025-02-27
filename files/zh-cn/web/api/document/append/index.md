---
title: Document：append() 方法
slug: Web/API/Document/append
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}

**`Document.append()`** 方法会在文档的最后一个子节点后插入一组{{domxref("Node", "节点", "", 1)}}对象或字符串对象。字符串对象被插入为相同{{domxref("Text", "文本", "", 1)}}节点。

此方法将一个子元素追加到 `Document` 中。要向树中的任意元素添加子元素，请参阅 {{domxref("Element.append()")}}。

## 语法

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### 参数

- `param1`, …, `paramN`
  - : 要插入的一组 {{domxref("Node")}} 或字符串对象。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 当节点无法插入层次结构中的指定点时抛出异常。

## 示例

### 向文档添加根元素

如果你尝试在现有 HTML 文档中添加元素，可能会抛出 `HierarchyRequestError` {{domxref("DOMException")}}，因为 {{HTMLElement("html")}} 元素已经存在。

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

如果创建的新文档没有任何现有元素，你可以添加一个 HTML 根元素（或 SVG 根元素）：

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.prepend()")}}
- {{domxref("Element.append()")}}
