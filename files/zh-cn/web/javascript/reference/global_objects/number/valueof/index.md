---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef}}

{{jsxref("Number")}} 值的 **`valueOf()`** 方法返回该数字的值。

{{InteractiveExample("JavaScript Demo: Number.valueOf()")}}

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
```

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

一个表示指定 {{jsxref("Number")}} 对象的原始值的数字。

## 描述

该方法通常由 JavaScript 在内部调用，而非在 Web 代码中显式调用。

## 示例

### 使用 valueOf

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.valueOf()")}}
