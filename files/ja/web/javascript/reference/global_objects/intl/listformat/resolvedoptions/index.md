---
title: Intl.ListFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`resolvedOptions()`** は {{jsxref("Intl.ListFormat")}} インスタンスのメソッドで、現在の `ListFormat` オブジェクトの構築時に計算されたロケールとスタイル整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.ListFormat.prototype.resolvedOptions()")}}

```js interactive-example
const deListFormatter = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options = deListFormatter.resolvedOptions();

console.log(options.locale);
// 予想される結果: "de-DE"

console.log(options.style);
// 予想される結果: "long"

console.log(options.type);
// 予想される結果: "disjunction"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

指定された {{jsxref("Intl.ListFormat")}} オブジェクトの構築時に計算されたロケールと整形オプションを反映したプロパティを持つオブジェクトです。

- `locale`
  - : 実際に使用されているロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。これは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のプロセスによって決定されます。出力には、Unicode 拡張キーは記載されません。
- `type`
  - : `options` 引数でこのプロパティに指定された値です。値は `"conjunction"`、`"disjunction"`、`"unit"` のいずれかです。デフォルト値は `"conjunction"` です。
- `style`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"long"`、`"short"`、`"narrow"` のいずれかです。デフォルト値は `"long"` です。

## 例

## resolvedOptions の使用

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" （デフォルト値）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
