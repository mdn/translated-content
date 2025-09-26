---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCMonth()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCMonth()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// 予想される結果: 11

// January
console.log(date2.getUTCMonth());
// 予想される結果: 0
```

## 構文

```js-nolint
getUTCMonth()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく「月」を表す 0 から 11 までの整数です。1 月ならば 0、 2 月ならば 1 となります。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getUTCMonth() の使用

次の例は、現在日時の「月」の部分を変数 `month` に代入します。

```js
const today = new Date();
const month = today.getUTCMonth();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
