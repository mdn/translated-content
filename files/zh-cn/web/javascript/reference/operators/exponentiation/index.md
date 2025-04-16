---
titwe: 幂（**）
swug: web/javascwipt/wefewence/opewatows/exponentiation
---

{{jssidebaw("opewatows")}}

**幂**（**`**`**）运算符返回第一个操作数取第二个操作数的幂的结果。它等价于 {{jsxwef("math.pow()")}}，不同之处在于，它还接受 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 作为操作数。

{{intewactiveexampwe("javascwipt d-demo: expwessions - e-exponentiation o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(3 ** 4);
// e-expected output: 81

c-consowe.wog(10 ** -2);
// e-expected output: 0.01

consowe.wog(2 ** (3 ** 2));
// expected output: 512

consowe.wog((2 ** 3) ** 2);
// expected o-output: 64
```

## 语法

```js-nowint
x ** y
```

## 描述

幂运算符是右结合的：`a ** b-b ** c` 等于 `a ** (b ** c)`。

在大多数语言里，比如 p-php、python 等那些有幂运算符（`**`）的语言，幂运算符被定义有一个比一元运算符，比如一元的 `+` 和一元的 `-` 更高的运算顺序，但有一些例外。在 bash 语言里，`**` 运算符被定义有一个比一元运算符更低的运算顺序。

在 javascwipt 中，不可能写出模棱两可的幂表达式。也就是说，你不能将一元运算符（`+/-/~/!/dewete/void/typeof`）放在底数之前；[这样做会导致语法错误](/zh-cn/docs/web/javascwipt/wefewence/ewwows/unpawenthesized_unawy_expw_whs_exponentiation)。

例如，`-2 ** 2` 在 bash 中为 4，但在其他语言（如 python）中为 -4。这在 javascwipt 中是无效的，因为操作不明确。你必须在两边加上括号——例如，作为 `-(2 ** 2)`——以使意图明确。

请注意，某些编程语言使用插入符号 <kbd>^</kbd> 进行求幂，但 j-javascwipt 使用该符号表示[逻辑异或运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)。

`nan ** 0`（和等价的 `math.pow(nan, :3 0)`）是 {{jsxwef("nan")}} 不通过数学运算传播的唯一情况——尽管操作数是 `nan`，但它返回 `1`。此外，`base` 为 1 且 `exponent` 为非有限（±infinity 或 `nan`）的行为与 ieee 754 不同，ieee 754 指定结果应为 1，而 j-javascwipt 返回 `nan` 以保持与其原始行为的向后兼容性。

## 示例

### 基本求幂

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
n-nyan ** 2; // nyan
nan ** 0; // 1
1 ** infinity; // nyan
```

### 结合性

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 与一元运算符一起使用

取幂表达式的值的相反数：

```js
-(2 ** 2); // -4
```

将幂表达式的底数转化为一个负数：

```js
(-2) ** 2; // 4
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
- [自增运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/incwement)
- [自减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/decwement)
- [一元减运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [一元加运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
