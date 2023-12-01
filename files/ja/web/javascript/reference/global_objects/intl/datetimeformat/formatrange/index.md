---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
---

{{JSRef}}

**`Intl.DateTimeFormat.prototype.formatRange()`** は、 {{jsxref("Intl.DateTimeFormat")}} オブジェクトがインスタンス化されたときに提供された **`locale`** と **`options`** に基づいて、もっとも簡明な方法で日付の範囲を書式化します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html",
  "taller")}}

## 構文

```js
formatRange(startDate, endDate);
```

## 例

### 基本的な formatRange の使用

このメソッドは 2 つの {{jsxref("Date")}} を受け取り、 {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトがインスタンス化されたときに提供された `locale` と `options` に基づいて日付の範囲を書式化します。

```js
let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
let date3 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'
// > 'Sat, 20 Jan 2007 10:00:00 GMT'

let fmt1 = new Intl.DateTimeFormat("en", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
console.log(fmt1.format(date1));
console.log(fmt1.formatRange(date1, date2));
console.log(fmt1.formatRange(date1, date3));
// > '1/10/07, 10:00 AM'
// > '1/10/07, 10:00 – 11:00 AM'
// > '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'

let fmt2 = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
console.log(fmt2.format(date1));
console.log(fmt2.formatRange(date1, date2));
console.log(fmt2.formatRange(date1, date3));
// > 'Jan 10, 2007'
// > 'Jan 10, 2007'
// > 'Jan 10 – 20, 2007'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
