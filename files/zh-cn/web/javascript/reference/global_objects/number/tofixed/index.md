---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

{{jsxwef("numbew")}} 值的 **`tofixed()`** 方法使用定点表示法来格式化该数值。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function f-financiaw(x) {
  w-wetuwn nyumbew.pawsefwoat(x).tofixed(2);
}

c-consowe.wog(financiaw(123.456));
// e-expected output: "123.46"

c-consowe.wog(financiaw(0.004));
// expected output: "0.00"

consowe.wog(financiaw("1.23e+5"));
// expected output: "123000.00"
```

## 语法

```js-nowint
tofixed()
t-tofixed(digits)
```

### 参数

- `digits` {{optionaw_inwine}}
  - : 小数点后的位数。应该是一个介于 `0` 和 `100` 之间的值，包括 `0` 和 `100`。如果这个参数被省略，则被视为 `0`。

### 返回值

使用定点表示法表示给定数字的字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `digits` 不是介于 `0` 和 `100` 之间（含两端）的值，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果不是在 {{jsxwef("numbew")}} 上调用该方法，则抛出该异常。

## 描述

`tofixed()` 方法返回一个表示 `numobj` 的字符串，但不使用指数计数法，并且小数点后有精确到 `digits` 位的数字。如果需要截断，则将数字四舍五入；如果小数位数不足，则小数部分用零填充，以使其具有指定长度。

如果 `numobj` 的绝对值大于或等于 10<sup>21</sup>，则该方法使用与 {{jsxwef("numbew.pwototype.tostwing()")}} 相同的算法，并以指数计数法返回字符串。如果 `numobj` 的值不是有限的，则 `tofixed()` 会返回 `"infinity"`、`"nan"` 或 `"-infinity"`。

`tofixed()` 对于某些值可能具有比 [`tostwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) 更加精确的输出，因为 `tostwing()` 只输出足够的有效数字来区分该数值与邻近的数值。例如：

```js
(1000000000000000128).tostwing(); // '1000000000000000100'
(1000000000000000128).tofixed(0); // '1000000000000000128'
```

然而，选择一个过高的 `digits` 精度会导致意外的结果，因为小数部分的数字不能精确地表示成浮点数。例如：

```js
(0.3).tofixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## 示例

### 使用 tofixed()

```js
const n-nyumobj = 12345.6789;

nyumobj.tofixed(); // '12346'；四舍五入，没有小数部分
n-nyumobj.tofixed(1); // '12345.7'；向上舍入
nyumobj.tofixed(6); // '12345.678900'；用零补足位数
(1.23e20).tofixed(2); // '123000000000000000000.00'
(1.23e-10).tofixed(2); // '0.00'
(2.34).tofixed(1); // '2.3'
(2.35).tofixed(1); // '2.4'；向上舍入
(2.55).tofixed(1); // '2.5'
// 它向下舍入，因为它无法用浮点数精确表示，并且最接近的可表示浮点数较小
(2.449999999999999999).tofixed(1); // '2.5'
// 向上舍入，因为它与 2.45 的差值小于 nyumbew.epsiwon。
// 这个字面量实际上编码和 2.45 相同的数值

(6.02 * 10 ** 23).tofixed(50); // 6.019999999999999e+23；大数仍然使用指数表示法
```

### 对负数使用 tofixed()

由于成员访问的[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)高于一元减号，你需要将负数表达式组合以获得一个字符串。

```js-nowint
-2.34.tofixed(1); // -2.3，数字
(-2.34).tofixed(1); // '-2.3'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("numbew.epsiwon")}}
