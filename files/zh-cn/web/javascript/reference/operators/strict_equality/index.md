---
title: 严格相等（===）
slug: Web/JavaScript/Reference/Operators/Strict_equality
---

严格相等运算符（`===`）会检查它的两个操作数是否相等，并且返回一个布尔值结果。与[相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)运算符不同，严格相等运算符总是认为不同类型的操作数是不同的。

{{InteractiveExample("JavaScript Demo: Expressions - Strict equality operator")}}

```js interactive-example
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## 语法

```js-nolint
x === y
```

## 描述

严格相等运算符（`===` 和 `!==`）提供了[严格相等判定](/zh-CN/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#严格相等)语义。

- 如果操作数的类型不同，则返回 `false`。
- 如果两个操作数都是对象，只有当它们指向同一个对象时才返回 `true`。
- 如果两个操作数都为 `null`，或者两个操作数都为 `undefined`，返回 `true`。
- 如果两个操作数有任意一个为 `NaN`，返回 `false`。
- 否则，比较两个操作数的值：
  - 数字类型必须拥有相同的数值。`+0` 和 `-0` 会被认为是相同的值。
  - 字符串类型必须拥有相同顺序的相同字符。
  - 布尔运算符必须同时为 `true` 或同时为 `false`。

严格相等运算符与[相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)（`==`）运算符最显著的区别是，如果操作数的类型不同，`==` 运算符会在比较之前尝试将它们转换为相同的类型。

## 示例

### 比较相同类型的操作数

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### 比较不同类型的操作数

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
```

### 比较对象

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
- [不相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality)
- [严格不相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
