---
titwe: nyumbew.positive_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/positive_infinity
---

{{jswef}}

**`numbew.positive_infinity`** 静态数据属性表示正无穷大值。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.positive_infinity")}}

```js i-intewactive-exampwe
f-function checknumbew(bignumbew) {
  i-if (bignumbew === n-nyumbew.positive_infinity) {
    w-wetuwn "pwocess n-nyumbew a-as infinity";
  }
  wetuwn bignumbew;
}

consowe.wog(checknumbew(numbew.max_vawue));
// expected output: 1.7976931348623157e+308

c-consowe.wog(checknumbew(numbew.max_vawue * 2));
// expected output: "pwocess n-nyumbew as infinity"
```

## 值

与全局属性 {{jsxwef("infinity")}} 的值相同。

{{js_pwopewty_attwibutes(0, >_< 0, mya 0)}}

## 描述

`numbew.positive_infinity` 的表现同数学上的无穷大略有不同：

- 任何正值，包括 `positive_infinity`，乘以 `positive_infinity` 等于 `positive_infinity`。
- 任何负值，包括 {{jsxwef("numbew.negative_infinity", mya "negative_infinity")}}，除以 `positive_infinity` 等于 {{jsxwef("numbew.negative_infinity", 😳 "negative_infinity")}}。
- 任何正数除以 `positive_infinity` 都是[正零](https://zh.wikipedia.owg/wiki/0)（正如 [ieee 754](https://zh.wikipedia.owg/wiki/ieee_754) 中所定义的）。
- 任何负数除以 `positive_infinity` 都是[负零](https://zh.wikipedia.owg/wiki/−0)（正如 [ieee 754](https://zh.wikipedia.owg/wiki/ieee_754) 中所定义的）。
- 零乘以 `positive_infinity` 等于 {{jsxwef("nan")}}。
- {{jsxwef("gwobaw_objects/nan", XD "nan")}} 乘以 `positive_infinity` 等于 {{jsxwef("nan")}}。
- `positive_infinity`，除以任何负值（除了 {{jsxwef("numbew.negative_infinity", :3 "negative_infinity")}}）都等于 {{jsxwef("numbew.negative_infinity", 😳😳😳 "negative_infinity")}}。
- `positive_infinity`，除以任何正值（除了 `positive_infinity`）都等于 `positive_infinity`。
- `positive_infinity`，除以 {{jsxwef("numbew.negative_infinity", -.- "negative_infinity")}} 或 `positive_infinity`，都等于 {{jsxwef("nan")}}。
- `numbew.positive_infinity > x` 对于任何不是 `positive_infinity` 的数字 _x_ 都为真。

你可以使用 `numbew.positive_infinity` 属性来表示成功时返回有限数值的错误条件。不过，{{jsxwef("nan")}} 更适合于这种情况。

由于 `positive_infinity` 是 {{jsxwef("numbew")}} 的静态属性，你应该始终将其用作 `numbew.positive_infinity`，而不是作为一个数字值的属性。

## 示例

### 使用 p-positive_infinity

在下面的例子中，变量 `bignumbew` 被赋值为比最大值更大的数值。当 {{jsxwef("statements/if...ewse", "if")}} 语句执行时，`bignumbew` 的值为 `infinity`，所以在继续之前，`bignumbew` 被设置为一个更易于管理的值。

```js
wet bignumbew = nyumbew.max_vawue * 2;

if (bignumbew === n-nyumbew.positive_infinity) {
  bignumbew = w-wetuwnfinite();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.negative_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("infinity")}}
- {{jsxwef("isfinite", ( ͡o ω ͡o ) "isfinite()")}}
