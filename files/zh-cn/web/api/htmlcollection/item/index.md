---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
---

{{APIRef("HTML DOM")}}

`HTMLCollection.item()` 由位置获取元素。

### 参数

- index
  - : 想要被返回的 Node 的位置。元素在 HTML Collection 中的顺序和他们在源文档的顺序保持一致。

### 返回值

指定的 index 的{{domxref("Node")}} , 如果 index 小于 0 或者不小于它的长度属性则返回 null。

## Description

HTMLCollection 中 `item()` 方法返回一个编号的元素，在 JavaScript 中把 HTMLCollection 当成是一个是数组并用数组符号去索引十分简单。

## Example

```js
var c = document.images; // This is an HTMLCollection
var img0 = c.item(0); // You can use the item( ) method this way
var img1 = c[1]; // But this notation is easier and more common
```

## See also

- {{domxref("NodeList.item()")}}
