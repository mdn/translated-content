---
title: NodeList：length 属性
short-title: length
slug: Web/API/NodeList/length
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.length`** 属性返回 {{domxref("NodeList")}} 中包含的元素数量。

## 值

一个表示 `NodeList` 中元素的数量的整数值。

## 示例

`length` 属性在 DOM 编程中非常有用。它通常用来检测列表的长度，以判断列表是否存在。同时，它也常被用作 `for` 循环中的迭代条件，如下面的示例所示。

```js
// 文档中所有的段落元素
const items = document.getElementsByTagName("p");

// 遍历列表中的每一项，将整个元素内容追加为一段 HTML 字符串
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross 现在包含了所有段落的 HTML 内容
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
