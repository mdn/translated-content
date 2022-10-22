---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCDay()`** メソッドは、協定世界時に基づき、指定された日時の「曜日」を返します。0 は日曜日を表します。

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## 構文

```js-nolint
getUTCDay()
```

### 返値

数値です。
`Date` オブジェクトが有効な日時を表している場合、世界時で指定された日時の曜日を表した整数値（日曜日は 0、月曜日は 1、火曜日は 2、...）です。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

## 例

### getUTCDay() の使用

次の例は、現在日時の曜日の部分を変数 `weekday` に代入します。

```js
const today = new Date();
const weekday = today.getUTCDay();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
