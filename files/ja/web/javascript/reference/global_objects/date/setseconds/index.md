---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setSeconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「秒」や「ミリ秒」を変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// 予想される結果: 42

console.log(event);
// 予想される結果: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
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

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`msValue` 引数を指定しなかった場合、{{jsxref("Date/getMilliseconds", "getMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setSeconds()` が {{jsxref("Date")}} オブジェクトの日時情報の更新を試みます。
例えば、 `secondsValue` に 100 を指定した場合、 {{jsxref("Date")}} オブジェクトに格納された「分」に 1 が加算され、秒が 40 になります。

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
