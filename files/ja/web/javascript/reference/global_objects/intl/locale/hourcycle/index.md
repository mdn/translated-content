---
title: Intl.Locale.prototype.hourCycle
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`hourCycle`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールの時制を返します。

## 解説

世界中で使用されている主な時刻表記方式（時制）には、12 時間制と 24 時間制の 2 種類があります。対応している時制の一覧については、[`Intl.Locale.prototype.getHourCycles()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types) を参照してください。

`hourCycle` プロパティの値は、ロケール識別子の `hc` キーまたは {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `hourCycle` オプションを通じて、コンストラクション時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`hourCycle` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

これらの例は、時制データを {{jsxref("Intl.Locale")}} オブジェクトに追加する方法を示しています。

### ロケール文字列による時制の追加

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、時制はは「拡張サブタグ」の一つです。これらのサブタグは、ロケールに関する追加データを追加するもので、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、時制の種類を {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。時制の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-hc` 拡張キーを追加して、時制の値を追加していることを示します。最後に、時制の値を文字列に追加します。

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23" と表示
```

### 構成オブジェクト引数から時制を追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには時制を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `hourCycle` プロパティを任意の時制に設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getHourCycles()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles)
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)（Unicode ロケールデータマークアップ言語仕様書）
