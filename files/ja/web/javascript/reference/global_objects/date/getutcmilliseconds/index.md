---
title: Date.prototype.getUTCMilliseconds()
short-title: getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getUTCMilliseconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「ミリ秒」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// 予想される結果: 678
```

## 構文

```js-nolint
getUTCMilliseconds()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく「ミリ秒」を表す 0 から 999 までの整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

タイムスタンプと混同しないでください。元期からの経過ミリ秒数を取得するには、 [`getTime()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) メソッドを使用してください。

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
