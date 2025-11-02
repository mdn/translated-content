---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

**`pop()`** 方法从数组中删除**最后一个**元素，并返回该元素的值。此方法会更改数组的长度。

{{InteractiveExample("JavaScript Demo: Array.pop()")}}

```js interactive-example
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## 语法

```js-nolint
pop()
```

### 返回值

从数组中删除的元素（当数组为空时返回 {{jsxref("undefined")}}）。

## 描述

`pop()` 方法从一个数组中删除并返回最后一个元素给调用者。如果你在空数组上调用 `pop()`，它会返回 {{jsxref("undefined")}}。

{{jsxref("Array.prototype.shift()")}} 和 `pop()` 有类似的行为，但是它是作用在数组的第一个元素上的。

`pop()` 是修改方法。其改变了 `this` 的长度和内容。如果你想要 `this` 不变，但是返回一个新的最后一个元素被移除的数组，你可以使用 [`arr.slice(0, -1)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 来代替。

`pop()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类数组对象，但是由于其不能被修改，所以 `pop()` 方法并不能应用在字符串上。

## 示例

### 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 `myFish`，然后删除掉它的最后一个元素。

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

### 在非数组对象上调用 pop()

`pop()` 方法会读取 `this` 上的 `length` 属性。如果[规范化的 length 属性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#长度属性的规范化)为 0，`length` 会被再次设置为 0（鉴于之前可能是负数或者 `undefined`）。否则，返回并[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)位于 `length - 1` 处的属性。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// 没有 length 属性，所以长度为 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

### 以类数组的方式使用对象

`push` 和 `pop` 方法是通用的，我们可以利用这一点来编写更灵活的代码——如以下示例所示。

请注意，在此示例中，我们不会创建数组来存储对象集合。相反，我们将集合存储在对象本身上，并在 `Array.prototype.push` 和 `Array.prototype.pop` 上使用 `call` 来欺骗这些方法，让它们认为我们正在处理一个数组。

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // 每次添加元素时
    // obj.length 都会自动增加

    // 返回 push 方法的返回值，即 length 属性的新值
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // 每次移除元素时
    // obj.length 都会自动减少

    // 返回 pop 方法的返回值，即被移除的元素
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection.length); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
