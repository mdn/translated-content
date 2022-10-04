---
title: 大于运算符 (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
---

{{jsSidebar("Operators")}}

当左边操作数大于右边的时候，大于 (`>`) 运算符返回`true`，否则返回`false`

{{EmbedInteractiveExample("pages/js/expressions-greater-than.html")}}

## 语法

```plain
x > y
```

## 描述

操作数之间按照 [Abstract Relational Comparison](https://tc39.es/ecma262/#sec-abstract-relational-comparison) 算法进行比较。进一步了解该算法，请参考 [小于](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than) 运算符的相关文档。

## 例子

### 字符串的比较

```js
console.log("a" > "b");        // false
console.log("a" > "a");        // false
console.log("a" > "3");        // true
```

### 字符串和数字的比较

```js
console.log("5" > 3);          // true
console.log("3" > 3);          // false
console.log("3" > 5);          // false

console.log("hello" > 5);      // false
console.log(5 > "hello");      // false

console.log("5" > 3n);         // true
console.log("3" > 5n);         // false
```

### 数字间的比较

```js
console.log(5 > 3);            // true
console.log(3 > 3);            // false
console.log(3 > 5);            // false
```

### 数字和 BigInt 数据的比较

```js
console.log(5n > 3);           // true
console.log(3 > 5n);           // false
```

### Boolean, null, undefined, NaN 的比较

```js
console.log(true > false);     // true
console.log(false > true);     // false

console.log(true > 0);         // true
console.log(true > 1);         // false

console.log(null > 0);         // false
console.log(1 > null);         // true

console.log(undefined > 3);    // false
console.log(3 > undefined);    // false

console.log(3 > NaN);          // false
console.log(NaN > 3);          // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Greater than or equal operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Less than or equal operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
