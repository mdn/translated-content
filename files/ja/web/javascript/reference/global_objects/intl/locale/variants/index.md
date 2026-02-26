---
title: Intl.Locale.prototype.variants
short-title: variants
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`variants`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールに関連付けられたバリアントを、ダッシュ(`-`) で区切られた識別子の文字列として、当初指定された順序で返します。

## 解説

バリアントは主要言語IDの一部です。三要素（言語、地域、文字体系）では識別できない言語の派生形を選択します。通常、様々な時代や様々な表記体系における同一言語を表します。例えば、ドイツ語は `1901` と `1996` の表記法バリアントをもち、それぞれ `de-1901` および `de-1996` と表記されます。また「近世英語（1500-1700 年）」バリアントは `en-emodeng` と表記されます。サブタグはダッシュ (`-`) で区切られた複数の識別子を含むことができます。これらの識別子は技術的には順序付けられていませんが、実際には意味的な階層を持つことが多くの場合あります。例えば、スロベニア語のレジア方言は `sl-rozaj` と表記され、レジア方言のサン・ジョルジョ/ビラ方言は `sl-rozaj-biske` と表記されます。

`variants` プロパティの値は、コンストラクタ実行時に設定されます。設定方法は、ロケール識別子の `region` 以降の部分を使用するか、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `variants` オプションを使用します。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`variants` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、バリアントはロケール文字列を介して、またはコンストラクターへの構成オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール文字列からバリアントを追加

バリアントが存在する場合、それらは有効なUnicode言語識別子文字列の末尾部分であり、 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期ロケール識別子文字列に追加できます。バリアントはロケール識別子の必須部分ではないことに注意してください。

```js
const locale = new Intl.Locale("sl-rozaj-biske");
console.log(locale.variants); // "rozaj-biske"
```

### 構成オブジェクト引数からバリアントを追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションの構成オブジェクト引数があります。構成オブジェクトの `variants` プロパティを希望のバリアントに設定し、それをコンストラクターに渡してください。

```js
const locale = new Intl.Locale("sl", { variants: "rozaj-biske" });
console.log(locale.variants); // "rozaj-biske"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode variant subtag](https://www.unicode.org/reports/tr35/#unicode_variant_subtag_validity) - Unicode ロケールデータマークアップ言語仕様書
- [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
