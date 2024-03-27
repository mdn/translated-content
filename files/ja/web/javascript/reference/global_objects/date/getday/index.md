---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{JSRef}}

**`getDay()`** メソッドは、地方時に基づき、指定された日付の曜日を返します。 0 は日曜日を表します。「日」を取得する方法は {{jsxref("Date.prototype.getDate()")}} をご覧ください。

{{EmbedInteractiveExample("pages/js/date-getday.html", "shorter")}}

## 構文

```js-nolint
getDay()
```

### 返値

整数値で、 0 から 6 までの値を取り、地方時に基づいて指定された日付の曜日に対応し、 0 は日曜日、 1 は月曜日、 2 は火曜日のようになります。

## 例

### getDay の使用

以下の 2 行目の文は、 [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトである `xmas95` の値に基づき、`weekday` に 1 という値を代入します。1995 年 12 月 25 日は月曜日です。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

> **メモ:** 必要であれば、曜日の完全な名前 (例えば "`Monday`") は [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に `options` 引数を設定することで取得することができます。このメソッドを使用すれば、国際化がより簡単になります。
>
> ```js
> const options = { weekday: "long" };
> console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
> // Monday
> console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
> // Montag
> ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
