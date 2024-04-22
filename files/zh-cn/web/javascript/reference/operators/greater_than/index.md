---
title: 大于（>）
slug: Web/JavaScript/Reference/Operators/Greater_than
---

{{jsSidebar("Operators")}}

大于运算符（`>`）在左操作数大于右操作数时返回 `true`，否则返回 `false`。

{{EmbedInteractiveExample("pages/js/expressions-greater-than.html")}}

## 语法

```js-nolint
x > y
```

## 描述

操作数比较使用与[小于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)运算符相同的算法，只是两个操作数交换了。

## 示例

### 字符串与字符串比较

```js
console.log("a" > "b"); // false
console.log("a" > "a"); // false
console.log("a" > "3"); // true
```

### 字符串与数值比较

```js
console.log("5" > 3); // true
console.log("3" > 3); // false
console.log("3" > 5); // false

console.log("hello" > 5); // false
console.log(5 > "hello"); // false

console.log("5" > 3n); // true
console.log("3" > 5n); // false
```

### 数值与数值比较

```js
console.log(5 > 3); // true
console.log(3 > 3); // false
console.log(3 > 5); // false
```

### 数值与大整型比较

```js
console.log(5n > 3); // true
console.log(3 > 5n); // false
```

### 比较 Boolean、null、undefined 和 NaN

```js
console.log(true > false); // true
console.log(false > true); // false

console.log(true > 0); // true
console.log(true > 1); // false

console.log(null > 0); // false
console.log(1 > null); // true

console.log(undefined > 3); // false
console.log(3 > undefined); // false

console.log(3 > NaN); // false
console.log(NaN > 3); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [大于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)
- [小于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
