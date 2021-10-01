---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.supportedLocalesOf
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
---
{{JSRef}}

**`Intl.DateTimeFormat.supportedLocalesOf()`** メソッドは、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含む配列を返します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-supportedlocalesof.html","shorter")}}


## 構文

```js
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 {{jsxref("Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの一致アルゴリズムです。指定可能な値は `lookup` および `best fit` で、既定値は `best fit` です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#Locale_negotiation", 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含みます。

## 解説

`locales` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムが日時のロケールに対応しているもので、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### supportedLocalesOf() の使用

日時の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 pinyin の照合は日時の書式には関係なく、インドネシア語でも使用されません。ここでの `lookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
