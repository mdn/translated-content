---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.language
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
---
{{JSRef}}

**`Intl.Locale.prototype.language`** プロパティは、ロケールに関連付けられた言語を返すアクセサープロパティです。

## 解説

言語はロケールの中核的な特徴の一つです。 Unicode 仕様書では、ロケールの言語識別子を言語と地域を合わせたものとして扱います（イギリス英語とアメリカ英語などの方言や変化形を区別するためです）。 {{jsxref("Intl/Locale", "Locale")}} の `language` プロパティは、ロケールの言語サブタグを厳密に返します。

## 例

### ロケール識別子の文字列引数で言語を設定

有効な Unicode 言語識別子となるためには、文字列は言語サブタグで始めなければなりません。 {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターの主要な引数には、有効な Unicode ロケール識別子がなければならないので、コンストラクターを使用する際には必ず言語サブタグを持つ識別子を渡さなければなりません。

```js
let locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // "en" と表示
```

### 構成オブジェクトにより言語を上書き

言語サブタグは指定する必要がありますが、 {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターは構成オブジェクトを取り、これを用いて言語サブタグを上書きすることができます。

```js
let locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // "es" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode 言語サブタグ仕様書](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)
