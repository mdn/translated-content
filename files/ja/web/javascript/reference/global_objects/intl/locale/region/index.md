---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.region
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
---
{{JSRef}}

**`Intl.Locale.prototype.region`** プロパティは、ロケールに関連付けられた世界の地域（ふつうは国）を返すアクセサープロパティです。

## 解説

地域は、ロケールを世界の特定の地域に位置づけるための、ロケール識別子の重要な要素となります。ロケールの地域を知ることは、ロケール間の違いを識別する上で非常に重要です。たとえば、イギリスとアメリカ合衆国では英語が使われていますが、両国間では綴りやその他の言語の慣習に違いがあります。ロケールの地域を知ることで、 JavaScript プログラマーがサイトやアプリケーションのコンテンツを世界の様々な地域から見たときに正しく表示されるようにするのに役立ちます。

## 例

### ロケール識別子の文字列引数で地域を設定

地域は、有効な Unicode 言語識別子文字列の 3 番目の部分であり、これを {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、地域はロケール識別子の必須項目ではありません。

```js
let locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // "US" と表示
```

### 構成オブジェクトから地域を設定

{{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターは構成オブジェクトを取り、これを用いて地域のサブタグとプロパティを設定することができます。

```js
let locale = new Intl.Locale("ja-Jpan", { region: "JP" });
console.log(locale.region); // "JP" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode 地域一覧表](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
