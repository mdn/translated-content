---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`toLocaleString()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の要素を表す文字列を返します。要素は `toLocaleString` メソッドを使用して文字列に変換され、これらの文字列はロケール依存の文字列（カンマ "," など）で区切られます。このメソッドは {{jsxref("Array.prototype.toLocaleString()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.toLocaleString()")}}

```js interactive-example
const uint8 = new Uint32Array([500, 8123, 12]);

console.log(uint8.toLocaleString());
// Expected output: "500,8123,12"

console.log(uint8.toLocaleString("en-GB"));
// Expected output: "500,8,123,12"

console.log(
  uint8.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "500,00 €,8.123,00 €,12,00 €"
```

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列か、その配列です。 `locales` 引数の一般的な形式と解釈については、 [`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 構成プロパティを持つオブジェクトです。 {{jsxref("Number.prototype.toLocaleString()")}} を参照してください。

### 返値

型付き配列の要素を表す文字列です。

## 解説

詳細については、 {{jsxref("Array.prototype.toLocaleString()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### toLocaleString() の使用

```js
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// de-DE ロケールで実行している場合
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
