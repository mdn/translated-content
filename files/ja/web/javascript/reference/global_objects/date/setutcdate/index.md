---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCDate()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時の月内の「日」を協定世界時に基づいて変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// 予想される結果: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// 予想される結果: 19
```

## 構文

```js-nolint
setUTCDate(dateValue)
```

### 引数

- `dateValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `dateValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

もし `dateValue` がその月の日付値の範囲外だった場合、 `setDate()` は {{jsxref("Date") }} オブジェクトをそれに応じて更新します。

例えば、 `dateValue` に 0 が指定された場合、日付は前月の最終日に設定されます。もし `dateValue` に 40 を使用した場合、{{jsxref("Date")}} オブジェクトに格納されている月が 6 月であれば、日は 10 に変更され、月は 7 月に増加します。

もし `dateValue` に負の数が指定された場合、日付は前月の最終日から逆算して設定されます。 -1 の場合、日付は前月の最終日の 1 日前に設定されます。

## 例

### setUTCDate() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
