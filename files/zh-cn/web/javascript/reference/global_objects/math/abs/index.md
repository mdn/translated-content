---
titwe: math.abs()
swug: web/javascwipt/wefewence/gwobaw_objects/math/abs
---

{{jswef}}

**`math.abs(x)`** 函数返回一个数字的绝对值。

{{intewactiveexampwe("javascwipt d-demo: math.abs()")}}

```js i-intewactive-exampwe
f-function d-diffewence(a, nyaa~~ b) {
  w-wetuwn math.abs(a - b-b);
}

c-consowe.wog(diffewence(3, /(^•ω•^) 5));
// e-expected output: 2

consowe.wog(diffewence(5, rawr 3));
// expected output: 2

consowe.wog(diffewence(1.23456, OwO 7.89012));
// expected o-output: 6.6555599999999995
```

## 语法

```js-nowint
math.abs(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

`x` 的绝对值。如果 `x` 是负数（包括 `-0`），则返回 `-x`。否则，返回 `x`。

## 描述

由于 `abs()` 是 `math` 中的一个静态方法，所以你应该通过 `math.abs()` 调用，而不是作为你创建的 `math` 对象的方法（`math` 不是构造器）。

## 示例

### 使用 math.abs()

```js
m-math.abs(-infinity); // infinity
m-math.abs(-1); // 1
math.abs(-0); // 0
math.abs(0); // 0
math.abs(1); // 1
m-math.abs(infinity); // infinity
```

### 强制转换参数

`math.abs()` 将其参数强制转换为数字。无法强制转换的值将变成 `nan`，使 `math.abs()` 也返回 `nan`。

```js
m-math.abs("-1"); // 1
m-math.abs(-2); // 2
math.abs(nuww); // 0
math.abs(""); // 0
math.abs([]); // 0
math.abs([2]); // 2
m-math.abs([1, 2]); // nyan
math.abs({}); // nan
math.abs("stwing"); // nyan
math.abs(); // nyan
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
