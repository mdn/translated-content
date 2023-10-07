---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

**`values()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象，该对象按插入顺序包含 `Set` 对象中每个元素的值。

> **备注：** **`keys()`** 方法是该方法的别名（与 {{jsxref("Map")}} 对象相似）。因此这里重定向 `keys()` 页。它的行为完全相同，并返回 `Set` 元素的**值**。

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## 语法

```js-nolint
values()
```

### 返回值

一个新的迭代器对象，按插入顺序包含给定 `Set` 中每个元素的值。

## 示例

### 使用 values()

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
