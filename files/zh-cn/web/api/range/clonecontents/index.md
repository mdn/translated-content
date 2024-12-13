---
title: Range.cloneContents()
slug: Web/API/Range/cloneContents
---

{{ APIRef("DOM") }}

**`Range.cloneContents()`** 返回一个 {{ domxref("DocumentFragment") }}，它是 {{ domxref("Range") }} 中所有的 {{ domxref("Node") }} 对象的副本。

使用" DOM 事件"添加的“事件侦听器”在克隆过程中不会被复制。HTML 属性事件与“DOM Core cloneNode”方法一样被复制。“HTML id 属性”也将被克隆，这可能导致通过克隆导致无效的文档。

Partially selected nodes include the parent tags necessary to make the document fragment valid.

## 语法

```plain
documentFragment = range.cloneContents();
```

## 例子

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)
