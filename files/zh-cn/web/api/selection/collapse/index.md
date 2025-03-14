---
title: Selection.collapse()
slug: Web/API/Selection/collapse
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

**`Selection.collapse()`** 方法可以收起当前选区到一个点。文档不会发生改变。如果选区的内容是可编辑的并且焦点落在上面，则光标会在该处闪烁。

## 语法

```plain
sel.collapse(parentNode, offset);
```

### 参数

- _`parentNode`_
  - : 光标落在的目标节点。
- _`offset`_ {{optional_inline}}
  - : 落在节点的偏移量。

## 例子

```js
/* 将光标收起到文档 body 的开头 */
var body = document.getElementsByTagName("body")[0];
window.getSelection().collapse(body, 0);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

- {{domxref("Selection")}}, 本方法所属的接口。
