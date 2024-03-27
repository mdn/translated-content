---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---

{{JSRef}}

**`Intl.DateTimeFormat`** オブジェクトは、言語に応じた日付と時刻の書式化を可能にします。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## コンストラクター

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : 新しい `DateTimeFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールにフォールバックせずに対応されるものを配列に収めて返します。

## インスタンスメソッド

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : ロケールおよびこの {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} オブジェクトの書式化オプションに則って日付を書式化するゲッター関数です。
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : オブジェクトの {{jsxref("Array")}} を返し、これは専用のロケールを意識した書式で使用することができる部品内の数値文字列を表します。
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : ローケルを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : このメソッドは 2 つの [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を受け取り、 {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} インスタンスを生成する際に指定されたロケールとオプションに基づいて、最も簡潔な方法で日付の範囲を書式化します。
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : このメソッドは 2 つの [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を受け取り、書式化された日付の範囲の各部分を表すロケール固有のトークンを含むオブジェクトの配列を返します。

## 例

### DateTimeFormat の使用

基本的に、ロケールを指定せずに使用すると、 `DateTimeFormat` は既定のロケールとオプションを使用します。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// → "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### locales の使用

この例では、ローカライズされた日付と時刻の形式のバリエーションの一部示しています。アプリケーションのユーザーインターフェイスで使用される言語のフォーマットを取得するには、 `locales` 引数を使用して、その言語 (およびおそらくいくつかのフォールバック言語) を指定してください。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US English uses month-day-year order
console.log(new Intl.DateTimeFormat("en-US").format(date));
// → "12/19/2012"

// British English uses day-month-year order
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "19/12/2012"

// Korean uses year-month-day order
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// → "2012. 12. 19."

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// → "١٩‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// → "24/12/19"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// → "19/12/2012"
```

### options の使用

日付と時刻の書式は `options` 引数を使用してカスタマイズできます。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// request a weekday along with a long date
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "Thursday, December 20, 2012, GMT"

// sometimes you want to be more precise
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00 pm AEDT"

// sometimes you want to be very precise
options.fractionalSecondDigits = 3; //number digits for fraction-of-seconds
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00.200 pm AEDT"

// sometimes even the US needs 24-hour time
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
// → "12/19/2012, 19:00:00"

// to specify options but use the browser's default locale, use 'default'
console.log(new Intl.DateTimeFormat("default", options).format(date));
// → "12/19/2012, 19:00:00"

// sometimes it's helpful to include the period of the day
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → 10 at night
```

The used calendar and numbering formats can also be set independently via `options` arguments:

```js
var options = { calendar: "chinese", numberingSystem: "arab" };
var dateFormat = new Intl.DateTimeFormat("default", options);
var usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// → "chinese"

console.log(usedOptions.numberingSystem);
// → "arab"

console.log(usedOptions.timeZone);
// → "America/New_York" (the users default timezone)
```

## ポリフィル

[formatjs Intl.DateTimeFormat polyfill](https://formatjs.io/docs/polyfills/intl-datetimeformat)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
