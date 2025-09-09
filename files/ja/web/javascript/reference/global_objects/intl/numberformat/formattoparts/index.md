---
title: Intl.NumberFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatToParts()`** は {{jsxref("Intl.NumberFormat")}} インスタンスのメソッドで、 {{jsxref("Intl/NumberFormat/format", "format()")}} によって返される、書式化された文字列のそれぞれの部分を表すオブジェクトの配列を返します。これは、ロケール固有のトークンから独自の文字列を構築するのに役立ちます。

{{InteractiveExample("JavaScript デモ: Intl.NumberFormat.prototype.formatToParts")}}

```js interactive-example
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// 予想される結果: "["$", "654", ",", "321", ".", "99"]"
```

## 構文

```js-nolint
formatToParts(number)
```

### 引数

- `number`
  - : 書式化する数値 ({{jsxref("Number")}})、長整数 ({{jsxref("BigInt")}})、文字列のいずれかです。文字列は、[数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)と同じ方法で解釈されますが、`formatToParts()` は、文字列が表す正確な値を使用し、暗黙的に数値に変換する際に精度が失われることを避けます。

### 返値

書式化された数値の部分を含むオブジェクトの {{jsxref("Array")}} です。各オブジェクトには、`type` と `value` の 2 つのプロパティがあり、それぞれ文字列が設定されています。指定された順序で `value` を連結すると、{{jsxref("Intl/NumberFormat/format", "format()")}} と同じ文字列になります。`type` は、次のいずれかになります。

- `literal`
  - : 書式パターンの一部である文字列。例えば `" "` など。小数点区切り文字やプラス/マイナス記号などの一般的なトークンは、それぞれ独自のトークン型を持っていることに注意してください。
- `integer`
  - : 数値の整数部分、またはグループ化を使用している場合はその一部（`options.useGrouping` で制御）。
- `group`
  - : グループ区切り文字列、`","` など。グループ化を使用する場合にのみ存在します (`options.useGrouping` で制御)。
- `decimal`
  - : 小数点区切り文字列。`"."` など。`fraction` が存在する場合にのみ存在します。
- `fraction`
  - : 数値の小数点以下の部分。
- `compact`
  - : `"M"` や `"thousands"` などのコンパクトな指数。`options.notation` が `"compact"` の場合にのみ存在します。形式 (`"short"` または `"long"`) は、`options.compactDisplay` で制御できます。
- `exponentSeparator`
  - : 指数区切り文字、たとえば `"E"`。`options.notation` が `"scientific"` または `"engineering"` の場合にのみ存在します。
- `exponentMinusSign`
  - : 指数マイナス記号文字列、たとえば `"-"`。`options.notation` が `"scientific"` または `"engineering"` で、指数が負の場合にのみ表示されます。
- `exponentInteger`
  - : 指数部の整数値。`options.notation` が `"scientific"` または `"engineering"` の場合にのみ存在します。
- `nan`
  - : {{jsxref("NaN")}} を表す文字列、たとえば `"NaN"` です。これは、数値が `NaN` の場合にその数値自体を表す唯一のトークンです。
- `infinity`
  - : {{jsxref("Infinity")}} または `-Infinity` を表す文字列。これには `「∞」` などがあります。これは、数値が `Infinity` または `-Infinity` の場合に、その数値自体を表す唯一のトークンです。
- `plusSign`
  - : プラス記号（例: `"+"`）。
- `minusSign`
  - : マイナス記号（例: `"-"`）。
- `percentSign`
  - : パーセント記号、たとえば `"%"` など。`options.style` が `"percent"` の場合にのみ表示されます。
- `unit`
  - : 単位の文字列、例えば "l" または "litres" です。 `options.style` が `"unit"` の場合にのみ存在します。形式（`"short"`, `"narrow"`, `"long"`）は、`options.unitDisplay` によって制御できます。
- `currency`
  - : 通貨の文字列、例えば `"$"`、`"€"`、`"Dollar"`、`"Euro"` などです。 `options.style` が `"currency"` の場合のみ存在します。その形式 (`"code"`, `"symbol"`, `"narrowSymbol"`, `"name"`) は `options.currencyDisplay` で制御できます。
- `unknown`
  - : 上記として認識されないトークン用に予約されています。ほとんどの場合、使用されることはありません。

## 例

### formatToParts() の使用

`format()` メソッドは、直接操作できない、ローカライズされた不透明な文字列を出力します。

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

しかし、多くのユーザーインターフェイスでは、この文字列の書式形式をカスタマイズしたいと要望があります。 `formatToParts()` メソッドは、同じ情報を複数の部分に分割して出力します。

```js
formatter.formatToParts(number);

// 返値:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

これで情報は個別に利用可能となり、カスタマイズされた方法で書式化して連結することができます。例えば {{jsxref("Array.prototype.map()")}}, [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [switch 文](/ja/docs/Web/JavaScript/Reference/Statements/switch), [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals), {{jsxref("Array.prototype.join()")}} を使用して、特定の要素に追加のマークアップを挿入することができます。

```js
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .join("");

console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
