---
title: Intl.NumberFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatRangeToParts()`** は {{jsxref("Intl.NumberFormat")}} インスタンスのメソッドで、ロケール固有のトークンを含むオブジェクトの {{jsxref("Array")}} を返します。このトークンを使用して、ロケール固有の部分を保持したまま、独自の文字列を構築することができます。これにより、ロケールを認識する数値文字列の書式化範囲を指定することが可能になります。

## 構文

```js-nolint
formatRangeToParts(startRange, endRange)
```

### 引数

- `startRange`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。文字列は、[数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)と同じ方法で解釈されますが、`formatRangeToParts()` は、文字列が表す正確な値を使用し、暗黙的に数値に変換する際に精度が失われることを避けます。
- `endRange`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。

### 返値

書式化された範囲を部分的に含むオブジェクトの {{jsxref("Array")}} です。各オブジェクトには、`type`、`value`、`source` の 3 つのプロパティがあり、それぞれ文字列が設定されています。指定された順序で `value` を連結すると、{{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}} と同じ文字列になります。`type` は、{{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} と同じ値、または追加の値 `"approximatelySign"` （下記参照）とすることができます。 `source` は、次のいずれかになります。

- `startRange`
  - : トークンは先頭の数値の部分です。
- `endRange`
  - : トークンは末尾の数値の部分です。
- `shared`
  - : トークンは、先頭と末尾の間で共有されます。例えば、通貨記号などです。範囲パターン自体の一部であるリテラル（区切り文字 `"–"` など）も、すべて `shared` としてマークされます。

先頭と末尾の数値が同じ文字列に書式化される場合、出力は、先頭の数値に対して {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} を呼び出した場合と同じトークンのリストとなり、すべてのトークンは `source: "shared"` とマークされます。さらに、最初のトークンは `type: "approximatelySign"` に対応する「ほぼ等しい」記号 ("~" など) である場合があります。この記号の挿入は、ロケール設定のみに依存し、`startRange === endRange` の場合でも挿入されます。

### 例外

- {{jsxref("RangeError")}}
  - : `startRange` または `endRange` が `NaN` または変換不可能な文字列の場合に発生します。
- {{jsxref("TypeError")}}
  - : `startRange` または `endRange` のいずれかが undefined の場合に発生します。

## 例

### formatRangeToParts() の使用

`formatRange()` メソッドは、直接操作できない、ローカライズされた不透明な文字列を出力します。

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00–9.500,00 €"
```

しかし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたり、他のテキストと交互に表示したりしたい場合があります。`formatRangeToParts()` メソッドは、同じ情報を複数の部分に分けて出力します。

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// 返値:
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "–", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
