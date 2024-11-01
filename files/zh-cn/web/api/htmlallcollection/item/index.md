---
title: HTMLAllCollection：item() 方法
slug: Web/API/HTMLAllCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLAllCollection")}} 接口的 **`item()`** 方法返回位于集合中指定偏移位置的元素，或其 `id` 或 `name` 属性具有指定值的元素。

## 语法

```js-nolint
item(nameOrIndex)
```

### 参数

- `nameOrIndex`
  - : 如果参数是一个整数，或者是一个可以转换为整数的字符串，它表示将要返回的 {{domxref("Element")}} 的位置。元素在 `HTMLAllCollection` 中出现的顺序与它们在文档源中出现的顺序相同。如果参数是一个无法转换为整数的字符串，它将被解释为将要返回的元素的 `name` 或 `id`。

### 返回值

如果 `nameOrIndex` 表示一个索引，`item()` 方法将返回位于指定索引处的 {{domxref("Element")}}，如果 `nameOrIndex` 小于零或大于等于集合的长度属性，则返回 `null`。如果 `nameOrIndex` 表示一个名称，`item()` 方法将返回与 {{domxref("HTMLAllCollection/namedItem", "namedItem()")}} 方法相同的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCollection.item()")}}
