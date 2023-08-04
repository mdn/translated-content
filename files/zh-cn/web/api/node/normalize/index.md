---
title: Node.normalize()
slug: Web/API/Node/normalize
---

{{APIRef("DOM")}}

`Node.normalize()` 方法将当前节点和它的后代节点”规范化“（normalized）。在一个"规范化"后的 DOM 树中，不存在一个空的文本节点，或者两个相邻的文本节点。

注 1：“空的文本节点”并不包括空白字符 (空格，换行等) 构成的文本节点。

注 2：两个以上相邻文本节点的产生原因包括：

1. 通过脚本调用有关的 DOM 接口进行了文本节点的插入和分割等。
2. HTML 中超长的文本节点会被浏览器自动分割为多个相邻文本节点。

## 语法

```plain
element.normalize();
```

## 例子

```js
var wrapper = document.createElement("div");

wrapper.appendChild(document.createTextNode("Part 1 "));
wrapper.appendChild(document.createTextNode("Part 2 "));

// 这时 (规范化之前),wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "

wrapper.normalize();
// 现在 (规范化之后), wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Part 1 Part 2"
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Text.splitText()")}}
