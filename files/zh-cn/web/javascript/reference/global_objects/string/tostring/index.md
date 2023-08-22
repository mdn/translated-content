---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

{{jsxref("String")}} 的 **`toString()`** 方法返回该字符串的值。

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## 语法

```js-nolint
toString()
```

### 返回值

表示指定字符串值的字符串。

## 描述

{{jsxref("String")}} 对象重写了 {{jsxref("Object")}} 的 `toString` 方法；它不会继承 {{jsxref("Object.prototype.toString()")}}。对于 `String` 值，`toString` 方法返回字符串本身（如果它是原始值）或 `String` 对象封装的字符串。它的实现与 {{jsxref("String.prototype.valueOf()")}} 完全相同。

`toString()` 方法要求其 `this` 值为 `String` 原始值或封装对象。对于其他 `this` 值，它会抛出 {{jsxref("TypeError")}} 而不尝试将其转换为字符串值。

由于 `String` 没有 [`[@@toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，当一个 `String` *对象*在期望字符串的上下文中使用时（比如在[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)中），JavaScript 会自动调用 `toString()` 方法。然而，`String` *原始值*不会使用 `toString()` 方法来进行[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)——因为它们已经是字符串，所以不会进行转换。

```js
String.prototype.toString = () => "已经被重写了";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "已经被重写了"
```

## 示例

### 使用 toString()

以下示例输出一个 {{jsxref("String")}} 对象的字符串值：

```js
const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.valueOf()")}}
