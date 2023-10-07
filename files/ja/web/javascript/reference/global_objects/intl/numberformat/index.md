---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

**`Intl.NumberFormat`** オブジェクトは、言語に依存した数値書式を可能にするオブジェクトのコンストラクターです。

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## コンストラクター

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : 新しい `NumberFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 提供されたロケールのうち、実行時の既定のロケールにフォールバックせずにサポートされるものを配列に納めて返します。

## インスタンスメソッド

- {{jsxref("NumberFormat.format", "Intl.NumberFormat.prototype.format")}}
  - : ゲッター関数で、ローケルに応じて、この {{jsxref("NumberFormat")}} オブジェクトのオプションを持つ数値を書式化する関数を返します。
- {{jsxref("NumberFormat.formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : オブジェクトの {{jsxref("Array")}} を返し、これは専用のロケールを意識した書式で使用することができる部品内の数値文字列を表します。
- {{jsxref("NumberFormat.resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : ローケルを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。

## 例

### 基本的な使用

ローケルを指定しない基本的な使い方では、既定のローケルとオプションで書式化された文字列が返されます。

```js
var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3,500' 英語(U.S.)ロケールの場合
```

### locales の使用

この例では、地域による数値書式の違いをいくつか紹介します。アプリケーションのユーザーインターフェイスで使われた言語書式を得るには、言語 (およびフォールバック言語) を `locales` 引数により指定してください。

```js
var number = 123456.789;

// ドイツではカンマを小数、ピリオドを千単位の区切りに用います
console.log(new Intl.NumberFormat("de-DE").format(number));
// → 123.456,789

// ほとんどのアラビア語圏ではアラビア数字を用います
console.log(new Intl.NumberFormat("ar-EG").format(number));
// → ١٢٣٤٥٦٫٧٨٩

// インドでは thousands/lakh/crore 区切りが用いられます
console.log(new Intl.NumberFormat("en-IN").format(number));
// → 1,23,456.789

// nu 拡張キーにより漢数字などの番号方式が使えます
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// → 一二三,四五六.七八九

// バリ語のようにサポートされないかもしれない言語を用いる場合は
// フォールバック言語を含めます。次の例ではインドネシア語です。
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// → 123.456,789
```

### options の使用

`options`引数を使うと結果をカスタマイズできます。

```js
var number = 123456.789;

// 通貨フォーマットを用います
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// → 123.456,79 €

// 日本円には小数点以下がありません
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// → ￥123,457

// 有効数字を3桁に狭めます
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// → 1,23,000
```

### style と unit の使用

```js
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "mile-per-hour",
  }).format(50),
);
// → 50 mi/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// → 16 litres
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat")}}

## 関連情報

- {{jsxref("Intl")}}
