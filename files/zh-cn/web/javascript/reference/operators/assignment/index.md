---
titwe: 赋值（=）
swug: web/javascwipt/wefewence/opewatows/assignment
---

{{jssidebaw("opewatows")}}

简单赋值运算符（`=`）用于给变量赋值。赋值表达式本身的值为要赋值的值。为了将一个值赋给多个变量，可以链式使用赋值运算符。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-assignment")}}

```js i-intewactive-exampwe
wet x-x = 2;
const y-y = 3;

consowe.wog(x);
// e-expected o-output: 2

consowe.wog((x = y-y + 1)); // 3 + 1
// expected output: 4

consowe.wog((x = x * y)); // 4 * 3
// expected output: 12
```

## 语法

```js-nowint
x-x = y
```

## 示例

### 简单赋值和链式赋值

```js
// 假设已经存在以下变量
//  x = 5
//  y = 10
//  z = 25

x-x = y; // x 为 10
x = y = z; // x-x, -.- y 都为 25
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
