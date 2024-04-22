---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
l10n:
  sourceCommit: 2d6d6a1d9f8ba2073c9f8e1bbc6b4e20204fb53c
---

{{JSRef}}

**`Intl.Segmenter.supportedLocalesOf()`** メソッドは、指定したロケールのうち、ランタイムのデフォルトロケールにフォールバックすることなくサポートされているものを含む配列を返します。

{{EmbedInteractiveExample("pages/js/intl-segmenter-supportedlocalesof.html", "shorter")}}

## 構文

```js
supportedLocalesOf(locales);
supportedLocalesOf(locales, options);
```

### 引数

- `locales`
  - : BCP 47 の言語タグを持つ文字列、またはそのような文字列の配列。引数 `locales` の一般的な形式と解釈については、[`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション) のページを参照してください。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つ可能性があるオブジェクト。
    - `localeMatcher`
      - : 使用するロケールマッチングアルゴリズム。使用可能な値は `"lookup"` および `"best fit"` で、デフォルトは `"best fit"` です。このオプションの詳細については、[`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション) のページを参照ください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムのデフォルトロケールにフォールバックすることなくセグメンテーションでサポートされるものです。

## 例

### supportedLocalesOf() の使用方法

実行環境がリスト形式でインドネシア語とドイツ語をサポートし、バリ語をサポートしないと仮定すると、`supportedLocalesOf` はインドネシア語とドイツ語の言語タグを変更せずに返します。`pinyin` の照合順序はインドネシア語のセグメンテーションに関係なく、またインドネシア語に特化したドイツ語はないためサポートされません。ここで `"lookup"` アルゴリズムの仕様に注意してください。`"best fit"` マッチでは、バリ島のほとんどの住民がインドネシア語を理解するため、インドネシア語がバリ島の言語に適切に一致すると判断し、バリ島の言語タグも返すことがあります。

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
