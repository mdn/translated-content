---
title: Intl.NumberFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`format()`** は {{jsxref("Intl.NumberFormat")}} インスタンスのメソッドで、この `Intl.NumberFormat` オブジェクトの[ロケールおよび書式設定オプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters)に応じて数値を書式化します。

{{InteractiveExample("JavaScript デモ: Intl.NumberFormat.prototype.format", "taller")}}

```js interactive-example
const amount = 654321.987;

const options1 = { style: "currency", currency: "RUB" };
const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);

console.log(numberFormat1.format(amount));
// 予想される結果: "654 321,99 ₽"

const options2 = { style: "currency", currency: "USD" };
const numberFormat2 = new Intl.NumberFormat("en-US", options2);

console.log(numberFormat2.format(amount));
// 予想される結果: "$654,321.99"
```

## 構文

```js-nolint
format(number)
```

### 引数

- `number`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。文字列は、[数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)と同じ方法で解釈されますが、`formatRange()` は、文字列が表す正確な値を使用し、暗黙的に数値に変換する際に精度が失われることを避けます。

> [!NOTE]
> この仕様の古いバージョンでは、文字列は {{jsxref("Number")}} として解釈されていました。
> お使いのブラウザーの互換性表で確認してください。

### 返値

指定された `number` を、この {{jsxref("Intl.NumberFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化した文字列を表します。

> [!NOTE]
> ほとんどの場合、`format()` が返す書式化は一貫しています。しかし、同じロケール内であっても、実装によって出力は異なる場合があります。出力のばらつきは設計上のものであり、仕様でも認められています。また、期待した結果とは異なる場合もあります。例えば、文字列は、改行しない空白文字を使用したり、双方向コントロール文字で囲まれたりする場合があります。`format()` の結果を、ハードコードされた定数と比較してはいけません。

## 解説

数値 ({{jsxref("Number")}}) の値は、JavaScript で大きすぎたり小さすぎたりすると精度が失われ、テキストの表現が不正確になります。
{{jsxref("Number.MAX_SAFE_INTEGER")}} より大きい整数で計算を行う場合は、代わりに長整数 ({{jsxref("BigInt")}}) を使用しましょう。これにより、正しく書式化されます。

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

また、任意の精度を持つ 10 進文字列として書式化される、とても大きな文字列を渡すこともできます（データに対して計算を行う場合は、`BigInt` を使用して作業を行う必要があります）。

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## 例

### format の使用

単一の通貨の値を書式化するには、`format` ゲッター関数を使用します。
以下のコードは、ロシア語ロケールでルーブル通貨を書式化する方法を示しています。

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### format と map の使用

`format` ゲッター関数を使用して、配列内のすべての数値を整形することができます。
なお、この関数は供給元である {{jsxref("Intl.NumberFormat")}} に結び付けられているので、直接 {{jsxref("Array.prototype.map")}} に渡すことができます。
これは、新しい機能では使用されなくなった慣習の残滓であり、既存のプログラムとの互換性を維持するために残されています。

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### 文字列で format を使用

文字列を使用すると、精度を損なうことなく {{jsxref("Number.MAX_SAFE_INTEGER")}} より大きい数値を指定することができます。

```js
const numberFormat = new Intl.NumberFormat("en-US");

// ここでは、値は数値に変換される
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// ここでは文字列を使用しているので、精度を損なうことはない
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

また、10 進文字列には、一般的な "E" 指数構文 `#.#E#` を使用することもできます。
以下のコードは、{{jsxref("BigInt")}} を作成し、それを接尾辞 `E-6` に対応する文字列に変換し、書式化します。

```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// "1,000,000,000,000,000,110,000"

// `E` 構文を使用して文字列として書式化
console.log(numberFormat.format(`${bigNum}E-6`));
// "1,000,000,000,000,000.11"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
