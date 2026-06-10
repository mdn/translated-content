---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: c43e46090257fbfd33c4dd5cac0cdbd1d5d1c274
---

**`Intl.DurationFormat`** オブジェクトにより、言語を考慮した経過時間の書式化ができます。

## コンストラクター

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : 新しい `Intl.DurationFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行環境のデフォルトのロケールで代替されることなく対応するものを、配列に収めて返します。

## インスタンスプロパティ

これらのプロパティは `Intl.DurationFormat.prototype` で定義されており、すべての `Intl.DurationFormat` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Intl.DurationFormat` インスタンスの場合、初期値は {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}} コンストラクターとなります。
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.DurationFormat"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : この `DurationFormat` オブジェクトのロケールおよび書式化オプションに従って経過時間を書式化するゲッター関数です。
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : 書式化された経過時間の各部分を表すオブジェクトの配列 ({{jsxref("Array")}}) を返します。
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化時に計算されたロケールや書式化オプションを反映したプロパティを持つ、新しいオブジェクトを返します。

## 例

### Intl.DurationFormat の使用

以下の例は、`Intl.DurationFormat` オブジェクトを使用して、さまざまなロケールおよびスタイルで再生時間オブジェクトを書式化する方法を示しています。

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// スタイルを "long" に、ロケールを "fr-FR" に設定
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// スタイルを "short" に、ロケールを "en" に設定
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// スタイルを "narrow" に、ロケールを "pt" に設定
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1 h 46 min 40 s"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.DurationFormat` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-durationformat/)
- {{jsxref("Intl")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
