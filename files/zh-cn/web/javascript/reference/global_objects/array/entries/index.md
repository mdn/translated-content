---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}

**`entries()`** 方法返回一个新的 **Array Iterator** 对象，该对象包含数组中每个索引的键/值对。

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 语法

```js-nolint
entries()
```

### 返回值

一个新的 {{jsxref("Array")}} 迭代器对象。

## 示例

### 迭代索引和元素

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
    console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### 使用 for...of 循环

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
