---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.RelativeTimeFormat`** オブジェクトは言語独自の相対時間の書式化をできるようにします。

{{InteractiveExample("JavaScript デモ: Intl.RelativeTimeFormat")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(3, "quarter"));
// 予想される結果: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// 予想される結果: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
// 予想される結果: "pasado mañana"
```

## コンストラクター

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : 新しい `Intl.RelativeTimeFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールに代替されずに対応するものを配列に収めて返します。

## インスタンスプロパティ

これらのプロパティは `Intl.RelativeTimeFormat.prototype` で定義されており、すべての `Intl.RelativeTimeFormat` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`Intl.RelativeTimeFormat` インスタンスの場合、初期値は {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} コンストラクターです。
- `Intl.RelativeTimeFormat.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値で、文字列 `"Intl.RelativeTimeFormat"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : `value` および `unit` を、指定された `Intl.RelativeTimeFormat` オブジェクトのロケールと書式化オプションに従って書式化します。
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : ロケール固有のカスタム形式に使用可能な相対時間の形式を部分的に表現したオブジェクトの {{jsxref("Array")}} を返します。
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化中に計算されたロケールや形式のオプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 例

### 基本的な `format` の使用例

次の例は、英語の相対時間フォーマッターの使用方法を示しています。

```js
// 明示的に渡された既定値を使って
// ロケールの相対時間を生成します
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// 負数の値 (-1) を使った相対時間の形式
rtf.format(-1, "day"); // "1 day ago"

// 正数の値 (1) を使った相対時間の形式
rtf.format(1, "day"); // "in 1 day"
```

### formatToParts の使用例

以下は形式された部品を返す相対時間フォーマッターの生成方法の例です。

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// 日単位の相対時間形式
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.RelativeTimeFormat` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-relativetimeformat/)
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) - v8.dev (2018)
