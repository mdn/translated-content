---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
  - ポリフィル
browser-compat: javascript.builtins.Number.MIN_SAFE_INTEGER
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---
{{JSRef}}

**`Number.MIN_SAFE_INTEGER`** 定数は、JavaScript における安全な整数の最小値 (`-(2^53 - 1)`) を表します。

これよりも小さな整数値を表す場合は、 {{jsxref("BigInt")}} を使用することを検討してください。

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`MIN_SAFE_INTEGER` 定数は `-9007199254740991` (-9,007,199,254,740,991 またはおよそ -9000 兆 ) である値です。その数である理由は JavaScript が [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で指定されたとおり[倍精度浮動小数点型数値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)を使用し安全に `-(2^53 - 1)` と `2^53 - 1` との間の数を表すことができるからです。詳しくは {{jsxref("Number.isSafeInteger()")}} を見てください。

`MIN_SAFE_INTEGER` 定数は {{jsxref("Number")}} オブジェクトの静的なプロパティなので、自ら生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に、`Number.MIN_SAFE_INTEGER` として使用するようにしてください。

## 例

### MIN_SAFE_INTEGER の使用

```js
Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.MIN_SAFE_INTEGER` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
