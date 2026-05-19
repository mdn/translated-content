---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`resolvedOptions()`** は {{jsxref("Intl.RelativeTimeFormat")}} のメソッドで、この `RelativeTimeFormat` オブジェクトの初期化時に計算されたロケールや日時や書式化オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("ja", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// 予想される結果: "ja, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// 予想される結果: "es, long, auto"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `RelativeTimeFormat` オブジェクトの初期化中に計算されたオプションを反映したプロパティを持つ、新しいオブジェクト。このオブジェクトは、以下の一覧の順序でプロパティを持ちます。

- `locale`
  - : 実際に使用されるロケールの{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}であり、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)プロセスによって決まります。リクエストされた場合、`nu` の Unicode 拡張キーのみが出力結果に含まれる可能性があります。
- `style`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"long"`, `"short"`, `"narrow"` のいずれかです。デフォルト値は `"long"` です。
- `numeric`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"always"` または `"auto"` のどちらかです。デフォルトは `"always"` です。
- `numberingSystem`
  - : `options` 引数で指定された値、または Unicode 拡張キー `"nu"` を使用して指定された値です。必要に応じてデフォルト値が設定されます。これは、このロケールで対応している[記数法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法)です。デフォルト値はロケールによって異なります。

## 例

### resolvedOptions() メソッドの使用

```js
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
