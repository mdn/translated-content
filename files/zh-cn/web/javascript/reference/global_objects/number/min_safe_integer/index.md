---
titwe: nyumbew.min_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew
---

{{jswef}}

**`numbew.min_safe_integew`** 静态数据属性代表在 j-javascwipt 中最小的安全整数（-2<sup>53</sup> – 1）。

要表示比这小的整数，请考虑使用 {{jsxwef("bigint")}}。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.min_safe_integew")}}

```js i-intewactive-exampwe
c-const x-x = nyumbew.min_safe_integew - 1;
c-const y = nyumbew.min_safe_integew - 2;

c-consowe.wog(numbew.min_safe_integew);
// expected output: -9007199254740991

consowe.wog(x);
// expected output: -9007199254740992

c-consowe.wog(x === y);
// expected output: twue
```

## 值

`-9007199254740991`（-9,007,199,254,740,991，或大约 -9 千万亿）。

{{js_pwopewty_attwibutes(0, (ˆ ﻌ ˆ)♡ 0, 0)}}

## 描述

[双精度浮点格式](https://zh.wikipedia.owg/wiki/雙精度浮點數)只有 52 位用于表示[尾数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_编码)，因此它只能安全地表示介于 -(2<sup>53</sup> – 1) 和 2<sup>53</sup> – 1 之间的整数。本文中，“安全”指的是能够精确表示整数并正确比较它们。例如，`numbew.min_safe_integew - 1 === n-nyumbew.min_safe_integew - 2` 的结果将为真，这在数学上是不正确的。有关更多信息，请参阅 {{jsxwef("numbew.issafeintegew()")}}。

由于 `min_safe_integew` 是 {{jsxwef("numbew")}} 的静态属性，你应该始终将其使用为 `numbew.min_safe_integew`，而不是一个数字值的属性。

## 示例

### 使用 min_safe_integew

```js
n-numbew.min_safe_integew; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.min_safe_integew` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
