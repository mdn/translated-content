---
title: Intl.Locale.prototype.script
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`script`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、ロケールで使われている特定の言語を書くための文字体系を返します。

## 解説

文字体系は、用字系と呼ばれることもありますが、ロケールの核となる属性の一つです。これは、特定の言語を書くために使用される記号や自体の集合を示しています。例えば、英語の文字はラテン文字ですが、韓国語の文字はハングルです。多くの場合、言語（これは必須）は単一の文字体系でしか書かれないので、文字体系を記述することは厳密には必要ありません。ただし、この規則には例外があり、複数の文字体系が適用可能な場合には、使用する文字体系を示すことが重要です。

`script` プロパティの値は、構築時に設定されます。設定方法は、ロケール識別子の `language` の後の部分を通じて、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `script` オプションを通じて行われます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`script` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、文字体系の値はロケール文字列を介して、またはコンストラクターへの設定オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール識別子の文字列引数で文字体系を設定

文字体系は、有効な Unicode 言語識別子文字列の 2 番目の部分であり、これを {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、文字体系はロケール識別子の必須項目ではありません。

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // "Latn" と表示
```

### 構成オブジェクトから文字体系を設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションの構成オブジェクト引数があります。設定オブジェクトの `script` プロパティを希望の文字体系に設定し、それをコンストラクターに渡します。

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // "Jpan" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode script subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity)（Unicode ロケールデータマークアップ言語仕様書）
