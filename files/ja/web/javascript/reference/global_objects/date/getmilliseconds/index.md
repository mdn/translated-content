---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{JSRef}}

**`getMilliseconds()`** メソッドは、地方時に基づき、指定された日時の「ミリ秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html","shorter")}}

## 構文

```js-nolint
getMilliseconds()
```

### 返値

地方時に基づき、指定された日時の「ミリ秒」を表す 0 から 999 までの間の数値。

## 例

### getMilliseconds() の使用

次の例は、現在時刻のミリ秒部を変数 `milliseconds` に代入します。

```js
const today = new Date();
const milliseconds = today.getMilliseconds();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
