---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setMilliseconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「ミリ秒」を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// 予想される結果: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// 予想される結果: 456
```

## 構文

```js-nolint
setMilliseconds(millisecondsValue)
```

### 引数

- `millisecondsValue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `millisecondsValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

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
