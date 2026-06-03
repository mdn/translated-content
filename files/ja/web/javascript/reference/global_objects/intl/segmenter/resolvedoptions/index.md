---
title: Intl.Segmenter.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`resolvedOptions()`** は {{jsxref("Intl.Segmenter")}} インスタンスンのメソッドで、この `Segmenter` オブジェクトの初期化中に計算されたオプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Intl.Segmenter.prototype.resolvedOptions()")}}

```js interactive-example
const segmenter = new Intl.Segmenter("fr-FR");
const options = segmenter.resolvedOptions();

console.log(options.locale);
// 予想される結果: "fr-FR"

console.log(options.granularity);
// 予想される結果: "grapheme"
```

## 構文

```js-nolint
resolvedOptions()
```

### 引数

なし。

### 返値

この `Segmenter` オブジェクトの初期化時に計算されたオプションを反映したプロパティを持つ新しいオブジェクトです。このオブジェクトには、記載順に次のプロパティがあります。

- `locale`
  - : 実際に使用されるロケールの {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。これは、[ロケールネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)の処理によって決定されます。出力には、Unicode 拡張キーは含まれません。
- `granularity`
  - : `options` 引数でこのプロパティに指定された値です。必要に応じてデフォルト値が設定されます。値は `"grapheme"`、`"word"`、`"sentence"` のいずれかです。デフォルトは `"grapheme"` です。

## 例

### 基本的な使い方

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### デフォルトの粒度

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### locale のフォールバック

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// Balinese ロケールに対応しておらず、
// デフォルトのロケールが French であるランタイムでは、"fr"
console.log(options.granularity); // "grapheme"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
