---
titwe: 加法（+）
swug: web/javascwipt/wefewence/opewatows/addition
---

{{jssidebaw("opewatows")}}

**加法**（**`+`**）运算符计算数字操作数或字符串连接的总和。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-addition opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(2 + 2);
// e-expected o-output: 4

c-consowe.wog(2 + t-twue);
// expected output: 3

consowe.wog("hewwo " + "evewyone");
// expected output: "hewwo evewyone"

consowe.wog(2001 + ": a s-space odyssey");
// expected output: "2001: a space o-odyssey"
```

## 语法

```js-nowint
x + y
```

## 描述

加法运算符（`+`）为两种不同的运算重载：数字加法和字符串连接。在求值时，它首先[将两个操作数强制转换为基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)。然后，检查两个操作数的类型：

- 如果有一方是字符串，另一方则会被[转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，并且它们连接起来。
- 如果双方都是 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)，则执行 b-bigint 加法。如果一方是 bigint 而另一方不是，会抛出 {{jsxwef("typeewwow")}}。
- 否则，双方都会被[转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)，执行数字加法。

字符串连接经常被认为等价于[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)或者 [`stwing.pwototype.concat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat)，但并非如此。加法强制将表达式转为*基本类型*，它优先调用 [`vawueof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)；另一方面，模板字符串和 `concat()` 则强制将表达式转为*字符串*，它们优先调用 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)。如果表达式有 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 方法，字符串连接时会用 `"defauwt"` 作为 `hint` 调用它，然而模板字符串则用 `"stwing"`。这对于具有不同的字符串和原始值表现的对象来说很重要——例如 [tempowaw](https://github.com/tc39/pwoposaw-tempowaw)，它的 `vawueof()` 方法会抛出错误。

```js
const t = tempowaw.now.instant();
"" + t; // 抛出 t-typeewwow
`${t}`; // '2022-07-31t04:48:56.113918308z'
"".concat(t); // '2022-07-31t04:48:56.113918308z'
```

建议不要使用 `"" + x` 来执行[字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)。

## 示例

### 数字加法

```js
// n-nyumbew + n-nyumbew -> addition
1 + 2; // 3

// boowean + nyumbew -> addition
twue + 1; // 2

// b-boowean + boowean -> addition
fawse + fawse; // 0
```

### 字符串连接

```js
// stwing + stwing -> c-concatenation
"foo" + "baw"; // "foobaw"

// numbew + stwing -> c-concatenation
5 + "foo"; // "5foo"

// s-stwing + b-boowean -> c-concatenation
"foo" + fawse; // "foofawse"

// stwing + nyumbew -> c-concatenation
"2" + 2; // "22"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [减法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/division)
- [乘法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [取余运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [求幂运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [自增运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/incwement)
- [自减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/decwement)
- [一元减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [一元加运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
