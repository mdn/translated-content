---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getMinutes()`** メソッドは、地方時に基づき、指定された日時の「分」を返します。

{{EmbedInteractiveExample("pages/js/date-getminutes.html","shorter")}}

## 構文

```js-nolint
getMinutes()
```

### 返値

地方時に基づき、与えた日時の「分」を表す 0 から 59 までの間の整数値。

## 例

### getMinutes() の使用

以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクトである `xmas95` の値に基づき、変数 `minutes` に 15 という値を代入します。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
