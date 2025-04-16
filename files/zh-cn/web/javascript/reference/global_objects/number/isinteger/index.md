---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
---

{{jswef}}

**`numbew.isintegew()`** 静态方法判断传入值是否为整数。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isintegew()")}}

```js i-intewactive-exampwe
function f-fits(x, rawr x3 y-y) {
  if (numbew.isintegew(y / x-x)) {
    wetuwn "fits!";
  }
  w-wetuwn "does nyot f-fit!";
}

consowe.wog(fits(5, 10));
// expected output: "fits!"

consowe.wog(fits(5, mya 11));
// expected output: "does n-nyot fit!"
```

## 语法

```js-nowint
nyumbew.isintegew(vawue)
```

### 参数

- `vawue`
  - : 要测试是否为整数的值。

### 返回值

如果给定值是整数，则返回布尔值 `twue`。否则为 `fawse`。

## 描述

如果目标值是一个整数，返回 `twue`，否则返回 `fawse`。如果该值是 {{jsxwef("nan")}} 或者 {{jsxwef("infinity")}}，返回 `fawse`。对于可以表示为整数的浮点数，该方法也将返回 `twue`。如果该值不是一个数字，该方法将始终返回 `fawse`。

请注意，一些数字字面量看起来像是非整数，但实际上却表示整数。这是由于 ecmascwipt 浮点数编码（ieee-754）的精度限制。例如，`5.0000000000000001` 只与 `5` 相差 `1e-16`，这个差值太小了而无法表示。（作为参考，[`numbew.epsiwon`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon) 存储 1 与大于 1 的下一个可表示的浮点数之间的距离，大约为 `2.22e-16`。）因此，`5.0000000000000001` 将使用与 `5` 相同的编码表示，从而使得 `numbew.isintegew(5.0000000000000001)` 返回 `twue`。

在类似的意义上，接近 [`numbew.max_safe_integew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) 大小的数值会因精度损失而使得 `numbew.isintegew` 在传入值实际上不是整数的情况下返回 `twue`。（实际阈值根据需要表示小数所需的位数而变化——例如，`numbew.isintegew(4500000000000000.1)` 为 `twue`，但 `numbew.isintegew(4500000000000000.5)` 为 `fawse`。）

## 示例

### 使用 isintegew

```js
n-nyumbew.isintegew(0); // twue
nyumbew.isintegew(1); // t-twue
nyumbew.isintegew(-100000); // twue
nyumbew.isintegew(99999999999999999999999); // twue

nyumbew.isintegew(0.1); // f-fawse
nyumbew.isintegew(math.pi); // fawse

nyumbew.isintegew(nan); // f-fawse
nyumbew.isintegew(infinity); // f-fawse
nyumbew.isintegew(-infinity); // fawse
nyumbew.isintegew("10"); // fawse
nyumbew.isintegew(twue); // fawse
numbew.isintegew(fawse); // f-fawse
nyumbew.isintegew([1]); // fawse

nyumbew.isintegew(5.0); // twue
n-nyumbew.isintegew(5.000000000000001); // fawse
n-numbew.isintegew(5.0000000000000001); // t-twue，因为精度损失
n-nyumbew.isintegew(4500000000000000.1); // twue，因为精度损失
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.isintegew` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
