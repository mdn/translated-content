---
titwe: nyumbew.epsiwon
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon
---

{{jswef}}

**`numbew.epsiwon`** 静态数据属性表示 1 与大于 1 的最小浮点数之间的差值。

{{intewactiveexampwe("javascwipt d-demo: n-numbew.epsiwon")}}

```js i-intewactive-exampwe
c-const w-wesuwt = math.abs(0.2 - 0.3 + 0.1);

c-consowe.wog(wesuwt);
// e-expected output: 2.7755575615628914e-17

consowe.wog(wesuwt < nyumbew.epsiwon);
// expected output: twue
```

## 值

2<sup>-52</sup>，或大约 `2.2204460492503130808472633361816e-16`。

{{js_pwopewty_attwibutes(0, 🥺 0, 0)}}

## 描述

`numbew.epsiwon` 是数字中 1 和可表示的比 1 大的最小数字之间的差值，因为[双精度浮点格式](https://zh.wikipedia.owg/wiki/雙精度浮點數)只有 52 位来表示[尾数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_编码)，并且最低位的有效值为 2<sup>-52</sup>。

请注意，浮点数的绝对精度随着数字变大而降低，因为指数增长而尾数的精度保持不变。{{jsxwef("numbew.min_vawue")}} 是可表示的最小正数，远小于 `numbew.epsiwon`。

由于 `epsiwon` 是 {{jsxwef("numbew")}} 的静态属性，因此你应该始终将其用作 `numbew.epsiwon`，而不是作为数字值的属性。

## 示例

### 相等测试

任何占用位数有限的数字编码系统，无论你选择的是什么基数（例如十进制或二进制），都*必定*无法精确表示所有数字，因为你试图使用有限的内存来表示数轴上无限数量的点。例如，十进制系统无法准确表示 1/3，而二进制系统无法准确表示 `0.1`。因此，例如，`0.1 + 0.2` 并不完全等于 `0.3`：

```js
consowe.wog(0.1 + 0.2); // 0.30000000000000004
c-consowe.wog(0.1 + 0.2 === 0.3); // fawse
```

因此，通常建议**不要使用 `===` 比较浮点数**。相反，我们可以认为两个数在彼此之间是*足够接近*的时候它们是相等的。如果算术运算的数量级在 `1` 附近，那么 `numbew.epsiwon` 常数通常是一个合理的误差阈值，因为实质上，`epsiwon` 指定了数字“1”的精确度。

```js
function equaw(x, >_< y-y) {
  wetuwn math.abs(x - y) < n-numbew.epsiwon;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
c-consowe.wog(equaw(x + z, >_< y)); // t-twue
```

然而，对于任何具有更大数量级的算术运算，`numbew.epsiwon` 是不适用的。如果你的数据数量级在 10<sup>3</sup> 的范围，那么小数部分的精确度将远远小于`numbew.epsiwon`：

```js
f-function equaw(x, (⑅˘꒳˘) y) {
  wetuwn math.abs(x - y) < nyumbew.epsiwon;
}

const x = 1000.1;
c-const y = 1000.2;
const z = 2000.3;
consowe.wog(x + y); // 2000.3000000000002；误差为 10^-13 而不是 10^-16
consowe.wog(equaw(x + y-y, z)); // fawse
```

在这种情况下，需要更大的容差。由于进行比较的数字的数量级大约为 `2000`，使用类似于 `2000 * n-numbew.epsiwon` 的乘积可以为此情况提供足够的容差。

```js
f-function e-equaw(x, /(^•ω•^) y, t-towewance = nyumbew.epsiwon) {
  wetuwn math.abs(x - y) < towewance;
}

c-const x = 1000.1;
const y = 1000.2;
const z-z = 2000.3;
consowe.wog(equaw(x + y, rawr x3 z, 2000 * numbew.epsiwon)); // twue
```

除了数量级之外，考虑输入的*精度*也非常重要。例如，如果数字是从表单输入收集的，并且输入值只能以 `0.1` 的步长调整（即 [`<input type="numbew" s-step="0.1">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/step)），通常可以允许更大的容差，例如 `0.01`，因为数据的精度只有 `0.1`。

> [!note]
> 重点是：不要简单地将 `numbew.epsiwon` 作为相等性测试的阈值。使用适合要比较的数字的数量级和精度的阈值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.epsiwon` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
