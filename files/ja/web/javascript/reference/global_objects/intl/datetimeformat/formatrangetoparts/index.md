---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatRangeToParts()`** は {{jsxref("Intl.DateTimeFormat")}} インスタンスのメソッドで、{{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}} によって返される書式化文字列のそれぞれの部分を表すオブジェクトの配列を返します。これは、ロケール特定のトークンから独自の文字列を構築するのに便利です。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.prototype.formatRangeToParts()", "taller")}}

```js interactive-example
const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0)); // > 'Wed, 10 Jan 2007 10:00:00 GMT'
const endDate = new Date(Date.UTC(2007, 0, 10, 11, 0, 0)); // > 'Wed, 10 Jan 2007 11:00:00 GMT'

const dateTimeFormat = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

const parts = dateTimeFormat.formatRangeToParts(startDate, endDate);
for (const part of parts) {
  console.log(part);
}
// 予想される結果（GMT タイムゾーンで）:
// Object { type: "hour", value: "2", source: "startRange" }
// Object { type: "literal", value: ":", source: "startRange" }
// Object { type: "minute", value: "00", source: "startRange" }
// Object { type: "literal", value: " – ", source: "shared" }
// Object { type: "hour", value: "3", source: "endRange" }
// Object { type: "literal", value: ":", source: "endRange" }
// Object { type: "minute", value: "00", source: "endRange" }
// Object { type: "literal", value: " ", source: "shared" }
// Object { type: "dayPeriod", value: "AM", source: "shared" }
```

## 構文

```js-nolint
formatRangeToParts(startDate, endDate)
```

### 引数

- `startDate`
  - : 日時範囲の先頭。{{jsxref("Date")}} または {{jsxref("Temporal.PlainDateTime")}} オブジェクトを指定可能。加えて、{{jsxref("Temporal.PlainTime")}}、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} オブジェクトを指定できます。ただし、`DateTimeFormat` オブジェクトが日付の関連する少なくとも 1 つの部分を表示するように設定されている場合に限ります。
    > [!NOTE]
    > {{jsxref("Temporal.ZonedDateTime")}} オブジェクトは常に `TypeError` を発生します。代わりに {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} を使用するか、{{jsxref("Temporal.PlainDateTime")}} オブジェクトに変換してください。
- `endDate`
  - : 日時範囲の末尾。`startDate` と同じ型を保持しなければならない。

### 返値

{{jsxref("Array")}} 型のオブジェクト配列で、書式化された日時の範囲をパーツごとに格納します。各オブジェクトは `type`、`value`、`source` の 3 つのプロパティを持ち、それぞれ文字列を保持します。`value` を指定された順序で連結すると、{{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}} と同じ文字列が生成されます。`type` の値は {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} と同じ値を持つかの末井があります。`source` は以下のいずれかになります。

- `startRange`
  - : このトークンは開始日時の一部です。
- `endRange`
  - : このトークンは終了日時の一部です。
- `shared`
  - : このトークンは開始日時と終了日時で共有されています。例えば、開始日時と終了日時が同じ日付期間を共有する場合、そのトークンは再利用される可能性があります。範囲パターン自体を構成するリテラル（区切り文字 `" – "` など）も同時に `shared` とマークされます。

開始日時と終了日時が出力の精度において等価である場合、出力は開始日時に {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} を呼び出した場合と同じトークンリストを保有し、すべてのトークンが `source: "shared"` としてマークされます。

## 例

### 基本的な formatRangeToParts の使い方

`formatRange()`メソッドは、直接操作できないローカライズされた不透明な文字列を出力します。

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

ただし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたり、他のテキストと組み合わせて表示したりしたい場合があります。`formatRangeToParts()`メソッドは、同じ情報を部分ごとに生成します。

```js
console.log(fmt.formatRangeToParts(date1, date2));

// 返値:
[
  { type: "hour", value: "10", source: "startRange" },
  { type: "literal", value: ":", source: "startRange" },
  { type: "minute", value: "00", source: "startRange" },
  { type: "literal", value: " – ", source: "shared" },
  { type: "hour", value: "11", source: "endRange" },
  { type: "literal", value: ":", source: "endRange" },
  { type: "minute", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "dayPeriod", value: "AM", source: "shared" },
];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
