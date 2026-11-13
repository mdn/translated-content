---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`region`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールに関連付けられた世界の地域（ふつうは国）を返します。

## 解説

地域は、ロケールを世界の特定の地域に位置づけるための、ロケール識別子の重要な要素となります。ロケールの地域を知ることは、ロケール間の違いを識別する上で非常に重要です。たとえば、イギリスとアメリカ合衆国では英語が使われていますが、両国間では綴りやその他の言語の慣習に違いがあります。ロケールの地域を知ることで、 JavaScript プログラマーがサイトやアプリケーションのコンテンツを世界の様々な地域から見たときに正しく表示されるようにするのに役立ちます。

`region` プロパティの値は、構築時に設定されます。設定方法は、ロケール識別子の `script` の後の部分を使用するか、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `region` オプションを使用します。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`region` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、地域の値はロケール文字列を介して、またはコンストラクターへの設定オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール識別子の文字列引数で地域を設定

地域は、存在する場合、有効な Unicode 言語識別子文字列の 3 番目（`script` が存在する場合、それ以外は 2 番目）の部分であり、{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期ロケール識別子文字列に追加できます。なお、地域はロケール識別子の必須項目ではありません。

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // "US"
```

### 構成オブジェクトから地域を設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションの設定オブジェクト引数があります。設定オブジェクトの `region` プロパティを希望の領域に設定し、それをコンストラクターに渡します。

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // "FR"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode 地域一覧表](https://www.unicode.org/cldr/charts/47/supplemental/territory_containment_un_m_49.html)
