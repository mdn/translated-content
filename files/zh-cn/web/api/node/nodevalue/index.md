---
title: Node：nodeValue 属性
slug: Web/API/Node/nodeValue
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

{{domxref("Node")}} 的 **`nodeValue`** 属性返回或设置当前节点的值。

## 值

包含当前节点值（如果有）的字符串。对于文档节点来说，`nodeValue` 返回 `null`，对于文本节点、注释节点和 CDATA 节点，`nodeValue` 返回该节点的文本内容。对于属性节点，返回属性的值。

下表显示了不同类型节点的返回值：

| 节点类型                             | 返回值               |
| ------------------------------------ | -------------------- |
| {{domxref("CDATASection")}}          | CDATA 部分的文本内容 |
| {{domxref("Comment")}}               | 注释的内容           |
| {{domxref("Document")}}              | `null`               |
| {{domxref("DocumentFragment")}}      | `null`               |
| {{domxref("DocumentType")}}          | `null`               |
| {{domxref("Element")}}               | `null`               |
| {{domxref("NamedNodeMap")}}          | `null`               |
| {{domxref("ProcessingInstruction")}} | 不包括目标的全部内容 |
| {{domxref("Text")}}                  | 文本节点的内容       |

> [!NOTE]
> 如果 `nodeValue` 的值为 `null`，则对它赋值也不会有任何效果。

## 示例

```html
<div id="d1">Hello world</div>
<!-- 注释节点类型 -->
<output id="result">等待结果...</output>
```

以及以下脚本：

```js
let node = document.querySelector("body").firstChild;
let result = "<br/>节点名称：<br/>";
while (node) {
  result += `${node.nodeName} 的值是：${node.nodeValue}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("示例", "100%", "250") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
