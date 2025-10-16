---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.DateTimeFormat`** オブジェクトは、言語に応じた日付と時刻の書式化を可能にします。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// 以下の結果は UTC タイムゾーンを想定 - 実行時の結果は異なる可能性がある

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// 予想される結果: "12/20/2020"

// 代替言語（この場合はインドネシア語）を持つ言語の既定の形式を指定する
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// 予想される結果: "20/12/2020"

// "style" オプションを使用して日付と時刻の形式を指定します（例: full, long, medium, short）
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// 予想される結果: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## コンストラクター

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : 新しい `DateTimeFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールにフォールバックせずに対応されるものを配列に収めて返します。

## インスタンスプロパティ

これらのプロパティは `Intl.DateTimeFormat.prototype` 上で定義され、すべての `Intl.DateTimeFormat` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`Intl.DateTimeFormat` インスタンスの場合、初期値は {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}} コンストラクターです。
- `Intl.DateTimeFormat.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値で、文字列 `"Intl.DateTimeFormat"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : ロケールおよびこの `DateTimeFormat` オブジェクトの書式化オプションに則って日付を書式化するゲッター関数です。
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : このメソッドは 2 つの [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を受け取り、この `DateTimeFormat` インスタンスを生成する際に指定されたロケールとオプションに基づいて、最も簡潔な方法で日付の範囲を書式化します。
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : このメソッドは 2 つの [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を受け取り、書式化された日付の範囲の各部分を表すロケール固有のトークンを含むオブジェクトの配列を返します。
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : オブジェクトの {{jsxref("Array")}} を返し、これは専用のロケールを意識した書式で使用することができる部品内の数値文字列を表します。
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : ロケールを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。

## 例

### DateTimeFormat の使用

基本的に、ロケールを指定せずに使用すると、 `DateTimeFormat` は既定のロケールとオプションを使用します。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 引数無しの toLocaleString は実装に依存します。
// 既定のロケール、既定のタイムゾーンです。
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" は、 en-US ろおけーる（言語）で America/Los_Angeles (UTC-0800) タイムゾーンの場合
```

### locales の使用

この例では、ローカライズされた日付と時刻の形式のバリエーションの一部示しています。アプリケーションのユーザーインターフェイスで使用される言語のフォーマットを取得するには、 `locales` 引数を使用して、その言語 (およびおそらくいくつかのフォールバック言語) を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の結果は、タイムゾーンに America/Los_Angeles (UTC-0800, 太平洋標準時) を使用した場合

// アメリカ英語では 月-日-年 の順を使用
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/19/2012"

// イギリス英語では 日-月-年 の順を使用
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "19/12/2012"

// 韓国では 年-月-日 の順を使用
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 19."

// アラビア語圏の大半の国では、アラビア数字を使用している
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "١٩‏/١٢‏/٢٠١٢"

// 日本語の場合、アプリケーションでは日本の暦を使用することが望ましい場合があり、 2012 年は平成 24 年に相当
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "24/12/19"

// 対応していない可能性のある言語（例：バリ語）をリクエストする際は、代替言語（この場合はインドネシア語）を指定する
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "19/12/2012"
```

### options の使用

日付と時刻の書式は `options` 引数を使用してカスタマイズできます。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// 曜日と長い日付を指定してリクエストする
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// アプリケーションは UTC を使用し、それを可視化したい場合がある
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// 時にはより正確に表現したくなるときもある
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// 時には極めて正確でありたいと思うこともある
options.fractionalSecondDigits = 3; // 秒以下の小数点以下の桁数
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// 時にはアメリカでも 24 時間表記が必要だ
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// オプションを指定せずブラウザーの既定のロケールを使用するには、　undefined を使用する
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// 時には時間帯を含めることが役立つこともある
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

使用されるカレンダーと番号付けの形式は、`options` 引数を通じて個別に設定することも可能です。

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "America/New_York" （ユーザーの既定のタイムゾーン）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.DateTimeFormat` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-datetimeformat/)
- {{jsxref("Intl")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
