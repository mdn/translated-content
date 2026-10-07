---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.log10()`** 静态方法返回一个数字以 10 为底的对数。即

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.log10()")}}

```js interactive-example
console.log(Math.log10(100000));
// Expected output: 5

console.log(Math.log10(2));
// Expected output: 0.3010299956639812

console.log(Math.log10(1));
// Expected output: 0

console.log(Math.log10(0));
// Expected output: -Infinity
```

## 语法

```js-nolint
Math.log10(x)
```

### 参数

- `x`
  - : 大于或等于 0 的数字。

### 返回值

`x` 以 10 为底的对数。如果 `x < 0`，则返回 {{jsxref("NaN")}}。

## 描述

由于 `log10()` 是 `Math` 的静态方法，因此你始终以 `Math.log10()` 的形式使用它，而不是把它作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

该函数等价于 `Math.log(x) / Math.log(10)`。对于 `log10(e)`，请使用常量 {{jsxref("Math.LOG10E")}}，其值为 1 / {{jsxref("Math.LN10")}}。

## 示例

### 使用 Math.log10()

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [core-js 中 `Math.log10` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims 的 `Math.log10` polyfill](https://www.npmjs.com/package/math.log10)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
