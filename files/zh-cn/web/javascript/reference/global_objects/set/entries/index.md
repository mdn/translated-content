---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

**`entries()`** 方法返回一个新的[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象，这个对象包含的元素是类似 **`[value, value]` 形式的数组**，`value` 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 `Map` 对象那样拥有 `key`，然而，为了与 `Map` 对象的 API 形式保持一致，故使得每一个*条目*的 _key_ 和 _value_ 都拥有相同的值，因而最终返回一个 `[value, value]` 形式的数组。

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## 语法

```js-nolint
entries()
```

### 返回值

一个新的迭代器对象，它包含给定 `Set` 中的每个元素的 `[value, value]` 数组，按插入顺序排列。

## 示例

### 使用 entries()

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
