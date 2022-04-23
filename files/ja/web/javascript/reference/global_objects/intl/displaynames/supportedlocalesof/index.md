---
title: Intl.DisplayNames.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
tags:
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.supportedLocalesOf
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
---
{{JSRef}}

**`Intl.DisplayNames.supportedLocalesOf()`** メソッドは、指定されたロケールのうち、ランタイムの既定のロケールで代替せずに表示名に対応しているものの配列を返します。

## 構文

```js
Intl.DisplayNames.supportedLocalesOf(locales)
Intl.DisplayNames.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 {{jsxref("Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `localeMatcher`
      - : 使用するロケール照合アルゴリズムです。指定可能な値は "`lookup`" および "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#Locale_negotiation", 1)}} のページを参照してください。

### 返値

指定したロケールタグうち、ランタイムの既定のロケールで代替せずに表示名に対応しているものを表す文字列の配列です。

## 解説

`locales` で指定された言語タグのサブセットが入った配列を返します。返される言語タグは、表示名について、使用するロケール照合アルゴリズムで一致しているとみなされ、ランタイムが既定のロケールで代替することなく対応しているものです。

## 例

### supportedLocalesOf() の使用

表示名についてインドネシア語とドイツ語に対応しているが、バリ語に対応していないランタイムを想定した場合、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は表示名には関係なく、インドネシア語では使用されません。これは "`lookup`" アルゴリズムの仕様であることに注意してください。 "`best fit`" で照合すると、バリ語の話者のほとんどはインドネシア語も理解しているので、インドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.DisplayNames.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
