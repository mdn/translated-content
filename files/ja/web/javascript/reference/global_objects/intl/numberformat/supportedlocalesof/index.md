---
title: Intl.NumberFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Intl.NumberFormat.supportedLocalesOf()`** は静的メソッドで、ランタイムの既定のロケールに代替されることなく、数値の書式化に対応する、指定されたロケールを含む配列を返します。

{{InteractiveExample("JavaScript デモ: Intl.NumberFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.NumberFormat.supportedLocalesOf(locales, options));
// 予想される結果: Array ["id-u-co-pinyin", "de-ID"]
// （メモ: 正確な出力はブラウザーによって異なる場合があります）
```

## 構文

```js-nolint
Intl.NumberFormat.supportedLocalesOf(locales)
Intl.NumberFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 [`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つことがあるオブジェクトです。
    - `localeMatcher`
      - : 使用するロケールの一致アルｓゴリズムです。指定可能な値は `"lookup"` および `"best fit"` で、既定値は `"best fit"` です。このオプションの詳細は、 {{jsxref("Intl", "Intl のページ", "#ロケールの識別とネゴシエーション", 1)}}を参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく数値の書式で対応されているものを含みます。

## 例

### supportedLocalesOf() の使用

数値の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は数値の書式には関係なく、インドネシア語でも使用されません。ここでの `"lookup"` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `"best fit"` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
