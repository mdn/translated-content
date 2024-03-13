---
title: Node.hasChildNodes
slug: Web/API/Node/hasChildNodes
---

{{ApiRef}}

### 概述

**hasChildNodes**方法返回一个[布尔值](/zh-CN/docs/JavaScript/Reference/Global_Objects/Boolean),表明当前[节点](/zh-CN/docs/DOM/Node)是否包含有[子节点](/zh-CN/docs/DOM/Node.childNodes).

## 语法

```
element.hasChildNodes()
```

## 例子

下面的例子演示了：如果 id 为 foo 的这个元素有子节点，则从 dom 树中删除它的第一个子节点。

```js
var foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  foo.removeChild(foo.childNodes[0]);
}
```

> **备注：** `Node.hasChildNodes`是个方法，而不是普通属性，使用时必须加括号才能调用。

## 总结

有三种方法可以判断当前节点是否有子节点。

- node.firstChild !== null
- node.childNodes.length > 0
- node.hasChildNodes()

## 规范

- [WHATWG: hasChildNodes](https://dom.spec.whatwg.org/#dom-node-haschildnodes)
- [hasChildNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-810594187)

## 相关链接

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
