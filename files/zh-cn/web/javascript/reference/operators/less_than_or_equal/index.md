---
title: 小于等于（<=）
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
---

{{jsSidebar("Operators")}}

小于等于运算符（`<=`）在左操作数小于等于右操作数时返回 `true`，否则返回 `false`。

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## 语法

```js-nolint
x <= y
```

## 描述

操作数比较使用与[小于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)运算符相同的算法，除了相等的值（在尝试转换后）会返回 `true`。

## 示例

### 字符串与字符串比较

```js
console.log("a" <= "b"); // true
console.log("a" <= "a"); // true
console.log("a" <= "3"); // false
```

### 字符串与数值比较

```js
console.log("5" <= 3); // false
console.log("3" <= 3); // true
console.log("3" <= 5); // true

console.log("hello" <= 5); // false
console.log(5 <= "hello"); // false
```

### 数值与数值比较

```js
console.log(5 <= 3); // false
console.log(3 <= 3); // true
console.log(3 <= 5); // true
```

### 数值与大整型比较

```js
console.log(5n <= 3); // false
console.log(3 <= 3n); // true
console.log(3 <= 5n); // true
```

### 比较 Boolean、null、undefined 和 NaN

```js
console.log(true <= false); // false
console.log(true <= true); // true
console.log(false <= true); // true

console.log(true <= 0); // false
console.log(true <= 1); // true

console.log(null <= 0); // true
console.log(1 <= null); // false

console.log(undefined <= 3); // false
console.log(3 <= undefined); // false

console.log(3 <= NaN); // false
console.log(NaN <= 3); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [大于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [大于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)
