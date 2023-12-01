---
title: Text.splitText()
slug: Web/API/Text/splitText
---

{{apiref("DOM")}}

**`Text.splitText()`** 方法可以根据指定的偏移量将一个 {{domxref("Text")}} 节点分割成前后两个独立的兄弟节点。

如果指定的偏移量刚好等于原文本节点所包含字符串的长度，则返回一个内容为空的文本节点。

分割后的文本节点还可以使用[`Node.normalize`](/zh-CN/docs/DOM/Node.normalize)方法来合并。

## 语法

```
newNode = textNode.splitText(offset)
```

### 参数

- `offset`
  - : 在中断文本节点前的索引。

### 返回值

返回一个新创建的 {{domxref("Text")}} 节点，该节点包含了 the text after the specified offset point.

### 异常

- INDEX_SIZE_ERR
  - : 如果指定的偏移量小于 0 或者大于原文本节点中所包含字符串的长度，则抛出这个异常。
- NO_MODIFICATION_ALLOWED_ERR
  - : 如果，原文本节点只读，则抛出这个异常。

## 示例

下面的例子中，一个 `<p>` 元素所包含的文本节点将会被分割成两个文本节点，然后在这两个节点中间插入一个 `<span>` 元素。

### HTML

```html
<p id="p">foobar</p>
```

### JavaScript

```js
const p = document.getElementById("p");

// 将 <p> 的内容读取为一个文本节点
const foobar = p.firstChild;

// 将原来的文本节点分割成为内容分别为 foo 和 bar 的两个文本节点
const bar = foobar.splitText(3);

// 创建一个包含了内容为 ' new content ' 的文本节点的 <u> 元素
const u = document.createElement("u");
u.appendChild(document.createTextNode(" new content "));

// 将 <u> 元素插入到后一个文本节点 'bar' 的前面
p.insertBefore(u, bar);

// 现在，HTML 结构就变成了 <p id="p">foo <span>span contents</span> bar</p>
```

### 结果

{{EmbedLiveSample("示例", 700, 70)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("Text")}} interface it belongs to.
- The opposite method: {{domxref("Node.normalize")}}.
