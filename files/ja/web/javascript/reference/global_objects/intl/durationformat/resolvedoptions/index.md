---
title: Intl.DurationFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

**`resolvedOptions()`** は {{jsxref("Intl.DurationFormat")}} インスタンスのメソッドで、現在の `DurationFormat` オブジェクトの初期化時に計算されたロケールとスタイルの書式オプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `DurationFormat` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ新しいオブジェクトです。このオブジェクトには、記載順に以下のプロパティがあります。

- `locale`
  - : 実際に使用されているロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。これは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のプロセスによって決定されます。出力に含まれる可能性があるのは、要求された場合の Unicode の `nu` 拡張キーのみです。
- `numberingSystem`
  - : `options` 引数で指定された値、または Unicode 拡張キー `"nu"` を使用して指定された値です。必要に応じてデフォルト値が設定されます。これは、このロケールで対応している[記数法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法)です。デフォルト値はロケールによって異なります。
- `style`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"long"`、`"short"`、`"narrow"`、`"digital"` のいずれかです。デフォルトは `"short"` です。
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `microseconds`, `microsecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : `options` 引数でこれらのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。それぞれのプロパティの有効な値とデフォルト値については、コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) 引数を参照してください。
- `fractionalDigits` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値です。`options` で指定されている場合にのみ存在します。0 以上 9 以下の整数です。

## 例

### resolvedOptions メソッドの使用

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "short"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "short"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
