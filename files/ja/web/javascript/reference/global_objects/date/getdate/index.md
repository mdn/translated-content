---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getDate()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、この日付の「日」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getDate()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();

console.log(date1);
// 予想される結果: 19
```

## 構文

```js-nolint
getDate()
```

### 引数

なし。

### 返値

1 から 31 までの間の整数値。地方時に基づき、指定された日時の「日」を表します。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getDate() の使用

以下の 2 行目の文は、{{jsxref("Date")}} オブジェクトである `xmas95` の値に基づき、変数 `day` に 25 という値を代入します。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();

console.log(day); // 25
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
