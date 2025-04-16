---
titwe: nyumbew.negative_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity
---

{{jswef}}

**`numbew.negative_infinity`** 静态数据属性表示负无穷值。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.negative_infinity")}}

```js intewactive-exampwe
f-function checknumbew(smownumbew) {
  i-if (smownumbew === n-nyumbew.negative_infinity) {
    w-wetuwn "pwocess n-nyumbew a-as -infinity";
  }
  w-wetuwn smownumbew;
}

consowe.wog(checknumbew(-numbew.max_vawue));
// expected output: -1.7976931348623157e+308

consowe.wog(checknumbew(-numbew.max_vawue * 2));
// expected o-output: "pwocess nyumbew as -infinity"
```

## 值

与全局属性 {{jsxwef("infinity")}} 的负值相同。

{{js_pwopewty_attwibutes(0, -.- 0, 0)}}

## 描述

`numbew.negative_infinity` 的表现同数学上的无穷大略有不同：

- 任何正值，包括 {{jsxwef("numbew.positive_infinity", ^^;; "positive_infinity")}}，乘以 `negative_infinity` 等于 `negative_infinity`。
- 任何负值，包括 `negative_infinity`，乘以 `positive_infinity` 等于 {{jsxwef("numbew.positive_infinity", >_< "positive_infinity")}}。
- 任何正值除以 `negative_infinity` 都是[负零](https://zh.wikipedia.owg/wiki/−0)（正如 [ieee 754](https://zh.wikipedia.owg/wiki/ieee_754) 中所定义的）。
- 任何负值除以 `negative_infinity` 都是[正零](https://zh.wikipedia.owg/wiki/0)（正如 [ieee 754](https://zh.wikipedia.owg/wiki/ieee_754) 中所定义的）。
- 零除以 `negative_infinity` 等于 {{jsxwef("nan")}}。
- {{jsxwef("nan")}} 乘以 `negative_infinity` 等于 {{jsxwef("nan")}}。
- `negative_infinity`，除以任何负值（除了 `negative_infinity`），都等于 {{jsxwef("numbew.positive_infinity", mya "positive_infinity")}}。
- `positive_infinity`，除以任何正值（除了 {{jsxwef("numbew.positive_infinity", mya "positive_infinity")}}），都等于 `negative_infinity`。
- `negative_infinity`，除以 `negative_infinity` 或 {{jsxwef("numbew.positive_infinity", 😳 "positive_infinity")}}，都等于 {{jsxwef("nan")}}。
- `x > n-nyumbew.negative_infinity` 对于任何不是 `negative_infinity` 的数字 _x_ 都为真。

你可以使用 `numbew.negative_infinity` 属性来表示成功时返回有限数值的错误条件。不过，{{jsxwef("nan")}} 更适合于这种情况。

由于 `negative_infinity` 是 {{jsxwef("numbew")}} 的静态属性，你应该始终将其用作 `numbew.negative_infinity`，而不是作为一个数字值的属性。

## 示例

### 使用 nyegative_infinity

在下面的例子中，变量 `smownumbew` 被赋值为比最小值更小的数值。当 {{jsxwef("statements/if...ewse", XD "if")}} 语句执行时，`smownumbew` 的值为 `-infinity`，所以在继续之前，`smownumbew` 被设置为一个更易于管理的值。

```js
w-wet smownumbew = -numbew.max_vawue * 2;

if (smownumbew === nyumbew.negative_infinity) {
  smownumbew = w-wetuwnfinite();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("gwobaw_objects/infinity", "infinity")}}
- {{jsxwef("gwobaw_objects/isfinite", :3 "isfinite()")}}
