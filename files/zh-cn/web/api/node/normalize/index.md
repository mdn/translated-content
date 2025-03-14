---
title: Node：normalize() 方法
slug: Web/API/Node/normalize
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`normalize()`** 方法将指定的节点及其所有子树转化为*规范化*形式。在规范化子树中，子树上的文本节点都不为空，且没有相邻的文本节点。

## 语法

```js-nolint
normalize()
```

### 参数

无。

### 返回值

无。

## 示例

```html
<output id="result"></output>
```

```js
const wrapper = document.createElement("div");

wrapper.appendChild(document.createTextNode("第 1 部分"));
wrapper.appendChild(document.createTextNode("第 2 部分"));

let node = wrapper.firstChild;
let result = "规范化之前：<br/>";
while (node) {
  result += ` ${node.nodeName}：${node.nodeValue}<br/>`;
  node = node.nextSibling;
}

wrapper.normalize();

node = wrapper.firstChild;
result += "<br/><br/>规范化之后：<br/>";
while (node) {
  result += ` ${node.nodeName}：${node.nodeValue}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("示例", "100%", "170")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Text.splitText()")}}，它的相反操作。
