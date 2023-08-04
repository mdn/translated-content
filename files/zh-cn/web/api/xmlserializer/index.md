---
title: XMLSerializer
slug: Web/API/XMLSerializer
---

{{APIRef("XMLSerializer")}}`XMLSerializer`接口提供{{domxref("XMLSerializer.serializeToString", "serializeToString()")}} 方法来构建一个代表 {{Glossary("DOM")}} 树的 XML 字符串。

## 方法

- {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}
  - : 返回 DOM 子树序列化后的字符串。
- {{domxref("XMLSerializer.serializeToStream", "serializeToStream()")}} {{ non-standard_inline }}{{ deprecated_inline }}
  - : 将指定元素的每个子树按照特定的字符集序列化成字节流。

## 示例

### 把 XML 序列化为字符串

首先，最基本的例子是将整个 document 对象序列化为一个 XML 字符串。

```js
var s = new XMLSerializer();
var d = document;
var str = s.serializeToString(d);
saveXML(str);
```

这里新建了一个 `XMLSerializer` 对象实例，然后将待序列化的 {{domxref("Document")}} 对象实例传入返回等价 XML 的 {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} 方法。

### 向一个基于 XML 的 DOM 对象中

本例使用 {domxref("Element.insertAdjacentHTML()")}} 方法将一个新的 DOM {{domxref("Node")}} 插入 基于序列化 {{domxref("Document")}} 对象创建的 XML 中。

> **备注：** 在真实场景下，你通常应该通过调用 {{domxref("Document.importNode", "importNode()")}} 方法将新节点加入 DOM 中，然后通过调用以下方法将目标节点添加到 DOM 树：
>
> - {{domxref("Document")}} 和 {{domxref("Element")}} 方法 {{domxref("ParentNode.append", "append()")}} 和 {{domxref("ParentNode.prepend", "prepend()")}}
> - {{domxref("ChildNode.replaceWith", "Node.replaceWith()")}} 方法 (替换现有节点)
> - {{domxref("Document.insertAdjacentElement()")}} 和 {{domxref("Element.insertAdjacentElement()")}} 方法。

因为`insertAdjacentHTML()` 的第二个参数是一个字符串而不是 `Node` 节点对象，所以这里先要使用 `XMLSerializer` 将节点转换为字符串。

```js
var inp = document.createElement("input");
var XMLS = new XMLSerializer();
var inp_xmls = XMLS.serializeToString(inp); // 先将一个 DOM 节点转换为字符串。

// 将新建的节点添加到 DOM 中。
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

以上代码通过调用 {{domxref("Document.createElement()")}} 方法新建一个 {HTMLElement("input")}} 对象 , 然后通过 {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} 方法将该对象序列化为 XML.

做完以上工作之后，使用 `insertAdjacentHTML()` 方法将 `<input>` 元素加入 DOM.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Parsing and serializing XML](/zh-CN/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("DOMParser")}}
