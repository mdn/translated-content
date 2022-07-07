---
title: 右移 (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.right_shift
---
{{jsSidebar("Operators")}}

**右移操作符 (`>>`)** 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）。

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## 语法

```js
a >> b
```

## 描述

**右移操作符 (`>>`)** 是将一个操作数按指定移动的位数向右移动。
右边移出位将被丢弃，然后用最左边的这一位（符号位）填充左边的空位。
由于新的数字最左边位与之前数字的最左边位是相同值，故符号位（最左边的位）不会改变，因此被称为“符号位传播”（sign-propagating）.

例如 `9 >> 2` 得到 2:

```js
     9 (十进制): 00000000000000000000000000001001 (二进制)
                  --------------------------------
9 >> 2 (十进制): 00000000000000000000000000000010 (二进制) = 2 (十进制)
```

同理，`-9 >> 2` 得到 `-3`, 因为它的符号位得到保留：

```js
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

## 例子

### 使用右移操作

```js
 9 >> 2; //  2
-9 >> 2; // -3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的位运算](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [右移赋值操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
