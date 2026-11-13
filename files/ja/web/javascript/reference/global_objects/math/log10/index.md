---
title: Math.log10()
short-title: log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Math.log10()`** は静的メソッドで、数値の 10 を底とした対数を返します。つまり、次のようになります。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.log10()")}}

```js interactive-example
console.log(Math.log10(100000));
// 予想される結果: 5

console.log(Math.log10(2));
// 予想される結果: 0.3010299956639812

console.log(Math.log10(1));
// 予想される結果: 0

console.log(Math.log10(0));
// 予想される結果: -Infinity
```

## 構文

```js-nolint
Math.log10(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の 10 を底とした対数です。 `x < 0` であった場合、 {{jsxref("NaN")}} を返します。

## 解説

`log10()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log10()` として使用するようにしてください（`Math` はコンストラクターではありません）。

この関数は `Math.log(x) / Math.log(10)` と同等です。 `log10(e)` には定数 {{jsxref("Math.LOG10E")}} を使用してください (これは 1 / {{jsxref("Math.LN10")}} です。)

## 例

### Math.log10() の使用

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.log10` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/math)
- [es-shims による `Math.log10` のポリフィル](https://www.npmjs.com/package/math.log10)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
