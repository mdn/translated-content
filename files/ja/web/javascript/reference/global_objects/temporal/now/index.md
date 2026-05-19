---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`Temporal.Now`** は名前空間オブジェクトで、様々な形式で現在時刻を取得するための静的メソッドを持っています。

## 解説

他の多くのグローバルオブジェクトとは異なり、`Temporal.Now` はコンストラクターではありません。したがって、[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new) で使用したり、`Temporal.Now` オブジェクトを関数として呼び出したりすることはできません。`Temporal.Now` のすべてのプロパティとメソッドは静的です（{{jsxref("Math")}} オブジェクトと同様）。

最も基本的な点として、システム時刻はオペレーティングシステムによって Unix 元期からの経過時間として返されます（通常はミリ秒単位の精度ですが、ナノ秒単位の場合もあります）。{{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} は、この時刻を {{jsxref("Temporal.Instant")}} オブジェクトとして返します。

ある瞬間は、あるタイムゾーン（デフォルトではシステムタイムゾーンである {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}）で、{{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} と同様の方法で解釈することができます。{{jsxref("Temporal.ZonedDateTime")}} オブジェクトを取得するには、{{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} を使用することができます。同時に、{{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}、{{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}、{{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} を使用することで、日時や時刻のさまざまな部分を取得することもできます。

例えば、コンピューターのタイムゾーンが "America/New_York" に設定されている場合、`Temporal.Now.zonedDateTimeISO()` は `2021-08-01T10:40:12.345-04:00[America/New_York]` のようなゾーン付きの日時を返します。この場合、`Temporal.Now.plainTimeISO()` は、このタイムゾーン付き日時から時刻部分のみを返します。つまり、`10:40:12.345` となります。しかし、`Temporal.Now.plainTimeISO("UTC")` を呼び出すと、UTC タイムゾーンにおけるゾーン付き日時から時間部分のみが返されます。つまり、`14:40:12.345` となります。これは、相手側が異なるタイムゾーンでの時刻を期待しているような、システム間の通信において特に有用です。

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に対する保護機能を提供するために、 `someFile.lastModified` の精度がブラウザーの設定に応じて丸められることがあります。Firefox では、`privacy.reduceTimerPrecision` 設定はデフォルトで有効になっており、デフォルトで 2 ミリ秒になります。同時に、`privacy.resistFingerprinting` を有効にすることもできます。その場合、精度は 100 ミリ秒、または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のうち、大きい方になります。

例えば、時刻の精度を下げた場合、`Temporal.Now.instant().epochMilliseconds` の結果は常に 2 の倍数になり、`privacy.resistFingerprinting` を有効にした場合は 100 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
Temporal.Now.instant().epochMilliseconds;
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
Temporal.Now.instant().epochMilliseconds;
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 静的プロパティ

- `Temporal.Now[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Temporal.Now"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}
  - : 現在の時刻を {{jsxref("Temporal.Instant")}} オブジェクトとして返します。
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}
  - : 現在の日付を、ISO 8601 暦および指定されたタイムゾーンに基づく {{jsxref("Temporal.PlainDate")}} オブジェクトとして返します。
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}
  - : 現在の日付と時刻を、ISO 8601 暦および指定されたタイムゾーンに基づいて、{{jsxref("Temporal.PlainDateTime")}} オブジェクトとして返します。
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}
  - : 指定されたタイムゾーンにおける現在の時刻を、{{jsxref("Temporal.PlainTime")}} オブジェクトとして返します。
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}
  - : システムの現在のタイムゾーンを表す [タイムゾーン識別子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) を返します。
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}
  - : 現在の日付と時刻を、ISO 8601 暦および指定されたタイムゾーンに基づいて、{{jsxref("Temporal.ZonedDateTime")}} オブジェクトとして返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
