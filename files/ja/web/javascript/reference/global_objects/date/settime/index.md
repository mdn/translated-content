---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{JSRef}}

**`setTime()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日付の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を変更します。これは、 UTC の 1970 年 1 月 1 日午前 0 時を[元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)として定義される、元期からのミリ秒数です。

{{InteractiveExample("JavaScript デモ: Date.prototype.setTime()", "taller")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// 予想される結果: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMs = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMs);

console.log(futureDate);
// 予想される結果: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// メモ: 時間帯は変更されることがあります。
```

## 構文

```js-nolint
setTime(timeValue)
```

### 引数

- `timeValue`
  - : 新しいタイムスタンプを表す整数で、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からのミリ秒数です。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `timeValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 例

### setTime() の使用

```js
const theBigDay = new Date("1999-07-01");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
