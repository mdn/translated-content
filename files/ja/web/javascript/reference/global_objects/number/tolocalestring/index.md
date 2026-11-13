---
title: Number.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toLocaleString()`** は {{jsxref("Number")}} 値のメソッドで、この数値を表す言語依存の文字列を返します。 [`Intl.NumberFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) に対応している実装においては、このメソッドは `Intl.NumberFormat` に委譲されます。

`toLocaleString` メソッドが呼び出される時点では、大規模なローカライズ文字列データベース内で検索を実行する必要があります。これは潜在的に非効率です。同じ引数でメソッドが何度も呼び出される場合は、 {{jsxref("Intl.NumberFormat")}} オブジェクトを作成し、その {{jsxref("Intl/NumberFormat/format", "format()")}} メソッドを使用したほうがいいでしょう。これは、 `NumberFormat` オブジェクトが渡された引数を記憶し、データベースの一部をキャッシュする可能性があるため、今後の `format` 呼び出しではローカライズ文字列の検索を制約されるコンテキスト内で行うことができるからです。

{{InteractiveExample("JavaScript デモ: Number.prototype.toLocaleString()")}}

```js interactive-example
function eArabic(x) {
  return x.toLocaleString("ar-EG");
}

console.log(eArabic(123456.789));
// 予想される結果: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic("123456.789"));
// 予想される結果: "123456.789"

console.log(eArabic(NaN));
// 予想される結果: "ليس رقم"
```

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

文字列で、指定された数値を、言語固有の表記規則に従って表したものです。

`Intl.NumberFormat` のある実装では、これは `new Intl.NumberFormat(locales, options).format(number)` と等価です。

> [!NOTE]
> ほとんどの場合、`toLocaleString()` が返す書式は一貫しています。ただし、同じロケール内でも実装によって出力結果が異なる場合があります。出力の差異は仕様で認められていて、意図的な設計です。期待する結果と異なる場合もあります。例えば、文字列に非改行スペースが使用されたり、双方向制御文字で囲まれたりする可能性があります。`toLocaleString()` の結果をハードコーディングされた定数と比較しないでください。

## 例

### toLocaleString() の使用

このメソッドを `locale` を指定せずに使用した場合、既定のロケールと既定のオプションで書式化された文字列を返します。

```js
const number = 3500;

console.log(number.toLocaleString()); // アメリカ英語のロケールでは "3,500" を表示
```

### locales および options 引数に対応しているかどうかを調べる

`locales` および `options` 引数は、すべての実装で対応しているとは限りません。国際化 API の対応はオプションであり、システムによっては必要なデータを持っていないこともあるためです。国際化対応のない実装の場合、`toLocaleString()` は常にシステムのロケールを使用しますが、これは望むものとは異なるかもしれません。実装が `locales` および `options` 引数に対応している場合、 {{jsxref("Intl")}} API にも必ず対応していますので、後者が存在するかどうかで対応状況を調べることができます。

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
// 123.456,789

// 多くのアラビア語圏の国のアラビア語では、東アラビア数字を用いる
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// インドでは千/ラーク（十万）/カロール（千万） の区切りを用いる
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// nu 拡張キーでは、漢数字などの記数法をリクエストする
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// バリ語など対応していない可能性のある言語をリクエストする場合は、
// 代替言語 (この場合はインドネシア語) を含める
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### options の使用

`toLocaleString()` によって得られる結果は `options` 引数を使用してカスタマイズできます。

```js
const number = 123456.789;

// 通貨形式をリクエスト
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// 日本円には副単位がない
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// 有効桁数を 3 桁に制限
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// 数値の書式化にホストの既定の言語とオプションを使用する
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65"（既定の言語が英語の場合）
// "30.000,65"（既定の言語がドイツ語の場合）
// "30 000,65"（既定の言語がフランス語の場合）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
