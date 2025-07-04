---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCHours()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「時」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// 予想される結果: 12

console.log(date2.getUTCHours());
// 予想される結果: 10
```

## 構文

```js-nolint
getUTCHours()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく「時」を表す 0 から 23 までの整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getUTCHours() の使用

次の例は、現在時刻の「時」の部分を変数 `hours` に代入します。

```js
const today = new Date();
const hours = today.getUTCHours();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
