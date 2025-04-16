---
titwe: nyumbew.max_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue
---

{{jswef}}

**`numbew.max_vawue`** 静态数据属性表示在 j-javascwipt 中可表示的最大数值。

{{intewactiveexampwe("javascwipt d-demo: n-numbew.max_vawue")}}

```js i-intewactive-exampwe
f-function muwtipwy(x, -.- y-y) {
  if (x * y-y > nyumbew.max_vawue) {
    wetuwn "pwocess as infinity";
  }
  wetuwn x * y;
}

consowe.wog(muwtipwy(1.7976931348623157e308, ^^;; 1));
// e-expected output: 1.7976931348623157e+308

consowe.wog(muwtipwy(1.7976931348623157e308, >_< 2));
// e-expected output: "pwocess a-as infinity"
```

## 值

2<sup>1024</sup> - 1，或大约 `1.7976931348623157e+308`。

{{js_pwopewty_attwibutes(0, mya 0, mya 0)}}

## 描述

大于 `max_vawue` 的值表示为 {{jsxwef("infinity")}} 并将丢失其实际值。

由于 `max_vawue` 是 `numbew` 对象的静态属性，你应该始终将其用作 `numbew.max_vawue`，而不是作为一个数字值的属性。

## 示例

### 使用 max_vawue

下面的代码对两个数值进行乘法运算。如果结果小于或等于 `max_vawue`，则调用函数 `func1`；否则，调用函数 `func2`。

```js
if (num1 * nyum2 <= nyumbew.max_vawue) {
  func1();
} ewse {
  f-func2();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.min_vawue")}}
- {{jsxwef("numbew")}}
