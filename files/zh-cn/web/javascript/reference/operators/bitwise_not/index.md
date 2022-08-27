---
title: 按位非 (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
---
{{jsSidebar("Operators")}}

按位非运算符（\~），反转操作数的位。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## 语法

```plain
~a
```

## 描述

操作数被转换为 32 位二进制表示（0 和 1）。超过 32 位的数字将丢弃其最高有效位。如下例子中，超过 32 位的整数转换为 32 位整数：

```js
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

第一个操作数中的每个位都与第二个操作数中的相应位配对：第一位到第一位，第二位到第二位，依此类推。

将运算符应用于每对位，然后按位构造结果。

非运算的真值表：

| a   | NOT a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```js
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

按位非运算时，任何数字 `x` 的运算结果都是 `-(x + 1)`。例如，`〜-5` 运算结果为 `4`。

Note that due to using 32-bit representation for numbers both `~-1` and `~4294967295` (2^32 - 1) results in `0`.

请注意，由于对数字`~-1`和`~4294967295` (2^32 - 1) 使用 32 位表示形式，结果均为 0。

## 例子

### 使用按位取反

```js
~0;  // -1
~-1; // 0
~1;  // -2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise)
