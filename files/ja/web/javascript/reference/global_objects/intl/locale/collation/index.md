---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`collation`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、個のロケールの[照合順序](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation)を返します。これはこのロケールの文字列をロケールの規則に従って並べ替えるために使用されます。

## 解説

照合順序とは、文字列を並べ替える処理です。検索クエリーの結果からデータベース内のレコードの順序付けまで、文字列をソートして特定の順序に配置しなければならないあらゆる場面で使用されています。文字列を並べ替えるという概念は単純に見えるかもしれませんが、その順序の概念は領域や言語によって異なる場合があります。対応している照合順序の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) を参照してください。

`collation` プロパティの値は、ロケール識別子の `co` キーまたは {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `collation` オプションを通じて、構築時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`collation` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールのサブタグと同様、照合順序はロケール文字列やコンストラクターの構成オブジェクトの引数で {{jsxref("Intl.Locale")}} オブジェクトに追加することができます。

### ロケール文字列による照合順序の追加

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、照合順序は「拡張サブタグ」の一つです。これらのサブタグは、ロケールに関する追加データを追加するもので、`-u` 拡張を使用してロケール識別子に追加されます。つまり、照合順序は、 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} のコンストラクターに渡される初期のロケール識別子文字列に追加することができます。照合順序を追加するには、まず文字列に `-u` 拡張を追加します。次に、照合順序の型を追加することを示すために `-co` 拡張を追加します。最後に、照合順序を文字列に追加します。

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin" と表示
```

### 構成オブジェクト引数による照合順序の追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには照合順序を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `collation` プロパティを任意の照合順序に設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCollations()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations)
