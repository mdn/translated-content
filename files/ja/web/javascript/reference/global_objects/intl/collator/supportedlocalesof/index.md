---
title: Intl.Collator.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
tags:
  - Collator
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - メソッド
  - リファレンス
browser-compat: javascript.builtins.Intl.Collator.supportedLocalesOf
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
---
{{JSRef}}

**`Intl.Collator.supportedLocalesOf()`** メソッドは、ランタイムの既定のロケールで代替しなくても照合で対応するロケールを含む配列を返します。

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-supportedlocalesof.html","shorter")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
Intl.Collator.supportedLocalesOf(locales)
Intl.Collator.supportedLocalesOf(locales, options)
```

### 引数

- `locales`
  - : BCP 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `locales` 引数の一般的な形式については、 {{jsxref("Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`lookup`" および "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxref("Intl", "Intl", "#ロケールネゴシエーション", 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく複数形の書式で対応されているものを含みます。

## 解説

`locales` で指定されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムがロケールの照合に対応しているもので、使用しているロケール照合アルゴリズムが、既定のロケールで代替することなく一致するとみなすものです。

## 例

### supportedLocalesOf() の使用

インドネシア語とドイツ語に対応しているもの、バリ語に対応していないランタイムを想定すると、ピンインの照合がインドネシア語では使用されておらず、インドネシアに特化したドイツ語に対応している可能性が低いとしても、 `supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返します。これは "`lookup`" アルゴリズムの仕様であることに注意してください。 "`best fit`" マッチャーは、ほとんどのバリ語話者がインドネシア語も理解しているので、インドネシア語がバリ語に適切であると判断し、バリ語の言語タグも返すかもしれません。

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.Collator.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
