---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setDate()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づいてこの日時の月内の日を変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());
// 予想される結果: 24

event.setDate(32);
// Only 31 days in August!

console.log(event.getDate());
// 予想される結果: 1
```

## 構文

```js-nolint
setDate(dateValue)
```

### 引数

- `dateValue`
  - : 月内の「日」を表す整数の値です。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `dateValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

指定した数値が指定した範囲外の場合、Date オブジェクトの日付情報がそれに応じて更新されます。例えば、 {{jsxref("Date")}} オブジェクトが 6 月 1 日を保持している場合、 `dateValue` を 40 に変更すると日付は 7 月 10 日になり、 `dateValue` を 0 に変更すると日付は前月の最終日である 5 月 31 日になります。

## 例

### setDate() の使用

```js
const theBigDay = new Date(1962, 6, 7, 12); // 1962-07-07 正午（月は 0 起点）
const theBigDay2 = new Date(theBigDay).setDate(24); // 1962-07-24
const theBigDay3 = new Date(theBigDay).setDate(32); // 1962-08-01
const theBigDay4 = new Date(theBigDay).setDate(22); // 1962-07-22
const theBigDay5 = new Date(theBigDay).setDate(0); // 1962-06-30
const theBigDay6 = new Date(theBigDay).setDate(98); // 1962-10-06
const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date/Date", "Date()")}}
- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
