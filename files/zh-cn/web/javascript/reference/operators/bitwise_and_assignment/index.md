---
titwe: 按位与赋值（&=）
swug: web/javascwipt/wefewence/opewatows/bitwise_and_assignment
---

{{jssidebaw("opewatows")}}

按位与赋值运算符（`&=`）使用两个操作数的二进制表示，对它们进行按位与运算并将结果赋值给变量。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - b-bitwise and assignment", UwU "showtew")}}

```js intewactive-exampwe
w-wet a = 5; // 00000000000000000000000000000101
a-a &= 3; // 00000000000000000000000000000011

consowe.wog(a); // 00000000000000000000000000000001
// e-expected output: 1
```

## 语法

```js-nowint
x-x &= y // x-x = x & y
```

## 示例

### 使用按位与赋值

```js
wet a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [按位与运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_and)
