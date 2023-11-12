---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.MIN_SAFE_INTEGER`** 静的データプロパティは、JavaScript における安全な整数の最小値 (-(2<sup>53</sup> - 1)) を表します。

これよりも小さな整数値を表す場合は、 {{jsxref("BigInt")}} を使用することを検討してください。

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}

## 値

`-9007199254740991`（-9,007,199,254,740,991、またはおよそ -9 千兆）です。

{{js_property_attributes(0, 0, 0)}}

## 解説

[倍精度浮動小数点型数値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)は[仮数部](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値エンコーディング)を表わすのに 52 ビットしかないため、安全に表現できる整数は -(2<sup>53</sup> – 1) と 2<sup>53</sup> – 1 との間です。この文脈で示している「安全」とは、整数を正確に表現し、正しく比較する能力を指します。たとえば、 `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` は、数学的には不正確ですが true と評価されます。詳細については {{jsxref("Number.isSafeInteger()")}} を見てください。

`MIN_SAFE_INTEGER` は {{jsxref("Number")}} の静的プロパティですので、 数値のプロパティとしてではなく、常に `Number.MIN_SAFE_INTEGER` として使用してください。

## 例

### MIN_SAFE_INTEGER の使用

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.MIN_SAFE_INTEGER` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
