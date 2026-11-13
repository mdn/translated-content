---
title: Intl.Segmenter() コンストラクター
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.Segmenter()`** コンストラクターは {{jsxref("Intl.Segmenter")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.Segmenter() コンストラクター")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// 予想される結果: 'Que'

console.log(iterator.next().value.segment);
// 予想される結果: ' '
```

## 構文

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> [!NOTE]
> `Intl.Segmenter()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用してのみ構築可能です。`new` を使わずに呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `locales` {{optional_inline}}
- : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列または {{jsxref("Intl.Locale")}} インスタンス、またはそのようなロケール識別子の配列です。`undefined` が渡された場合、または指定されたロケール識別子がどれも使用できない場合、ランタイムのデフォルトロケールが使用されています。 `locales` 引数の一般的な形と解釈については、[`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティの一部または全部を持つオブジェクト（すべてが省略可能です）。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズム。使用可能な値は `"lookup"` と `"best fit"` です。デフォルト値は `"best fit"` です。このオプションの詳細については、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のページを参照してください。
    - `granularity`
      - : 入力をどの程度の粒度で分割すべきか。指定可能な値は次の通りです。
        - `"grapheme"` （デフォルト）
          - : ロケールに基づいて、書記素クラスター（ユーザーが認識する文字）の境界で、入力を区間に分割します。
        - `"word"`
          - : ロケールに基づいて、単語の区切りで入力を区間に分割します。
        - `"sentence"`
          - : ロケールに基づいて、文の境界で入力を区間に分割します。

### 返値

新しい [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) のインスタンスです。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に不正な値が含まれていた場合に発生します。

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
// text は '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。' と分割されるので、8 が記録されます。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
