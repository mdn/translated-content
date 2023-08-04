---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
---

{{APIRef("DOM")}}

{{domxref("Node")}} 的 **`nodeValue`** 属性返回或设置当前节点的值。

## 语法

```plain
str = node.nodeValue;
node.nodeValue = str;
```

value 是一个包含当前节点的值的字符串（如果有的话）。

### 值

对于文档节点来说，`nodeValue`返回`null`. 对于 text, comment，和 CDATA 节点来说，`nodeValue 返回该节点的文本内容`. 对于 attribute 节点来说，返回该属性的属性值。

下表就是不同类型的节点所返回的该属性的值。

| Node                                 | Value of nodeValue |
| ------------------------------------ | ------------------ |
| {{domxref("CDATASection")}}          | CDATA 的文本内容   |
| {{domxref("Comment")}}               | 注释的文本内容     |
| {{domxref("Document")}}              | null               |
| {{domxref("DocumentFragment")}}      | null               |
| {{domxref("DocumentType")}}          | null               |
| {{domxref("Element")}}               | null               |
| {{domxref("NamedNodeMap")}}          | null               |
| {{domxref("EntityReference")}}       | null               |
| {{domxref("Notation")}}              | null               |
| {{domxref("ProcessingInstruction")}} | 整个标签的文本内容 |
| {{domxref("Text")}}                  | 文本节点的内容     |

如果 `nodeValue` 的值为 `null`,则对它赋值也不会有任何效果。

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
