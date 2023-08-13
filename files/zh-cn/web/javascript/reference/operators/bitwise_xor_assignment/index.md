---
title: 按位异或赋值 (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
---

{{jsSidebar("Operators")}}

按位异或赋值操作符 (`^=`) 使用二进制表示操作数，进行一次按位异或操作并赋值。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor-assignment.html")}}

## 语法

```plain
Operator: x ^= y
Meaning:  x  = x ^ y
```

## 示例

### 使用按位异或赋值

```js
let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// 6

let b = 5; // 00000000000000000000000000000101
b ^= 0; // 00000000000000000000000000000000

console.log(b); // 00000000000000000000000000000101
// 5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Assignment operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [Bitwise XOR operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
