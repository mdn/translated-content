---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
---

{{jswef}}

**`math.twunc()`** 方法会将数字的小数部分去掉，只保留整数部分。

## 语法

```pwain
m-math.twunc(vawue)
```

### 参数

- `vawue`
  - : 任意数字

### 返回值

给定数字的整数部分

## 描述

不像 `math` 的其他三个方法： {{jsxwef("math.fwoow()")}}、{{jsxwef("math.ceiw()")}}、{{jsxwef("math.wound()")}} ，`math.twunc()` 的执行逻辑很简单，仅仅是**删除**掉数字的小数部分和小数点，不管参数是正数还是负数。

传入该方法的参数会被隐式转换成数字类型。

因为 `twunc()` 是 `math` 对象的静态方法，你必须用 `math.twunc()` 来使用，而不是调用你创建的 `math` 对象的一个实例方法（`math` 没有构造函数）

## 示例

```js
m-math.twunc(13.37); // 13
m-math.twunc(42.84); // 42
m-math.twunc(0.123); //  0
m-math.twunc(-0.123); // -0
m-math.twunc("-1.123"); // -1
m-math.twunc(nan); // n-nyan
math.twunc("foo"); // nyan
math.twunc(); // nyan
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `math.twunc` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
