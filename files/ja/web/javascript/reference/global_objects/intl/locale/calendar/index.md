---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

**`calendar`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールで使用される暦の種類を返します。

## 解説

世界の大半はグレゴリオ暦を使用していますが、世界各地では地域ごとの暦の種類もいくつか使用されています。対応している暦の種類の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) を参照してください。

`calendar` プロパティの値は、ロケール識別子の `ca` キーまたは {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `calendar` オプションを通じて、構築時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`calendar` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、暦の種類はロケール文字列を介して、またはコンストラクターへの構成オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール文字列による暦の種類の追加

[Unicode ロケール文字列仕様](https://www.unicode.org/reports/tr35/) において、`calendar` は「拡張サブタグ」に該当します。これらのキーは、ロケールに関するデータを追加するもので、拡張子 `-u` を使用してロケール識別子に追加します。したがって、 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期のロケール識別子文字列に暦の種類を追加することができます。暦の種類を追加するには、まず文字列に `-u` 拡張を追加します。次に、暦の種類を追加することを示すために `-ca` 拡張を追加します。最後に、暦の種類を追加します。

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist" と表示
```

### 構成オブジェクトによる暦の種類の追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションで構成オブジェクトの引数があり、暦を含むいくつかの拡張の種類を指定できます。構成オブジェクトの `calendar` プロパティに使用する暦の種類を設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // "buddhist" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCalendars()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars)
- [Unicode 暦識別子](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)（Unicode ロケールデータマークアップ言語仕様書）
