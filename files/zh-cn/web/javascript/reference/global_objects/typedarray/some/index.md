---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---

{{JSRef}}

这个 **`some()`** 方法检测 _TypedArray_ 的一些元素是否通过所提供函数的测试。这个方法和 {{jsxref("Array.prototype.some()")}} _相同。_ _TypedArray_ 是 [typed array types](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 之一。

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

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

### Testing size of all typed array elements

以下示例测试 typed array 中的所有元素都大于 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

### Testing typed array elements using arrow functions

[Arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 提供更段的语法做相同的测试。

```js
new Uint8Array([2, 5, 8, 1, 4]).some((elem) => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some((elem) => elem > 10); // true
```

## Polyfill

由于没有名为 _TypedArray 的全局对象_, 必须在“as needed”的基础上进行填充。

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, "some", {
    value: Array.prototype.some,
  });
}
```

假如你需要支持的过时 JavaScript 引擎不支持[`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)，最好不要使用`Array.prototype`方法填充，因为你不能让它们不可枚举。

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
