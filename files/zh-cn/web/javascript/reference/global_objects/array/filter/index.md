---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---
{{JSRef}}

**`filter()`** 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## 语法

```plain
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 参数

- `callback`

  - : 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：

    - `element`
      - : 数组中当前正在处理的元素。
    - `index`{{optional_inline}}
      - : 正在处理的元素在数组中的索引。
    - `array`{{optional_inline}}
      - : 调用了 `filter` 的数组本身。

- `thisArg`{{optional_inline}}
  - : 执行 `callback` 时，用于 `this` 的值。

### 返回值

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

## 描述

`filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 true 或[等价于 true 的值](/zh-CN/docs/Glossary/Truthy)的元素创建一个新数组。`callback` 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 `callback` 测试的元素会被跳过，不会被包含在新数组中。

`callback` 被调用时传入三个参数：

1. 元素的值
2. 元素的索引
3. 被遍历的数组本身

如果为 `filter` 提供一个 `thisArg` 参数，则它会被作为 `callback` 被调用时的 `this` 值。否则，`callback` 的 `this` 值在非严格模式下将是全局对象，严格模式下为 `undefined`。`callback` 函数最终观察到的 `this` 值是根据[通常函数所看到的 "this"的规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)确定的。

`filter` 不会改变原数组，它返回过滤后的新数组。

`filter` 遍历的元素范围在第一次调用 `callback` 之前就已经确定了。在调用 `filter` 之后被添加到数组中的元素不会被 `filter` 遍历到。如果已经存在的元素被改变了，则他们传入 `callback` 的值是 `filter` 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

## 示例

### 筛选排除所有较小的值

下例使用 `filter` 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### 过滤 JSON 中的无效条目

以下示例使用 `filter()` 创建具有非零 `id` 的元素的 json。

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

### 在数组中搜索

下例使用 `filter()` 根据搜索条件来过滤数组内容。

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

#### ES2015 实现

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

## Polyfill

`filter` 被添加到 ECMA-262 标准第 5 版中，因此在某些实现环境中不被支持。可以把下面的代码插入到脚本的开头来解决此问题，该代码允许在那些没有原生支持 `filter` 的实现环境中使用它。该算法是 ECMA-262 第 5 版中指定的算法，假定 `fn.call` 等价于 {{jsxref("Function.prototype.call")}} 的初始值，且 {{jsxref("Array.prototype.push")}} 拥有它的初始值。

```js
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
