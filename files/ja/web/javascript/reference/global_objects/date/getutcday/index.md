---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCDay()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「曜日」を返します。0 は日曜日を表します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCDay()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// 予想される結果: 2

// Wednesday
console.log(date2.getUTCDay());
// 予想される結果: 3
```

## 構文

```js-nolint
getUTCDay()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時における曜日に対応する整数。日曜日は 0、月曜日は 1、火曜日は 2、といった具合です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

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
