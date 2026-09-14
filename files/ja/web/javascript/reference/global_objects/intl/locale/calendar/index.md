---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`calendar`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、個のロケールで使用される暦の種類を返します。

## 解説

世界の大半はグレゴリオ暦を使用していますが、世界各地でいくつかの地域的な暦体系が使用されています。対応している暦の種類の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) を参照してください。

`calendar` プロパティの値は、ロケール識別子の `ca` キーまたは {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `calendar` オプションを通じて、構築時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`calendar` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、暦の種類はロケール文字列を介して、またはコンストラクターへの構成オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

## ロケール文字列へのカレンダーの追加

[Unicode locale string spec](https://www.unicode.org/reports/tr35/) において、`calendar` は「拡張サブタグ」に該当します。これらのキーは、ロケールに関するデータを追加するもので、拡張子 `-u` を使用してロケール識別子に追加します。したがって、 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期のロケール識別子文字列に暦の種類を追加することができます。暦の種類を追加するには、まず文字列に `-u` 拡張を追加します。次に、暦の種類を追加することを示すために `-ca` 拡張を追加します。最後に、暦を文字列に追加します。

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist" と表示
```

### 構成オブジェクトによる暦の追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションで構成オブジェクトの引数があり、カレンダーを含めた拡張の種類を渡すために使用することができます。構成オブジェクトの `calendar` プロパティを望みの暦の値に設定し、コンストラクターに渡します。

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
