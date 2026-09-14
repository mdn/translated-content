---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`numberingSystem`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールが使用する[記数法](https://en.wikipedia.org/wiki/Numeral_system)を返します。

## 解説

対応している記数法の種類の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) を参照してください。

`numberingSystem` プロパティの値は、ロケール識別子の `nu` キー、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `numberingSystem` オプションを通じて、コンストラクション時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`numberingSystem` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、記数法はロケール文字列を介して、またはコンストラクターへの設定オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール文字列から記数法を設定

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、 `numberingSystem` は「拡張サブタグ」の一つです。これらのサブタグは、ロケールに関する追加データを追加するもので、拡張キー `-u` を使用してロケール識別子に追加されます。{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期ロケール識別子文字列に記数法を追加するには、まず `-u` 拡張キーが存在しない場合にはこれを追加します。次に、 `-nu` 拡張キーを追加して、記数法の値を追加していることを示します。最後に、文字列に記数法の値を追加します。

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong" と表示
```

### 構成オブジェクト引数から `numberingSystem` の値を設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これを使用して拡張の種類を渡すことができます。構成オブジェクトの `numberingSystem` プロパティを任意の記数法に設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getNumberingSystems()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems)
- [標準 Unicode 記数法の詳細](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
