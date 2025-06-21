---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef}}

{{jsxref("Function")}} 实例的 **`apply()`** 方法会以给定的 `this` 值和作为数组（或[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）提供的 `arguments` 调用该函数。

{{InteractiveExample("JavaScript Demo: Function.apply()")}}

```js interactive-example
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
```

## 语法

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### 参数

- `thisArg`
  - : 调用 `func` 时提供的 `this` 值。如果函数不处于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)，则 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 会被替换为全局对象，原始值会被转换为对象。
- `argsArray` {{optional_inline}}
  - : 一个类数组对象，用于指定调用 `func` 时的参数，或者如果不需要向函数提供参数，则为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

### 返回值

使用指定的 `this` 值和参数调用函数的结果。

## 描述

> [!NOTE]
> 这个函数与 {{jsxref("Function/call", "call()")}} 几乎完全相同，只是函数参数在 `call()` 中逐个作为列表传递，而在 `apply()` 中它们会组合在一个对象中，通常是一个数组——例如，`func.call(this, "eat", "bananas")` 与 `func.apply(this, ["eat", "bananas"])`。

通常情况下，在调用函数时，函数内部的 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值是访问该函数的对象。使用 `apply()`，你可以在调用现有函数时将任意值分配给 `this`，而无需先将函数作为属性附加到对象上。这使得你可以将一个对象的方法用作通用的实用函数。

你还可以使用任何类数组对象作为第二个参数。实际上，这意味着它需要具有 `length` 属性，并且整数（“索引”）属性的范围在 `(0..length - 1)` 之间。例如，你可以使用一个 {{domxref("NodeList")}}，或者像 `{ 'length': 2, '0': 'eat', '1': 'bananas' }` 这样的自定义对象。你还可以使用 {{jsxref("Functions/arguments", "arguments")}}，例如：

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

使用[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)和参数的[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)，可以重写为：

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

一般而言，`fn.apply(null, args)` 等同于使用参数展开语法的 `fn(...args)`，只是在前者的情况下，`args` 期望是类数组对象，而在后者的情况下，`args` 期望是[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)。

> [!WARNING]
> 不要使用 `apply()` 进行构造函数链式调用（例如，实现继承）。这会将构造函数作为普通函数调用，这意味着 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 是 `undefined`，从而类会抛出错误，因为它们不能在没有 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 的情况下调用。请改用 {{jsxref("Reflect.construct()")}} 或 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)。

## 示例

### 用 apply() 将数组各项添加到另一个数组

你可以使用 {{jsxref("Array.prototype.push()")}} 方法将元素追加到数组中。因为 `push()` 接受可变数量的参数，所以你也可以一次性添加多个元素。但是，如果你将一个数组传递给 `push()`，它实际上会将该数组作为单个元素添加，而不是逐个添加元素，导致最终得到一个数组内嵌的数组。另一方面，{{jsxref("Array.prototype.concat()")}} 在这种情况下具有期望的行为，但它不会将元素追加到*已有*数组中，而是创建并返回一个新数组。

在这种情况下，你可以使用 `apply` 隐式地将一个数组作为一系列参数展开。

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

使用展开语法可以达到相同的效果。

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### 使用 apply() 和内置函数

巧妙地使用 `apply()` 可以让你在某些情况下使用内置函数来完成一些任务，而这些任务通常需要手动遍历集合（或使用展开语法）。

例如，我们可以使用 {{jsxref("Math.max()")}} 和 {{jsxref("Math.min()")}} 来找出数组中的最大值和最小值。

```js
// 数组中的最小/最大值
const numbers = [5, 6, 2, 3, 7];

// 用 apply 调用 Math.min/Math.max
let max = Math.max.apply(null, numbers);
// 这等价于 Math.max(numbers[0], …) 或 Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// 与基于简单循环的算法相比
max = -Infinity;
min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

但要注意：通过使用 `apply()`（或展开语法）来处理任意长的参数列表，你可能会超过 JavaScript 引擎的参数长度限制。

调用具有太多参数的函数（即超过数万个参数）的后果是未指定的，并且在不同的引擎中会有所不同。（JavaScriptCore 引擎[将参数限制硬编码为 65536](https://webkit.org/b/80797)。）大多数引擎会抛出异常；但并没有规范要求阻止其他行为，例如任意限制应用函数实际接收的参数数量。为了说明后一种情况：假设这样的引擎限制为四个参数（实际限制当然要高得多），那么在上面的示例中，传递给 `apply` 的参数将变为 `5, 6, 2, 3`，而不是完整的数组。

如果你的值数组可能会增长到数万个，可以使用混合策略：将数组的片段分批通过 `apply` 调用函数：

```js
function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(submin, min);
  }

  return min;
}

const min = minOfArray([5, 6, 2, 3, 7]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
