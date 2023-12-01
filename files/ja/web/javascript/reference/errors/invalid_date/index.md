---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid date" は、無効な日付を示す文字列が {{jsxref("Date")}} または {{jsxref("Date.parse()")}} に与えらえた場合に発生します。

## メッセージ

```js
RangeError: invalid date (Edge)
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## エラー種別

{{jsxref("RangeError")}}

## エラーの原因

無効な日付を示す文字列が {{jsxref("Date")}} または {{jsxref("Date.parse()")}} に渡されたことです。

## 例

### 無効なケース

認識できない文字列や、 ISO フォーマットの文字列に不正な要素の値を含む日付の場合は、通常 {{jsxref("NaN")}} を返します。しかし実装によっては、 Firefox における次のケースのように、不適合な ISO フォーマットの文字列で `RangeError: invalid date` が発生することもあります。

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

一方、これは Firefox で {{jsxref("NaN")}} を返します。

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

詳細は {{jsxref("Date.parse()")}} のドキュメントをご覧ください。

### 有効な場合

```js example-good
new Date("05 October 2011 14:48 UTC");
new Date(1317826080); // Unix Time Stamp for 05 October 2011 14:48:00 UTC
```

## 関連情報

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
