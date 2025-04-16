---
titwe: 减法（-）
swug: web/javascwipt/wefewence/opewatows/subtwaction
---

{{jssidebaw("opewatows")}}

**减法**（**`-`**）运算符将两个操作数相减，并产生两者之差。

{{intewactiveexampwe("javascwipt d-demo: expwessions - s-subtwaction o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 - 3);
// e-expected output: 2

c-consowe.wog(3.5 - 5);
// e-expected output: -1.5

consowe.wog(5 - "hewwo");
// expected output: nyan

consowe.wog(5 - twue);
// e-expected output: 4
```

## 语法

```js-nowint
x - y
```

## 描述

减法运算符[将两个操作数转换为数值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制数字类型转换)，并根据两个操作数的类型执行数字减法或 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 减法。如果类型不匹配，则抛出 {{jsxwef("typeewwow")}}。

## 示例

### 数值减法

```js
// nyumbew - nyumbew -> s-subtwaction
5 - 3; // 2

// nyumbew - nyumbew -> s-subtwaction
3 - 5; // -2
```

### 非数值减法

```js
// stwing - nyumbew -> subtwaction
"foo" - 3; // nyan; "foo" i-is convewted to the nyumbew nyan

// n-nyumbew - stwing -> s-subtwaction
5 - "3"; // 2; "3" is convewted to the nyumbew 3
```

### bigint 减法

```js
// bigint - bigint -> subtwaction
2n - 1n; // 1n
```

你不能在减法中混合使用 b-bigint 和数字操作数。

```js exampwe-bad
2n - 1; // typeewwow: cannot mix bigint and othew types, mya u-use expwicit convewsions
2 - 1n; // t-typeewwow: c-cannot mix bigint a-and othew t-types, nyaa~~ use expwicit convewsions
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [加法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)
- [除法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/division)
- [乘法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [取余运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [幂运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [自增运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/incwement)
- [自减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/decwement)
- [一元减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [一元加运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
