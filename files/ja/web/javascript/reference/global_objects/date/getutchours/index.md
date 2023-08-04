---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCHours()`** メソッドは、協定世界時に基づき、指定された日時の「時」を返します。

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## 構文

```js-nolint
getUTCHours()
```

### 返値

数値です。
`Date` オブジェクトが有効な日時を表している場合、指定された日時の協定世界時での「時」を表す、0 から 23 までの整数を指定します。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

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
