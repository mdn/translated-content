---
title: Intl.NumberFormat.prototype.formatRange()
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatRange()`** は {{jsxref("Intl.NumberFormat")}} インスタンスのメソッドで、この `Intl.NumberFormat` オブジェクトのロケールおよび書式設定オプションに従って、数値の範囲を書式化します。

## 構文

```js-nolint
formatRange(startRange, endRange)
```

### 引数

- `startRange`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。文字列は、[数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)と同じ方法で解釈されますが、`formatRange()` は、文字列が表す正確な値を使用し、暗黙的に数値に変換する際に精度が失われることを避けます。
- `endRange`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。

### 返値

この {{jsxref("Intl.NumberFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化された、指定された数値の範囲を表す文字列。開始値と終了値が同じ文字列に書式化されている場合、出力には単一の値のみが含まれ、その前に「おおよその等価」記号（"~$3" など）が付加される場合があります。この記号の挿入は、ロケール設定のみに依存し、`startRange === endRange` の場合でも挿入されます。

### 例外

- {{jsxref("RangeError")}}
  - : `startRange` または `endRange` が `NaN` または変換不可能な文字列の場合に発生します。
- {{jsxref("TypeError")}}
  - : `startRange` または `endRange` のいずれかが undefined の場合に発生します。

## 解説

`formatRange` ゲッター関数は、呼び出された {{jsxref("Intl.NumberFormat")}} オブジェクトのロケールおよび書式化オプションに従って、数値の範囲を文字列に書式化します。

## 例

### formatRange の使用

通貨値の範囲を書式化するには、`formatRange` ゲッター関数を使用します。

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "$3 – $5"

// メモ: startRange と endRange が同じ値に丸められる場合、
// 「ほぼ等しい」記号が追加されます。
console.log(nf.formatRange(2.9, 3.1)); // "~$3"
```

```js
const nf = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "3-5 €"
console.log(nf.formatRange(2.9, 3.1)); // "~3 €"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
