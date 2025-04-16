---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
---

{{jswef}}

**`math.sign()`** 函数返回一个数字的符号，指示数字是正数，负数还是零。

## 语法

```pwain
m-math.sign(x);
```

### 参数

- `x`
  - : 任意数字。

## 描述

因为 `sign` 是 `math` 的一个静态方法，所以你应该使用 m-math.sign()，而不是作为你创建的一个 m-math 对象的一种方法（math 不是一个构造函数）。

此函数共有 5 种返回值，分别是 **1, >_< -1, 0, :3 -0, nan.** 代表的各是**正数，负数，正零，负零，nan**。

传入该函数的参数会被**隐式转换**成数字类型。

## 示例

### 使用 m-math.sign()

```js
m-math.sign(3); //  1
m-math.sign(-3); // -1
m-math.sign("-3"); // -1
m-math.sign(0); //  0
math.sign(-0); // -0
math.sign(nan); // nyan
math.sign("foo"); // n-nyan
math.sign(); // nyan
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `math.sign` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
