---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---

这个 **`some()`** 方法检测 _TypedArray_ 的一些元素是否通过所提供函数的测试。这个方法和 {{jsxref("Array.prototype.some()")}} _相同。_ _TypedArray_ 是 [typed array types](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) 之一。

{{InteractiveExample("JavaScript Demo: TypedArray.some()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50]);
const positives = new Int8Array([10, 20, 30, 40, 50]);

console.log(int8.some(isNegative));
// Expected output: true

console.log(positives.some(isNegative));
// Expected output: false
```

## 语法

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 一个测试每个元素的函数，有 3 个参数：
    - `currentValue`
      - : 在 typed array 中，正在被测试的元素。
    - `index`
      - : 在 typed array 中，正在被测试元素的索引。
    - `array`
      - : 正在被调用的 typed array 本身。
- `thisArg`
  - : 可选的。`callback` 回调函数的 `this` 值 .

### 返回值

**`true`** 如果 callback 函数以任一数组元素为参数调用时，返回 {{Glossary("truthy")}}; 否则，**`false`**.

## 描述

对于 typed array 中的每个元素，`some`方法执行一次 `callback`，直到找到一个`callback` 返回 true 的元素。如果一个元素被找到，`some` 立即返回 `true`. 否则，`some` 返回 `false`.

`callback` 期望 3 个参数：元素的值，元素的索引，和被遍历的数组对象。

如果 `some` 提供 `thisArg`, 那么`thisArg`会作为 `callback` 调用时的`this 值`. 否则，`callback` 调用时的 `this` 是 `undefined`. `callback` 最终可观测的`this` 是根据 [确定函数 this 的通常规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 所确定的。

`some` 被调用不会改变 typed array .

### 示例

### 测试类型化数组所有元素的大小

以下示例测试 typed array 中的所有元素都大于 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.some` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
