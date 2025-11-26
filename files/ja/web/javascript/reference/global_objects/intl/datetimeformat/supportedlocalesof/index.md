---
title: Intl.DateTimeFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.DateTimeFormat.supportedLocalesOf()`** は静的メソッドで、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含む配列を返します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options));
// 予想される結果: Array ["id-u-co-pinyin", "de-ID"]
// (注: 正確な出力結果はブラウザーに依存することがあります)
```

## 構文

```js-nolint
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列、またはそのようなロケール識別子の配列です。`locales` 引数の一般的な形と解釈については、[`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 省略可能です。以下のプロパティを持つ可能性があるオブジェクトです。
    - `localeMatcher`
      - : 使用するロケールの一致アルゴリズムです。指定可能な値は `lookup` および `best fit` で、既定値は `best fit` です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#Locale_negotiation", 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含みます。

## 例

### supportedLocalesOf() の使用

日時の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は日時の書式には関係なく、インドネシア語でも使用されません。ここでの `"lookup"` アルゴリズムの仕様に注意してください。バリ語話者のほとんどはインドネシア語も理解しているので、 `"best fit"` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

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
