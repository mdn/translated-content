---
title: Strict equality (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
---
{{jsSidebar("Operators")}}

全等运算符 (===) 会检查它的两个操作数是否相等，并且返回一个布尔值结果。与相等运算符不同，全等运算符总是认为不同类型的操作数是不同的。

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## 语法

```plain
x === y
```

## 描述

全等运算符（`===`和 `!==`）使用[全等比较算法](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)来比较两个操作数。

- 如果操作数的类型不同，则返回 `false`。
- 如果两个操作数都是对象，只有当它们指向同一个对象时才返回 `true`。
- 如果两个操作数都为 `null`，或者两个操作数都为 `undefined`，返回 `true`。
- 如果两个操作数有任意一个为 `NaN`，返回 `false`。
- 否则，比较两个操作数的值：

  - 数字类型必须拥有相同的数值。`+0` 和 `-0` 会被认为是相同的值。
  - 字符串类型必须拥有相同顺序的相同字符。
  - 布尔运算符必须同时为 `true` 或同时为 `false`。

全等运算符与[相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)（`==`）最显著的区别是，如果操作数的类型不同，`==` 运算符会在比较之前尝试将它们转换为相同的类型。

## 例子

### 比较相同类型的操作数

```js
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true
```

### 比较不同类型的操作数

```js
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false
```

### 比较对象

```js
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
