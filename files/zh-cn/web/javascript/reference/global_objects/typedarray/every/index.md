---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
---

{{JSRef}}

**`every()`** 方法测试类型化数组的所有元素是否都能够通过由提供函数实现的测试。这个方法的算法与 {{jsxref("Array.prototype.every()")}}相同。_TypedArray_ 是这里的 [类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 之一。

## 语法

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 用于测试每个元素的函数，接受三个参数：
    - `currentValue`
      - : 要处理的类型化数组的当前元素。
    - `index`
      - : 要处理的当前元素在类型化数组中的下标
    - `array`
      - : every 在其上调用的类型化数组
- `thisArg`
  - : 可选，执行 `callback` 时的 `this` 值。

### 返回值

如果函数对数组每个元素返回 {{Glossary("truthy")}} ，则为**`true`**，否则为 **`false`**。

## 描述

`every` 方法为类型化数组中的每个元素执行一次 `callback` 函数，直到它找到一个使 `callback` 返回 _false_（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

`callback` 以三个参数调用：元素的值，元素索引，以及要遍历的数组对象。

如果将`thisArg`参数提供给`every`，它会在调用时传递给`callback`，作为它的 `this`值。否则，会传递`undefined` 作为它的`this` 值。 `callback`最终观测到的`this`值由 [用于决定函数可见的`this`值的一般规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)来决定。

`every` 不修改在其上调用的类型化数组。

## 示例

### 测试类型化数组所有元素的大小

下面的示例测试了类型化数组所有元素是否大于 10。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

### 使用箭头函数测试类型化数组的元素

[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)为相同测试提供了更短的语法。

```js
new Uint8Array([12, 5, 8, 130, 44]).every((elem) => elem >= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every((elem) => elem >= 10); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
