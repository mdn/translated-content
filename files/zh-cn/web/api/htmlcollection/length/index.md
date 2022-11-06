---
title: HTMLCollection.length
slug: Web/API/HTMLCollection/length
---

{{APIRef("DOM")}}

**`HTMLCollection.length`** 属性返回 {{domxref("HTMLCollection")}} 中的元素数量。

## 值

一个正整数，表示 `HTMLCollection` 中元素的数量。

## 示例

`length` 属性在 DOM 编程中通常很有用。它通常用于测试集合的长度，去看它是否真的存在。它也通常用于 `for` 循环中的迭代器，如下示例。

```js
// All the elements with the class ".test" in the document
var items = document.getElementsByClassName("test");

// For each test item in the list,
// append the entire element as a string of HTML
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross is now all the HTML for the test elements
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
