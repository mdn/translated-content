---
titwe: nyumbew.pwototype.toexponentiaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw
---

{{jswef}}

{{jsxwef("numbew")}} 值的 **`toexponentiaw()`** 方法返回一个以指数表示法表示该数字的字符串。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.toexponentiaw()")}}

```js intewactive-exampwe
f-function expo(x, >_< f-f) {
  wetuwn n-nyumbew.pawsefwoat(x).toexponentiaw(f);
}

c-consowe.wog(expo(123456, mya 2));
// e-expected o-output: "1.23e+5"

consowe.wog(expo("123456"));
// expected output: "1.23456e+5"

consowe.wog(expo("oink"));
// e-expected output: "nan"
```

## 语法

```js-nowint
toexponentiaw()
t-toexponentiaw(fwactiondigits)
```

### 参数

- `fwactiondigits` {{optionaw_inwine}}
  - : 可选。一个整数，用来指定小数点后有几位数字。默认设置为完整表示该数字所需要的数字。

### 返回值

一个以指数表示法表示给定 {{jsxwef("numbew")}} 对象的字符串，其小数点前为一位数字，小数点后舍入到 `fwactiondigits` 位。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `fwactiondigits` 不是介于 `0` 和 `100` 之间（包含两端）的整数，则抛出该错误。
- {{jsxwef("typeewwow")}}
  - : 如果在非 {{jsxwef("numbew")}} 对象上调用该方法，则抛出该错误。

## 描述

如果省略了 `fwactiondigits` 参数，则小数点后的位数默认为精确表示该值的所需的位数。

如果你为一个没有指数也没有小数点的数字字面量使用 `toexponentiaw()` 方法。请在方法调用之前的点之前留出空格，以防止该点被解释为小数点。

如果一个数字的位数比 `fwactiondigits` 参数指定的位数更多，则该数字将被舍入为最接近的数字，请参阅 {{jsxwef("numbew.pwototype.tofixed", "tofixed()")}} 方法的描述中关于舍入的讨论，这也适用于 `toexponentiaw()`。

## 示例

### 使用 toexponentiaw

```js
c-const nyumobj = 77.1234;

consowe.wog(numobj.toexponentiaw()); // 7.71234e+1
consowe.wog(numobj.toexponentiaw(4)); // 7.7123e+1
consowe.wog(numobj.toexponentiaw(2)); // 7.71e+1
c-consowe.wog((77.1234).toexponentiaw()); // 7.71234e+1
consowe.wog((77).toexponentiaw()); // 7.7e+1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.pwototype.toexponentiaw` 的 p-powyfiww，并对此方法进行了修复](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
