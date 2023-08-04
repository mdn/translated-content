---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 2ec681bd9ad77115496f551c62fee2ba50c9007f
---

{{JSRef}}

**`Intl.Segmenter.prototype.resolvedOptions()`** メソッドは、この [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) オブジェクトの初期化時に計算されたロケールおよび粒度のオプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-resolvedoptions.html")}}

## 構文

```js
resolvedOptions();
```

### 引数

なし。

### 返値

与えられた [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) オブジェクトの初期化時に計算されたロケールおよび照合順序のオプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

生成されたオブジェクトは以下のプロパティを持ちます。

- `locale`
  - : 実際に使用されるロケールの BCP 47 言語タグ。初期化のための BCP 47 言語タグに Unicode 拡張値が含まれていた場合、要求され、このロケールに対応しているキーと値のペアが `locale` に含まれる。
- `granularity`
  - : オプション引数でこのプロパティに指定された値、またはデフォルト値。

## 例

### 基本的な使い方

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### デフォルトの granularity

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
// "fr" on a runtime where the Balinese locale
// is not supported and French is the default locale
console.log(options.granularity); // "grapheme"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
