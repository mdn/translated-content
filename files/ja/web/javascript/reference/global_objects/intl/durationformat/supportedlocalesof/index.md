---
title: Intl.DurationFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/supportedLocalesOf
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

**`Intl.DurationFormat.supportedLocalesOf()`** 静的メソッドは、実行時の既定のロケールに代替されることなく、経過時間の書式に対応する、指定されたロケールの配列を返します。

## 構文

```js-nolint
Intl.DurationFormat.supportedLocalesOf(locales)
Intl.DurationFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式と解釈については、 [`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つことがあるオブジェクトです。
    - `localeMatcher`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は `"lookup"` および `"best fit"` で、既定値は `"best fit"` です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。

### 返値

経過時間の書式で、ランタイムの既定のロケールに代替されることなく、指定されたロケールタグのサブセットに対応する文字列の配列です。

## 例

### supportedLocalesOf() の使用

経過時間の書式化で、インドネシア語とドイツ語には対応しているが、バリ語に対応していないランタイムを想定すると、`pinyin` 照合は経過時間の書式化とは関係がなく、インドネシア語では使用されないにもかかわらず、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを、変更せずに返します。また、インドネシア語専用のドイツ語が対応している可能性は低いです。
ここで `"lookup"` アルゴリズムの仕様に注意してください。 `"best fit"` マッチャーは、ほとんどのバリ語話者はインドネシア語も理解するため、インドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返します。

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DurationFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DurationFormat")}}
