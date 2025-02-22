---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`getTime()`** メソッドは、 [ECMAScript 元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#ecmascript_元期_とタイムスタンプ)からの経過ミリ秒数を返します。

このメソッドは、日付と時刻を別の {{jsxref("Date")}} オブジェクトへ代入する助けとして使用できます。このメソッドは、{{jsxref("Date/valueof", "valueOf()")}} メソッドと機能的に同等です。

{{InteractiveExample("JavaScript Demo: Date.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## 構文

```js-nolint
getTime()
```

### 返値

1970 年 1 月 1 日 00:00:00 UTC から指定した日時までの経過時間をミリ秒で表した数値。

## 時刻の低精度化

ブラウザーの設定によっては、タイミング攻撃とフィンガープリンティングに対する保護を提供するために `new Date().getTime()` の精度が落とされていることがあります。 Firefox では、`privacy.reduceTimerPrecision` が既定で有効になっています。既定値は Firefox 59 では 20 マイクロ秒で、 Firefox 60 では 2 ミリ秒です。

```js
// Firefox 60 での時刻の精度の低下（2 ミリ秒）
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時刻の精度の低下
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

Firefox では、 `privacy.resistFingerprinting` も有効にできます。この場合、精度は 100 ミリ秒と `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 値のうち大きい方になります。

## 例

### getTime() を使って日付をコピーする

同一の time 値を持つ date オブジェクトを構築します。

```js
// month は 0 を基点とするため、birthday は 1995 年 1 月 10 日になります
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### 実行時間を計測する

新たに生成された {{jsxref("Date")}} オブジェクトでの、続く 2 個の `getTime()` の結果を減算して、これらの呼び出しと呼び出しの間の時間を得ます。これは、何らかの命令の実行時間を計測するために使用できます。不要な {{jsxref("Date")}} オブジェクトのインスタンス化を避けるため、{{jsxref("Date.now()")}} も参照してください。

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
