---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

**`values()`** 方法返回一个新的 **`Array Iterator`** 对象，该对象包含数组每个索引的值。

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 语法

```js
values()
```

### 返回值

一个新的 {{jsxref("Array")}} 迭代对象。

## 示例

### 使用 for...of 循环进行迭代

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"
```

**Array.prototype.values** 是 **Array.prototype\[Symbol.iterator]** 的默认实现。

```js
Array.prototype.values === Array.prototype[Symbol.iterator]  // true
```

### 使用 .next() 迭代

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iterator.next().value;         // undefined
```

> **警告：** 数组迭代器是一次性的，或者说临时对象

例子：

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
for (const letter of iterator) {
  console.log(letter);
} //"a" "b" "c" "d" "e"
for (const letter of iterator) {
  console.log(letter);
} // undefined
```

**解释**：当 `next().done=true` 或 `currentIndex>length` 时， `for..of` 循环结束。参见[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

**值**：数组迭代器中存储的是原数组的地址，而不是数组元素值。

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
console.log(iterator);        // Array Iterator {  }
iterator.next().value;        // "a"
arr[1] = 'n';
iterator.next().value;        // "n"
```

> **备注：** 如果数组中元素改变，那么迭代器的值也会改变

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
