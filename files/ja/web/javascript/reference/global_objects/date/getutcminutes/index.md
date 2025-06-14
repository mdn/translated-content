---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCMinutes()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「分」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// 予想される結果: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// 予想される結果: 45
```

## 構文

```js-nolint
getUTCMinutes()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく「分」を表す 0 から 59 までの整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getUTCMinutes() の使用

次の例は、現在時刻の「分」部を変数 `minutes` に代入します。

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
