---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCMinutes()`** メソッドは、協定世界時に基づき、指定された日時の「分」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## 構文

```js-nolint
getUTCMinutes()
```

### 返値

数値です。
もし `Date` オブジェクトが有効な日時を表している場合は、0 から 59 までの整数で、指定された日時の世界時での分の値を表します。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

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
