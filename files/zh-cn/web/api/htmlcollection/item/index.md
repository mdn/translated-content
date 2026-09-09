---
title: HTMLCollection：item() 方法
slug: Web/API/HTMLCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLCollection")}} 的 `item()` 方法返回集合中位于指定偏移位置的元素。

> [!NOTE]
> 由于 `HTMLCollection` 的内容是实时的，对底层 DOM 的更改可以且将会导致集合中各个元素的位置发生变化，因此给定元素的索引值不一定保持不变。

## 语法

```js-nolint
item(index)
```

### 参数

- `index`
  - : 要返回的 {{domxref("Element")}} 的位置。元素在 `HTMLCollection` 中出现的顺序与它们在文档源中出现的顺序相同。

### 返回值

指定索引处的 {{domxref("Element")}}；若 `index` 小于零，或大于等于 `length` 属性，则返回 `null`。

## 用法说明

`item()` 方法从 `HTMLCollection` 中返回带编号的元素。在 JavaScript 中，将 `HTMLCollection` 当作数组并用数组记法进行索引更为简便。参见下方的[示例](#示例)。

## 示例

```js
const images = document.images; // 这是一个 HTMLCollection
const img0 = images.item(0); // 可以这样使用 item() 方法
const img1 = images[1]; // 但这种记法更简便也更常见
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("NodeList.item()")}}
