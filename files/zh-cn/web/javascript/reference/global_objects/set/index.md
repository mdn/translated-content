---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
---

{{ JSRef }}

**`Set`** 对象允许你存储任何类型的唯一值，无论是{{ Glossary('Primitive', '原始值') }}或者是对象引用。

## 简述

`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会**出现一次**，即 Set 中的元素是唯一的。

### 值的相等

因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。在 ECMAScript 规范的早期版本中，这不是基于和===操作符中使用的算法相同的算法。具体来说，对于 Set，+0（+0 严格相等于 -0）和 -0 是不同的值。然而，在 ECMAScript 2015 规范中这点已被更改。有关详细信息，请参阅[浏览器兼容性](#浏览器兼容性)表中的“_Key equality for -0 and 0_”。

另外，`NaN` 和 `undefined` 都可以被存储在 Set 中，`NaN` 之间被视为相同的值（NaN 被认为是相同的，尽管 NaN !== NaN）。

## Constructor

- [`Set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)
  - : 创建一个新的 `Set` 对象。

## 静态属性

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : 构造函数用来创建派生对象。

## 实例属性

- {{jsxref("Set.prototype.size")}}
  - : 返回 Set 对象中的值的个数

## 实例方法

- {{jsxref("Set.add", "Set.prototype.add(<em>value</em>)")}}
  - : 在`Set`对象尾部添加一个元素。返回该 `Set` 对象。
- {{jsxref("Set.prototype.clear()")}}
  - : 移除`Set`对象内的所有元素。
- {{jsxref("Set.delete", "Set.prototype.delete(<em>value</em>)")}}
  - : 移除值为 `value` 的元素，并返回一个布尔值来表示是否移除成功。`Set.prototype.has(value)` 会在此之后返回 `false`。
- {{jsxref("Set.prototype.entries()")}}
  - : 返回一个新的迭代器对象，该对象包含 `Set` 对象中的按插入顺序排列的所有元素的值的 `[value, value]` 数组。为了使这个方法和 `Map` 对象保持相似，每个值的键和值相等。
- {{jsxref("Set.forEach", "Set.prototype.forEach(<em>callbackFn</em>[, <em>thisArg</em>])")}}
  - : 按照插入顺序，为 Set 对象中的每一个值调用一次 callBackFn。如果提供了`thisArg`参数，回调中的 `this` 会是这个参数。
- {{jsxref("Set.has", "Set.prototype.has(<em>value</em>)")}}
  - : 返回一个布尔值，表示该值在 `Set` 中存在与否。
- {{jsxref("Set.prototype.keys()")}}
  - : 与 **`values()`** 方法相同，返回一个新的迭代器对象，该对象包含 `Set` 对象中的按插入顺序排列的所有元素的值。
- {{jsxref("Set.prototype.values()")}}
  - : 返回一个新的迭代器对象，该对象包含 `Set` 对象中的按插入顺序排列的所有元素的值。
- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : 返回一个新的迭代器对象，该对象包含 `Set` 对象中的按插入顺序排列的所有元素的值。

## 示例

### 使用 `Set` 对象

```js
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
let o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o 指向的是不同的对象，所以没问题

mySet.has(1); // true
mySet.has(3); // false
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // true，从 set 中移除 5
mySet.has(5); // false, 5 已经被移除

mySet.size; // 4，刚刚移除一个值

console.log(mySet);
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome
```

### 迭代 Set

```js
// 迭代整个 set
// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
//(键与值相等)
for (let [key, value] of mySet.entries()) console.log(key);

// 使用 Array.from 转换 Set 为 Array
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// 如果在 HTML 文档中工作，也可以：
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// Set 和 Array 互换
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// 可以通过如下代码模拟求交集
let intersection = new Set([...set1].filter((x) => set2.has(x)));

// 可以通过如下代码模拟求差集
let difference = new Set([...set1].filter((x) => !set2.has(x)));

// 用 forEach 迭代
mySet.forEach(function (value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### 实现基本集合操作

```js
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

//Examples
let setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]
```

### `Array` 相关

```js
let myArray = ["value1", "value2", "value3"];

// 用 Set 构造器将 Array 转换为 Set
let mySet = new Set(myArray);

mySet.has("value1"); // returns true

// 用...(展开操作符) 操作符将 Set 转换为 Array
console.log([...mySet]); // 与 myArray 完全一致
```

### 数组去重

```js
// Use to remove duplicate elements from the array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]);
// [2, 3, 4, 5, 6, 7, 32]
```

### `String` 相关

```js
let text = "India";

let mySet = new Set(text); // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size; // 5

// 大小写敏感 & duplicate ommision
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ jsxref('Map') }}
- {{ jsxref('WeakMap') }}
- {{ jsxref('WeakSet') }}
