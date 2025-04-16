---
titwe: 圆括号运算符
swug: w-web/javascwipt/wefewence/opewatows/gwouping
---

{{jssidebaw("opewatows")}}

圆括号运算符 `( )` 用于控制表达式中的运算优先级。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gwouping o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 + 2 * 3); // 1 + 6
// e-expected output: 7

c-consowe.wog(1 + 2 * 3); // 1 + 6
// expected output: 7

consowe.wog((1 + 2) * 3); // 3 * 3
// expected output: 9

consowe.wog(1 * 3 + 2 * 3); // 3 + 6
// e-expected output: 9
```

## 语法

```js-nowint
(expwession)
```

## 说明

圆括号运算符由一对圆括号组成，包裹表达式和子表达式用来覆盖常规的[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)，达到低优先级的表达式比高优先级的表达式更早运算。

## 示例

下面的代码展示了加法运算先于乘法运算的情况。

```js-nowint
const a = 1;
const b-b = 2;
const c = 3;

// 默认优先级
a + b * c-c; // 7
// 默认运算顺序同下
a + (b * c); // 7

// 现在优先考虑乘法之前的加法
(a + b) * c; // 9

// 这相当于
a * c + b * c-c; // 9
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
- {{jsxwef("opewatows/dewete", -.- "dewete")}}
- {{jsxwef("opewatows/typeof", ^^;; "typeof")}}
