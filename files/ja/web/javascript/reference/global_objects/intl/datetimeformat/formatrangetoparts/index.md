---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
---

{{JSRef}}

**`Intl.DateTimeFormat.prototype.formatRangeToParts()`** メソッドは、 {{jsxref("Intl.DateTimeFormat")}} フォーマッターで生成される期間の各部品を表すロケール特有のトークンを提供します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

## 構文

```js
formatRangeToParts(startDate, endDate);
```

## 例

### 基本的な formatRangeToParts の使い方

このメソッドは2つの {{jsxref("Date")}} を受け取り、期間を書式化する際の各部品を表す*ロケール特有*のトークンを含む {{jsxref("Array")}} オブジェクトを返します。

> **メモ:** 返値は現在のロケールで表示されるので、以下のものとは異なる可能性があります。

```js
let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'

let fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2));
// > '10:00 – 11:00 AM'

fmt.formatRangeToParts(date1, date2);
// return value:
// [
//   { type: 'hour',      value: '10',  source: "startRange" },
//   { type: 'literal',   value: ':',   source: "startRange" },
//   { type: 'minute',    value: '00',  source: "startRange" },
//   { type: 'literal',   value: ' – ', source: "shared"     },
//   { type: 'hour',      value: '11',  source: "endRange"   },
//   { type: 'literal',   value: ':',   source: "endRange"   },
//   { type: 'minute',    value: '00',  source: "endRange"   },
//   { type: 'literal',   value: ' ',   source: "shared"     },
//   { type: 'dayPeriod', value: 'AM',  source: "shared"     }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
- {{jsxref("Intl.DateTimeFormat")}}
