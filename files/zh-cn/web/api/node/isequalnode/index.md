---
title: Node.isEqualNode
slug: Web/API/Node/isEqualNode
---

{{ ApiRef("DOM") }}

**`Node.isEqualNode()`** 方法可以判断两个节点是否相等。当两个节点的类型相同，定义特征 (defining characteristics) 相同（对元素来说，即 id，孩子节点的数量等等），属性一致等，这两个节点就是相等的。一些具体的数据指出：多数时候的比较是根据节点的类型来的。

### 语法

```plain
var isEqualNode = node.isEqualNode(otherNode);
```

- otherNode: 比较是否相等的节点。

## 示例

在本例中，我们创建了三个 {{HTMLElement("div")}} 块。第一个和第三个 div 都拥有相同的内容和属性，第二个则不一样。然后我们运行 JavaScript，使用 `isEqualNode()` 来比较这几个节点。

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

### JavaScript

```js
let output = document.getElementById("output");
let divList = document.getElementsByTagName("div");

output.innerHTML +=
  "div 0 equals div 0: " + divList[0].isEqualNode(divList[0]) + "<br/>";
output.innerHTML +=
  "div 0 equals div 1: " + divList[0].isEqualNode(divList[1]) + "<br/>";
output.innerHTML +=
  "div 0 equals div 2: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### 结果

{{ EmbedLiveSample('示例', 480) }}

### 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.isSameNode()")}}
