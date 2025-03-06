---
title: Node.firstChild
slug: Web/API/Node/firstChild
---

{{ ApiRef("DOM") }}

**Node.firstChild** 只读属性返回树中节点的第一个子节点，如果节点是无子节点，则返回 `null`。

### 语法

```plain
var childNode = node.firstChild;
```

### 描述

如果有一个子节点，childNode 是节点的第一个子节点的引用，否则为 null。

### 示例

#### 示例 1

这个例子演示了`firstChild`属性的用法以及空白符节点对该属性的使用可能造成的影响。参见[备注](#备注)部分了解 Gecko DOM 中关于处理空白符的更多信息。

```plain
<p id="para-01">
  <span>First span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
</script>
```

在上面的示例中，提示框将显示 '#text',因为在\<p>标签和\<span>标签之前，有一个换行符和多个空格充当了一个文本节点。在 Gecko 中，任意多个的空白符都将导致文本节点的插入，包括一个到多个空格符，换行符，制表符等等。

\</span>和\</p>标签之间就是另外一个文本节点。

如果从源代码移出对应的空白符，则不会有文本节点被插入，span 元素就成为了第一个子节点。下面的代码将弹出 'SPAN'.

```plain
<p id="para-01"><span>First span</span></p>

<script type="text/javascript">
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
</script>
```

#### 示例 2

假设我们有一个 HTML 文档，如果该文档有一个 DTD（文档类型定义），则下面的语句会弹出 `[object DocumentType]`，如果该文档没有一个 DTD，则下面的语句会弹出 `[object HTMLHtmlElement]`。

```plain
alert(document.firstChild);
```

### 备注

Gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如
[`Node.firstChild`](/zh-CN/docs/Web/API/Node/firstChild) 和 [`Node.previousSibling`](/zh-CN/docs/Web/API/Node/previousSibling) 之类的方法可能会引用到一个空白符文本节点，
而不是使用者所预期得到的节点。

详情请参见 [DOM 中的空白符](/zh-CN/docs/Web/API/Document_Object_Model/Whitespace)
和[W3C DOM 3 FAQ: 为什么一些文本节点是空的](https://www.w3.org/DOM/faq.html#emptytext).

### 规范

[DOM Level 1 Core: firstChild](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-firstChild)

[DOM Level 2 Core: firstChild](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-169727388)
