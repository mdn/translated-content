---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

{{jsxref("Object")}} 的 **`valueOf()`** 方法将 `this` 值转换[为一个对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)。此方法旨在用于自定义[类型转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)的逻辑时，重写派生类对象。

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

`this` 值，将其转换为一个对象。

> **备注：** 为了使 `valueOf` 在类型转换期间有用，它必须返回一个原始值。因为所有原始类型都有它们自己的 `valueOf()` 方法，调用 `aPrimitiveValue.valueOf()` 通常不会调用 `Object.prototype.valueOf()`。

## 描述

JavaScript 调用 `valueOf` 方法[将对象转换为一个原始值](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)。你很少需要自己去调用 `valueOf` 方法；当遇到需要原始值的对象时，JavaScript 会自己调用它。

该方法由[数字转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制数字类型转换)和[原始值转换](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)优先调用，但是[字符串转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)会优先调用 `toString()`，并且 `toString()` 非常可能返回一个字符串类型（即使原始实现了 {{jsxref("Object.prototype.toString()")}}），所以 `valueOf()` 在这种情况下通常不会被调用。

所有继承自 `Object.prototype` 的对象（当然，除了 [`null`-prototype 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)之外）都继承 `toString()` 方法。对于这些对象，`Object.prototype.valueOf()` 基本的实现是没有效果的：它返回对象自身，它的返回值将永远不会被任何[原始值转换算法](/zh-CN/docs/Web/JavaScript/Data_structures#强制类型转换)使用。许多内置对象返回一个适当的原始值覆盖这个方法。当你创建一个自定义对象，你可以调用一个自定义方法去覆盖 `valueOf()`，以至于你自定义的对象可以转换为一个原始值。总的来说，`valueOf()` 用于返回对象最有意义的值——与 `toString()` 不同，它不需要是字符串。或者，你可以增加一个 [`@@toPrimitive`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，该方法允许对转换过程有更多的控制，并且对于任意的类型转换，且总是优先于 `valueOf` 或 `toString`。

## 示例

### 使用 valueOf()

原始的 `valueOf()` 方法会返回 `this` 值本身，如果尚未转换为对象，则转换为对象。因此它的返回值将从不会被任何原始值转换算法使用。

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### 为自定义对象重写 valueOf

你可以创建一个要调用的函数来代替默认的 `valueOf` 方法。你的函数不应该传任何参数，因为它在类型转换期间调用时，不会传递任何参数。

例如，你可以增加一个 `valueOf` 方法到你自定义的 `Box` 类中。

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

有了前面的代码，每当 `Box` 类型的对象在表示为原始值（但不是字符串）的上下文中使用时，JavaScript 会自动调用之前代码中定义的函数。

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

对象的 `valueOf` 方法通常由 JavaScript 调用，但是你可以自己调用它，如下所示：

```js
box.valueOf();
```

### 在对象上使用一元加运算符

[一元加](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)对其操作数会执行[强制数字转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，对于大多数没有 [`@@toPrimitive`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 的对象，意味这调用它的 `valueOf()`。然而，如果对象没有一个自定义的 `valueOf()` 方法，基本的实现将会导致 `valueOf()` 被忽略，转而使用 `toString()` 的返回值。

```js
+new Date(); // the current timestamp; same as new Date().getTime()
+{}; // NaN (toString() returns "[object Object]")
+[]; // 0 (toString() returns an empty string list)
+[1]; // 1 (toString() returns "1")
+[1, 2]; // NaN (toString() returns "1,2")
+new Set([1]); // NaN (toString() returns "[object Set]")
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
