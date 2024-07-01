---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
---

{{JSRef}}

**`findLast()`** 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 {{jsxref("undefined")}}。

如果你需要找到：

- *第一个*匹配的元素，使用 {{jsxref("Array/find", "find()")}}。
- 数组中最后一个匹配元素的*索引*，使用 {{jsxref("Array/findLastIndex", "findLastIndex()")}}。
- _某个值的索引_，使用 {{jsxref("Array/indexOf", "indexOf()")}}。（它类似于 {{jsxref("Array/findIndex", "findIndex()")}}，但是会检查每个元素是否与值相等，而不是使用一个测试函数。）
- 该数组中是否*存在*一个值，使用 {{jsxref("Array/includes()", "includes()")}}。同样地，它检查每个元素是否和值相等，而不是使用一个测试函数。
- 是否有任意一个元素满足提供的测试函数，使用 {{jsxref("Array/some()", "some()")}}。

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

## 语法

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 数组中测试元素的函数。回调应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)，表示已找到匹配的元素，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。函数在被调用时会传递以下参数：
    - `element`
      - : 当前遍历到的元素。
    - `index`
      - : 当前遍历到的元素的索引（位置）。
    - `array`
      - : 调用 `findLast()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时，用作 `this` 的值。详见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

数组中满足提供的测试函数索引最高的元素；如果没有元素匹配，返回 {{jsxref("undefined")}}。

## 描述

`findLast()` 是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。该方法对数组每一个元素按降序（索引从大到小）执行 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后 `findLast()` 返回该元素的值并停止遍历数组。如果 `callbackFn` 没有返回一个真值，则 `findLast()` 返回 {{jsxref("undefined")}}。

`callbackFn` 会被数组中的*每个*元素调用，而不仅仅是那些被赋值的元素。对于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)来说，空槽行为和 `undefined` 相同。

`findLast()` 方法不会改变调用它的数组，但是提供的 `callbackFn` 可以。但是请注意，数组的长度是在第一次调用 `callbackFn` *之前*保存的。因此：

- `callbackFn` 不会访问在调用 `findLast()` 开始后才添加到数组中的任何元素。
- 给已访问过的索引重新赋值将不会被 `callbackFn` 重新访问。
- 如果 `callbackFn` 更改了数组中现有的、尚未访问的元素，则其传递给 `callbackFn` 的值将是 `findLast()` 访问该元素索引时的值。[已删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素会被当做 `undefined` 来访问。

> **警告：** 上一段描述的并发修改的情况经常导致难以理解的代码，通常应该避免（特殊情况除外）。

`findLast()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键的属性。

## 示例

### 查找与元素属性匹配的数组中的最后一个对象

此示例展示了如何根据数组元素的属性创建测试。

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// 库存低时返回 true
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### 使用箭头函数和解构

前面的示例可以使用箭头函数和[对象解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#解构对象)重写如下：

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);

console.log(result);
// { name: "fish", quantity: 1 }
```

### 查找数组中的最后一个素数

以下示例查找数组中的最后一个素数元素（如果没有素数，则返回 {{jsxref("undefined")}}）：

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined，没有找到
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### 在稀疏数组上使用 findLast()

稀疏数组中的空槽*被*访问，并被视为 `undefined`。

```js
// 声明一个在索引 2、3 和 4 处没有元素的数组
const array = [0, 1, , , , 5, 6];

// 显示所有的索引（不只包括那些被赋值的）
array.findLast((value, index) => {
  console.log(`访问索引 ${index}，值为 ${value}`);
});
// 访问索引 6，值为 6
// 访问索引 5，值为 5
// 访问索引 4，值为 undefined
// 访问索引 3，值为 undefined
// 访问索引 2，值为 undefined
// 访问索引 1，值为 1
// 访问索引 0，值为 0

// 显示所有的索引（包括已被删除的）
array.findLast((value, index) => {
  // 在第一次迭代时删除值为 5 的元素
  if (index === 6) {
    console.log(`删除值为 array[5]，其值为 ${array[5]}`);
    delete array[5];
  }
  // 元素 5 在被删除后，仍会被访问
  console.log(`访问索引 ${index}，值为 ${value}`);
});
// 删除值为 array[5]，其值为 5
// 访问索引 6，值为 6
// 访问索引 5，值为 undefined
// 访问索引 4，值为 undefined
// 访问索引 3，值为 undefined
// 访问索引 2，值为 undefined
// 访问索引 1，值为 1
// 访问索引 0，值为 0
```

### 在非数组对象上调用 findLast()

`findLast()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLast.call(arrayLike, (x) => Number.isInteger(x)),
); // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.findLast` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
