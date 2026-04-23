---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCDate()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の月内の日を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCDate()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// 予想される結果: 19

console.log(date2.getUTCDate());
// 予想される結果: 20
```

## 構文

```js-nolint
getUTCDate()
```

### 引数

なし。

### 返値

指定された日時の協定世界時に基づく月内の日を表す、1 から 31 までの整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getUTCDate() の使用

次の例は、現在日時の「日」の部分を変数 `dayOfMonth` に代入します。

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
