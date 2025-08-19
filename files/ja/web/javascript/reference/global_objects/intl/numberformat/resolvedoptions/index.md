---
title: Intl.NumberFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`resolvedOptions()`** は {{jsxref("Intl.NumberFormat")}} インスタンスのメソッドで、この `NumberFormat` オブジェクトの初期化中に計算されたオプションを反映するプロパティを持つ、新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.NumberFormat.prototype.resolvedOptions()")}}

```js interactive-example
const numberFormat = new Intl.NumberFormat("de-DE");
const options = numberFormat.resolvedOptions();

console.log(options.locale);
// 予想される結果 (Firefox / Safari): "de-DE"
// 予想される結果 (Chrome): "de"

console.log(options.numberingSystem);
// 予想される結果: "latn"

console.log(options.style);
// 予想される結果: "decimal"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `NumberFormat` オブジェクトの初期化中に計算されたオプションを反映するプロパティを持つ新しいオブジェクト。このオブジェクトには、掲載る順に次のプロパティがあります。

- `locale`
  - : 実際に使用されているロケールに対する BCP 47 言語タグは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)プロセスによって決定されます。リクエストされた場合、出力に入る可能性があるのは Unicode 拡張キーの `nu` のみです。
- `numberingSystem`
  - : `options` 引数で指定されたこのプロパティの値、または Unicode 拡張キー `"nu"` を使用して、必要に応じて既定値が設定されます。これは、このロケールに対応している[記数法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法)です。既定値はロケールによって異なります。
- `style`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が入力されます。値は `"decimal"`、`"percent"`、`"currency"`、または`"unit"` のいずれかです。既定値は `"decimal"` です。
- `currency` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値。 `style` が `"currency"` の場合にのみ存在します。ISO 4217 通貨コードです。詳細については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers) を参照してください。 `style` が `"currency"` の場合は必須であるため、既定値はありません。
- `currencyDisplay` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値で、必要に応じて既定値が入力されます。 `style` が `"currency"` の場合にのみ存在します。値は `"code"`、`"symbol"`、`"narrowSymbol"`、`"name"` のいずれかです。既定値は `"symbol"` です。
- `currencySign` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値で、必要に応じて既定値が設定されます。 `style` が `"currency"` の場合にのみ存在します。値は `"standard"` または`"accounting"` のどちらかです。既定値は `"standard"` です。
- `unit` {{optional_inline}}
  - : `options` 引数で指定されたこのプロパティの値。 `style` が `"unit"` の場合にのみ存在します。これは[認可された単位識別子](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)で、[完全な CLDR リスト](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)にあります。 `style` が `"unit"` の場合は必須であるため、既定値はありません。
- `unitDisplay` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値で、必要に応じて既定値が設定されます。 `style` が `"unit"` の場合にのみ存在します。値は `"short"`、`"narrow"`、`"long"` のいずれかです。既定値は `"short"` です。
- `minimumIntegerDigits`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が設定されます。 `1` から `21` までの整数です。既定値は `1` です。
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : `options` 引数でこれらのプロパティに指定された値で、必要に応じて既定値が設定されます。これらは必要な場合にのみ存在します。詳細については、[桁オプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#桁オプション)を参照してください。これは、`0` から `100` までの整数です。
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : `options` 引数でこれらのプロパティに指定された値で、必要に応じて既定値が設定されます。これらは必要な場合にのみ存在します。詳細については、[桁オプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#桁オプション)を参照してください。これは、`1` から `21` までの整数です。
- `useGrouping`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が設定され、一部の値が正規化されています。値は、`"always"`、`"auto"`、`"min2"`、または論理値 `false` のいずれかです。 `notation` が `"compact"` の場合の既定値は `"min2"`、それ以外の場合は `"auto"` です。
- `notation`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が設定されます。値は、`"standard"`、`"scientific"`、`"engineering"`、`"compact"` のいずれかです。既定値は `"standard"` です。
- `compactDisplay` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値で、必要に応じて既定値が設定されます。 `notation` が `"compact"` の場合にのみ存在します。値は `"short"` または`"long"` のどちらかです。既定値は `"short"` です。
- `signDisplay`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が入力されます。値は、`"auto"`、`"always"`、`"exceptZero"`、`"negative"`、`"never"` のいずれかです。既定値は `"auto"` です。
- `roundingIncrement`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が入力されます。値は、`1`、`2`、`5`、`10`、`20`、`25`、`50`、`100`、`200`、`250`、`500`、`1000`、`2000`、`2500`、`5000` のいずれかです。既定値は `1` です。
- `roundingMode`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が入力されます。値は、`"ceil"`、`"floor"`、`"expand"`、`"trunc"`、`"halfCeil"`、`"halfFloor"`、`"halfExpand"`、`"halfTrunc"`、`"halfEven"` のいずれかです。既定値は `"halfExpand"` です。
- `roundingPriority`
  - : `options` 引数で指定されたこのプロパティの値で、必要に応じて既定値が設定されます。値は `"auto"`、`"morePrecision"`、`"lessPrecision"` のいずれかです。既定値は `"auto"` です。
- `trailingZeroDisplay`
  - : `options` 引数でこのプロパティに指定された値で、必要に応じて既定値が設定されます。値は `"auto"` または `"stripIfInteger"` のどちらかです。既定値は `"auto"` です。

## 例

### `resolvedOptions` メソッドの使用

```js
// NumberFormat の作成
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// options の解決
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined （"notation" は "compact" に設定されていない）
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined （maximumFractionDigits が設定されている）
console.log(usedOptions.maximumSignificantDigits); // undefined （maximumFractionDigits が設定されている）
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
