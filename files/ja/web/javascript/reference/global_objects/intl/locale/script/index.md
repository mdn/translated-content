---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.script
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
---
{{JSRef}}

**`Intl.Locale.prototype.script`** プロパティは、ロケールで使われている特定の言語を書くための文字体系を返すアクセサープロパティです。

## 解説

文字体系は、用字系と呼ばれることもありますが、ロケールの核となる属性の一つです。これは、特定の言語を書くために使用される記号やグリフの集合を示しています。例えば、英語の文字はラテン文字ですが、韓国語の文字はハングルです。多くの場合、言語（これは必須）は単一の文字体系でしか書かれないので、文字体系を記述することは厳密には必要ありません。この規則には例外があり、完全な Unicode 言語識別子を持つためには、可能な限り文字体系を示すことが重要です。

## 例

### ロケール識別子の文字列引数で文字体系を設定

文字体系は、有効な Unicode 言語識別子文字列の 2 番目の部分であり、これを {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、文字体系はロケール識別子の必須項目ではありません。

```js
let locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // "Latn" と表示
```

### 構成オブジェクトから文字体系を設定

{{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターは構成オブジェクトを取り、これを用いて文字体系のサブタグとプロパティを設定することができます。

```js
let locale = new Intl.Locale("ja-JP", { script: "Jpan" });
console.log(locale.script); // "Jpan" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode の文字体系サブタグ仕様書](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity)
