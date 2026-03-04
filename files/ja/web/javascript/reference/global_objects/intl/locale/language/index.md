---
title: Intl.Locale.prototype.language
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`language`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールに関連付けられた言語を返します。

## 解説

言語はロケールの中核的な特徴の一つです。 Unicode 仕様書では、ロケールの言語識別子を言語と地域を合わせたものとして扱います（イギリス英語とアメリカ英語などの方言や変化形を区別するためです）。{{jsxref("Intl.Locale")}} の `language` プロパティは、ロケールの言語サブタグを厳密に返します。

`language` プロパティの値は、ロケール識別子の最初の部分、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `language` オプションを通じて、コンストラクション時に設定されます。両方が存在する場合、後者が優先されます。

`language` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、言語はロケール文字列を介して、またはコンストラクターへの設定オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール識別子の文字列引数で言語を設定

有効な Unicode 言語識別子となるためには、文字列は言語サブタグで始めなければなりません。 {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターの主要な引数には、有効な Unicode ロケール識別子がなければならないので、コンストラクターを使用する際には必ず言語サブタグを持つ識別子を渡さなければなりません。

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // "en" と表示
```

### 構成オブジェクトにより言語を上書き

言語サブタグは指定する必要がありますが、{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターは構成オブジェクトを取り、これを用いて言語サブタグを上書きすることができます。

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // "es"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode language subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)（Unicode ロケールデータマークアップ言語仕様書）
