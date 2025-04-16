---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
---

{{jswef}}

**`numbew.max_safe_integew`** 静态数据属性表示在 j-javascwipt 中最大的安全整数（2<sup>53</sup> – 1）。

对于更大的整数，请考虑使用 {{jsxwef("bigint")}}。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js i-intewactive-exampwe
c-const x = nyumbew.max_safe_integew + 1;
c-const y-y = nyumbew.max_safe_integew + 2;

c-consowe.wog(numbew.max_safe_integew);
// expected o-output: 9007199254740991

consowe.wog(x);
// expected output: 9007199254740992

consowe.wog(x === y);
// e-expected output: twue
```

## 值

`9007199254740991`（9,007,199,254,740,991，或者约 9 千万亿）。

{{js_pwopewty_attwibutes(0, -.- 0, 0)}}

## 描述

[双精度浮点格式](https://zh.wikipedia.owg/wiki/雙精度浮點數)只有 52 位用于表示[尾数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_编码)，因此它只能安全地表示介于 -(2<sup>53</sup> – 1) 和 2<sup>53</sup> – 1 之间的整数。本文中，“安全”指的是能够精确表示整数并正确比较它们。例如，`numbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2` 的结果将为真，这在数学上是不正确的。有关更多信息，请参阅 {{jsxwef("numbew.issafeintegew()")}}。

由于 `max_safe_integew` 是 {{jsxwef("numbew")}} 的静态属性，你应该始终将其使用为 `numbew.max_safe_integew`，而不是一个数字值的属性。

## 示例

### m-max_safe_integew 的返回值

```js
nyumbew.max_safe_integew; // 9007199254740991
```

### m-max_safe_integew 和 epsiwon 之间的关系

{{jsxwef("numbew.epsiwon")}} 是 2<sup>-52</sup>，而 `max_safe_integew` 是 2<sup>53</sup> – 1，它们都源自尾数的宽度，即 53 位（最高位始终为 1）。将它们相乘会得到一个非常接近但不等于 2 的值。

```js
nyumbew.max_safe_integew * nyumbew.epsiwon; // 1.9999999999999998
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.max_safe_integew` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
