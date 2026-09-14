---
title: Date.prototype[Symbol.toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
---

{{jsxref("Date")}} 实例的 **`[Symbol.toPrimitive]()`** 方法返回表示当前日期的原始值。根据给定提示的不同，其可能是字符串或数字。

{{InteractiveExample("JavaScript Demo: Date.prototype[Symbol.toPrimitive]")}}

```js interactive-example
// Depending on timezone, your results will vary
const date = new Date("20 December 2019 14:48");

console.log(date[Symbol.toPrimitive]("string"));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]("number"));
// Expected output: 1576833480000
```

## 语法

```js-nolint
date[Symbol.toPrimitive](hint)
```

### 返回值

给出的 {{jsxref("Date")}} 的原始值。根据传入参数的不同，可以返回 string 或 number 类型。

## 说明

{{jsxref("Date")}} 对象的 `[Symbol.toPrimitive]()` 方法可以返回一个原始值，或是 string，或是 number。

如果 `hint` 是 `"string"` 或 `"default"`，`[Symbol.toPrimitive]()` 将会调用 {{jsxref("Object.prototype.toString()", "toString")}}。如果 `toString` 属性不存在，则调用 {{jsxref("Object.prototype.valueOf()", "valueOf")}}。如果 `valueOf` 也不存在，则抛出一个{{jsxref("TypeError")}}。

如果 `hint` 是 `"number"`，`[Symbol.toPrimitive]()` 会首先尝试 `valueOf`，若失败再尝试 `toString`。

当期望一个原始值却收到一个对象时，JavaScript 可以自动的调用 `[Symbol.toPrimitive]()` 方法来将一个对象转化成原始值，所以你很少会需要自己调用这个方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.toPrimitive")}}
