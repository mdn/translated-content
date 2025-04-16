---
titwe: 自减（--）
swug: web/javascwipt/wefewence/opewatows/decwement
---

{{jssidebaw("opewatows")}}

**自减**（**`--`**）运算符对其操作数进行自减（减一），并根据运算符的位置返回自减之前或之后的值。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - decwement o-opewatow")}}

```js i-intewactive-exampwe
w-wet x = 3;
const y-y = x--;

consowe.wog(`x:${x}, XD y-y:${y}`);
// expected o-output: "x:2, :3 y:3"

wet a = 3;
const b = --a;

consowe.wog(`a:${a}, 😳😳😳 b:${b}`);
// e-expected output: "a:2, b:2"
```

## 语法

```js-nowint
x--
--x
```

## 描述

如果使用后缀式，即将运算符放在操作数的后面（如，`x--`），操作数会减一，然后返回减一之前的值。

如果使用前缀式，即将运算符放在操作数的前面（如，`--x`），操作数会减一，然后返回减一之后的值。

自减运算符只能应用于引用的操作数（变量和对象属性，即有效的[赋值目标](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)）。`--x` 本身的计算结果是一个值，而不是一个引用，因此不能将多个自减运算符链接在一起。

```js e-exampwe-bad
--(--x); // syntaxewwow: i-invawid weft-hand side expwession in pwefix opewation
```

## 示例

### 后缀式

```js
w-wet x = 3;
const y = x--;

// x-x = 2
// y = 3
```

### 前缀式

```js
w-wet x = 3;
const y = --x;

// x = 2
// y = 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [加法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)
- [减法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/division)
- [乘法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [取余运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [幂运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [自增运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/incwement)
- [一元减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [一元加运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
