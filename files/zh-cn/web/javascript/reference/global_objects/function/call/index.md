---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{jsxref("Function")}} 实例的 **`call()`** 方法会以给定的 `this` 值和逐个提供的参数调用该函数。

{{InteractiveExample("JavaScript Demo: Function.call()")}}

```js interactive-example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"
```

## 语法

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### 参数

- `thisArg`
  - : 在调用 `func` 时要使用的 `this` 值。如果函数不在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 将被替换为全局对象，并且原始值将被转换为对象。
- `arg1, …, argN` {{optional_inline}}
  - : 函数的参数。

## 返回值

使用指定的 `this` 值和参数调用函数后的结果。

## 描述

> [!NOTE]
> 这个函数几乎与 {{jsxref("Function/apply", "apply()")}} 相同，只是函数的参数以列表的形式逐个传递给 `call()`，而在 `apply()` 中它们被组合在一个对象中，通常是一个数组——例如，`func.call(this, "eat", "bananas")` 与 `func.apply(this, ["eat", "bananas"])`。

通常，在调用函数时，函数内部的 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 值是访问该函数的对象。使用 `call()`，你可以在调用现有函数时将任意值分配给 `this`，而无需首先将函数附加到对象上作为属性。这样可以将一个对象的方法用作通用的实用函数。

> [!WARNING]
> 不要使用 `call()` 来链式调用构造函数（例如，实现继承）。这会将构造函数作为普通函数调用，这意味着 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 的值为 `undefined`，而类会抛出错误，因为它们不能在没有 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 的情况下被调用。请改用 {{jsxref("Reflect.construct()")}} 或 [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)。

## 示例

### 使用 call() 调用函数并指定 this 值

在下面的示例中，当我们调用 `greet` 时，`this` 的值将绑定到对象 `obj`，即使 `greet` 不是 `obj` 的方法。

```js
function greet() {
  console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}

const obj = {
  animal: "猫",
  sleepDuration: "12 到 16 小时",
};

greet.call(obj); // 猫 的睡眠时间一般在 12 到 16 小时 之间
```

### 使用 call() 在不指定第一个参数的情况下调用函数

如果省略第一个 `thisArg` 参数，则默认为 `undefined`。在非严格模式下，`this` 值将被替换为 {{jsxref("globalThis")}}（类似于全局对象）。

```js
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp 的值是 ${this.globProp}`);
}

display.call(); // 输出“globProp 的值是 Wisen”
```

在严格模式下，`this` 的值不会被替换，因此它保持为 `undefined`。

```js
"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp 的值时 ${this.globProp}`);
}

display.call(); // 抛出 TypeError: Cannot read the property of 'globProp' of undefined
```

### 将方法转换为实用函数

`call()` 几乎等同于普通函数调用，只是将 `this` 作为普通参数传入，而不是作为函数所在的对象值。这类似于通用的实用函数的工作方式：你可以使用 `map(array, callback)` 来代替 `array.map(callback)`，这样可以避免对 `Array.prototype` 进行修改，还可以将 `map` 用于不是数组的类数组对象（例如 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)）。

以 {{jsxref("Array.prototype.slice()")}} 为例，你想要将类数组对象转换为真正的数组。你可以创建一个类似这样的快捷方式：

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

请注意，你不能将 `slice.call` 保存并将其作为普通函数调用，因为 `call()` 方法也会读取它的 `this` 值，而这个值应该是它要调用的函数。在这种情况下，你可以使用 {{jsxref("Function/bind", "bind()")}} 来绑定 `call()` 的 `this` 值。在下面的代码片段中，`slice()` 是一个绑定了 `this` 值为 {{jsxref("Array.prototype.slice()")}} 的 {{jsxref("Function.prototype.call()")}} 的版本。这意味着额外的 `call()` 调用可以被省略：

```js
// 与前面示例中的“slice”相同
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Reflect.apply()")}}
- [展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [JavaScript 对象入门](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
