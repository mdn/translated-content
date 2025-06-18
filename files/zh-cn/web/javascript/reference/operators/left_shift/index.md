---
title: 左移 (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
---

{{jsSidebar("Operators")}}

**左移操作符 (`<<`)** 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

{{InteractiveExample("JavaScript Demo: Expressions - Left shift operator")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// Expected output: 20
```

## 语法

```plain
a << b
```

## 描述

左移操作符将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

例如， `9 << 2` 得出 36：

```js
     9 (十进制): 00000000000000000000000000001001 (二进制)
                 --------------------------------

9 << 2 (十进制): 00000000000000000000000000100100 (二进制) = 36 (十进制)
```

移动任意数字 `x` 至左边 `y` 位，得出 `x * 2 ** y`。
所以例如：`9 << 3` 等价于 `9 * 2³ = 9 * 8 = 72`。

## 示例

### 使用左移

```js
9 << 3; // 72

// 9 * 2³ = 9 * 8 = 72
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Bitwise operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#位运算符)
- [Left shift assignment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
