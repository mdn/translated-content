---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

{{JSRef}}

**`shift()`** 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## 语法

```js-nolint
shift()
```

### 返回值

从数组中删除的元素；如果数组为空则返回 {{jsxref("undefined")}}。

## 描述

`shift` 方法移除索引为 0 的元素，并将后续元素的下标依次向前移动，然后返回被移除的元素。如果 {{jsxref("Array.length", "length")}} 属性的值为 0，则返回 {{jsxref("undefined")}}。

{{jsxref("Array/pop", "pop()")}} 方法有着和 `shift()` 相似的行为。但是是作用于数组的最后一个元素上的。

`shift()` 方法是一个改变方法。它改变了 `this` 的内容和长度。如果你希望保持 `this` 的值不变，但返回一个删除了第一个元素的新数组，你可以使用 [`arr.slice(1)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)。

`shift()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。

## 示例

### 移除数组中的一个元素

以下代码显示了删除其第一个元素之前和之后的 `myFish` 数组。它还显示已删除的元素：

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("调用 shift 之前：", myFish);
// 调用 shift 之前： ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("调用 shift 之后：", myFish);
// 调用 shift 之后： ['clown', 'mandarin', 'surgeon']

console.log("被删除的元素：" + shifted);
// "被删除的元素：angel"
```

### 在 while 循环中使用 shift()

shift() 方法经常用于 while 循环的条件中。下例中每次迭代都会从一个数组中移除下一项元素，直至它成为空数组。

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### 在非数组对象上调用 shift()

`shift` 方法会读取 `this` 的 `length` 属性。如果[规范化长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#长度属性的规范化)为 0，`length` 再次设置为 `0`（而之前可能为负值或 `undefined`）。否则，返回 `0` 处的属性，其余属性向左移动 1。`length` 属性递减 1。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined，因为它是一个空槽
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以长度为 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
