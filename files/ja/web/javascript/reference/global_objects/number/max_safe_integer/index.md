---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
  - ポリフィル
browser-compat: javascript.builtins.Number.MAX_SAFE_INTEGER
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---
{{JSRef}}

**`Number.MAX_SAFE_INTEGER`** 定数は、JavaScript における安全な整数の最大値 (`2^53 - 1`) を表します。

もっと大きな整数には、 {{jsxref("BigInt")}} を使用することを検討してください。

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}
{{js_property_attributes(0, 0, 0)}}

## 解説

`MAX_SAFE_INTEGER` 定数は `9007199254740991` (9,007,199,254,740,991) である値です。その数である理由は JavaScript が [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) で指定されたとおり[倍精度浮動小数点型数値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)を使用し安全に `-(2^53 - 1)` と `2^53 - 1` との間の数を表すことができるからです。

この文脈で示している安全とは、整数を正確に表現し、正しく比較する能力を指します。たとえば、 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` は、数学的には不正確ですが true と評価されます。詳細については {{jsxref("Number.isSafeInteger()")}} を見てください。

このフィールドは古いブラウザーには存在しません。 `Math.max(Number.MAX_SAFE_INTEGER, 2)` のように存在を確認せずに使用すると、 NaN のような望ましくない結果が得られます。

`MAX_SAFE_INTEGER` は {{jsxref("Number")}} の静的なプロパティなので、自ら生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に `Number.MAX_SAFE_INTEGER` として使うようにしてください。

## ポリフィル

```js
if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
```

## 例

### MAX_SAFE_INTEGER の返値

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### 安全な整数よりも大きな数値

浮動小数点の場合、ゼロのような正規の精度以下の場合を除いて、実際には10進数の末尾の "1" が値となるため、これは2を返します。

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.MAX_SAFE_INTEGER` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
