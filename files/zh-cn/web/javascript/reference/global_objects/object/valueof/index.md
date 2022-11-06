---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回指定对象的原始值。

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## 语法

```js-nolint
valueOf()
```

### 返回值

指定对象的原始值。

> **备注：** 有时候[（一元的）加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#unary_plus)可以被用于 `valueOf` 的快捷操作，例如 `+new Number()`。参见[使用一元加运算符](#使用一元加运算符)。

## 描述

JavaScript 调用 `valueOf` 方法将对象转换为原始值。你很少需要自己调用 `valueOf` 方法；当遇到需要原始值的对象时，JavaScript 会自动调用它。

默认情况下，`valueOf` 方法由 {{jsxref("Object")}} 后代的每个对象继承。每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则 `valueOf` 将返回对象本身。

你可以在自己的代码中使用 `valueOf` 转换内置的对象为一个原始值。当你创建一个自定义的对象时，你可以重写 `Object.prototype.valueOf()` 以调用自定义的方法，而不是使用默认的 {{jsxref("Object")}} 的方法。

### 为自定义对象重写 valueOf

你可以创建一个要调用的函数来代替默认 `valueOf` 方法。你的函数不得接受任何参数。

假设你有一个对象类型是 `MyNumberType` 并且你想要为它创建一个 `valueOf` 方法。以下代码将用户定义的函数分配给对象的 `valueOf` 方法：

```js
MyNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

在上面的代码到位后，每当 `MyNumberType` 类型的对象被表示为原始值的上下文中使用时，JavaScript 会自动调用上面代码中定义的函数。

对象的 `valueOf` 方法通常由 JavaScript 自动调用，但是你也可以像下面一样自己调用它：

```js
myNumberType.valueOf()
```

> **备注：** 字符串上下文中的对象通过 {{jsxref("Object.toString", "toString()")}} 方法转换，这与使用 `valueOf` 将 {{jsxref("String")}} 对象转换为原始字符串不同。所有对象都能转换成一个 `"[object type]"` 这种格式的字符串。但是很多对象不能转换为数字、布尔或函数。

## 示例

### 在自定义类型中使用 valueOf

```js
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const myObj = new MyNumberType(4);
myObj + 3; // 7
```

### 使用一元加运算符

```js
+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
