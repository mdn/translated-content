---
title: Intl.DateTimeFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatRange()`** は {{jsxref("Intl.DateTimeFormat")}} インスタンスのメソッドで、この `Intl.DateTimeFormat` オブジェクトがインスタンス化されたときに提供されたロケールとオプションに基づいて、もっとも簡明な方法で日時の範囲を書式化します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.prototype.formatRange()", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const options2 = { year: "2-digit", month: "numeric", day: "numeric" };

const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const endDate = new Date(Date.UTC(2008, 0, 10, 11, 0, 0));

const dateTimeFormat = new Intl.DateTimeFormat("en", options1);
console.log(dateTimeFormat.formatRange(startDate, endDate));
// 予想される結果: "Wednesday, January 10, 2007 – Thursday, January 10, 2008"

const dateTimeFormat2 = new Intl.DateTimeFormat("en", options2);
console.log(dateTimeFormat2.formatRange(startDate, endDate));
// 予想される結果: "1/10/07 – 1/10/08"
```

## 構文

```js-nolint
formatRange(startDate, endDate)
```

### 引数

- `startDate`
  - : 日時範囲の先頭。{{jsxref("Date")}} または {{jsxref("Temporal.PlainDateTime")}} オブジェクトを指定可能。加えて、{{jsxref("Temporal.PlainTime")}}、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} オブジェクトを指定できます。ただし、`DateTimeFormat` オブジェクトが日付の関連する少なくとも 1 つの部分を表示するように設定されている場合に限ります。
    > [!NOTE]
    > {{jsxref("Temporal.ZonedDateTime")}} オブジェクトは常に `TypeError` を発生します。代わりに {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} を使用するか、{{jsxref("Temporal.PlainDateTime")}} オブジェクトに変換してください。
- `endDate`
  - : 日時範囲の末尾。`startDate`と同じ型を保持しなければならない。

### 返値

指定された日時範囲を、この {{jsxref("Intl.DateTimeFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化した文字列。開始日時と終了日時が、出力精度において等価である場合、出力には単一の日時のみが含まれます。

## 例

### 基本的な formatRange の使用

このメソッドは 2 つの {{jsxref("Date")}} を受け取り、 {{jsxref("Intl.DateTimeFormat")}} オブジェクトがインスタンス化されたときに提供された `locale` と `options` に基づいて日付の範囲を書式化します。

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT
const date3 = new Date(Date.UTC(1906, 0, 20, 10, 0, 0)); // Sat, 20 Jan 1906 10:00:00 GMT

const fmt1 = new Intl.DateTimeFormat("en", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
console.log(fmt1.format(date1)); // '1/10/06, 10:00 AM'
console.log(fmt1.formatRange(date1, date2)); // '1/10/06, 10:00 – 11:00 AM'
console.log(fmt1.formatRange(date1, date3)); // '1/10/06, 10:00 AM – 1/20/07, 10:00 AM'

const fmt2 = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
console.log(fmt2.format(date1)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date2)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date3)); // 'Jan 10 – 20, 1906'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
