---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 4e32a881872958fdf928d8b4d42189fba2e11459
---

{{jsxref("TypedArray")}} 实例的 **`every()`** 方法测试类型化数组的所有元素是否都能够通过由提供的函数实现的测试。其返回一个布尔值。这个方法的算法与 {{jsxref("Array.prototype.every()")}} 相同。

{{InteractiveExample("JavaScript Demo: TypedArray.every()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, -20, -30, -40, -50]);

console.log(int8.every(isNegative));
// Expected output: true
```

## 语法

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 用于测试类型化数组中每一个元素的函数。其应该返回[真值](/zh-CN/docs/Glossary/Truthy)来表示元素通过了测试，否则返回[假值](/zh-CN/docs/Glossary/Falsy)。会使用以下参数调用该函数：
    - `element`
      - : 类型化数组中当前要处理的元素。
    - `index`
      - : 当前要处理的元素在类型化数组中的下标。
    - `array`
      - : 调用 `every()` 的类型化数组。
- `thisArg` {{optional_inline}}
  - : 该值会作为执行 `callbackFn` 时的 `this` 值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

返回 `true`，除非 `callbackFn` 对类型化数组中的某个元素返回了{{Glossary("falsy", "假")}}值（在这种情况下，立即返回 `false`）。

## 描述

参见 {{jsxref("Array.prototype.every()")}} 以了解详情。该方法不是通用的，只能在类型化数组实例上调用。

## 示例

### 测试类型化数组所有元素的大小

下面的示例测试类型化数组所有元素是否都大于等于 10。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.every` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
