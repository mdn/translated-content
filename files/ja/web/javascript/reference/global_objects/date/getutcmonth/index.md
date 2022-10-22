---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCMonth()`** メソッドは、協定世界時に基づき、指定された日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## 構文

```js-nolint
getUTCMonth()
```

### 返値

数値です。`Date` オブジェクトが有効な日時を表している場合、0 から 11 までの整数値で、指定された日時の月が世界時で何月になるかに対応します。0 は 1 月、1 は 2 月、2 は 3 月、といった具合になります。
数値です。それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

## 例

### getUTCMonth() の使用

次の例は、現在日時の「月」の部分を変数 `month` に代入します。

```js
const today = new Date();
const month = today.getUTCMonth();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
