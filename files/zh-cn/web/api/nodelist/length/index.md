---
title: NodeList.length
slug: Web/API/NodeList/length
---

{{APIRef("DOM")}}

## 摘要

返回 [`NodeList`](/zh-CN/docs/Web/API/NodeList) 集合中子节点数量。

## 语法

```js
numItems = nodeList.length;
```

- `numItems` 是一个整数，表示 `NodeList` 子节点的数量。

## 例子

```js
// 获取文档中的所有 p 标签
var items = document.getElementsByTagName("p");

// 循环 items 然后输出每个 p 标签 html
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross 现在集合了所有 p 标签的 HTML 内容。
```

## 注意

length 不是 [元素（Element）](en/DOM/element)的属性，而是 [NodeList](/zh-CN/docs/Web/API/NodeList) 的属性。NodeList 是使用 DOM 操作方法返回的对象，比如使用 [document.getElementsByTagName](en/DOM/document.getElementsByTagName) 就会返回一个 NodeList 对象。

length 是在 DOM 操作中非常常见的属性。最常见的是用 length 属性来判断某些节点是否存在，或者如上述一样，用在 for 循环上。

## 规范

[length](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-203510337)
