---
title: Intl.PluralRules.prototype.selectRange()
short-title: selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`selectRange()`** は {{jsxref("Intl.PluralRules")}} インターフェイスのメソッドで、2 つの値を受け取り、ロケールを考慮した書式設定に使用する複数形ルールを示す文字列を返します。

## 構文

```js-nolint
selectRange(startRange, endRange)
```

### 引数

- `startRange`
  - : 範囲の先頭を表す数値です。
- `endRange`
  - : 範囲の末尾を表す数値です。

### 返値

文字列で、指定された範囲の複数形のカテゴリーを表す文字列です。これは `zero`, `one`, `two`, `few`, `many`, `other` のいずれかであり、[LDML 言語複数ルール](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html)でローカライズが指定されているロケールに関連するものです。

## 解説

この関数は、 {{jsxref("Intl.PluralRules")}} オブジェクトのロケールや書式オプションに応じて、複数形のカテゴリーを選択します。

概念的には、この動作は単一の基数詞や序数詞に対して複数形の規則を取得する場合と同じです。
言語には範囲を記述する形式が 1 つ以上存在し、このメソッドは指定されたロケールと書式設定オプションに基づいて、適切な形式を返します。
英語では "1–10 apples" のように複数形の形式が 1 つしかなく、このメソッドは `other` を返します。
他の言語では、複数の形式が存在する場合があります。

## 例

### selectRange() の使用

```js
new Intl.PluralRules("sl").selectRange(102, 201); // 'few'

new Intl.PluralRules("pt").selectRange(102, 102); // 'other'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
