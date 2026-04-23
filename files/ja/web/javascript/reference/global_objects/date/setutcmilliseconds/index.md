---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCMilliseconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「ミリ秒」を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCMilliseconds()")}}

```js interactive-example
const date1 = new Date("2018-01-24T12:38:29.069Z");

console.log(date1.getUTCMilliseconds());
// 予想される結果: 69

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());
// 予想される結果: 420
```

## 構文

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### 引数

- `millisecondsValue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `millisecondsValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCMilliseconds()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`millisecondsValue` に 1100 を指定した場合、{{jsxref("Date")}} オブジェクトに格納された秒の数値に 1 が加算され、ミリ秒に 100 が使用されます。

## 例

### setUTCMilliseconds() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
