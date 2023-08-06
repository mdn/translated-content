---
title: Intl.NumberFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
---

{{JSRef}}

**`Intl.ListFormat.supportedLocalesOf()`** メソッドは、ランタイムの既定のロケールで代替する必要なく数値の書式で対応されているものを含む配列を返します。

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-supportedlocalesof.html","shorter")}}

## 構文

```
Intl.NumberFormat.supportedLocalesOf(locales[, options])
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 {{jsxref("Intl", "Intl のページ", "#ロケールの識別とネゴシエーション", 1)}}を参照してください。
- `options`

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの一致アルゴリズムです。指定可能な値は `lookup` および `best fit` で、既定値は `best fit` です。このオプションの詳細は、 {{jsxref("Intl", "Intl のページ", "#Locale_negotiation", 1)}}を参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく数値の書式で対応されているものを含みます。

## 解説

`locales` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムが数値のロケールに対応しているもので、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### supportedLocalesOf() の使用

数値の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は数値の書式には関係なく、インドネシア語でも使用されません。ここでの `lookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
var locales = ["ban", "id-u-co-pinyin", "de-ID"];
var options = { localeMatcher: "lookup" };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.NumberFormat.supportedLocalesOf")}}

## 関連情報

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
