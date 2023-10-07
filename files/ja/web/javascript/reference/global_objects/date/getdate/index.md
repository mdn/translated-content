---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
l10n:
  sourceCommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{JSRef}}

**`getDate()`** メソッドは、地方時に基づき、指定された日付の「日」を返します。

{{EmbedInteractiveExample("pages/js/date-getdate.html","shorter")}}

## 構文

```js-nolint
getDate()
```

### 返値

1 から 31 までの間の整数値。地方時に基づき、指定された日付の「日」を表します。

## 例

### getDate() の使用

以下の 2 行目の文は、{{jsxref("Date")}} オブジェクトである `xmas95` の値に基づき、変数 `day` に 25 という値を代入します。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
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
