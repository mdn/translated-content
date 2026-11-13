---
title: Intl.PluralRules.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`resolvedOptions()`** は {{jsxref("Intl.PluralRules")}} インスタンスのメソッドで、この `PluralRules` オブジェクトの初期化中に計算されたオプションを反映するプロパティを持つ、新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.PluralRules.prototype.resolvedOptions()")}}

```js interactive-example
const pluralRules1 = new Intl.PluralRules("uk");
const options1 = pluralRules1.resolvedOptions();

const pluralRules2 = new Intl.PluralRules("bn");
const options2 = pluralRules2.resolvedOptions();

console.log(options1.pluralCategories);
// 予想される結果: Array ["few", "many", "one", "other"]

console.log(options2.pluralCategories);
// 予想される結果: Array ["one", "other"]
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `PluralRules` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ新しいオブジェクト。このオブジェクトには、記載順に以下のプロパティがあります。

- `locale`
  - : 実際に使用されているロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。これは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のプロセスによって決定されます。出力には、Unicode 拡張キーは記載されません。
- `type`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"cardinal"` または `"ordinal"` のどちらかです。デフォルト値は `"cardinal"` です。
- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : これらのプロパティには、 `options` 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは `minimumSignificantDigits` と `maximumSignificantDigits` のどちらも `options` 引数で指定されなかった場合のみ存在します。
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : これらのプロパティには、 `options` 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは、少なくとも 1 つのプロパティが `options` 引数で提供された場合にのみ表示されます。
- `pluralCategories`
  - : 指定されたロケールで使用される複数形カテゴリーの {{jsxref("Array")}} で、 "zero", "one", "two", "few", "many", "other" のリストの中から選択します。
- `roundingIncrement`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は、`1`、`2`、`5`、`10`、`20`、`25`、`50`、`100`、`200`、`250`、`500`、`1000`、`2000`、`2500`、`5000`のいずれかです。デフォルト値は`1`です。
- `roundingMode`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は、`"ceil"`、`"floor"`、`"expand"`、`"trunc"`、`"halfCeil"`、`"halfFloor"`、`"halfExpand"`、`"halfTrunc"`、`"halfEven"` のいずれかです。デフォルト値は `"halfExpand"` です。
- `roundingPriority`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"auto"`、`"morePrecision"`、`"lessPrecision"` のいずれかです。デフォルト値は `"auto"` です。
- `trailingZeroDisplay`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"auto"` または `"stripIfInteger"` のどちらかです。デフォルト値は `"auto"` です。

## 例

### resolvedOptions() メソッドの使用

下記コードでは、`PluralRules` オブジェクトの生成と、それに続くそれぞれの解決済みオプションのログ出力について示しています。

```js
// PluralRules インスタンスを生成
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// オプションを解決
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined （maximumSignificantDigits が設定されている）
console.log(usedOptions.maximumFractionDigits); // undefined （maximumSignificantDigits が設定されている）
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); // 2
console.log(usedOptions.roundingIncrement); // 1
console.log(usedOptions.roundingMode); // "halfExpand"
console.log(usedOptions.roundingPriority); // "auto"
console.log(usedOptions.trailingZeroDisplay); // "auto"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
