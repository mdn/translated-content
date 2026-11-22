---
title: Intl.DisplayNames.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

**`resolvedOptions()`** は {{jsxref("Intl.DisplayNames")}} インスタンスのメソッドで、現在の `DisplayNames` オブジェクトの初期化時に計算されたロケールとスタイルの書式オプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `DisplayNames` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ新しいオブジェクトです。このオブジェクトには、記載順に以下のプロパティがあります。

- `locale`
  - : 実際に使用されているロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。これは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のプロセスによって決定されます。出力には、Unicode 拡張キーは記載されません。
- `style`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"narrow"`、`"short"`、`"long"` のいずれかです。デフォルト値は `"long"` です。
- `type`
  - : `options` 引数でこのプロパティに指定された値です。値は `"language"`、`"region"`、`"script"`、`"currency"`、`"calendar"`、`"dateTimeField"` のいずれかです。必須項目であるため、デフォルト値はありません。
- `fallback`
  - : `options` 引数でこのプロパティに指定された値です。`"code"` または `"none"` のどちらかです。デフォルト値は `"code"` です。
- `languageDisplay` {{optional_inline}}
  - : `options` 引数でこのプロパティに指定された値です。`type` が `"language"` の場合にのみ存在します。値は `"dialect"` または `"standard"` のどちらかです。デフォルト値は `"dialect"` です。

## 例

### resolvedOptions の使用

```js
const displayNames = new Intl.DisplayNames(["de-DE"], { type: "region" });

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "long"
console.log(usedOptions.type); // "region"
console.log(usedOptions.fallback); // "code"
```

```js
const displayNames = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.type); // "language"
console.log(usedOptions.languageDisplay); // "standard"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
