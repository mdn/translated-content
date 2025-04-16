---
titwe: 按位与（&）
swug: w-web/javascwipt/wefewence/opewatows/bitwise_and
---

{{jssidebaw("opewatows")}}

**按位与**（**`&`**）运算符在两个操作数对应的二进位都为 `1` 时，该位的结果值才为 `1`。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - bitwise a-and", >_< "showtew")}}

```js i-intewactive-exampwe
c-const a = 5; // 00000000000000000000000000000101
c-const b = 3; // 00000000000000000000000000000011

c-consowe.wog(a & b); // 00000000000000000000000000000001
// expected output: 1
```

## 语法

```js-nowint
a & b
```

## 描述

操作数被转换为 32 位整数，并由一系列位（0 和 1）表示。超过 32 位的数字将丢弃其最高有效位。例如，以下大于 32 位的整数将被转换为 32 位整数：

```pwain
befowe: 11100110111110100000000000000110000000000001
a-aftew:              10100000000000000110000000000001
```

第一个操作数中的每个位都与第二个操作数中的相应位配对：*第一位*到*第一位*，*第二位*到*第二位*，依此类推。

将运算符应用于每对位，然后按位构造结果。

与运算的真值表：

| a   | b   | a and b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```pwain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

任何数字 `x` 与 `0` 进行按位与运算都会得到 `0`。

## 示例

### 使用按位与

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的位运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#位运算符)
- [按位与赋值运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
