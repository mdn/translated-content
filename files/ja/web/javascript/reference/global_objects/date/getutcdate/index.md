---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCDate()`** メソッドは、協定世界時に基づき、指定された日時の月内の日（1 ～ 31）を返します。

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## 構文

```js-nolint
getUTCDate()
```

### 返値

数字です。
`Date` オブジェクトが有効な日時を表している場合は、指定された日時の曜日を表す 1 から 31 までの整数値（世界標準時による）。
それ以外の場合は、 `Date` オブジェクトが有効な日時を表していない場合は [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) を返します。

## 例

### getUTCDate() の使用

次の例は、現在日時の「日」の部分を変数 `dayOfMonth` に代入します。

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
