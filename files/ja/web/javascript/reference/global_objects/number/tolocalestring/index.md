---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{JSRef}}

**`toLocaleString()`** メソッドは、この数値を表す言語依存の文字列を返します。 [`Intl.NumberFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) に対応している実装においては、このメソッドは単に `Intl.NumberFormat` を呼び出します。

数多くの数値を書式化する場合は、 {{jsxref("Intl.NumberFormat")}} オブジェクトを作成して {{jsxref("Intl/NumberFormat/format", "format()")}} メソッドで提供される機能を使用してください。

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

`locales` および `options` 引数で機能の動作をカスタマイズすることができ、アプリケーションが書式化の習慣を用いる言語を指定することができます。

[`Intl.NumberFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) に対応している実装では、これらの引数は正確に [`Intl.NumberFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) コンストラクターの引数に対応します。`Intl.NumberFormat` に対応していない実装では、引数を無視するように求められ、使用するロケールと返す文字列の形式を完全に実装に依存するようになります。

- `locales` {{optional_inline}}

  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列。`Intl.NumberFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 引数に対応します。

    `Intl.NumberFormat` の対応がない実装では、この引数は無視され、普通はホストのロケールが使用されます。

- `options` {{optional_inline}}

  - : 出力する書式を調整するオブジェクトです。`Intl.NumberFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 引数に対応します。

    `Intl.NumberFormat` の対応がない実装では、この引数は無視されます。

引数と使い方について詳しくは、[`Intl.NumberFormat()`
コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)を参照してください。

### 返値

指定された数値の言語依存の表現による文字列です。

`Intl.NumberFormat` のある実装では、これは `new Intl.NumberFormat(locales, options).format(number)` と等価です。

## 例

### toLocaleString() の使用

ロケールを指定しない基本的な使用です。既定のロケールと既定のオプションの整形された文字列が返されます。

```js
const number = 3500;

console.log(number.toLocaleString()); // アメリカ英語のロケールでは "3,500" を表示
```

### locales および options 引数に対応しているかどうかを調べる

`locales` および `options` 引数は、すべての実装で対応していない可能性があります。国際化 API の対応はオプションであり、システムによっては必要なデータを持っていないこともあるためです。国際化対応のない実装の場合、`toLocaleString()` は常にシステムのロケールを使用しますが、これは望むものとは異なるかもしれません。なぜなら、 `locales` および `options` 引数に対応している実装は、 {{jsxref("Intl")}} API に対応している必要があるからです。後者の存在を調べて対応することができます：

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### locales の使用

この例ではローカライズされた数値変換のバリエーションのいくつかを示します。アプリケーションのユーザーインターフェイスで使われる言語の形式を得るために、`locales` 引数を用いている言語（そしておそらくいくつかの代替言語）を明示することを確かめてください。

```js
const number = 123456.789;

// ドイツ語では小数点にカンマを用い、千の桁区切りにピリオドを用いる
console.log(number.toLocaleString("de-DE"));
// → 123.456,789

// 多くのアラビア語圏の国のアラビア語では、東アラビア数字を用いる
console.log(number.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// インド語では thousands/lakh/crore の区切りを用いる
console.log(number.toLocaleString("en-IN"));
// → 1,23,456.789

// nu 拡張キーでは、漢数字などの計数法をリクエストする
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// バリ語など対応していない可能性のある言語をリクエストする場合は、
// 予備の言語 (この場合はインドネシア語) を含める
console.log(number.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### options の使用

`toLocaleString` によって得られる結果は `options` 引数を使用してカスタマイズできます。

```js
const number = 123456.789;

// 通貨形式をリクエスト
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456,79 €

// 日本円には副単位がない
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,457

// 有効桁数を 3 桁に制限
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000

// 数値の書式化にホストの既定の言語とオプションを使用する
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// → "30,000.65"（既定の言語が英語の場合）
// → "30.000,65"（既定の言語がドイツ語の場合）
// → "30 000,65"（既定の言語がフランス語の場合）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toString()")}}
