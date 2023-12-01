---
title: Intl.Segmenter() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: a3dd560fabb1fe4051f6273f41b337a5b1245a6e
---

**`Intl.Segmenter()`** コンストラクターは、ロケールに依存したテキスト分割を可能にする [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## 構文

```js
new Intl.Segmenter();
new Intl.Segmenter(locales);
new Intl.Segmenter(locales, options);
```

> **メモ:** `Intl.Segmenter()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用してのみ構築可能です。`new` を使わずに呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales` {{ optional_inline }}
  - : BCP 47 の言語タグを持つ文字列、またはそのような文字列の配列。引数 `locales` の一般的な形式と解釈については、[`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション) のページを参照してください。
- `options` {{ optional_inline }}
  - : 以下のプロパティの一部または全部を持つオブジェクト。
    - `granularity` {{ optional_inline }}
      - : 文字列。使用可能な値は以下の通り。
        - `"grapheme"` (default)
          - : ロケールに応じた書記素クラスター（ユーザーが認識する文字）の境界で、入力を分割します。
        - `"word"`
          - : ロケールに応じた単語の境界で、入力を分割します。
        - `"sentence"`
          - : ロケールに応じた文の境界で、入力を分割します。
    - `localeMatcher` {{ optional_inline }}
      - : 使用するロケールマッチングアルゴリズム。使用できる値は以下の通り。
        - `"best fit"` (default)
          - : ランタイムは、ルックアップアルゴリズムの結果よりも適したロケールを選択する可能性があります。
        - `"lookup"`
          - : [BCP 47 Lookup algorithm](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) を使用して、`locales` からロケールを選択します。`locales` に含まれる各ロケールについて、ランタイムは最初にサポートされるロケールを返します（場合によっては、サポートされるロケールを見つけるために、与えられたロケールタグのサブタグの制限を取り除きます。つまり、`locales` として `"de-CH"` を指定すると、`"de"` はサポートされているが `"de-CH"` はサポートされていない場合、`"de"` を使用することになる可能性があります）。

### 返値

新しい [`Intl.Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) のインスタンスです。

## 例

### 基本的な使い方

次の例は、日本語を使って文字列中の単語を数えるものです（`String` のメソッドで文字列を分割すると不正確な結果が得られます）。

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// logs 8 as the text is segmented as '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
