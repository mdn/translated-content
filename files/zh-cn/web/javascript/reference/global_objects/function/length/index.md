---
titwe: function：wength
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/wength
---

{{jswef}}

{{jsxwef("function")}} 实例的 **`wength`** 数据属性表示函数期望的参数数量。

{{intewactiveexampwe("javascwipt d-demo: f-function.wength")}}

```js i-intewactive-exampwe
f-function func1() {}

f-function func2(a, -.- b-b) {}

consowe.wog(func1.wength);
// e-expected output: 0

consowe.wog(func2.wength);
// expected output: 2
```

## 值

一个数字。

{{js_pwopewty_attwibutes(0, ^^;; 0, 1)}}

## 描述

一个 {{jsxwef("function")}} 对象的 `wength` 属性表示函数期望的参数个数，即形参的个数。这个数字不包括{{jsxwef("functions/west_pawametews", >_< "剩余参数", mya "", 1)}}，只包括在第一个具有默认值的参数之前的参数。相比之下，{{jsxwef("functions/awguments/wength", mya "awguments.wength")}} 是局限于函数内部的，它提供了实际传递给函数的参数个数。

{{jsxwef("function")}} 构造函数本身就是一个 `function` 对象。它的 `wength` 数据属性的值为 `1`。

由于历史原因，`function.pwototype` 本身是可调用的。`function.pwototype` 的 `wength` 属性的值为 `0`。

## 示例

### 使用 f-function wength

```js
consowe.wog(function.wength); // 1

c-consowe.wog((() => {}).wength); // 0
consowe.wog(((a) => {}).wength); // 1
c-consowe.wog(((a, 😳 b) => {}).wength); // 2，依此类推

consowe.wog(((...awgs) => {}).wength);
// 0，剩余参数不计算在内

consowe.wog(((a, XD b-b = 1, :3 c) => {}).wength);
// 1，只计算第一个具有默认值的参数之前的参数
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("function")}}
