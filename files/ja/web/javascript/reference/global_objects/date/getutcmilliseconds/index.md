---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getUTCMilliseconds()`** メソッドは、協定世界時に基づき、指定された日時の「ミリ秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}

## 構文

```js-nolint
getUTCMilliseconds()
```

### 返値

数値です。
もし `Date` オブジェクトが有効な日時を表している場合には、指定された `Date` オブジェクトの世界時によるミリ秒単位を表す 0 から 999 までの整数値です。
それ以外の場合は、`Date` オブジェクトが有効な日時を表していなければ [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) が返されます。

Unix 元期の時刻と混同しないでください。 1970/01/01 からの経過ミリ秒を取得するには、 [`getTime()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) メソッドを使用してください。

## 例

### getUTCMilliseconds() の使用

次の例は、現在時刻の「ミリ秒」部を変数 `milliseconds` に代入します。

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
