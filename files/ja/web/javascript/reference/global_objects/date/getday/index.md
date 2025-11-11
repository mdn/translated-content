---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getDay()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、この日付の曜日を返します。 0 は日曜日を表します。「日」を取得する方法は {{jsxref("Date.prototype.getDate()")}} をご覧ください。

{{InteractiveExample("JavaScript デモ: Date.prototype.getDay()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// 日曜日 - 土曜日 : 0 - 6

console.log(day1);
// 予想される結果: 2
```

## 構文

```js-nolint
getDay()
```

### 引数

なし。

### 返値

整数値で、 0 から 6 までの値を取り、地方時に基づいて指定された日時の曜日に対応し、 0 は日曜日、 1 は月曜日、 2 は火曜日のようになります。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

`getDay()` の返値は 0 から始まります。これは、例えば、曜日の配列をインデックス付けする場合に有益です。

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

ただし、国際化のためには、代わりに `options` 引数付き {{jsxref("Intl.DateTimeFormat")}} を使用することをお勧めします。

```js
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

## 例

### getDay() の使用

変数 `weekday` には、{{jsxref("Date")}} オブジェクト `xmas95` の値に基づいて、値 `1` が指定されます。これは、1995 年 12 月 25 日は月曜日であるためです。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
