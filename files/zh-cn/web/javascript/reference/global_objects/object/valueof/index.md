---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

{{jsxref("Object")}} 实例的 **`valueOf()`** 方法将 `this` 值[转换成对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#对象强制转换)。该方法旨在被派生对象重写，以实现自定义[类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)逻辑。

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7
```

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

转换成对象的 `this` 值。

> [!NOTE]
> 为了使 `valueOf` 在类型转换过程中有用，它必须返回一个基本类型值。因为所有的基本类型都有自己的 `valueOf()` 方法，所以调用 `aPrimitiveValue.valueOf()` 通常不会调用 `Object.prototype.valueOf()`。

## 描述

JavaScript 调用 `valueOf` 方法来[将对象转换成基本类型值](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)。你很少需要自己调用 `valueOf` 方法；当遇到需要基本类型值的对象时，JavaScript 会自动的调用该方法。

[强制数字类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制数字类型转换)和[强制基本类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)优先会调用该方法，而[强制字符串转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#强制字符串转换)会优先调用 `toString()`，并且 `toString()` 很可能返回字符串值（甚至对于 {{jsxref("Object.prototype.toString()")}} 基本实现也是如此），因此在这种情况下不会调用 `valueOf()`。

从 `Object.prototype` 继承的所有对象（即，除了[`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)之外的所有对象）都继承了 `toString()` 方法。`Object.prototype.valueOf()` 的基本实现被有意设计为无用的：返回一个对象；其返回值将永远不会被任何[基本类型转换算法](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)使用。许多内置对象重写此方法以返回适当的基本类型值。创建自定义对象时，可以重写 `valueOf()` 来调用自定义方法，以便将自定义对象转换为基本类型值。通常，`valueOf()` 用于返回对对象具有意义的值——与 `toString()` 不同，它不需要字符串。或者，你可以添加一个 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，该方法允许对转换过程进行更多控制，并且对于任何类型的转换，始终优先于 `valueOf` 或 `toString`。

## 示例

### 使用 valueOf()

基本的 `valueOf()` 方法返回 `this` 值本身，如果尚未转换为对象，则转换成对象。因此，任何基本类型转换算法都不会使用它的返回值。

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive']（一个包装对象）
```

### 重写自定义对象的 valueOf

你可以创建一个要调用的函数来代替默认的 `valueOf` 方法。你的函数不应该接受任何参数，因为在类型转换期间调用它时不会传递任何参数。

例如，你可以将 `valueOf` 方法添加到自定义类 `Box` 中。

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

有了前面的代码，任何时候在将 `Box` 类型的对象表示为基本类型值（但不是特定的字符串）的上下文中使用时，JavaScript 都会自动调用前面代码中定义的函数。

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

对象的 `valueOf` 方法通常由 JavaScript 调用，但你可以按照如下方式自己调用它：

```js
box.valueOf();
```

### 对对象使用一元加运算符

[一元加（+）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)对其操作数进行[强制数字转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#强制数字转换)，对于大多数没有 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 的对象，这意味着调用其 `valueOf()`。但是，如果对象没有自定义的 `valueOf()` 方法，则基本实现将导致忽略 `valueOf()`，而使用 `toString()` 的返回值。

```js
+new Date(); // 当前时间戳；与 new Date().getTime() 相同
+{}; // NaN（toString() 返回 "[object Object]"）
+[]; // 0（toString() 返回一个空的字符串列表）
+[1]; // 1（toString() 返回 "1"）
+[1, 2]; // NaN（toString() 返回 "1,2"）
+new Set([1]); // NaN（toString() 返回 "[object Set]"）
+{ valueOf: () => 42 }; // 42
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
