---
title: Selection.containsNode()
slug: Web/API/Selection/containsNode
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`Selection.containsNode()`** 判断指定的节点是否包含在 Selection 中 (是否被选中).

## 语法

```plain
sel.containsNode(aNode,aPartlyContained)
```

### 参数

- _`aNode`_
  - : 用于判断是否包含在 Selection 中的那个节点
- _`aPartlyContained`_
  - : 当此参数为`true 时`, 当`selection 包含节点 aNode 的一部分或全部时，containsNode() 返回 true`.
    当此参数为`false 时`, 只有当 selection 完全包含节点 aNode 时，`containsNode()` 才返回 true.

## 例子

```plain
 /* 检查 body 中是否有节点被选中 */
 console.log(window.getSelection().containsNode(document.body, true));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Selection")}}, Selection 接口规范。
