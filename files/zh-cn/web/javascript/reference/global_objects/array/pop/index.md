---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef}}

**`pop()`** 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## 语法

```js
pop()
```

### 返回值

从数组中删除的元素（当数组为空时返回{{jsxref("undefined")}}）。

## 描述

`pop` 方法从一个数组中删除并返回最后一个元素。

`pop` 方法有意具有通用性。该方法和 {{jsxref("Function.call", "call()")}} 或 {{jsxref("Function.apply", "apply()")}} 一起使用时，可应用在类似数组的对象上。`pop` 方法根据 `length` 属性来确定最后一个元素的位置。如果不包含 `length` 属性或 `length` 属性不能被转成一个数值，会将 `length` 置为 0，并返回 `undefined`。

如果你在一个空数组上调用 `pop()`，它将返回 {{jsxref("undefined")}}。

## 示例

### 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 `myFish`，然后删除掉它的最后一个元素。

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin']

console.log(popped); // 'sturgeon'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
