---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setMilliseconds()`** メソッドは、地方時に基づき、指定された日時の「ミリ秒」を設定します。

{{InteractiveExample("JavaScript Demo: Date.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
```

## 構文

```js-nolint
setMilliseconds(millisecondsValue)
```

### 引数

- `millisecondsValue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、1005 を指定した場合、秒の数値が 1 加算され、ミリ秒に 5 が使用されます。

## 例

### setMilliseconds() の使用

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
