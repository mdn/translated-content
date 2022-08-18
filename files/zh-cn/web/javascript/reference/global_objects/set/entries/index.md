---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---
{{JSRef}}

entries() 方法返回一个新的迭代器对象 ，这个对象的元素是类似 \[value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 \[value, value] 形式的数组。

## 语法

```plain
mySet.entries()
```

### 返回值

一个新的包含 \[value, value] 形式的数组迭代器对象，value 是给定集合中的每个元素，迭代器 对象元素的顺序即集合对象中元素插入的顺序。

## 示例

### 使用 `entries()`

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
