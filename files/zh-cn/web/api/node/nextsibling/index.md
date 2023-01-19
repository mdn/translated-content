---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef}}

**`Node.nextSibling`** 是一个只读属性，返回其父节点的 {{domxref("Node.childNodes","childNodes")}} 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 `null`。

## 语法

```plain
nextNode = node.nextSibling
```

## 备注

Gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如 [`Node.firstChild`](/zh-CN/docs/Web/API/Node/firstChild) 和 [`Node.previousSibling`](/zh-CN/docs/Web/API/Node/previousSibling) 之类的方法可能会引用到一个空白符文本节点，而不是使用者所预期得到的节点。

详情请参见 [DOM 中的空白符](/zh-CN/docs/Whitespace_in_the_DOM) 和[W3C DOM 3 FAQ: 为什么一些文本节点是空的](http://www.w3.org/DOM/faq.html#emptytext).

## 示例

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
var el = document.getElementById('div-01').nextSibling,
    i = 1;

console.log('Siblings of div-01:');

while (el) {
  console.log(i + '. ' + el.nodeName);
  el = el.nextSibling;
  i++;
}

</script>

/**************************************************
  The following is written to the console as it loads:

     Siblings of div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

**************************************************/
```

从上面的例子中可以看出，在两个标签之间（即一个元素的闭合标签之后，下一个元素的起始标签之前）有空白出现时，会有`#text` 节点被插入到 DOM 中。使用 `document.write` 语句插入的两个元素之间不会有空白。

The possible inclusion of text nodes in the DOM must be allowed for when traversing the DOM using `nextSibling`. See the resources in the Notes section.

## 规范

- [DOM Level 1 Core: nextSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling)
- [DOM Level 2 Core: nextSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F)

## 相关链接

- {{domxref("Element.nextElementSibling")}}

## 浏览器兼容性

{{Compat}}
