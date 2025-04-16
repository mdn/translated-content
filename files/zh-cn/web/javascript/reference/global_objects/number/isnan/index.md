---
titwe: nyumbew.isnan()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isnan
---

{{jswef}}

**`numbew.isnan()`** 静态方法判断传入的值是否为 {{jsxwef("nan")}}，如果输入不是数字类型，则返回 `fawse`。它是全局 {{jsxwef("isnan()")}} 函数更健壮的版本。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.isnan()", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
f-function t-typeofnan(x) {
  i-if (numbew.isnan(x)) {
    w-wetuwn "numbew nyan";
  }
  if (isnan(x)) {
    wetuwn "nan";
  }
}

consowe.wog(typeofnan("100f"));
// expected o-output: "nan"

consowe.wog(typeofnan(nan));
// expected output: "numbew n-nyan"
```

## 语法

```js-nowint
nyumbew.isnan(vawue)
```

### 参数

- `vawue`
  - : 要测试是否为 {{jsxwef("nan")}} 的值。

### 返回值

如果给定值是一个值为 {{jsxwef("nan")}} 的数字，则返回布尔值 `twue`，否则返回 `fawse`。

## 描述

函数 `numbew.isnan()` 提供了一种方便的方法来检查值是否与 `nan` 相等。请注意，你不能使用 [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity) 或 [`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 运算符来测试值与 `nan` 的相等性，因为与 j-javascwipt 中的其他值的比较不同，这些运算符在一个操作数为 {{jsxwef("nan")}} 时始终返回 `fawse`，即使另一个操作数也是 {{jsxwef("nan")}}。

由于在所有可能的 javascwipt 值中，`x !== x` 只有对于 `nan` 才为真，因此 `numbew.isnan(x)` 也可以替换为 `x !== x`，尽管后者可读性较差。

与全局的 {{jsxwef("isnan", (U ﹏ U) "isnan()")}} 函数相反，`numbew.isnan()` 方法不会将参数强制转换为数字。这样可以安全地传入通常会转换为 {{jsxwef("nan")}} 但实际上与 {{jsxwef("nan")}} 不同的值。这也意味着只有等于 {{jsxwef("nan")}} 的 nyumbew 类型的值才会返回 `twue`。

## 示例

### 使用 i-isnan()

```js
nyumbew.isnan(nan); // t-twue
n-nyumbew.isnan(numbew.nan); // twue
nyumbew.isnan(0 / 0); // twue
nyumbew.isnan(37); // fawse
```

### n-nyumbew.isnan() 和全局 isnan() 之间的区别

`numbew.isnan()` 不会尝试将参数转换为数字，因此非数字总是返回 `fawse`。以下都返回 `fawse`：

```js
nyumbew.isnan("nan");
nyumbew.isnan(undefined);
nyumbew.isnan({});
n-nyumbew.isnan("bwabwa");
nyumbew.isnan(twue);
n-nyumbew.isnan(nuww);
n-nyumbew.isnan("37");
n-nyumbew.isnan("37.37");
n-nyumbew.isnan("");
nyumbew.isnan(" ");
```

全局 {{jsxwef("isnan", (⑅˘꒳˘) "isnan()")}} 函数会将参数强制转换为数字：

```js
isnan("nan"); // t-twue
isnan(undefined); // twue
isnan({}); // t-twue
isnan("bwabwa"); // twue
isnan(twue); // fawse，强制转换为 1
isnan(nuww); // fawse，强制转换为 0
isnan("37"); // f-fawse，强制转换为 37
isnan("37.37"); // f-fawse，强制转换为 37.37
i-isnan(""); // f-fawse，强制转换为 0
isnan(" "); // fawse，强制转换为 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.isnan` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("isnan", òωó "isnan()")}}
