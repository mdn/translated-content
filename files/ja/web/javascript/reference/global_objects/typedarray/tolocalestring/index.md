---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`toLocaleString()`** メソッドは、型付き配列の要素を表す文字列を返します。要素は文字列に変換され、ロケール依存の文字列（カンマ "," など）で区切られます。このメソッドは {{jsxref("Array.prototype.toLocaleString()")}} と同じアルゴリズムを持ち、型付き配列の要素は数値なので、各要素に対して {{jsxref("Number.prototype.toLocaleString()")}} と同じアルゴリズムが適用されます。ここで _TypedArray_ は[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)の 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-tolocalestring.html")}}

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

`locales` と `options` の引数は、関数の動作をカスタマイズし、アプリケーションが整形規則を使用する言語を指定できるようにします。 `locales` と `options` の引数を無視する実装では、使用されるロケールと返される文字列の形式は完全に実装に依存します。

これらの引数の詳細および使用方法については、 {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} コンストラクターを参照してください。

### 返値

型付き配列の要素を表す文字列。

## 例

### toLocaleString の使用

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

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
