---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getSeconds()`** メソッドは、地方時に基づき、指定した日時の「秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getseconds.html", "shorter")}}

## 構文

```js-nolint
getSeconds()
```

### 返値

地方時に基づき、与えた日付の「秒」を表す 0 から 59 までの間の整数値。

## 例

### getSeconds() の使用

以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクトである `xmas95` の値に基づき、変数 `seconds` に 30 という値を代入します。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
