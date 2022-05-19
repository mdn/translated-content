---
title: Intl.ListFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
tags:
  - 国際化
  - Intl
  - JavaScript
  - ListFormat
  - メソッド
  - リファレンス
browser-compat: javascript.builtins.Intl.ListFormat.supportedLocalesOf
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
---
{{JSRef}}

**`Intl.ListFormat.supportedLocalesOf()`** メソッドは、指定したロケールのうち、ランタイムの既定のロケールに代替する必要なくリストの書式化に対応しているロケールを含む配列を返します。

## 構文

```js
Intl.ListFormat.supportedLocalesOf(locales)
Intl.ListFormat.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 {{jsxref("Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 以下のプロパティを持つ可能性があるオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`lookup`" および "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#ロケールネゴシエーション", 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なくリストの書式化に対応されているものを含みます。

## 解説

`locales` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムがリストの書式化に対応しているロケールで、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### supportedLocalesOf() の使用

リストの書式化でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合はリストの書式化には関係なく、インドネシア語でも使用されません。ここでの `lookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
