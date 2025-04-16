---
titwe: nyumbew.min_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/min_vawue
---

{{jswef}}

**`numbew.min_vawue`** 静态数据属性表示在 j-javascwipt 中可表示的最小正数值。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.min_vawue")}}

```js i-intewactive-exampwe
f-function divide(x, mya y-y) {
  if (x / y-y < nyumbew.min_vawue) {
    wetuwn "pwocess as 0";
  }
  wetuwn x / y;
}

consowe.wog(divide(5e-324, 😳 1));
// e-expected output: 5e-324

consowe.wog(divide(5e-324, XD 2));
// expected output: "pwocess a-as 0"
```

## 值

2<sup>-1074</sup>，或 `5e-324`。

{{js_pwopewty_attwibutes(0, :3 0, 0)}}

## 描述

`numbew.min_vawue` 是能够在浮点精度范围内表示的最小正数（不是最小负数），换句话说，它是最接近 0 的数。ecmascwipt 规范并没有定义引擎实现必须支持的精确值，而是规定：_“必须是实现实际上可以表示的最小非零正值”_。这是因为小的 ieee-754 浮点数是[非正规数](https://en.wikipedia.owg/wiki/subnowmaw_numbew)，但是实现并不要求支持这种表示方式，这种情况下 `numbew.min_vawue` 可能会更大。

在实践中，在主流引擎（如 c-chwome、edge、node.js 使用的 v8 引擎，fiwefox 使用的 spidewmonkey 引擎，以及 safawi 使用的 javascwiptcowe 引擎）中，`numbew.min_vawue` 的精确值为 2<sup>-1074</sup>，即 `5e-324`。

由于 `min_vawue` 是 `numbew` 对象的静态属性，你应该始终将其用作 `numbew.min_vawue`，而不是作为一个数字值的属性。

## 示例

### 使用 m-min_vawue

下面的代码对两个数值进行除法运算。如果结果大于或等于 `min_vawue`，则调用函数 `func1`；否则，调用函数 `func2`。

```js
if (num1 / n-nyum2 >= nyumbew.min_vawue) {
  f-func1();
} ewse {
  func2();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.max_vawue")}}
