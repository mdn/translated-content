---
title: Date.prototype.toTemporalInstant()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

**`toTemporalInstant()`** は {{jsxref("Date")}} インスタンスのメソッドで、新しい {{jsxref("Temporal.Instant")}} オブジェクトを作成し、 {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 値をこの日時の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)と同にして返します。

このメソッドを使用して、古い `Date` 値を `Temporal` API に変換し、必要に応じて他の {{jsxref("Temporal")}} クラスにさらに変換してください。

## 構文

```js-nolint
toTemporalInstant()
```

### 引数

なし。

### 返値

新しい {{jsxref("Temporal.Instant")}} オブジェクトで、この日時のタイムスタンプと同じ {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 値を持ちます。マイクロ秒およびナノ秒の要素は常に `0` です。

### 例外

- {{jsxref("RangeError")}}
  - : この日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)（タイムスタンプが `NaN`）である場合。

## 例

### toTemporalInstant() の使用

```js
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// 更に他のオブジェクトに変換
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
