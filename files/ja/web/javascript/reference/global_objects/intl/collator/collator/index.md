---
title: Intl.Collator() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
tags:
  - Collator
  - コンストラクター
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - リファレンス
browser-compat: javascript.builtins.Intl.Collator.Collator
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
---
{{JSRef}}

**`Intl.Collator()`** コンストラクターは、言語を考慮した文字列の比較を可能にする
{{jsxref("Intl/Collator", "Intl.Collator")}} オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)
```

### 引数

- `locales` {{optional_inline}}

  - : 任意。 BCP47 言語タグの文字列またはその配列。 `locales` 引数の一般的な形式や解釈については {{jsxref("Global_Objects/Intl", "Intl のページ", "#ロケールの識別とネゴシエーション", 1)}}を参照してください。

  次の Unicode 拡張キーが使用可能です。

    > **Note:** これらのキーは通常、 `options` でも設定することができます（下記でリストアップします）。両方が設定されている場合は、 `options` のプロパティが優先されます。

    - `co`
      - : 特定のロケールにおける比較方法の変化形を指定します。指定可能な値は次の通りです。
        - `big5han`
        - `compat`
        - `dict`
        - `direct`
        - `ducet`
        - `eor`
        - `gb2312`
        - `phonebk` （ドイツ語のみ対応）
        - `phonetic`
        - `pinyin`
        - `reformed`
        - `searchjl`
        - `stroke`
        - `trad`
        - `unihan`
        - `zhuyin`
        > **Note:**  このオプションは `options` プロパティ "`collation`" からも設定できます。
    - `kn`
      - : "1" < "2" < "10" のような数値照合順序を使用するかどうかを指定します。設定可能な値は "`true`" と "`false`" です。
        このオプションは、 `options` の "`numeric`" プロパティでも設定することができます。
    - `kf`
      - : 大文字と小文字のどちらを先に並べるかを指定します。使用できる値は "`upper`", "`lower`", "`false`" （ロケールの既定値を使用）です。このオプションは、 `options` の "`caseFirst`" プロパティでも設定することができます。

- `options` {{optional_inline}}

  - : 任意。以下のプロパティの一部またはすべてを持つオブジェクトです。

    - `localeMatcher`
      - : ロケールの照合に使用するアルゴリズム。指定可能な値は "`lookup`" と "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細については {{jsxref("Global_Objects/Intl", "Intl", "#ロケールネゴシエーション", 1)}} のページを参照してください。
    - `usage`
      - : この比較がソートのためなのか、それとも一致する文字列を検索するためなのか。使用可能な値は "`sort`" および "`search`" で、既定値は "`sort`" です。
    - `sensitivity`

      - : 文字の違いをどの程度までを区別するかです。以下の値を指定可能です。

        - "`base`": ベース文字が異なれば、異なる文字であると評価します。 例: a ≠ b, a = á, a = A
        - "`accent`": ベース文字が異なるか、またはアクセントその他の発音区別符号が異なれば、異なる文字であると評価します。 例: a ≠ b, a ≠ á, a = A
        - "`case`": ベース文字が異なるか、ベース文字が同一でも大文字小文字が異なれば、異なる文字であると評価します。 例: a ≠ b, a = á, a ≠ A
        - "`variant`": ベース文字、アクセントその他の発音区別符号、および大文字小文字のいずれかが異なれば、異なる文字であると評価します。他の違いも考慮されるかもしれません。 例: a ≠ b, a ≠ á, a ≠ A

        既定値は、 `usage` が "`sort`" の場合は "`variant`"、 "`search`" の場合はロケールに依存します。

    - `ignorePunctuation`
      - : 句読点を無視するかどうか。指定可能な値は `true` または `false` で、既定値は `false` です。
    - `numeric`

      - : "1" < "2" < "10" のように数値として比較を行うかどうかです。可能な値は `true` および `false` です。既定値は `false` です。

        > **Note:** このオプションは Unicode 拡張キーの `kn` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

    - `caseFirst`

      - : 大文字と小文字のどちらを先に並べるかです。指定可能な値は "`upper`", "`lower`", "`false`" （ロケールの既定の動作）です。大文字と小文字のどちらを先に並べるかは `options` のプロパティでも Unicode 拡張キーでも指定可能です。両方で指定された場合、 `options` プロパティの指定が優先されます。

        > **Note:** このオプションは Unicode 拡張キーの `kf` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

    - `collation`
      - : 特定のロケールにおける比較方法の変化形を指定します。指定可能な値は次の通りです。
        - `big5han`
        - `compat`
        - `dict`
        - `direct`
        - `ducet`
        - `eor`
        - `gb2312`
        - `phonebk` （ドイツ語のみ対応）
        - `phonetic`
        - `pinyin`
        - `reformed`
        - `searchjl`
        - `stroke`
        - `trad`
        - `unihan`
        - `zhuyin`
        > **Note:** このオプションは Unicode 拡張キーの `co` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

## 例

### Collator の使用

次の例では、文字列が別の文字列の前であるか、後であるか、または同じレベルで発生したのかの様々な可能性のある結果を示しています。

```js
console.log(new Intl.Collator().compare('a', 'c')); // → 負の値
console.log(new Intl.Collator().compare('c', 'a')); // → 正の値
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

上記のコードで示された結果は、ブラウザーやブラウザーのバージョンによって異なる可能性があることに注意してください。これは、値が実装固有のものであるためです。つまり、仕様では前後の値が負と正の値であることだけが要求されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
