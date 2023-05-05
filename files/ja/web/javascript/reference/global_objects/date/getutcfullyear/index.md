---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCFullYear()`** メソッドは、協定世界時に基づき、指定された日時の「年」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## 構文

```js-nolint
getUTCFullYear()
```

### 返値

数値です。
`Date` オブジェクトが有効な日時を表している場合、指定された日時の西暦を世界時で表した整数を返します。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

## 解説

`getUTCFullYear()` が返す値は、 2000 年問題に対応した表記に従う絶対的な値、例えば 1995 などです。

## 例

### getUTCFullYear() の使用

次の例は、現在の年を表す 4 桁の値を変数 `year` に代入します。

```js
const today = new Date();
const year = today.getUTCFullYear();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
