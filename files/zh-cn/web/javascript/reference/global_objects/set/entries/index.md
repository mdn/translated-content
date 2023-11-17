---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

{{jsxref("Set")}} 实例的 **`entries()`** 方法返回一个新的[_集合迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含了此集合中每个元素的 **`[value, value]` 数组**，按插入顺序排列。`Set` 对象没有类似于 `Map` 对象中的 `key`。因此，为了保持 API 与 `Map` 对象类似，这里每个 _entry_ 的 _key_ 和 _value_ 都相同，所以返回的数组为 `[value, value]`。

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

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
