---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCSeconds()`** メソッドは、協定世界時に基づき、指定された日時の「秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}

## 構文

```js-nolint
getUTCSeconds()
```

### 返値

数値です。
もし `Date` オブジェクトが有効な日時を表している場合は、0 から 59 までの整数で、指定された日時の世界時での秒の値を表します。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

## 例

### getUTCSeconds() の使用

次の例は、現在日時の「秒」部を変数 `seconds` に代入します。

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
