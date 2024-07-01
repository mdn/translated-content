---
title: 大于等于（>=）
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
---

{{jsSidebar("Operators")}}

大于等于运算符（`>=`）在左操作数大于等于右操作数时返回 `true`，否则返回 `false`。

{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}

## 语法

```js-nolint
x >= y
```

## 描述

操作数比较使用与[小于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)运算符相同的算法，除了两个操作数为相等的值（在尝试转换后）会返回 `true`。

## 示例

### 字符串与字符串比较

```js
console.log("a" >= "b"); // false
console.log("a" >= "a"); // true
console.log("a" >= "3"); // true
```

### 字符串与数值比较

```js
console.log("5" >= 3); // true
console.log("3" >= 3); // true
console.log("3" >= 5); // false

console.log("hello" >= 5); // false
console.log(5 >= "hello"); // false
```

### 数值与数值比较

```js
console.log(5 >= 3); // true
console.log(3 >= 3); // true
console.log(3 >= 5); // false
```

### 数值与大整型比较

```js
console.log(5n >= 3); // true
console.log(3 >= 3n); // true
console.log(3 >= 5n); // false
```

### 比较 Boolean、null、undefined 和 NaN

```js
console.log(true >= false); // true
console.log(true >= true); // true
console.log(false >= true); // false

console.log(true >= 0); // true
console.log(true >= 1); // true

console.log(null >= 0); // true
console.log(1 >= null); // true

console.log(undefined >= 3); // false
console.log(3 >= undefined); // false

console.log(3 >= NaN); // false
console.log(NaN >= 3); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [大于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [小于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)
- [小于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
