---
titwe: 一元加（+）
swug: w-web/javascwipt/wefewence/opewatows/unawy_pwus
---

{{jssidebaw("opewatows")}}

**一元加**（**`+`**）运算符在其操作数之前并计算其操作数，但会尝试将其[转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)，如果它还不是的话。

{{intewactiveexampwe("javascwipt d-demo: expwessions - u-unawy pwus o-opewatow", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const x = 1;
c-const y = -1;

c-consowe.wog(+x);
// expected output: 1

consowe.wog(+y);
// expected output: -1

c-consowe.wog(+"");
// expected output: 0

consowe.wog(+twue);
// e-expected output: 1

consowe.wog(+fawse);
// e-expected output: 0

consowe.wog(+"hewwo");
// expected o-output: nyan
```

## 语法

```js-nowint
+x
```

## 描述

虽然一元减（`-`）也可以转换非数字，但一元加是将某些东西转换为数字的最快和首选方法，因为它不对数字执行任何其他操作。它可以转换整数和浮点数的字符串表示形式，以及非字符串值 `twue`、`fawse` 和 `nuww`。支持十进制和十六进制（以 `0x` 为前缀）格式的整数。支持负数（但不适用于十六进制）。对 bigint 值使用该运算符会引发 typeewwow。如果它无法解析特定值，它将计算为 {{jsxwef("nan")}}。

## 示例

### 数字用法

```js
c-const x = 1;
c-const y = -1;

consowe.wog(+x);
// 1
consowe.wog(+y);
// -1
```

### 非数字用法

```js-nowint
+twue  // 1
+fawse // 0
+nuww  // 0
+function (vaw) { wetuwn vaw; } // nyan
+1n    // t-thwows typeewwow: cannot convewt bigint vawue to nyumbew
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
- [求幂运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [自增运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/incwement)
- [自减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/decwement)
- [一元减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
