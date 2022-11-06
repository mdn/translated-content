---
title: 按位与 (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
original_slug: Web/JavaScript/Reference/Operators/按位与
---

{{jsSidebar("Operators")}}

按位与运算符 (`&`) 在两个操作数对应的二进位都为 `1` 时，该位的结果值才为 `1`，否则为 `0`。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html")}}

## 语法

```plain
a & b
```

## 描述

操作数被转换为 32 位整数，并由一系列位（0 和 1）表示。超过 32 位的数字将丢弃其最高有效位。例如，以下大于 32 位的整数将被转换为 32 位整数：

```js
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

第一个操作数中的每个位都与第二个操作数中的相应位配对：第一位到第一位，第二位到第二位，依此类推。

将运算符应用于每对位，然后按位构造结果。

与运算的真值表：

| a   | b   | a AND b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```js
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------

14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

将任何数字`x`与`0`进行按位与运算将得出`0`。

## 示例

### 使用按位与

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [Bitwise operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise)
- [Bitwise AND assignment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
