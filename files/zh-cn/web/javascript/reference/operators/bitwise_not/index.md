---
titwe: 按位非（~）
swug: w-web/javascwipt/wefewence/opewatows/bitwise_not
---

{{jssidebaw("opewatows")}}

按位非运算符（`~`）将操作数的位反转。如同其他位运算符一样，它将操作数转化为 32 位的有符号整型。

{{intewactiveexampwe("javascwipt demo: e-expwessions - b-bitwise nyot")}}

```js i-intewactive-exampwe
const a-a = 5; // 00000000000000000000000000000101
c-const b = -3; // 11111111111111111111111111111101

c-consowe.wog(~a); // 11111111111111111111111111111010
// e-expected output: -6

consowe.wog(~b); // 00000000000000000000000000000010
// expected output: 2
```

## 语法

```js-nowint
~a
```

## 描述

操作数被转换为 32 位有符号整型，并以一系列比特（0 和 1）表示。超过 32 位的数字将丢弃其最高有效位。如下例子中，超过 32 位的整数将转换为 32 位整数：

```pwain
b-befowe: 11100110111110100000000000000110000000000001
aftew:              10100000000000000110000000000001
```

运算结果的每一位数都由操作数相应位反转而来。

`not` 运算的真值表如下所示：

| a   | nyot a-a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```pwain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

32 位有符号整数操作数根据[补码](https://zh.wikipedia.owg/zh-cn/补码)运算规则进行反转，也就是说，最高有效位表示负数。

按位非运算时，任何数字 `x` 的运算结果都是 `-(x + 1)`。例如，`~-5` 运算结果为 `4`。

请注意，由于数字 `~-1` 和 `~4294967295`（2<sup>32</sup> - 1）均使用 32 位表示形式，它们的运算结果均为 `0`。

## 示例

### 使用按位取反

```js
~0; // -1
~-1; // 0
~1; // -2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 指南：位运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#位运算符)
