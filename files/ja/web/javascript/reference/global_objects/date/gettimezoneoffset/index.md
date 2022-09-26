---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---

{{JSRef}}

**`getTimezoneOffset()`** メソッドは、 (ホストシステム上における) 現在のロケールから協定世界時 (UTC) までのタイムゾーンの差を分単位で返します。

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## 構文

```
dateObj.getTimezoneOffset()
```

### 返値

ホストシステム上の現在の日付から協定世界時 (UTC) までの分単位のタイムゾーンオフセットを表す数値です。

## 解説

タイムゾーンオフセットは、地方時から協定世界時 (UTC) までの間の分単位の差です。

このオフセットは、地方時が UTC より遅れている時刻の場合は正の数になり、進んでいる時刻の場合は負の数になることを意味します。例えば、タイムゾーンが UTC+10:00（オーストラリア東部標準時、ロシアのウラジオストク時、チャモロ標準時）の場合、-600 が返されます。

| 現在のロケール | UTC-8 | UTC | UTC+3 |
| -------------- | ----- | --- | ----- |
| 返値           | 480   | 0   | -180  |

返されるタイムゾーンオフセットは呼ばれた Date で適用されているものです。

ホストシステムで夏時間が設定されている場合、Date が表す日時と夏時間が適用される日時によって、オフセットが変わります。

## 例

### getTimezoneOffset() の使用

```js
// Get current timezone offset for host device
let x = new Date();
let currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
// 1

// Get timezone offset for International Labour Day (May 1) in 2016
// Be careful, the Date() constructor uses 0-indexed months, so May is
// represented with 4 (and not 5)
let labourDay = new Date(2016, 4, 1)
let labourDayOffset = labourDay.getTimezoneOffset() / 60;
```

## 仕様書

| 仕様書                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getTimezoneOffset")}}

## 関連情報

- {{jsxref("Date")}}
