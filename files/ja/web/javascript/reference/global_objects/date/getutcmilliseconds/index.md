---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

**`getUTCMilliseconds()`** メソッドは、協定世界時に基づき、指定された日時の「ミリ秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}

## 構文

```
dateObj.getUTCMilliseconds()
```

### 返値

協定世界時に基づき、与えられた日時の「ミリ秒」を表す 0 から 999 までの間の整数値。このメソッドは、時間部分、分部分などを提供する他の UTC ベースのメソッドのコンパニオンです。このメソッドはミリ秒の部分を与えます。

Unix 元期の時刻と混同しないでください。1970/01/01 からの経過ミリ秒を取得するには、".getTime()" メソッドを使用してください。

## 例

### getUTCMilliseconds() の使用

次の例は、現在時刻の「ミリ秒」部を変数 `milliseconds` に代入します。

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## 仕様書

| 仕様書                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCMilliseconds")}}

## 関連情報

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
