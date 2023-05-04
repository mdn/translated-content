---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.MAX_SAFE_INTEGER`** 定数は、JavaScript における安全な整数の最大値 (2<sup>53</sup> – 1) を表します。

もっと大きな整数には、 {{jsxref("BigInt")}} を使用することを検討してください。

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

## 値

`9007199254740991` （9,007,199,254,740,991、または \~9 千兆）。

{{js_property_attributes(0, 0, 0)}}

## 解説

[倍精度浮動小数点型数値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)は[仮数部](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値エンコーディング)を表わすのに 52 ビットしかないため、安全に表現できる整数は -(2<sup>53</sup> – 1) と 2<sup>53</sup> – 1 との間です。この文脈で示している「安全」とは、整数を正確に表現し、正しく比較する能力を指します。たとえば、 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` は、数学的には不正確ですが true と評価されます。詳細については {{jsxref("Number.isSafeInteger()")}} を見てください。

`MAX_SAFE_INTEGER` は {{jsxref("Number")}} の静的なプロパティなので、数値のプロパティとしてではなく、常に `Number.MAX_SAFE_INTEGER` として使うようにしてください。

## 例

### MAX_SAFE_INTEGER の返値

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### MAX_SAFE_INTEGER と EPSILON の関係

{{jsxref("Number.EPSILON")}} は 2<sup>-52</sup> であり、 `MAX_SAFE_INTEGER` は 2<sup>53</sup> - 1 です。どちらも仮数部の幅である 53 ビット（最上位ビットは常に 1）から来ています。これらを乗算すると、2 にとても近い（しかし等しくはない）値が得られます。

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.MAX_SAFE_INTEGER` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
