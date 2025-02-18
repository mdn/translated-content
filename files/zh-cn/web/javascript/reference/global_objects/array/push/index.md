---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
---

{{JSRef}}

**`push()`** 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

{{InteractiveExample("JavaScript Demo: Array.push()")}}

```js interactive-example
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

## 语法

```js-nolint
push()
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

### 参数

- `elementN`
  - : 添加到数组末尾的元素。

### 返回值

调用方法的对象的新 {{jsxref("Array/length", "length")}} 属性。

## 描述

`push()` 方法将值追加到一个数组中。

{{jsxref("Array.prototype.unshift()")}} 有着和 `push()` 相似的行为，但是其作用于数组的开头。

`push()` 方法是一个修改方法。它改变了 `this` 的内容和长度。如果你希望 `this` 的值保持不变，但返回一个末尾追加了元素的新数组，你可以使用 [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 来代替。请注意，这些元素需要被包装在一个额外的数组中——否则，如果元素本身是一个数组，由于 `concat()` 的行为，它将被展开而不是作为单个元素添加到原数组的末尾。

`push()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适用于它，因为字符串是不可变的。

## 示例

### 在数组中添加元素

接下来的代码中将会生成包含两个元素的 `sports` 数组，然后向其添加两个元素。`total` 变量将会记录数组的新长度。

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 合并两个数组

这个示例使用{{jsxref("Operators/Spread_syntax", "展开语法", "", 1)}}来将第二个数组的所有元素添加到第一个数组中。

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 合并第二个数组到第一个数组中
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

也可以通过使用 {{jsxref("Array.prototype.concat()", "concat()")}} 方法来合并两个数组。

### 在非数组对象中使用 push()

`push()` 方法会读取 `this` 的 `length` 属性。然后，它将 `this` 的每个索引从 `length` 开始设置，并将参数传递给 `push()`。最后，它将 `length` 设置成之前的长度加上已添加元素的数量。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以长度为 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### 以类似数组的方式使用对象

如上所述，`push` 被有意设计为通用的，我们可以利用这一点。就像这个例子所展示的，`Array.prototype.push` 可以很好的处理对象。

注意，我们没有创建一个数组来存储对象集合。相反，我们将集合存储在对象本身上，并通过 `Array.prototype.push` 的 `call` 来调用该方法，让它认为我们正在处理一个数组——归功于 JavaScript 允许我们以任何我们想要的方式建立执行上下文的方式，这样是可行的。

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length 在每次添加元素时自动增加
    [].push.call(this, elem);
  },
};

// 让我们添加一些空对象来说明
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

注意，尽管 `obj` 不是一个数组，`push` 方法仍成功地增加了 `obj` 的 `length` 属性，就像我们处理一个真正的数组一样。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.push` 的 Polyfill，并对此方法进行了修复](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
