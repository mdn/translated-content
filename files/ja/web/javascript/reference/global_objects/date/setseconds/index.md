---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setSeconds()`** メソッドは、地方時に基づき、指定された日時の「秒」を設定します。

{{InteractiveExample("JavaScript Demo: Date.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## 構文

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### 引数

- `secondsValue`
  - : 日付の「秒」を表す 0 から 59 までの間の整数値。
- `msValue` {{Optional_inline}}
  - : 日付の「ミリ秒」を表す 0 から 999 までの間の整数。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`msValue` 引数を指定しなかった場合、{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setSeconds()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、 `secondsValue` に 100 を指定した場合、分に 1 が加算され、秒が 40 になります。

## 例

### setSeconds() の使用

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
