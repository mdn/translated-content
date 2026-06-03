---
title: Math.cbrt()
short-title: cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.cbrt()`** は静的メソッドで、引数として与えた数の立方根を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚋𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cbrt}(x)} = \sqrt[3]{x} = \text{the unique } y \text{ such that } y^3 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.cbrt()")}}

```js interactive-example
console.log(Math.cbrt(-1));
// 予想される結果: -1

console.log(Math.cbrt(1));
// 予想される結果: 1

console.log(Math.cbrt(Infinity));
// 予想される結果: Infinity

console.log(Math.cbrt(64));
// 予想される結果: 4
```

## 構文

```js-nolint
Math.cbrt(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の立方根です。

## 解説

`cbrt()` は `Math` の静的なメソッドであるため、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、 `Math.cbrt()` として使用してください (`Math` はコンストラクターではありません)。

## 例

### Math.cbrt() の使用

```js
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.cbrt` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims による `Math.cbrt` のポリフィル](https://www.npmjs.com/package/math.cbrt)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
