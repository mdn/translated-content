---
title: Intl.Collator.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`resolvedOptions()`** は {{jsxref("Intl.Collator")}} インスタンスのメソッドで、この `Collator` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ、新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.Collator.prototype.resolvedOptions")}}

```js interactive-example
const numberDe = new Intl.NumberFormat("de-DE");
const numberAr = new Intl.NumberFormat("ar");

console.log(numberDe.resolvedOptions().numberingSystem);
// 予想される結果: "latn"

console.log(numberAr.resolvedOptions().numberingSystem);
// 予想される結果: "arab"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `Collator` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ、新しいオブジェクトです。このオブジェクトは以下のプロパティを、掲載順に保持します。

- `locale`
  - : 実際に使用されているロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}で、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)プロセスで定められます。Unicode の `co`、`kn`、`kf` 拡張キーのみが、リクエストされ、かつ対応している場合に限り、出力に含まれる可能性があります。
- `usage`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"sort"` または `"search"` のどちらかです。デフォルトは `"sort"` です。
- `sensitivity`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"base"`、`"accent"`、`"case"`、`"variant"` のいずれかです。`"sort"` を使用する場合のデフォルトは `"variant"` ですが、`"search"` を使用する場合はロケールに依存します。
- `ignorePunctuation`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。これは論理値です。デフォルト値は、タイ語 (`th`) の場合は `true`、それ以外の言語の場合は `false` です。
- `collation`
  - : このプロパティの値は、`options` 引数で指定するか、Unicode 拡張キー `"co"` を使用して指定します。必要に応じてデフォルト値が設定されます。これは、このロケールで対応している[照合型](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している照合型)です。デフォルトは `"default"` です。
- `numeric`
  - : このプロパティには、`options` 引数で指定された値、または Unicode 拡張キー `"kn"` を使用して指定された値が設定されます。必要に応じてデフォルト値が設定されます。これは論理値です。デフォルトは `false` です。実装がこの Unicode 拡張キーに対応していない場合、このプロパティは省略されます。
- `caseFirst`
  - : このプロパティには、`options` 引数で指定された値、または Unicode 拡張キー `"kf"` を使用して指定された値が設定されます。必要に応じてデフォルト値が代入されます。値は `"upper"`、`"lower"`、`"false"` のいずれかです。デフォルトは `"false"` です。実装がこの Unicode 拡張キーに対応していない場合、このプロパティは省略されます。s

## 例

### resolvedOptions メソッドの使用

```js
const de = new Intl.Collator("de", { sensitivity: "base" });
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
