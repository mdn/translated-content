---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCSeconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「秒」を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// 予想される結果: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// 予想される結果: 39
```

## 構文

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### 引数

- `secondsValue`
  - : 「秒」を表す 0 から 59 までの間の整数値。
- `msValue` {{optional_inline}}
  - : ミリ秒を表す 0 から 999 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`msValue` 引数を指定しない場合、{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setUTCSeconds()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 加算され、秒が 40 になります。

## 例

### setUTCSeconds() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
