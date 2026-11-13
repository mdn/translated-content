---
title: Intl.DateTimeFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.DateTimeFormat.supportedLocalesOf()`** は静的メソッドで、指定されたロケールのうち、実行環境のデフォルトのロケールで代替されることなく、日時の書式に対応するものを配列に収めて返します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options));
// 予想される結果: Array ["id-u-co-pinyin", "de-ID"]
// （注：実際の表示はブラウザーによって異なる場合があります）
```

## 構文

```js-nolint
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列、またはそのようなロケール識別子の配列です。`locales` 引数の一般的な形と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 省略可能です。以下のプロパティを持つ可能性があるオブジェクトです。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズムです。指定可能な値は `"lookup"` および `"best fit"` です。デフォルト値は `"best fit"` です。このオプションについての情報は、{{jsxref("Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。

### 返値

指定したロケールタグのうち、実行環境のデフォルトのロケールで代替する必要なく、日時の書式に対応しているものを表す文字列の配列です。

## 例

### supportedLocalesOf() の使用

実行環境がインドネシア語とドイツ語の日時の書式に対応しているものの、バリ語には対応していないと想定した場合、`supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返します。`pinyin` の照合順序は日時の書式には関係なく、インドネシア語でも使用されません。また、インドネシアに特化したドイツ語にはおそらく対応していません。ここでの `"lookup"` アルゴリズムの仕様に注意してください。`"best fit"` の照合では、バリ語話者のほとんどがインドネシア語も理解しているので、インドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
