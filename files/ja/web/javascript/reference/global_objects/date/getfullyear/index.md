---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
l10n:
  sourceCommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{JSRef}}

**`getFullYear()`** メソッドは、地方時に基づき、指定された日時の年を返します。

{{jsxref("Date.prototype.getYear()", "getYear()")}} メソッドの代わりに、このメソッドを使用してください。

{{EmbedInteractiveExample("pages/js/date-getfullyear.html","shorter")}}

## 構文

```js-nolint
getFullYear()
```

### 返値

地方時に基づき、与えた日付の年に相当する数値。

## 解説

`getFullYear()` が返す値は絶対的な値です。1000 年から 9999 年までの日付に対して、`getFullYear()` は 1995 のような 4 桁の数字を返します。 2000 年以降の年について正しい値を得るには、この関数を使用してください。

## 例

### getFullYear() の使用

以下の例は、変数 `year` に今年を表す 4 桁の数字を代入します。

```js
const today = new Date();
const year = today.getFullYear();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
